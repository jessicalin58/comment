import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ExportChild } from './ExportChild.js';

// import   {App} from './App.js';

export default class ExportParent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">

                    <div className="col-md-9">
                        <div className="panel panel-default">
                            <div className="panel-heading">

                               <ExportChild />

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="panel panel-default">
                            <div className="panel-heading" className="teammate-box-inactive">

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

if (document.getElementById('export')) {
    ReactDOM.render(<ExportParent />, document.getElementById('export'));
}

