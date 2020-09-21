import { action, computed, observable } from 'mobx';
import { tool, loginAPI } from '../apis/API';
import { getAllEssay, login,register } from '../utils/Urls'
import { getCookie } from '../utils/GetCookieToMap'

export class Store {
    @observable status = false;
    @observable essayList = [];
    @observable userName = "";
    @observable userId = -1;

    @computed get loginStatus(){
        return this.status;
    }
    set loginStatus(status){
        this.status = status;
    }

    @action
    change = () => {
        this.status = !this.status;
        console.log("status:" + this.status);
    }

    @action
    getAllEssay = async () => {
        let data = {};
        const res = await tool(getAllEssay, data, {});
        if (res == undefined) {
            return; //服务器问题/网络问题
        }
        this.essayList = res.RES;
    }

    @action
    login = async (name, password) => {
        const res = await loginAPI(login, name, password);
        if (res != undefined) {
            if (res.RE_CODE === 0) {
                this.userName = getCookie("cl_name");
                this.userId = getCookie("cl_id");
                this.status = true;
            } else {
                this.status = false;
                this.userId = -10;//输入用户名和密码不匹配
            }
        } else {
            this.status = false;
            this.userId = -100; //服务器问题/网络问题
        }
    }

    @action
    register = async (name,password,email,homePage) => {
        let data = {
            "name":name,
            "password":password,
            "email":email,
            "homePage":homePage
        };
        const res = await tool(register, data, {});
        return res;
    }

}