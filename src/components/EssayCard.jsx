import { Avatar, Grid } from '@material-ui/core';
import React, { Component } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import MyAvatar from './common/MyAvatar';

const style = {
    card: {
        borderBottom: '0.1px solid',
        borderColor: "rgb(255, 179, 0,0.2)",
        position: "relative",
        marginTop: 20,
        cursor: "pointer",
        padding: 10,
        borderRadius:10
    },
    title: {
        fontSize: 18,
        margin: 10
    },
    content: {
        fontSize: 14,
        color: "rgba(0,0,0,0.6)"
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
    },
    purple: {
        backgroundColor: deepPurple[500],
    }
}
/* 文章卡片 */
class EssayCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "#000",
            left: 0,
            backgroud: "rgba(0,0,0,0)",
        }
    }

    limitNum = (str) => {
        if (str.length > 80) {
            str = str.substring(0, 80) + "...";
        }
        return str;
    }

    colorChange = () => {
        let { color, left, backgroud } = this.state;
        if (color == "#000") {
            color = "#FF6F00";
            left = 10;
            backgroud = "rgba(0,0,0,0.1)";
        } else {
            color = "#000";
            left = 0
            backgroud = "rgba(0,0,0,0)";
        }
        this.setState({
            color,
            left,
            backgroud
        })
    }

    first = (str) => {
        if(str===undefined){
            return;
        }
        return str.substring(0, 1);
    }

    openEssay = () => {
        let essay = this.props.essay;
        let e_id = essay.e_id+"";
        this.props.history.push({
            pathname:"/details",
            search:"e_id="+e_id,
            state:{e_id:e_id}
        });
    }

    render() {
        let essay = this.props.essay;
        let { color, left, backgroud } = this.state;
        const { classes } = this.props;
        return (
            <div style={{ ...style.card, backgroundColor: backgroud }} 
            onClick = {this.openEssay}
            onMouseOver={this.colorChange} 
            onMouseOut={this.colorChange}>
                <Grid container xs={12}>
                    <MyAvatar name={essay.publisher_name} time={essay.update_time} xs={12} />
                    <Grid item xs={12}>
                        <div style={{ ...style.title, color: color, marginLeft: left }}>{essay.title}</div>
                    </Grid>
                    <Grid item xs={12}>
                        <div style={style.content}>{this.limitNum(essay.content)}</div>
                    </Grid>
                </Grid>

            </div>
        );
    }
}

export default withStyles(style)(EssayCard);