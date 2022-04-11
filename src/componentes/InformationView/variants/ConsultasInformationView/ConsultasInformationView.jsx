import React, { useState } from "react";
import dateConverter from "../../../../adapters/dateConverter/dateConverter";
import InformationView from "../../InformationView";
import getAnimaisData from "./getAnimaisData";
import getVeterinarioData from "./getVeterinarioData";

const ConsultasInformationView = function (props) {
    const [animais, setAnimais] = useState([]);
    const [veterinarios, setVeterinarios] = useState([]);
    const onClose = props.onClose;
    const data = props.data;
    const dataAgendada = dateConverter(data.dataAgendada);

    const setOptionsAnimais = async function () {
        const animais = await getAnimaisData();
        setAnimais(
            animais.map(a => <option value={a.id} key={a.id}>{a.nome}</option>)
        );
    }

    const setOptionsVeterinarios = async function () {
        const veterinarios = await getVeterinarioData();
        setVeterinarios(
            veterinarios.map(v => <option value={v.id} key={v.id}>{v.nome}</option>)
        );
    }

    setOptionsAnimais();
    setOptionsVeterinarios(setVeterinarios, data.veterinario.id);

    return (
        <InformationView onClose={() => onClose}>
            <form className="form-animais">
                <fieldset>
                    <label htmlFor="fComentarios">Comentarios</label>
                    <input type="text" name="comentarios" id="fComentarios" value={data.comentarios} readOnly />

                    <label htmlFor="fDataAgendada">Data agendada</label>
                    <input type="date" name="dataAgendada" id="fDataAgendada" value={dataAgendada} readOnly />

                    <label htmlFor="fAnimal">Animal</label>
                    <select name="animal" id="fAnimal" value={data.animal.id} readOnly>
                        {animais}
                    </select>

                    <label htmlFor="fVeterinario">Veterinario</label>
                    <select name="veterinario" id="fVeterinario" value={data.veterinario.id} readOnly>
                        {veterinarios}
                    </select>
                </fieldset>
            </form>
        </InformationView>
    );
}

export default ConsultasInformationView;
