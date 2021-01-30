import { Avatar, Button, Grid, withStyles, } from '@material-ui/core';
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import FloorDetails from './FloorDetails';
import MyAvatar from './common/MyAvatar';
import ReplyButton from './common/ReplyButton';
import Header from './Header';

const style = {
    purple: {
        backgroundColor: deepPurple[500],
    }
}

@withStyles(style)
@inject("baseStore")
@observer
class EssayDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            essay: {}
        }
    }

    getEssayDetails = () => {
        let e_id = this.props.location.state.e_id;
        let essay = this.state.essay;
        const res = this.props.baseStore.getEssayDetails(e_id);
        res.then((r) => {
            if (r.RE_CODE === 0) {
                this.setState({ essay: r });
                console.log(r)
            }
        })
    }

    componentDidMount = () => {
        this.getEssayDetails();
    }

    first = (str) => {
        console.log("str:" + str)
        if (str === undefined) {
            return;
        }
        return str.substring(0, 1);
    }

    getMaxLevel = () => {
        const { essay } = this.state;
        let max = 0;
        if (essay.floor === undefined) {
            return;
        } else {
            for (let i = 0; i < essay.floor.length; i++) {
                if (max < essay.floor[i].level) {
                    max = essay.floor[i].level;
                }
            }
            return max;
        }
    }

    render() {
        const { essay } = this.state;
        const { classes } = this.props;
        return (
            <div>
                <Header {...this.props} />
                <div style={{ position: "relative", top: 70 }}>
                    <Grid container >
                        <Grid xs={1}></Grid>
                        <Grid xs={9}>
                            <div style={{fontSize:20,fontWeight:800}}>{"[" + essay.label + "] " + essay.title}</div>
                            <div style={{ marginLeft: 10,marginTop:10 }}>
                                <MyAvatar name={essay.publisher_name} time={essay.update_time} xs={9} />
                            </div>
                            <div style={{marginLeft:20,marginTop:10}}>{essay.content}</div>
                            <ReplyButton getEssayDetails={this.getEssayDetails} xs={11}
                                rank="ESSAY" level={this.getMaxLevel() + 1} e_id={essay.e_id} {...this.props} />
                            <span style={{cursor:"pointer",fontSize:10}}>按最热排序</span>
                            <span style={{cursor:"pointer",marginLeft:20,fontSize:10}}>按最新排序</span>
                            <span style={{cursor:"pointer",marginLeft:100,fontSize:10}}>倒序</span>
                            {
                                essay.floor === undefined ? null : essay.floor.map((floor) => {
                                    return <FloorDetails floor={floor} getEssayDetails={this.getEssayDetails} />
                                })
                            }
                        </Grid>
                        <Grid xs={2}></Grid>
                    </Grid>


                </div>


            </div>
        );
    }
}

export default EssayDetails;