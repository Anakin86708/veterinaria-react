import React, { useState } from "react";
import dateConverter from "../../../../adapters/dateConverter/dateConverter";
import InformationView from "../../InformationView";
import './AnimaisInformationView.css';
import getClientesData from "./getClientesData";
import getEspeciesData from "./getEspeciesData";

const AnimaisInformationView = function (props) {
    const [clientes, setClientes] = useState([]);
    const [especies, setEspecies] = useState([]);
    const onClose = props.onClose;
    const data = props.data;
    const dataNascimento = dateConverter(data.dataNascimento);

    setOptionsClientes(setClientes, data.clientePertencente.id);
    setOptionsEspecies(setEspecies, data.especie.id);

    return (
        <InformationView onClose={() => onClose}>
            <form className="form-animais">
                <fieldset>
                    <label htmlFor="fNome">Nome</label>
                    <input type="text" name="nome" id="fNome" value={data.nome} readOnly />

                    <label htmlFor="fDataNascimento">Data de nascimento</label>
                    <input type="date" name="dataNascimento" id="fDataNascimento" value={dataNascimento} readOnly />

                    <fieldset>
                        <div>
                            <input type="radio" name="sexo" id="femea" checked={data.sexo === "FEMEA"} readOnly />
                            <label htmlFor="femea">Fêmea</label>
                        </div>
                        <div>
                            <input type="radio" name="sexo" id="macho" checked={data.sexo === "MACHO"} readOnly />
                            <label htmlFor="macho">Macho</label>
                        </div>

                    </fieldset>

                    <label htmlFor="fEspecie">Espécie</label>
                    <select name="especie" id="fEspecie" value={data.especie.id} readOnly>
                        {especies}
                    </select>

                    <label htmlFor="fClientePertencente">Cliente Pertencente</label>
                    <select name="clientePertencente" id="fClientePertencente" value={data.clientePertencente.id} readOnly>
                        {clientes}
                    </select>
                </fieldset>
            </form>
        </InformationView>
    );
}

const setOptionsEspecies = async function (setEspecies) {
    const especies = await getEspeciesData();
    setEspecies(
        especies.map(e => <option value={e.id} key={e.id}>{e.nome}</option>)
    );
}

const setOptionsClientes = async function (setClientes, idClientePertencente) {
    const clientes = await getClientesData();
    setClientes(
        clientes.map(c => <option value={c.id} key={c.id}>{c.nome}</option>)
    );
}

export default AnimaisInformationView;
