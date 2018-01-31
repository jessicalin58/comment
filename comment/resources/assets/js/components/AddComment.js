import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import MainComment from './MainComment.js'
import AddProduct from './AddProduct.js';

import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';
import cloudinary from 'cloudinary-core';
import Dropzone from 'react-dropzone';
import request from 'superagent';



// Cloudinary API info
const CLOUDINARY_UPLOAD_PRESET = 'otbmflh7';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/jessicalin/upload';
const userPicUpload = {
    width: '100%',
    height: '150%'
}
const upload_style = {
    margin: 1
}

class AddComment extends Component {

    constructor(props) {

        super(props);
        //initialize state
        this.state = {
            uploadedFile: null,
            uploadedFileCloudinaryUrl: '',
            newProduct: {
                title: '',
                comment: '',
                url: '',
                checked: false
            },
            products: [],
            currentProduct: null
        }
        this.uploadFile = '';
        this.onImageDrop = this.onImageDrop.bind(this);
    

        //binding methods with 'this'
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleAddProduct = this.handleAddProduct.bind(this);
        this.handleDelete = this.handleDelete.bind(this)

    }

    onImageDrop(files) {
        //Send to Cloudinary
        this.setState({
            uploadedFile: files[0],
            checked: !this.state.checked

        });

        this.handleImageUpload(files[0]);

    }

    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file);

        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }

            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedFileCloudinaryUrl: response.body.secure_url,
                    public_id: response.body.public_id
                });
                // console.log(response);
                // console.log(response.body.public_id);
                // console.log(this.state.public_id);
            }
        });
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
                <div>
              
                <button onClick={
                    () => this.handleDelete(product)} key={product.id} /> 
                    {product.comment}
                
                </div>
            );
        })
    }

    handleDelete() {

        const currentProduct = this.state.currentProduct;
        fetch('api/products/' + this.state.currentProduct.id,
            { method: 'delete' })
            .then(response => {
                /* Duplicate the array and filter out the item to be deleted */
                var array = this.state.products.filter(function (item) {
                    return item !== currentProduct
                });

                this.setState({ products: array, currentProduct: null });

            });
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

        const dateToFormat = Date.now();

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

   
        const hidden = this.state.checked ? '': 'hidden';

        return (
            <div>
                <div class="container-fluid">
                    <div class="row" style={{flex:1, alignItems: 'stretch'}}>
                        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" style={divStyle}> 
                            
                            <div className="FileUpload">

                                <Dropzone
                                    className="drop-zone"                                   
                                    onDrop={this.onImageDrop.bind(this)}
                                    multiple={false}
                                    accept=".jpg,.png">
                                    <div className = {hidden}>
                                    test
                                    </div>
                                </Dropzone>

                            </div>

                             <div>
                
                            {this.state.uploadedFileCloudinaryUrl === '' ? null :
                             <div>
                            
                            <img src={this.state.uploadedFileCloudinaryUrl}
                            />

                        </div>}
                </div>

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

// <img src="https://image.ibb.co/mwEVMw/face_Picture_2x.png" /> 


export default AddComment;