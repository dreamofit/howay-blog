//获取后端发送的Cookie，用于获取用户数据
export function getCookieToMap() {
    let cookieMap = new Map();
    let arrCookies = document.cookie.split("; ");
    for (let i in arrCookies) {
      let cookies = arrCookies[i].split("=");
      cookieMap.set(cookies[0],cookies[1]);
    }
    return cookieMap;
  }
  
  export function getCookie(what){
    let cookieMap = getCookieToMap();
    return cookieMap.get(what);
  }