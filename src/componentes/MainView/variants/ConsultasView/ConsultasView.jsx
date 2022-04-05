import React, { useEffect, useState } from "react";
import Item from "../../../Item/Item";
import ErrorListComponent from "../../../MessageListComponent/variants/ErrorListComponent/ErrorListComponent";
import MainView from "../../MainView";
import getConsultasData from "./getConsultasData";

const ConsultasView = function (props) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getConsultasData();
                const newItems = data.map(d => <Item title={d.comentarios} />);
                setItems(newItems);
            } catch (e) {
                console.error(e);
                setItems([<ErrorListComponent reason={e.toString()}/>]);
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
