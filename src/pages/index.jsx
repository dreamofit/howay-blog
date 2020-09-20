import React, { Component } from 'react';
import Content from './Content';
import Header from '../components/Header';

class Main extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <Header />
                <Content />
            </div>
        );
    }
}

export default Main;