import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import MainView from "../MainView/MainView";
import getClientesData from "./getClientesData";

const ClientesView = function () {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getClientesData();
                const newItems = data.map(d => <Item title={d.nome} />);
                setItems(newItems);
            } catch (e) {
                console.error(e);
                setItems([<Item title='Error' />]);
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