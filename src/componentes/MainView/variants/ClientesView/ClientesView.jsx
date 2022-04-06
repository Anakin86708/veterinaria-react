import React, { useEffect, useState } from "react";
import InformationView from "../../../InformationView/InformationView";
import ClienteInformationView from "../../../InformationView/variants/ClienteInformationView/ClienteInformationView";
import Item from "../../../Item/Item";
import ErrorListComponent from "../../../MessageListComponent/variants/ErrorListComponent/ErrorListComponent";
import MainView from "../../MainView";
import getClientesData from "./getClientesData";

const ClientesView = function (props) {
    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedData, setSelectedData] = useState(null);

    const setSelectedItem = function (data) {
        setSelectedData(data);
        setShowModal(true);
    }
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getClientesData();
                const newItems = data.map(d => <Item title={d.nome} onClick={() => setSelectedItem(d)} key={d.id} />);
                setItems(newItems);
            } catch (e) {
                console.error(e);
                setItems([<ErrorListComponent reason={e.toString()}/>]);
            }
        }
        fetchData();
    }, []);

    return (
        <MainView title="Clientes">
            {items}
            {showModal ? 
            <ClienteInformationView data={selectedData}/>
            : null}
        </MainView>
    );
}

export default ClientesView;