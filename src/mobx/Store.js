import {action, observable, observe} from 'mobx';

export class Store {
    @observable status = false;

    @action
    change=()=>{
        this.status = !this.status;
        console.log("status:"+this.status);
    }

}