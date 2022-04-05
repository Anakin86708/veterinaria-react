const getEspeciesData = async function () {
    const url = "http://localhost:8765/especies"
    const headers = new Headers();
    const jwt = await getJwt();
    headers.append('Authorization', 'Bearer ' + jwt);
    try{
        const response = await fetch(url, {headers});
        return await response.json()
        
    } catch (e) {
        console.error(e);
    }
}

const getJwt = async function () {
    const url = "http://localhost:8765/token";
    const body = new Blob([JSON.stringify(getAuthData(), null, 2)], {type: 'application/json'});
    try {
        const response = fetch(url, {method: 'POST', body})
    } catch (e) {
        console.error(e);
    }
}

const getAuthData = function () {
    return {
        username: "ariel",
        password: "password"
    }
}

export default getEspeciesData;