import React, { useEffect, useState } from "react";
import ClienteInformationView from "../../../InformationView/variants/ClienteInformationView/ClienteInformationView";
import { deleteCliente } from "../../../InformationView/variants/ClienteInformationView/clientesServices";
import Item from "../../../Item/Item";
import ErrorListComponent from "../../../MessageListComponent/variants/ErrorListComponent/ErrorListComponent";
import MainView from "../../MainView";
import getClientesData from "./getClientesData";

const ClientesView = function (props) {
    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedData, setSelectedData] = useState(null);


    useEffect(() => {
        const setSelectedItem = function (data) {
            setSelectedData(data);

            if (data.id === selectedData?.id) {
                setShowModal(!showModal);
            } else {
                setShowModal(true);
            }
        }

        const handleClickDelete = function (data) {
            const response = deleteCliente(data.id);
            response.then(r => {
                if (r.ok) {
                    fetchData();
                } else {
                    console.log("Unable to remove");
                }
            });
        }

        const fetchData = async () => {
            try {
                const data = await getClientesData();
                const newItems = data.map(d => <Item title={d.nome} onClick={() => { setSelectedItem(d) }} onClickDelete={() => { handleClickDelete(d) }} key={d.id} />);
                setItems(newItems);
            } catch (e) {
                console.error(e);
                setItems([<ErrorListComponent reason={e.toString()} />]);
            }
        }
        fetchData();

    }, [selectedData?.id, showModal]);

    const modal = showModal ? <ClienteInformationView data={selectedData} onClose={() => setShowModal(false)} /> : null;

    const onClickAdd = function () {
        const date = new Date();
        const formattedDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
        setSelectedData({
            nome: "",
            dataNascimento: formattedDate,
            email: "",
            endereco: "",
            telefone: ""
        });
        setShowModal(true);
    }


    return (
        <MainView title="Clientes" modal={modal} onClickAdd={onClickAdd}>
            {items}
        </MainView>
    );
}

export default ClientesView;