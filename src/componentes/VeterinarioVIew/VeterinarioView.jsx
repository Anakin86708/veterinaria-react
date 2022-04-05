import React, { useEffect, useState } from "react";
import MainView from "../MainView/MainView";
import Item from "../Item/Item";
import getVeterinarioData from "./getVeterinarioData";

const VeterinarioView = function () {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getVeterinarioData();
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
        <MainView title="Veterinário">
            {items}
        </MainView>
    );
}

export default VeterinarioView;