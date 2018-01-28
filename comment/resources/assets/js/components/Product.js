import React, { Component } from 'react';

const Product = ({product}) => {
    const divStyle = {
        fontFamily: 'Arial',
        width: 200,
        margin: 100,
    
    }

    if(!product) {
        return(<div style={divStyle}> Product doesn't exist </div>)
    }
    //Else display product data
    return (
          <div style={divStyle}>

            <h2> {product.title} </h2>
            <p> {product.comment} </p>
             <h3> {product.url} </h3>
          </div> 
    )
}

export default Product;