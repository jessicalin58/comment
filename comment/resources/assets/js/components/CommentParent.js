import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Comment } from './Comment.js';
import AddComment from './AddComment';
// import   {App} from './App.js';

export default class CommentParent extends Component {

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


                    <a href="/team"> -> Next</a>
                </div>
            </div>
        );
    }
}

if (document.getElementById('comment')) {
    ReactDOM.render(<CommentParent publicId={window.location.pathname.substring(9)} />, document.getElementById('comment'));
}

