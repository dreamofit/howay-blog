import React, { Component } from 'react';
import { Container,Typography } from '@material-ui/core';
import { Store } from '../mobx/Store';
import {observer} from 'mobx-react';
import EssayCard from './EssayCard';
const store = new Store();
@observer
class Content extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount=()=>{
        store.getAllEssay();
    }

    render() {
        return (
            <div style={{ height: 1000, position: "relative", top: 70 }}>
                <Container maxWidth="md">
                    {store.essayList.map((essay)=>{
                        return <EssayCard essay={essay} />
                    })}
                </Container>
            </div>
        );
    }
}

export default Content;