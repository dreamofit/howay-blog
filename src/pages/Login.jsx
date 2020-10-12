import { Avatar, Box, Button, Checkbox, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography, withStyles, makeStyles } from '@material-ui/core';
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import md5 from 'md5';
const styles = {
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 80
    },
    form: {
        width: '100%',
        marginTop: 20
    },
    submit: {
        marginTop: 20,
        marginBottom: 20,
    }
}

@inject("baseStore")
@observer
class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            password:""
        }
    }

    nameChange=(e)=>{
        this.setState({name:e.target.value})
    }

    passwordChange=(e)=>{
        this.setState({password:md5(e.target.value)})
    }

    login = ()=>{
        this.props.baseStore.login(this.state.name,this.state.password);
    }
        

    render() {
        const { classes } = this.props;
        const {name,password} = this.state;
        const baseStore = this.props.baseStore;
        const {userName,userId,status} = this.props.baseStore;
        let helperText = "";
        let error = false;
        if(userId===-10){
            error = true;
            helperText="密码或用户名错误！";
        }else if(userId===-100){
            error = true;
            helperText="网络错误或服务器出现问题，请稍后再试！";
        }else if(userId>0){
            let path = this.props.location.state;
            this.props.history.push(path);
        }
        return (
            <div>
                
                <Grid container component="main" className={classes.root}>
                    <Grid item xs={false} sm={4} md={7} className={classes.image} />
                    <Grid item xs={12} sm={8} md={5} elevation={6} >
                        <div className={classes.paper}>
                            <Typography component="h1" variant="h5">登录</Typography>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                defaultValue={null}
                                value={name}
                                placeholder="用户名"
                                autoFocus
                                id="howay-name"
                                onChange={this.nameChange}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                defaultValue={null}
                                required
                                fullWidth
                                error={error}
                                helperText={helperText}
                                placeholder="密码"
                                type="password"
                                id="howay-password"
                                onChange={this.passwordChange}
                            />
                            <Button
                                onClick={this.login}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >登录</Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">忘记密码？</Link>
                                </Grid>
                                <Grid item>
                                    <Link onClick={()=>{this.props.history.push("/register")}} href="" variant="body2">{"没有账号？去注册"}</Link>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Login);