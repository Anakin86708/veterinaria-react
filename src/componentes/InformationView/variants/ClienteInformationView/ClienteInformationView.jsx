import React, { useState } from "react";
import { dateConverter, dateConverterToService } from "../../../../adapters/dateConverter/dateConverter";
import InformationView from "../../InformationView";
import './ClienteInformationView.css';
import { insertNewCliente } from "./clientesServices";

const ClienteInformationView = function (props) {
    const [data, setData] = useState(props.data);
    const [currentState, setCurrentState] = useState("id" in data ? "view" : "add");

    const onClose = props.onClose;
    const dataNascimento = dateConverter(data.dataNascimento);

    const saveData = function () {
        console.log(data);
        if (currentState === "add") {
            insertNewCliente(data)
                .then(r => console.log(r.status));
        }
    }

    const onChangeDataNascimento = function(e) {
        setData({...data, "dataNascimento": dateConverterToService(e.target.value)})
    }

    const formDisplay = (
        <form className="gap-4 form-cliente">
        <fieldset>
            <label htmlFor="fNome">Nome</label>
            <input type="text" name="nome" id="fNome" value={data.nome} onChange={e => setData({ ...data, "nome": e.target.value })} readOnly={currentState === "view"} />

            <label htmlFor="fDataNascimento">Data de nascimento</label>
            <input type="date" name="dataNascimento" id="fDataNascimento" value={dataNascimento} onChange={onChangeDataNascimento} readOnly={currentState === "view"} />

            <label htmlFor="fEmail">Email</label>
            <input type="email" name="email" id="fEmail" value={data.email} onChange={e => setData({ ...data, "email": e.target.value })} readOnly={currentState === "view"} />
        </fieldset>

        <fieldset>
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

export default ClienteInformationView;
