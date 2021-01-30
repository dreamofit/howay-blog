import React, { Component } from 'react';
import { Grid, Typography, Button, Avatar } from '@material-ui/core';
import { inject, observer } from 'mobx-react';
import { getCookie } from '../utils/GetCookieToMap';

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

@inject("baseStore")
@observer
class Header extends Component {
    
    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount=()=>{
        const {changeStatus} = this.props.baseStore;
        let u_id = getCookie("cl_id");
        if(u_id===undefined){
            return;
        }else{
            changeStatus();
        }
    }

    openLogin=()=>{
        let urlPath = this.props.location.pathname;
        this.props.history.push({
            pathname:"/login",
            state:urlPath
        });
    }

    linkTo=(url)=>{
        this.props.history.push(url);
    }

    first = (str) => {
        if(str===undefined){
            return;
        }
        return str.substring(0, 1);
    }

    render() {
        const {status,userName} = this.props.baseStore;
        return (
            <div style={style.main}>
                <Grid container >
                    <Grid item xs={11}>
                        <div style={style.label}>
                            <Typography variant="h6" >howay-blog</Typography>
                        </div>
                            <Button onClick={this.linkTo.bind(this,"/")} color="inherit">首页</Button>
                            <Button onClick={this.linkTo.bind(this,"/blogs")} color="inherit">圈子</Button>
                            <Button onClick={this.linkTo.bind(this,"/write")} color="inherit">创作中心</Button>
                    </Grid>
                    <Grid item xs={1}>
                        {
                            status===false?<Button onClick={this.openLogin} color="inherit">Login</Button>:
                            <div onClick style={style.avatar}><Avatar>{this.first(userName)}</Avatar></div>
                        }
                        
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Header;