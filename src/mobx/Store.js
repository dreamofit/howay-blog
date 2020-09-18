import {action, observable} from 'mobx';
import { tool,loginAPI } from '../apis/API';
import {getAllEssay,login} from '../utils/Urls'
import {getCookieToMap} from '../utils/GetCookieToMap'

export class Store {
    @observable status = false;
    @observable essayList = [];
    @observable userName = "";
    @observable userId = -1;

    @action
    change=()=>{
        this.status = !this.status;
        console.log("status:"+this.status);
    }
    
    getAllEssay = async () => {
        let data = {};
        data = JSON.stringify(data);
        const res = await tool(getAllEssay,data,{});
        if(res==undefined){
            return; //服务器问题/网络问题
        }
        this.essayList = res.RES;
    }

    login = async (name,password) => {
        const res = await loginAPI(login,name,password);
        if(res!=undefined){
            if(res.RE_CODE===0){
                let cookieMap = getCookieToMap();
                this.userName = cookieMap.get("cl_name");
                this.userId = cookieMap.get("cl_id");
                this.status = true;
                console.log(this.status);
            }else{
                this.status = false;
                this.userId = -10;//输入用户名和密码不匹配
            }
        }else{
            this.status = false;
            this.userId = -100; //服务器问题/网络问题
        }
    }
}