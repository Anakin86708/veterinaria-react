import React from "react";
import './Item.css'

const Item = function (props) {
    const title = props.title;
    return (
        <div className="item">
            <h2>{title}</h2>
            <button className="btn btn-danger delete">Delete</button>
        </div>
    );
}

export default Item;
