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
        this.subtitle.style.color = '#f00';
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

              

                <input type='button' id='but_screenshot' value='Take screenshot' onClick={() => { this.screenshot() }} /> <br />
                <div onClick={() => {this.openModal()}}> test </div>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                    <button onClick={this.closeModal}>close</button>
                    <div>I am a modal</div>
                    <ul id="renderScreenshot">
                        <li>no image</li>
                    </ul>

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