import React, { useEffect, useState } from "react";
import Item from "../../../Item/Item";
import ErrorListComponent from "../../../MessageListComponent/variants/ErrorListComponent/ErrorListComponent";
import MainView from "../../MainView";
import getEspeciesData from "./getEspeciesData";

const EspeciesView = function (props) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getEspeciesData();
                const newItems = data.map(d => <Item title={d.comentarios} key={d.id}/>);
                setItems(newItems);
            } catch (e) {
                console.error(e);
                setItems([<ErrorListComponent reason={e.toString()}/>]);
            }
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
