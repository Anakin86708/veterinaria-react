import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import MainView from "../MainView/MainView";
import getAnimaisData from "./getAnimaisData";

const AnimaisView = function () {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAnimaisData();
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
        <MainView title="Animais">
            {items}
        </MainView>
    )
}

export default AnimaisView;
