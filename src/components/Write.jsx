import React, { Component } from 'react';
import { Button, Grid, Input, TextField } from '@material-ui/core';
import Header from '../components/Header';
import WriteEssay from './WriteEssay';



class Write extends Component {
    render() {
        
        return (
            <div>
                <Header {...this.props} />
                <Grid container style={{ marginTop: 70 }}>
                    <Grid xs={2}>
                        <Button color={'primary'} style={{ width: 160 }}>写博客</Button>
                        <Button color={'default'} style={{ width: 160 }}>写动态</Button>
                    </Grid>
                    <Grid xs={10} >
                        <div style={{
                            borderLeftWidth: 1,
                            borderLeftColor: "#D7CCC8",
                            borderLeftStyle: "solid",
                            marginLeft: -50,
                            paddingLeft: 50
                        }}>
                            <WriteEssay />
                        </div>
                    </Grid>

                </Grid>
            </div>
        );
    }
}

export default Write;