import React, { useState } from "react";
import InformationView from "../../InformationView";
import { insertNewVeterinario } from "./veterinariosService";

const VeterinarioInformationView = function (props) {
    const onClose = props.onClose;

    const [data, setData] = useState(props.data);
    const [currentState, setCurrentState] = useState("id" in data ? "view" : "add");

    const saveData = function () {
        if (currentState === "add") {
            insertNewVeterinario(data)
                .then(r => {
                    if (r.ok) {
                        setCurrentState("saved");
                    }
                })
                .catch(r => console.error(r));
        }
    }

    const formDisplay = (
        <form className="gap-4 form-animais">
            <fieldset>
                <label htmlFor="fNome">Nome</label>
                <input type="text" name="nome" id="fNome" value={data.nome} onChange={e => setData({ ...data, "nome": e.target.value })} readOnly={currentState === "view"} />

                <label htmlFor="fEndereco">Endereço</label>
                <input type="text" name="endereco" id="fEndereco" value={data.endereco} onChange={e => setData({ ...data, "endereco": e.target.value })} readOnly={currentState === "view"} />

                <label htmlFor="fTelefone">Telefone</label>
                <input type="text" name="telefone" id="fTelefone" value={data.telefone} onChange={e => setData({ ...data, "telefone": e.target.value })} readOnly={currentState === "view"} />
            </fieldset>
            {currentState === "add" || currentState === "edit" ?
                <input className="btn btn-primary" type="button" onClick={saveData} value="Confirmar" onChange={() => { }} /> : null}
            {currentState === "edit" ?
                <input type="button" value="Cancelar" onClick={() => setCurrentState("view")} /> : null}
        </form>
    );

    const successDisplay = (
        <div className="success">
            <h1>Sucesso!</h1>
            <button className="btn btn-success" onClick={onClose}>Fechar</button>
        </div>
    );

    return (
        <InformationView showEdit={currentState === "view"} onClickEdit={() => setCurrentState("edit")} onClose={() => onClose}>
            {currentState !== "saved" ? formDisplay : successDisplay}
        </InformationView>
    );
}

export default VeterinarioInformationView;
