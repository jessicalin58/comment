import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import MainComment from './MainComment.js'
import AddProduct from './AddProduct.js';

class AddComment extends Component {

    constructor(props) {

        super(props);
        //initialize state
        this.state = {
            newProduct: {
                title: '',
                comment: '',
                url: ''
            },
            products: [],
            currentProduct: null
        }
        //binding methods with 'this'
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleAddProduct = this.handleAddProduct.bind(this);

    }
    //Gets called after the component is rendered
    componentDidMount() {
        // Fetch the API
        fetch('/api/products')
            .then(response => {
                return response.json();
            })
            .then(products => {
                //gets stored in setState
                this.setState({ products })
            });
    }
    renderProducts() {
        return this.state.products.map(product => {
            return (
                // Using a list needs to specify a key attributte for each item
                //this.handleckick method is invoked on click.
                <li onClick={
                    () => this.handleClick(product)} key={product.id}>
                    {product.comment}
                </li>
            );
        })
    }

    //Stores it in the state
    handleInput(key, e) {

        var state = Object.assign({}, this.state.newProduct);
        state[key] = e.target.value;
        this.setState({ newProduct: state });

    }
    handleClick(product) {
        //set the state of the current product
        this.setState({ currentProduct: product });
    }


    //Invoked when submit is pressed
    handleSubmit(e) {
        //prevent page reload
        e.preventDefault();

        //callback to onAdd prop. new state is passed as a param.
        this.props.onAdd(this.state.newProduct);
    }
    handleAddProduct(product) {


        // product.price = Number(product.price);
        /*Fetch API for post request */
        fetch('api/products', {
            method: 'post',
            /* headers are important*/
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },

            body: JSON.stringify(product)
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                //update the state of products and currentProduct
                this.setState((prevState) => ({
                    products: prevState.products.concat(data),
                    currentProduct: data
                }))
            })
    }
    handleProduct(product) {
        this.handleAddProduct = this.handleAddProduct.bind(this);
    }

    //Invoked when submit is pressed
    handleSubmit(e) {
        //prevent page reload
        e.preventDefault();

        //callback to onAdd prop. new state is passed as a param.
        this.props.onAdd(this.state.newProduct);
    }

    render() {
        const dateToFormat = '2018-01-27T12:59-0500';

        const divStyle = {
            margin: 1,
            width: 10,
            flex: 1
        }
        const placeholderStyle = {
            opacity: 0.4,
            fontFamily: 'Proxima Nova',
            fontWeight: 100,
            width: 180,
            marginTop: 6
        }


        return (
            <div style={{ height: 20 }}>
                <div class="container-fluid">
                    <div class="row" style={{flex:1, alignItems: 'stretch'}}>
                        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={divStyle}> 
                            <img src="https://image.ibb.co/mwEVMw/face_Picture_2x.png"  /> 
                        </div>

                        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={{alignSelf:'flex-end'}}>
                         <strong>Me:</strong>  <Moment date={dateToFormat} /></div>


                        <div class="col">
               
                        <AddProduct onAdd={this.handleAddProduct} />

                          

                            <div id="noteAdded"> </div>

                        </div>
                        <div>
                            <ul>
                                {this.renderProducts()}
                            </ul>
                        </div>


                        

                    </div>
                </div>
                <div style={divStyle}>

                   
                </div>
            </div>
        )
    }

}

// <label>
//     <input style={placeholderStyle} type='text' placeholder='Type comment here' onChange={(e) => this.handleInput('comment', e)} />
// </label>

export default AddComment;