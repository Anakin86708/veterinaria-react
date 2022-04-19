import React from "react";

const MessageListComponent = function (props) {
    const title = props.title;
    const children = props.children;

    return (
        <div className="message-list-component">
            <h2>{title}</h2>
            {children}
        </div>
    );
}

export default MessageListComponent;
