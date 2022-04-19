import React, { useEffect, useState } from "react";
import { insertNewEspecie } from "../../../MainView/variants/EspeciesView/especiesService";
import InformationView from "../../InformationView";

const EspeciesInformationView = function (props) {
    const onClose = props.onClose;

    const [data, setData] = useState(props.data);
    const [currentState, setCurrentState] = useState("id" in data ? "view" : "add");

    const saveData = function () {
        if (currentState === "add") {
            insertNewEspecie(data)
                .then(r => {
                    if (r.ok) {
                        setCurrentState("saved");
                    }
                });
        }
    }

    useEffect(() => {
        console.log("State: " + currentState);
        console.log("Show edit: " + currentState === "view");
    }, [currentState]);

    const formDisplay = (
        <form className="gap-4 form-animais">
            <fieldset>
                <label htmlFor="fNome">Nome</label>
                <input type="text" name="nome" id="fNome" value={data?.nome} onChange={e => { setData({ ...data, "nome": e.target.value }) }} readOnly={currentState === "view"} />
            </fieldset>
            {currentState === "add" || currentState === "edit" ?
                <input className="btn btn-primary" type="button" onClick={saveData} value="Confirmar" onChange={() => { }} /> : null}
            {currentState === "edit" ?
                <input type="button" value="Cancelar" onClick={() => setCurrentState("view")} /> : null}
        </form>
    );

    const displaySuccess = (
        <div className="success">
            <h1>Sucesso!</h1>
            <button className="btn btn-success" onClick={onClose}>Fechar</button>
        </div>
    );
    return (
        <InformationView showEdit={currentState === "view"} onClickEdit={() => setCurrentState("edit")} onClose={() => onClose}>
            {currentState !== "saved" ? formDisplay : displaySuccess}
        </InformationView>
    );
}

export default EspeciesInformationView;
