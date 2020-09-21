import React, { Component } from 'react';
import Content from '../components/Content';
import Header from '../components/Header';

class Blogs extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <Header {...this.props} />
                <Content {...this.props} />
            </div>
        );
    }
}

export default Blogs;