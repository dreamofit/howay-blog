import {action, observable, observe} from 'mobx';
import { tool } from '../apis/API';
import {getAllEssay} from '../utils/Urls'


export class Store {
    @observable status = false;
    @observable essayList = [];

    @action
    change=()=>{
        this.status = !this.status;
        console.log("status:"+this.status);
    }
    @action
    getAllEssay = async () => {
        let data = {};
        const res = await tool(getAllEssay,data,{
            
        });
        this.essayList = res.RES;
    }

}