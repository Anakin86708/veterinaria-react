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
            .then(r => console.log(r.status));
        }
    }

    useEffect(() => {
        console.log("State: " + currentState);
        console.log("Show edit: " + currentState === "view");
    }, [currentState]);

    return (
        <InformationView showEdit={currentState === "view"} onClickEdit={() => setCurrentState("edit")} onClose={() => onClose}>
            <form className="gap-4 form-animais">
                <fieldset>
                    <label htmlFor="fNome">Nome</label>
                    <input type="text" name="nome" id="fNome" value={data?.nome} onChange={e => {setData({...data, "nome": e.target.value})}} readOnly={currentState === "view"} />
                </fieldset>
                {currentState === "add" || currentState === "edit" ?
                    <input className="btn btn-primary" type="button" onClick={saveData} value="Confirmar" onChange={() => {}}/> : null}
                { currentState === "edit" ?
                <input type="button" value="Cancelar" onClick={() => setCurrentState("view")} />    : null}
            </form>
        </InformationView>
    );
}

export default EspeciesInformationView;
