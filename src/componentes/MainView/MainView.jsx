import React from "react";
import './MainView.css'

const MainView = function (props) {
    const title = props.title;

    return (
        <div className="main-view">
            <h1>{title}</h1>
        </div>
    )
}

export default MainView;