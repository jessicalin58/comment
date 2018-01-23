import * as React from "react";

export class FileUpload extends React.Component
{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(selectorFiles) {
        
        console.log(selectorFiles[0]);
    }

    render() {
        return <div>
            <input type="file" onChange={(e) => this.handleChange(e.target.files)} />
        </div>;
        
    }
}

