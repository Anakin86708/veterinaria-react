import React, { useEffect, useState } from "react";
import { dateConverter, dateConverterToService } from "../../../../adapters/dateConverter/dateConverter";
import InformationView from "../../InformationView";
import './AnimaisInformationView.css';
import { insertNewAnimal } from "./animaisServices";
import getClientesData from "./getClientesData";
import getEspeciesData from "./getEspeciesData";

const AnimaisInformationView = function (props) {
    const onClose = props.onClose;

    const [data, setData] = useState(props.data);
    const [currentState, setCurrentState] = useState("id" in data ? "view" : "add");
    const [selectedCliente, setSelectedCliente] = useState(data?.clientePertencente?.id);
    const [clientes, setClientes] = useState([]);
    const [especies, setEspecies] = useState([]);
    const dataNascimento = dateConverter(data.dataNascimento);

    const saveData = function () {
        console.log(data);
        if (currentState === "add") {
            insertNewAnimal(selectedCliente, data)
                .then(r => console.log(r.status))
                .catch(r => console.error(r));
        }
    }

    const onChangeDataNascimento = function(e) {
        setData({...data, "dataNascimento": dateConverterToService(e.target.value)})
    }

    const onChangeClientePertencente = function (e) {
        const id = e.target.value;
        setSelectedCliente(id);
        setData({...data, "clientePertencente": id});
    }

    useEffect(() => {
        setOptionsClientes(setClientes, data.clientePertencente.id);
        setOptionsEspecies(setEspecies, data.especie.id);

        console.log("State: " + currentState);
        console.log("Show edit: " + currentState === "view");
    }, [currentState, data.clientePertencente.id, data.especie.id]);

    return (
        <InformationView showEdit={currentState === "view"} onClickEdit={() => setCurrentState("edit")} onClose={() => onClose}>
            <form className="gap-4 form-animais">
                <fieldset>
                    <label htmlFor="fNome">Nome</label>
                    <input type="text" name="nome" id="fNome" value={data.nome} onChange={e => setData({ ...data, "nome": e.target.value })} readOnly={currentState === "view"} />

                    <label htmlFor="fDataNascimento">Data de nascimento</label>
                    <input type="date" name="dataNascimento" id="fDataNascimento" value={dataNascimento} onChange={onChangeDataNascimento} readOnly={currentState === "view"} />

                    <fieldset>
                        <div>
                            <input type="radio" name="sexo" id="femea" checked={data.sexo === "FEMEA"} onChange={() => setData({ ...data, "sexo": "FEMEA" })} disabled={currentState === "view"} required />
                            <label htmlFor="femea">Fêmea</label>
                        </div>
                        <div>
                            <input type="radio" name="sexo" id="macho" checked={data.sexo === "MACHO"} onChange={() => setData({...data, "sexo": "MACHO"})} disabled={currentState === "view"} />
                            <label htmlFor="macho">Macho</label>
                        </div>

                    </fieldset>

                    <label htmlFor="fEspecie">Espécie</label>
                    <select name="especie" id="fEspecie" value={currentState === "add" ?  null : data.especie.id}
                    onChange={e=> setData({...data, "especie": e.target.value})} disabled={currentState === "view"} required>
                        {especies}
                    </select>

                    <label htmlFor="fClientePertencente">Cliente Pertencente</label>
                    <select name="clientePertencente" id="fClientePertencente" value={data.clientePertencente.id} onChange={onChangeClientePertencente} disabled={currentState === "view"}>
                        {clientes}
                    </select>
                </fieldset>
                {currentState === "add" || currentState === "edit" ?
                    <input className="btn btn-primary" type="button" onClick={saveData} value="Confirmar" onChange={() => { }} /> : null}
                {currentState === "edit" ?
                    <input type="button" value="Cancelar" onClick={() => setCurrentState("view")} /> : null}
            </form>
        </InformationView>
    );
}

const setOptionsEspecies = async function (setEspecies) {
    const especies = await getEspeciesData();
    setEspecies([
        <option value="">Selecione uma espécie</option>,
        especies.map(e => <option value={e.id} key={e.id}>{e.nome}</option>)]
    );
}

const setOptionsClientes = async function (setClientes) {
    const clientes = await getClientesData();
    setClientes(
        [
            <option value="">Selecione um cliente</option>,
        clientes.map(c => <option value={c.id} key={c.id}>{c.nome}</option>)]
    );
}

export default AnimaisInformationView;
