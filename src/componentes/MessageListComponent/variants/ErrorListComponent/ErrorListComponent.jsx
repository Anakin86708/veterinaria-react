import React from "react";
import MessageListComponent from "../../MessageListComponent";

const ErrorListComponent = function (props) {
    const reason = props.reason;
    return (
        <MessageListComponent title="Erro">
            <p>{reason}</p>
        </MessageListComponent>
    );
}

export default ErrorListComponent;
