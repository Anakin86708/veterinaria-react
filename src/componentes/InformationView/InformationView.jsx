import React from "react";
import './InformationView.css';

const InformationView = function (props) {
    const children = props.children;
    return (
        <div className="btn information-view">
            <button>Edit</button>
            {children}
        </div>
    )
}

export default InformationView;
    