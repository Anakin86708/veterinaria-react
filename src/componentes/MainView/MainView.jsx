import React from "react";
import EmptyListComponent from "../MessageListComponent/variants/EmptyListComponent/EmptyListComponent";
import './MainView.css'

const MainView = function (props) {
    const title = props.title;
    const onclick = props.onClickAdd;
    const content = hasContent(props.children) ? props.children : <EmptyListComponent />;
    const modal = props.modal;

    return (
        <div className="container-fluid main-view">
            <div className="header">
                <h1>{title}</h1>
                <button className="btn btn-primary add-button" onClick={onclick}>+</button>
            </div>
            <hr />
            <div className="item-list">
                {content}
            </div>
            {modal}
        </div>
    )
}

const hasContent = function (children) {
    return children.length > 0;
}

export default MainView;