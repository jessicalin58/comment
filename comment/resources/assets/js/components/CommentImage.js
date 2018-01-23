import * as React from "react";
import Dropzone from 'react-dropzone';
import request from 'superagent';
import './FileUpload.css';
import uploadSVG from './svg/upload_grey.svg';

// Cloudinary API info
const CLOUDINARY_UPLOAD_PRESET = 'dkt6jxdh';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/jessicalin/upload';


//SVG logo | Upload
// const uploadSVG = require('./upload.svg');


//Upload file box style
const upload_style = {
    width: '100%',
    height: '150%'

}


export class CommentImage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            uploadedFile: null,
            uploadedFileCloudinaryUrl: '',
        };
    }


    onImageDrop(files) {
        this.setState({
            uploadedFile: files[0]
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
                    uploadedFileCloudinaryUrl: response.body.secure_url
                });
            }
        });
    }


    render() {
        return (
            <form>
                <div className="FileUpload">

                    <Dropzone
                        style={upload_style}
                        onDrop={this.onImageDrop.bind(this)}
                        multiple={false}
                        accept="image/jpg,image/png">
                        <img src={uploadSVG} style={{ 'maxHeight': '50px', 'marginLeft': '45%', 'marginTop': '10%' }} />
                        <div className="upload-text">CHANGED <strong>click to select a file to upload.</strong></div>
                        <div className="upload-subtitle">Files accepted are: png. and jpg. No larger than 3MB</div>


                    </Dropzone>

                </div>

                <div>

                    {this.state.uploadedFileCloudinaryUrl === '' ? null :
                        <div>

                            <img src={this.state.uploadedFileCloudinaryUrl}
                            />
                            <p>{this.state.uploadedFile.name}</p>

                        </div>}
                </div>
            </form>
        )
    }
}
