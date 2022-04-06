import React from "react";
import InformationView from "../../InformationView";
import './ClienteInformationView.css';

const ClienteInformationView = function (props) {
    const data = props.data;
    const dataNascimento = Date.now();
    console.log('Data from prop: ' + data.dataNascimento);
    console.log('Data formated: ' + dataNascimento);
    return (
        <InformationView>
            <form className="form-cliente">
                <fieldset>
                    <label htmlFor="fNome">Nome</label>
                    <input type="text" name="nome" id="fNome" value={data.nome} readOnly />

                    <label htmlFor="fDataNascimento">Data de nascimento</label>
                    <input type="date" name="dataNascimento" id="fDataNascimento" value={dataNascimento} readOnly />

                    <label htmlFor="fEmail">Email</label>
                    <input type="email" name="email" id="fEmail" value={data.email} readOnly />
                </fieldset>

                <fieldset>
                    <label htmlFor="fEndereco">Endereço</label>
                    <input type="text" name="endereco" id="fEndereco" value={data.endereco} readOnly />

                    <label htmlFor="fTelefone">Telefone</label>
                    <input type="text" name="telefone" id="fTelefone" value={data.telefone} readOnly />
                </fieldset>
            </form>
        </InformationView>
    );
}

export default ClienteInformationView;
