
export function tool(url, data) {
    return fetch(url, {
        body: JSON.stringify(data),
        method: "POST",
        headers: {
            "content-type": "application/json",
        }
    }).then(res => {
        return res.json();
    }).catch(() => { });
}




