import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddComment from './AddComment.js';


class MainComment extends Component {

    constructor() {


        super();
        //Initiate the state in the constructor
        //currentProduct keeps track of the product being displayed
        this.state = {
            products: [],
            currentProduct: null
        }
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
                    {product.title}
                </li>
            );
        })
    }

    handleClick(product) {
        //set the state of the current product
        this.setState({ currentProduct: product });
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

    render() {
        return (
            <div>
                <div>
                    <ul>
                        <h3> All Product </h3>
                        {this.renderProducts()}
                    </ul>
                </div>


                <AddComment onAdd={this.handleAddProduct} />

            </div>

        );
    }
}

export default MainComment;

if (document.getElementById('noteAdded')) {
    ReactDOM.render(<MainComment />, document.getElementById('noteAdded'));
}