import * as React from "react";
import Dropzone from 'react-dropzone';
import request from 'superagent';
import './FileUpload.css';
import uploadSVG from './svg/upload_grey.svg';
import cloudinary from 'cloudinary-core';
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';
import Draggable from 'react-draggable'; // The default
import FileUpload from './FileUpload.js';

// import html2canvas from 'html2canvas';

//Upload file box style
const upload_style = {
    width: '100%',
    height: '150%'
}
// html2canvas(document.body).then(function (canvas) {
//     document.body.appendChild(canvas);
// });

export class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputLinkOneClicked: false,
            inputLinkTwoClicked: false,
            inputLinkThreeClicked: false,
            receivedImage: this.props.publicId
        };
      this.props = {}
    }
    
    handleAddSecondInput() {
        this.setState({
            inputLinkOneClicked: true
        }) 
    }

    handleAddThirdInput(){
        
            this.state.inputLinkOneClicked ? (
                console.log("second note"),

             this.setState({
            inputLinkTwoClicked: true
             })
                
            ) : null
        
    }

    handleAddForthInput(){

        this.state.inputLinkTwoClicked ? (
            console.log("third note"),

            this.setState({
                inputLinkThreeClicked: true
            })
        
        ): null
    }

    componentWillMount(){
        // console.log(this.state.receivedImage);

    }
    deleteInput() {
        this.setState({

            inputLinkTwoClicked: false,
            inputLinkThreeClicked:false,
            inputLinkOneClicked: false
        })
    }

    componentWillReceiveProps(oldProps, newProps){
        console.log("The id", oldProps.public_id);
    }

    

    render() {
        const dragHandler = {onStart: this.onStart, onStop:this.onStop};

        return (
            <form>
 
                <div>

                    <CloudinaryContext cloudName="jessicalin" style={upload_style}>
                        <Image publicId={this.props.public_id} 
                         onClick={() => {this.handleAddSecondInput(); this.handleAddThirdInput(); this.handleAddForthInput()}}
                         onDoubleClick={() => this.deleteInput()}
                         >
                            <Transformation width="650" crop="scale" angle="0" />
                        </Image>

                        {this.state.inputLinkOneClicked ?
                            <Draggable bound="parent " {...dragHandler}>
                                <div className="circle"> 1 </div>
                            </Draggable>
                            :
                            <div></div>
                        }

                        {this.state.inputLinkTwoClicked ?
                            <Draggable bound="parent " {...dragHandler}>
                                <div className="circle2"> 2 </div>
                            </Draggable>
                            :
                            <div></div>
                        }


                        {this.state.inputLinkThreeClicked ?
                            <Draggable bound="parent " {...dragHandler}>
                                <div className="circle3"> 3 </div>
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


                            // <div className="containerDot">
                            //     <div className="circle"> 1 </div>
                            //     <div className="pulse1"></div>
                            // </div>