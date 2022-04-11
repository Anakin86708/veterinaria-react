import React, { useEffect, useState } from "react";
import EspeciesInformationView from "../../../InformationView/variants/EspeciesInformationView/EspeciesInformationView";
import Item from "../../../Item/Item";
import ErrorListComponent from "../../../MessageListComponent/variants/ErrorListComponent/ErrorListComponent";
import MainView from "../../MainView";
import getEspeciesData from "./getEspeciesData";

const EspeciesView = function (props) {
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
                const data = await getEspeciesData();
                const newItems = data.map(d => <Item title={d.nome} onClick={() => setSelectedItem(d)} key={d.id} />);
                setItems(newItems);
            } catch (e) {
                console.error(e);
                setItems([<ErrorListComponent reason={e.toString()} />]);
            }
        }
        fetchData();
    }, [selectedData?.id, showModal]);

    const modal = showModal ?
        <EspeciesInformationView data={selectedData} onClose={() => setShowModal(false)} />
        : null;

    const onClickAdd = function () {
        setSelectedData({nome: ""});
        setShowModal(true);
    }

    return (
        <MainView title="Espécies" modal={modal} onClickAdd={onClickAdd}>
            {items}
        </MainView>
    );
}

export default EspeciesView;
