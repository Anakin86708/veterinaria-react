import React from "react";
import InformationView from "../../InformationView";

const VeterinarioInformationView = function (props) {
    const data = props.data;
    const onClose = props.onClose;
    
    return (
        <InformationView onClose={() => onClose}>
            <form className="form-animais">
                <fieldset>
                    <label htmlFor="fNome">Nome</label>
                    <input type="text" name="nome" id="fNome" value={data.nome} readOnly />

                    <label htmlFor="fEndereco">Endereço</label>
                    <input type="text" name="endereco" id="fEndereco" value={data.endereco} readOnly />

                    <label htmlFor="fTelefone">Telefone</label>
                    <input type="text" name="telefone" id="fTelefone" value={data.telefone} readOnly />
                </fieldset>
            </form>
        </InformationView>
    );
}

export default VeterinarioInformationView;
