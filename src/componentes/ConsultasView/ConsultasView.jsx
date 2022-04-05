import React, { useEffect, useState } from "react";
import MainView from "../MainView/MainView";
import Item from "../Item/Item";
import getConsultasData from "./getConsultasData";

const ConsultasView = function () {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getConsultasData();
                const newItems = data.map(d => <Item title={d.comentarios} />);
                setItems(newItems);
            } catch (e) {
                console.error(e);
                setItems([<Item title='Error' />]);
            }
        }
        fetchData();
    }, []);

    return (
        <MainView title="Consultas">
            {items}
        </MainView>
    );
}

export default ConsultasView;
