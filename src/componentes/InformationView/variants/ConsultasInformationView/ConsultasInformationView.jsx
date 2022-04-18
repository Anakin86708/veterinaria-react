import React, { useEffect, useRef, useState } from "react";
import { dateConverter, dateConverterToService } from "../../../../adapters/dateConverter/dateConverter";
import InformationView from "../../InformationView";
import { insertNewConsulta } from "./consultasServices";
import getAnimaisData from "./getAnimaisData";
import getVeterinarioData from "./getVeterinarioData";

const ConsultasInformationView = function (props) {
    const onClose = props.onClose;

    const [data, setData] = useState(props.data);
    const [currentState, setCurrentState] = useState("id" in data ? "view" : "add");
    const [animais, setAnimais] = useState([]);
    const [veterinarios, setVeterinarios] = useState([]);

    const dataAgendada = dateConverter(data.dataAgendada);

    const saveData = function () {
        console.log(data);
        if (currentState === "add") {
            insertNewConsulta(data)
                .then(r => {
                    if (r.ok) {
                        setCurrentState("saved");
                    }
                })
                .catch(r => console.error(r));
        }
    }

    const onChangeDataAgendada = function (e) {
        setData({ ...data, "dataNascimento": dateConverterToService(e.target.value) })
    }

    const setOptionsAnimais = async function () {
        const animais = await getAnimaisData();
        setAnimais([
            <option value="">Selecione um animal</option>,
            animais.map(a => <option value={a.id} key={a.id}>{a.nome}</option>)
        ]);
    }

    const setOptionsVeterinarios = async function () {
        const veterinarios = await getVeterinarioData();
        setVeterinarios([
            <option value="">Selecione um veterinário</option>,
            veterinarios.map(v => <option value={v.id} key={v.id}>{v.nome}</option>)
        ]);
    }

    useEffect(() => {
        setOptionsAnimais();
        setOptionsVeterinarios();

        console.log("State: " + currentState);
        console.log("Show edit: " + currentState === "view");
    }, [currentState])

    const formDisplay = (
        <form className="gap-4 form-animais">
            <fieldset>
                <label htmlFor="fComentarios">Comentarios</label>
                <input type="text" name="comentarios" id="fComentarios" value={data.comentarios} onChange={e => setData({ ...data, comentarios: e.target.value })} readOnly={currentState === "view"} />

                <label htmlFor="fDataAgendada">Data agendada</label>
                <input type="date" name="dataAgendada" id="fDataAgendada" value={dataAgendada} onChange={onChangeDataAgendada} readOnly={currentState === "view"} />

                <label htmlFor="fAnimal">Animal</label>
                <select name="animal" id="fAnimal" value={currentState === "add" ? null : data.animal.id} onChange={e => setData({ ...data, animal: e.target.value })} disabled={currentState === "view"}>
                    {animais}
                </select>

                <label htmlFor="fVeterinario">Veterinario</label>
                <select name="veterinario" id="fVeterinario" value={currentState === "add" ? null : data.veterinario.id} onChange={e => setData({ ...data, veterinario: e.target.value })} disabled={currentState === "view"}>
                    {veterinarios}
                </select>
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

export default ConsultasInformationView;
