import React from "react";
import './InformationView.css';

const InformationView = function (props) {
    const children = props.children;
    const onClose = props.onClose;
    const showEdit = props.showEdit;
    const onClickEdit = props.onClickEdit;

    return (
        <div className="bg-information-view container" >
            <div className="btn information-view">
                <div className="gap-2 top-bar">
                    {showEdit ?
                        <button className="btn btn-edit" onClick={onClickEdit}>Edit</button> : null}
                    <button className="btn btn-danger btn-close" onClick={onClose()} />
                </div>
                {children}
            </div>
        </div>
    )
}

export default InformationView;
