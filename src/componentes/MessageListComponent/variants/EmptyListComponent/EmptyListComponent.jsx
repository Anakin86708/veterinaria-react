import React from "react";
import MessageListComponent from "../../MessageListComponent";

const EmptyListComponent = function (props) {

    return (
        <MessageListComponent title="Vazio">
            <p>Use o botão no canto superior esquerdo para adicionar um novo elemento.</p>
        </MessageListComponent>
    );
}

export default EmptyListComponent;
