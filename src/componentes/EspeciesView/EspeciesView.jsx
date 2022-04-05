import React, { useEffect, useState } from "react";
import './EspeciesView.css'
import MainView from "../MainView/MainView";
import Item from "../Item/Item";
import getEspeciesData from "./getEspeciesData";

const EspeciesView = function (props) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = getEspeciesData();
            data
                .then(data => data.map(d => <Item title={d.nome} />))
                .then(newItems => setItems(newItems))
                .catch(x => setItems([<Item title='Error' />]));
        }
        fetchData();
    }, []);

    return (
        <MainView title="Espécies">
            {items}
        </MainView>
    );
}

export default EspeciesView;
