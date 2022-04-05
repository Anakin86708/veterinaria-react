const getAnimaisData = async function () {
    const url = 'http://localhost:8765/animais';
    try {
        const response = await fetch(url);
        const status = response.status;
        if (status === 200)
            return await response.json();
        else
            throw "Fail - status " + status
    } catch (e) {
        console.error(e);
    }
}

export default getAnimaisData;
