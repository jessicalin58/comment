import React, { Component } from 'react';

class AddProduct extends Component {

    constructor(props) {
        
        super(props);
        //initialize state
        this.state = {
            newProduct: {
                title: '',
                comment:'',
                url:''
            }
        }
        //binding methods with 'this'
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    //Stores it in the state
    handleInput(key,e){

        var state = Object.assign({}, this.state.newProduct);
        state[key] = e.target.value;
        this.setState({newProduct: state});

    }

    //Invoked when submit is pressed
    handleSubmit(e) {
        //prevent page reload
        e.preventDefault();

        //callback to onAdd prop. new state is passed as a param.
        this.props.onAdd(this.state.newProduct);
    }


    render(){
        const divStyle = {
      
            fontFamily: 'Proxima Nova',
            fontWeight: 100,
            width: 220,
            marginTop: 6
        }

        const addNoteStyle = {
            backgroundColor: 'rgba(255,255,255,0.8)',
            borderWidth: 1,
            borderRadius: 15,
            borderColor: '#7c8bff',
            color: '#7c8bff',
            margin: 2,
            marginRight: 5
            
        }

        return(
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input type='text' style={divStyle} placeholder='Type comment here' onChange={(e)=>this.handleInput('comment',e)} />
                        </label>
                    <div style={{marginLeft: 70}}>
                    <input style={addNoteStyle} type="submit" value="+ Add Note" />
                </div>
                    </form>
                </div>
            </div>
        )}}

// <label>Title:
//                     {}
//     <input type="text" onChange={(e) => this.handleInput('title', e)} />
// </label>

export default AddProduct;