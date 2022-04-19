const insertNewConsulta = async function (data) {
    const url = "http://localhost:8765/consultas";
    const filterData = Object.fromEntries(
        Object.entries(formatData(data)).filter(([k]) => k !== 'veterinario' || k !== 'animal')
    );
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(filterData)
    }
    const response = await fetch(url, requestOptions);
    return response;
}

const formatData = function(data) {
    return {...data, "animal": {"id": data["animal"]}, "veterinario": {"id": data["veterinario"]}};
}

const deleteConsulta = async function(id) {
    const url = 'http://localhost:8765/consultas/'+ id;
    const requestOptions = {
        method: "DELETE"
    }
    const response = await fetch(url, requestOptions);
    return response;
}


export {insertNewConsulta, deleteConsulta};
