//获取后端发送的Cookie，用于获取用户数据
export function getCookieToMap() {
    let cookieMap = new Map();
    let arrCookies = document.cookie.split("; ");
    console.log(document.cookie);
    for (let i in arrCookies) {
      let cookies = arrCookies[i].split("=");
      console.log("cookies:"+cookies);
      console.log(cookies[0]+":"+cookies[1]);
      cookieMap.set(cookies[0],cookies[1]);
    }
    return cookieMap;
  }
  