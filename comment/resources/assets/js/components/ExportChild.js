import * as React from "react";

export class ExportChild extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: null
        };

    }
   
    componentWillMount(){
        console.log(window.location.href);
    }

    render() {
        return (<div>

        <h4> URL created: </h4>
        <p> Drag and copy or click on the clipboard to save it direcly </p>
        <p> {window.location.href} </p>

        </div>
        )
    }
}

