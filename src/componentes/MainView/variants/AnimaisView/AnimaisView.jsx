import React, { useEffect, useState } from "react";
import Item from "../../../Item/Item";
import ErrorListComponent from "../../../MessageListComponent/variants/ErrorListComponent/ErrorListComponent";
import MainView from "../../MainView";
import getAnimaisData from "./getAnimaisData";

const AnimaisView = function (props) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAnimaisData();
                const newItems = data.map(d => <Item title={d.nome} key={d.id}/>);
                setItems(newItems);
            } catch (e) {
                console.error(e);
                setItems([<ErrorListComponent reason={e.toString()}/>]);
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
