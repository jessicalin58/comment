import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {FileUpload} from './FileUpload.js';

// import   {App} from './App.js';

export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
         
                    <div className="col-md-9">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                            
                            <FileUpload />
                            
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="panel panel-default">
                            <div className="panel-heading" className="teammate-box">

                            </div>
                        </div>
                   </div>
                </div>
                <div className ="row">
                    <a href="http://localhost:8000/comment"> -> Next</a>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}

