import React, { Component } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { observer,inject } from 'mobx-react';
import EssayCard from './EssayCard';

const styles = {
    container: {
        borderRight: '0.1px solid',
        borderColor: "rgb(255, 179, 0,0.2)",
    }
}

@inject("baseStore")
@observer
class Content extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount = () => {
        this.props.baseStore.getAllEssay();
    }

    render() {
        return (
            <div style={{ position: "relative", top: 70 }}>
                <Grid container xs={12}>
                    <Grid item xs={1}>

                    </Grid>
                    <Grid xs={8}>
                        <Container maxWidth="md">
                            {this.props.baseStore.essayList.map((essay) => {
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