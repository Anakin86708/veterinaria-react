import React from "react";
import InformationView from "../../InformationView";

const EspeciesInformationView = function (props) {
    const data = props.data;
    const onClose = props.onClose;
    
    return (
        <InformationView onClose={() => onClose}>
            <form className="form-animais">
                <fieldset>
                    <label htmlFor="fNome">Nome</label>
                    <input type="text" name="nome" id="fNome" value={data.nome} readOnly />
                </fieldset>
            </form>
        </InformationView>
    );
}

export default EspeciesInformationView;
