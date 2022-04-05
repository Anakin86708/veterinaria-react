import React, { useEffect, useState } from "react";
import Item from "../../../Item/Item";
import ErrorListComponent from "../../../MessageListComponent/variants/ErrorListComponent/ErrorListComponent";
import MainView from "../../MainView";
import getVeterinarioData from "./getVeterinarioData";

const VeterinarioView = function (props) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getVeterinarioData();
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
        <MainView title="Veterinário">
            {items}
        </MainView>
    );
}

export default VeterinarioView;