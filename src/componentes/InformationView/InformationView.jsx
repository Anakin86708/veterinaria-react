import React from "react";
import './InformationView.css';

const InformationView = function (props) {
    const children = props.children;
    const onClose = props.onClose;
    return (
        <div className="bg-information-view container" >
            <div className="btn information-view">
                <div className="gap-2 top-bar">
                    <button className="btn btn-edit">Edit</button>
                    <button className="btn btn-danger btn-close" onClick={onClose()} />
                </div>
                {children}
            </div>
        </div>
    )
}

export default InformationView;
