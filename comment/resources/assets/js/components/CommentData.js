import React, { Component } from 'react';

const Comment = ({ comment }) => {
    const divStyle = {
        fontFamily: 'Arial',
        width: 200,
        margin: 100,

    }

    if (!comment) {
        return (<div style={divStyle}> Product doesn't exist </div>)
    }
    //Else display product data
    return (
        <div style={divStyle}>

            <h2> {comment.name} </h2>
            <p> {comment.comment} </p>
            <h3> {comment.url} </h3>
        </div>
    )
}

export default Comment;