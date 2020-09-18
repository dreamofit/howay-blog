import React, { Component } from 'react';
import { Grid, Typography, Button, Avatar } from '@material-ui/core';
import {baseStore} from '../mobx';
import { inject, observer } from 'mobx-react'

const store = baseStore;
const style = {
    main: {
        width: "100%",
        background: "#01579B",
        position: "fixed",
        top: 0,
        zIndex: 999,
        color: "#E8F5E9",
        height: 60,
        lineHeight: 3,
        fontWeight:500
    },
    label: {
        margin: 10,
        float:"left",
        position:"relative",
        marginRight:40
    },
    avatar:{
        margin:10,
        cursor:"pointer"
    }
}

@inject('baseStore')
@observer
class Header extends Component {
    
    constructor(props){
        super(props);
    }

    openLogin=()=>{
        //store.change();
        window.open("http://localhost:3000/login");
    }

    linkTo=(url)=>{
        if(url=='home'){
            window.location.href = "http://localhost:3000/"
        }else{
            window.location.href = "http://localhost:3000/blogs"
        }
    }

    render() {
        let status = store.status;
        return (
            <div style={style.main}>
                <Grid container >
                    <Grid item xs={11}>
                        <div style={style.label}>
                            <Typography variant="h6" >howay-blog</Typography>
                        </div>
                            <Button onClick={this.linkTo.bind(this,"home")} color="inherit">首页</Button>
                            <Button onClick={this.linkTo.bind(this,"blogs")} color="inherit">圈子</Button>

                    </Grid>
                    <Grid item xs={1}>
                        {
                            status===false?<Button onClick={this.openLogin} color="inherit">Login</Button>:
                            <div onClick style={style.avatar}><Avatar>H</Avatar></div>
                        }
                        
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Header;