import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Main from '../pages';
import Blogs from '../pages/Blogs';
import Login from '../pages/Login';
class MyRouter extends Component {
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