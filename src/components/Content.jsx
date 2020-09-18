import React, { Component } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import baseStore from '../mobx';
import { observer } from 'mobx-react';
import EssayCard from './EssayCard';
const store = baseStore;

const styles = {
    container: {
        borderRight: '0.1px solid',
        borderColor: "rgb(255, 179, 0,0.2)",
    }
}

@observer
class Content extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount = () => {
        store.getAllEssay();
    }

    render() {
        return (
            <div style={{ position: "relative", top: 70 }}>
                <Grid container xs={12}>
                    <Grid item xs={1}>

                    </Grid>
                    <Grid xs={8}>
                        <Container maxWidth="md">
                            {store.essayList.map((essay) => {
                                return <EssayCard essay={essay} />
                            })}
                        </Container>
                    </Grid>
                    <Grid item xs={2}>

                    </Grid>
                </Grid>

            </div>
        );
    }
}

export default Content;