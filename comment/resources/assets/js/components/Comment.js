import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {CommentImage} from './CommentImage.js';
// import   {App} from './App.js';

export default class Comment extends Component {
    render() {
        return (

            <div className="container">
                <div className="row">

                    <div className="col-md-9">
                        <div className="panel panel-default">
                            <div className="panel-heading">

                                <CommentImage />

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3" style={{ 'opacity': '1' }} >
                        <div className="panel panel-default">
                            <div className="panel-heading" className="teammate-box-active">

                            </div>
                        </div>
                    </div>
                  
                </div>
                <div className="row">
                    <a href="http://localhost:8000/comment"> -> Next</a>
                </div>
            </div>
        );
    }
}

if (document.getElementById('test')) {
    ReactDOM.render(<Comment />, document.getElementById('test'));
}
