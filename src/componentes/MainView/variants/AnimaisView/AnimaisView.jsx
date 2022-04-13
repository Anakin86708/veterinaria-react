import React, { useEffect, useState } from "react";
import AnimaisInformationView from "../../../InformationView/variants/AnimaisInformationView/AnimaisInformationView";
import Item from "../../../Item/Item";
import ErrorListComponent from "../../../MessageListComponent/variants/ErrorListComponent/ErrorListComponent";
import MainView from "../../MainView";
import getAnimaisData from "./getAnimaisData";

const AnimaisView = function (props) {
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
                const data = await getAnimaisData();
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
        <AnimaisInformationView data={selectedData} onClose={() => setShowModal(false)} />
        : null;

    const onClickAdd = function () {
        const date = new Date();
        const formattedDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
        setSelectedData({
            nome: "",
            dataNascimento: formattedDate,
            sexo: "",
            especie: "",
            clientePertencente: ""
        });
        setShowModal(true);
    }

    return (
        <MainView title="Animais" modal={modal} onClickAdd={onClickAdd}>
            {items}
        </MainView>
    )
}

export default AnimaisView;
