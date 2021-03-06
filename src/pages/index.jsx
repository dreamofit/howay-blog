import React, { Component } from 'react';
import Content from '../components/Content';
import Header from '../components/Header';

class Main extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <Header {...this.props} />
                <Content {...this.props} type={"BLOG"} />
            </div>
        );
    }
}

export default Main;