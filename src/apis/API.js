
export function tool(url, data) {
    return fetch(url, {
        body: data,
        method: "POST",
        headers: {
            "content-type": "application/json",
        }
    }).then(res => {
        return res.json();
    }).catch(() => { });
}
export function loginAPI(url, name,password){
    return fetch(url, {
        body: `name=${name}&password=${password}`,
        method: "POST",
        credentials: 'include',
        headers: {
            "content-type": 'application/x-www-form-urlencoded',
        }
    }).then(res => {
        return res.json();
    }).catch(() => { });
}



