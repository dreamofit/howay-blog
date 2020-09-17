import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Main from '../pages';
class MyRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" component={Main} exact/>
            </BrowserRouter>
        );
    }
}

export default MyRouter;