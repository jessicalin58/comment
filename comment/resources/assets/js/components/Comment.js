import * as React from "react";
import Dropzone from 'react-dropzone';
import request from 'superagent';
import './FileUpload.css';
import uploadSVG from './svg/upload_grey.svg';
import cloudinary from 'cloudinary-core';
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';
import Draggable from 'react-draggable'; // The default
import FileUpload from './FileUpload.js';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom'

import html2canvas from 'html2canvas';
import Modal from 'react-modal';


//Upload file box style
const upload_style = {
    width: '100%',
    height: '150%'
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const image_style = {
    width: 50,
    height: 40
}


// const Comment = ({ match }) => (
//     <div>
//        <h3> id: {math.params.this.state.public_id} </h3>
//     </div>
// )
Modal.setAppElement('#main');



export class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputLinkOneClicked: false,
            inputLinkTwoClicked: false,
            inputLinkThreeClicked: false,
            receivedImage: this.props.publicId,
            modalIsOpen: false
        };
        this.screenshot = this.screenshot.bind(this);
    //   this.props.children = this.props.children.bind(this);
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    
    }

    openModal(){
        this.setState({modalIsOpen:true});

    }

    afterOpenModal(){
        this.subtitle.style.color = '#7c8bff';
    }

    closeModal(){
        this.setState({modalIsOpen:false});
    }

    screenshot() {

        // $('#save-image').click(function () {
            html2canvas(document.body, {
                allowTaint: true,
                logging: true,
                taintTest: false,
              
                // onrendered: save /*0.4.1*/
            }).then( function (canvas){

                // var extra_canvas = document.createElement("canvas");
                // extra_canvas.setAttribute('width',200);
                // extra_canvas.setAttribute('height',200);

                // var ctx = extra_canvas.getContext('2d');
                // ctx.drawImage(canvas,0,0,canvas.width,canvas.height,0,0,200,200);
                // var DataURL = extra_canvas.toDataURL();
                // var img = document.createElement('img');
                // img.setAttribute('src', DataURL);

                // document.getElementById("renderScreenshot").prepend(img);



                var node = document.createElement("li");
                var textnode = document.createTextNode("test");

                document.getElementById("renderScreenshot").appendChild(canvas);
                // document.modal.appendChild(canvas);
                // document.body.appendChild(canvas);
                // console.log("screenshoted");
                // console.log(canvas.toDataURL());
                // document.querySelector('.imageViewCanvas').src = theCanvas.toDataURL();
            });/*0.5.0-rc*/
        // });

        

        // html2canvas(document.body).then(function (canvas) {
        //     {allowTaint: true}
        //     document.body.appendChild(canvas);

        //     console.log("Screenshot taken");
        // });
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


    componentDidMount(){
        // Modal.setAppElement('body');
        // Modal.setAppElement('#test');

        // console.log("componentdidmount state", this.state);
        // console.log("componentdidmount" , this.props);
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
        console.log("The id", newProps.public_id);

    }

    getChildrenProps(){
        return props[this.props.route.match];

    }

    
    

    render() {
        const FileSent = ({ match }) => (
            <div>
                <h3> id: {match.params.id} </h3>
            </div>
        )
        console.log("from url:" + " " + this.props.routes);

        const dragHandler = {onStart: this.onStart, onStop:this.onStop};
        // const children = React.cloneElement(
        //     this.props.children,
        //     getChildrenProps()
        // );
        return (
            <form>
 
                <div>
                    <CloudinaryContext cloudName="jessicalin" style={upload_style}>
                        <Image publicId={this.state.receivedImage} 
                         onClick={() => {this.handleAddSecondInput(); this.handleAddThirdInput(); this.handleAddForthInput()}}
                         onDoubleClick={() => this.deleteInput()}
                         >
                            <Transformation width="796" crop="scale" angle="0" />
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

              

                <div onClick={() => { this.openModal() }} style={{ borderColor: '#7c8bff', color: '#7c8bff', borderRadius: 15, marginLeft: 5 }}> Share Link </div>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <button onClick={this.closeModal} style={{borderColor:'#7c8bff', borderRadius:50, color:'#7c8bff'}}>x</button>
                    <h2 ref={subtitle => this.subtitle = subtitle}>Share your file:</h2>
                    <div> {window.location.href}</div>
                 

                </Modal>
            
            </form>
        )
    }
}

export default Comment;


                            // <div className="containerDot">
                            //     <div className="circle"> 1 </div>
                            //     <div className="pulse1"></div>
                            // </div>

// <ul id="renderScreenshot" style={image_style}>
//     <li>no image</li>
// </ul>

// <input type='button' id='but_screenshot' value='Take screenshot' onClick={() => { this.screenshot() }} /> <br />
