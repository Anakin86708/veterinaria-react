const getConsultasData = async function () {
    const url = 'http://localhost:8765/consultas';
    try {
        const data = await fetch(url);
        const status = data.status;
        if (status === 200)
            return await data.json();
        else
            throw "Fail - status " + status
    } catch (e) {
        console.error(e);
    }
}

export default getConsultasData;
