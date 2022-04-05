import React, { useEffect, useState } from "react";
import './VeterinarioView.css';
import MainView from "../MainView/MainView";
import Item from "../Item/Item";
import getVeterinarioData from "./getVeterinarioData";

const VeterinarioView = function () {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
                const data = await getVeterinarioData();
                const newItems = data.map(d => <Item title={d.nome} />);
                setItems(newItems);

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