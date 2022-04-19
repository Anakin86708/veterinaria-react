const insertNewEspecie = async function (data) {
    const url = "http://localhost:8765/especies";
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    const response = await fetch(url, requestOptions);
    return response;
}

const deleteEspecie = async function (id) {
    const url = 'http://localhost:8765/especies/' + id;
    const requestOptions = {
        method: "DELETE"
    }
    const response = await fetch(url, requestOptions);
    return response;
}

export {
    insertNewEspecie,
    deleteEspecie
};