import React, { useEffect, useState } from "react";
import Item from "../../../Item/Item";
import ErrorListComponent from "../../../MessageListComponent/variants/ErrorListComponent/ErrorListComponent";
import MainView from "../../MainView";
import getClientesData from "./getClientesData";

const ClientesView = function (props) {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getClientesData();
                const newItems = data.map(d => <Item title={d.nome} />);
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
        </MainView>
    );
}

export default ClientesView;