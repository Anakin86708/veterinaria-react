import React from "react";
import './MainView.css'

const MainView = function (props) {
    const title = props.title;
    const onclick = props.onClickAdd;

    return (
        <div className="container-fluid main-view">
            <div className="header">
                <h1>{title}</h1>
                <button className="btn btn-primary add-button" onClick={onclick}>+</button>
            </div>
            <hr />
            <div className="item-list">
                {props.children}
            </div>
        </div>
    )
}

export default MainView;