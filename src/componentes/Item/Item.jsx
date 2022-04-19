import React, { useState } from "react";
import './Item.css'

const Item = function (props) {
    const title = props.title;
    const onClick = props.onClick;
    const onClickDelete = props.onClickDelete;

    const [currentState, setCurrentState] = useState("normal");

    const handleClickDelete = function (e) {
        e.stopPropagation();
        onClickDelete();
    }

    const normalState = (
        <button className="btn btn-danger delete" onClick={e => {e.stopPropagation(); setCurrentState("delete")}}>Delete</button>
    );

    const deleteState = (
        <div>
            <button className="btn btn-danger delete" onClick={handleClickDelete}>Delete</button>
            <button className="btn btn-secondary delete" onClick={e => {e.stopPropagation(); setCurrentState("normal")}}>Cancel</button>
        </div>
    );

    return (
        <div className="item" onClick={onClick}>
            <h2>{title}</h2>
            {currentState === "delete" ? deleteState : normalState}
        </div>
    );
}

export default Item;
