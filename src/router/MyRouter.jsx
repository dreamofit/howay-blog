import { observer } from 'mobx-react';
import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Main from '../pages';
import Blogs from '../pages/Blogs';
import Login from '../pages/Login';
@observer class MyRouter extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <BrowserRouter>
                <Route path="/" component={Main} exact/>
                <Route path="/blogs" component={Blogs} />
                <Route path="/login" component={Login} />
            </BrowserRouter>
        );
    }
}
export default MyRouter;