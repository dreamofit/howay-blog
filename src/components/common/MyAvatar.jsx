import React, { Component } from 'react';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { Avatar, withStyles,Grid } from '@material-ui/core';

const style = {
    purple: {
        backgroundColor: deepPurple[500],
    },
    time: {
        fontSize: 10,
        fontWeight: 100,
        color: '#82B1FF',
        marginTop: 4
    },
    name: {
        fontSize: 14,
        fontWeight: 400,
        color: '#FF80AB'
    }
}

@withStyles(style)
class MyAvatar extends Component {

    first = (str) => {
        console.log("str:" + str)
        if (str === undefined) {
            return;
        }
        return str.substring(0, 1);
    }

    render() {
        const { name, time, classes,xs } = this.props;
        return (
            <Grid container xs={xs}>
                <Grid item xs={1}>
                    <div><Avatar className={classes.purple}>{this.first(name)}</Avatar></div>
                </Grid>

                <Grid item xs={10}>
                    <Grid item xs={12}>
                        <div style={style.name}>{name}</div>
                    </Grid>
                    <Grid item xs={12}>
                        <div style={style.time}>{time}</div>
                    </Grid>

                </Grid>
            </Grid>
        );
    }
}

export default MyAvatar;