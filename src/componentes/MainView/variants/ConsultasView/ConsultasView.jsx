import React, { useEffect, useState } from "react";
import ConsultasInformationView from "../../../InformationView/variants/ConsultasInformationView/ConsultasInformationView";
import Item from "../../../Item/Item";
import ErrorListComponent from "../../../MessageListComponent/variants/ErrorListComponent/ErrorListComponent";
import MainView from "../../MainView";
import getConsultasData from "./getConsultasData";

const ConsultasView = function (props) {
    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedData, setSelectedData] = useState(null);

    useEffect(() => {
        const setSelectedItem = function (data) {
            setSelectedData(data);

            if (data.id === selectedData?.id) {
                setShowModal(!showModal);
            } else {
                setShowModal(true);
            }
        }

        const fetchData = async () => {
            try {
                const data = await getConsultasData();
                const newItems = data.map(d => <Item title={d.comentarios} onClick={() => setSelectedItem(d)} key={d.id} />);
                setItems(newItems);
            } catch (e) {
                console.error(e);
                setItems([<ErrorListComponent reason={e.toString()} />]);
            }
        }
        fetchData();
    }, [selectedData?.id, showModal]);

    const modal = showModal ? <ConsultasInformationView data={selectedData} onClose={() => setShowModal(false)} /> : null;


    return (
        <MainView title="Consultas" modal={modal}>
            {items}
        </MainView>
    );
}

export default ConsultasView;
