import {action, observable} from 'mobx';
import { tool,loginAPI } from '../apis/API';
import {getAllEssay,login} from '../utils/Urls'
import {getCookieToMap} from '../utils/GetCookieToMap'

export class Store {
    @observable status = false;
    @observable essayList = [];

    @action
    change=()=>{
        this.status = !this.status;
        console.log("status:"+this.status);
    }
    
    getAllEssay = async () => {
        let data = {};
        data = JSON.stringify(data);
        const res = await tool(getAllEssay,data,{
            
        });
        this.essayList = res.RES;
    }

    login = async (name,password) => {
        const res = await loginAPI(login,name,password);
        if(res!==null){
            if(res.RE_CODE===0){
                let cookieMap = getCookieToMap();
                console.log(cookieMap);
            }else{

            }
        }else{

        }
        
    }
}