import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Comment } from './Comment.js';
import AddComment from './AddComment';
// import   {App} from './App.js';

import html2canvas from 'html2canvas';
import Modal from 'react-modal';

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
Modal.setAppElement('.container');

export default class CommentParent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        };

        this.screenshot = this.screenshot.bind(this);
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    screenshot() {

        html2canvas(document.body, {
            allowTaint: true,
            logging: true,
            taintTest: false,
            // onrendered: save /*0.4.1*/
        }).then(function (canvas) {
            document.body.appendChild(canvas);
            console.log("screenshoted");
        });/*0.5.0-rc*/
    
    }
    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
     
            <div className="container">
                <div className="row">

                    <div className="col-md-9">
                        <div className="panel panel-default">
                            <div className="panel-heading">

                                <Comment publicId={this.props.publicId} />


                            </div>
                            
                        </div>
                        <input type='button' id='screen_button' value='Export File' onClick={() => { this.screenshot() }} /><br />
                        <div onClick={this.openModal}> Button from commentparen </div>
                        <Modal
                            aria={{

                            }}
                            isOpen={this.state.modalIsOpen}
                            onAfterOpen={this.afterOpenModal}
                            onRequestClose={this.closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                            <button onClick={this.closeModal}>close</button>
                            <div>I am a modal</div>
                            <form>
                                <input />
                                <button>tab navigation</button>
                                <button>stays</button>
                                <button>inside</button>
                                <button>the modal</button>
                            </form>
                        </Modal>

                    </div>
                    <div className="col-sm-3">
                        <div className="panel panel-default">
                            <div className="panel-heading" className="teammate-box">

                            
                                <AddComment />
                                <div id="root"> </div>
                                

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">

                </div>
            </div>
        );
    }
}

if (document.getElementById('comment')) {
    ReactDOM.render(<CommentParent publicId={window.location.pathname.substring(9)} />, document.getElementById('comment'));
}

