import { observer } from 'mobx-react';
import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import EssayDetails from '../components/EssayDetails';
import Test from '../components/Test';
import Write from '../components/Write';
import Main from '../pages';
import Blogs from '../pages/Blogs';
import Login from '../pages/Login';
import Register from '../pages/Register';
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
                <Route path="/register" component={Register} />
                <Route path="/details" component={EssayDetails} />
                <Route path="/write" component={Write} />
            </BrowserRouter>
        );
    }
}
export default MyRouter;