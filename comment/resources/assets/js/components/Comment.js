import * as React from "react";
import Dropzone from 'react-dropzone';
import request from 'superagent';
import './FileUpload.css';
import uploadSVG from './svg/upload_grey.svg';
import cloudinary from 'cloudinary-core';
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';
import Draggable from 'react-draggable'; // The default



//Upload file box style
const upload_style = {
    width: '100%',
    height: '150%'
}

export class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputLinkClicked: false,
            receivedImage: this.props.publicId
        };
        this.handleAddSecondInput = this.handleAddSecondInput.bind(this);
    }
    
    handleAddSecondInput() {
        this.setState({
            inputLinkClicked: true
        })
    }

    componentWillMount(){
        console.log(this.state.receivedImage);

    }


    render() {
        const dragHandler = {onStart: this.onStart, onStop:this.onStop};

        return (
            <form>
 
                <div>

                    <CloudinaryContext cloudName="jessicalin" style={upload_style}>
                        <Image publicId= 'o1fivwpck1p1y6znclj5' onClick={this.handleAddSecondInput}>
                            <Transformation width="650" crop="scale" angle="0" />
                        </Image>

                        {this.state.inputLinkClicked ?
                            
                            // <div className="containerDot">
                            //     <div className="circle"> 1 </div>
                            //     <div className="pulse1"></div>
                            // </div>
                            <Draggable bound="parent " {...dragHandler}>
                                <div className="circle"> 1 </div>
                            </Draggable>
                            :
                            <div></div>
                        }
                           

                    </CloudinaryContext>

                </div>

            </form>
        )
    }
}

export default Comment;