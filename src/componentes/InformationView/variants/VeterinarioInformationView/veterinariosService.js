const insertNewVeterinario = async function (data) {
    const url = "http://localhost:8765/veterinarios";
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

const deleteVeterinario = async function(id) {
    const url = 'http://localhost:8765/veterinarios/'+ id;
    const requestOptions = {
        method: "DELETE"
    }
    const response = await fetch(url, requestOptions);
    return response;
}

export {insertNewVeterinario, deleteVeterinario};
