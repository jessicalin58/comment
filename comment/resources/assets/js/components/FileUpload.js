import * as React from "react";
import Dropzone from 'react-dropzone';
import request from 'superagent';
import './FileUpload.css';
import uploadSVG from './svg/upload_grey.svg';
import cloudinary from 'cloudinary-core';
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom'
import { Comment } from './Comment.js';

var timer = '';
// Cloudinary API info
const CLOUDINARY_UPLOAD_PRESET = 'dkt6jxdh';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/jessicalin/upload';


//SVG logo | Upload
// const uploadSVG = require('./upload.svg');


//Upload file box style
const upload_style = {
    width:'100%',
    height: '150%'
  
}



export class FileUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uploadedFile: null,
            uploadedFileCloudinaryUrl: '',
            imagePreviewUrl: '',
            status: 'idle',
            statusMsg: (<p></p>),
            checked: true,
            public_id: ''

        };
        this.uploadFile = '';
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onImageDrop = this.onImageDrop.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        if (!this.uploadFile) {
            return;
        }
        let data = new FormData();
        data.append('recfile', this.uploadFile);
        data.append('user', 'guestUser');

        fetch('/api/uploads/upload/', {
            method: 'post',
            body: data
        }).then((res) => {
            this.setState({
                status: 'uploading',
                statusMsg: (<p>Uploading...</p>)
            });
            return res.json();
        }).then((val) => {
            if (val.message == 'ok') {
                this.setState({
                    status: 'done',
                    statusMsg: (<p id='checkMark'><i className="fa fa-check"></i></p>)
                });
                this.props.updateImages();
                timer = _.delay(this.setOriginalText, 1000);
            };
        });
        this.uploadFile = '';
        this.setState({
            imagePreviewUrl: ''
        });
    }

    setOriginalText() {
        this.setState({ status: 'idle', statusMsg: ( 
                        <div className="upload-text">Drop an image or <strong>click to select a file to upload.</strong></div>) });
    }

    handleImageChange(e) {
        e.preventDefault();
        if (timer !== '') {
            clearTimeout(timer);
        };
        let reader = new FileReader();
        let file = e.target.files[0];


        reader.onloadend = () => {
            this.setState({
                imagePreviewUrl: reader.result,
            });
            this.uploadFile = file;
        }

        reader.readAsDataURL(file)
    }

    onImageDrop(files) {
        //Send to Cloudinary
        this.setState({
            uploadedFile: files[0],
            checked: !this.state.checked

        });

        this.handleImageUpload(files[0]);

    }

    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file);

        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }

            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedFileCloudinaryUrl: response.body.secure_url,
                    public_id: response.body.public_id
                });
                console.log(response);
                console.log(response.body.public_id);
            }
        });
    }

 
    render() {
        const hidden = this.state.checked ? ' ' : 'hidden';
        let { imagePreviewUrl } = this.state;
        let imagePreview = this.state.statusMsg;
        if (imagePreviewUrl) {
            imagePreview = (<img src={imagePreviewUrl} className='dropPreview' />);
            // <input type='file' name='file-upload' onChange={this.handleImageChange} />

        }
        return (
            <form>
                <div className="FileUpload">
                   
                    <Dropzone
                        style={upload_style}
                        onDrop={this.onImageDrop.bind(this)}
                        multiple={false}
                        accept="image/jpg,image/png">
                        {imagePreview}
                        <div className= { hidden }>
                        <img src={uploadSVG} style={{'maxHeight':'50px', 'marginLeft':'45%', 'marginTop':'10%'}}/>
                        <div className="upload-text">Drop an image or <strong>click to select a file to upload.</strong></div>
                        <div className="upload-subtitle">Files accepted are: png. and jpg. No larger than 3MB</div>        
                        </div>
                        </Dropzone>
                    
                </div>

                <div>
                
                    {this.state.uploadedFileCloudinaryUrl === '' ? null :
                        <div>
                            
                            <img src={this.state.uploadedFileCloudinaryUrl}
                            />
                            <p>{this.state.uploadedFileCloudinaryUrl}</p>
                            <p>{this.state.public_id}</p>
                            


                        </div>}
                </div>

                <Router >
                <div>
                 <Route path="/comment/:public_id" render={(props) => <Comment public_id={this.state.public_id} {...props} /> } /> 
                </div>
                </Router>
                <a href="" onClick={this.handleSubmit} className="icon-button cloudicon"> -> Submit </a>
            
            
                </form>
        )
    }
}
// <Link to="/comment" params={{ public_id: this.state.public_id }}> Upload </Link>


export default FileUpload; 