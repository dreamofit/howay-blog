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
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: "",
            password1:"",
            helperText:"",
            error:false,
            helperText1:"",
            error1:"",
            email:"",
            homePage:""
        }
    }

    nameChange = (e) => {
        this.setState({ 
            name: e.target.value,
            error1:false,
            helperText1:""
        })
    }

    passwordChange = (e) => {
        const {password1} = this.state;
        if(e.target.value===password1){
            this.setState({ 
                password: e.target.value,
                helperText:"",
                error:false
            });
        }else{
            this.setState({ 
                password: e.target.value
            });
        }
        
    }

    emailChange =(e)=>{
        this.setState({
            email:e.target.value
        })
    }

    homePageChange =(e)=>{
        this.setState({
            homePage:e.target.value
        })
    }

    register = () => {
        const {name,password,password1,email,homePage } = this.state;
        if(name!==""){
            if(password===password1){
                let res = this.props.baseStore.register(name,md5(password),email,homePage);
                res.then(r=>{
                    if(r!==undefined){
                        if(r.RE_CODE===0){
                            this.props.history.goBack();
                        }else{

                        }
                    }else{

                    }
                })
            }else{
                this.setState({
                    helperText:"前后两次密码不一致",
                    error:true
                })
            }
        }else{
            this.setState({
                error1:true,
                helperText1:"用户名必填"
            })
        }
        
    }

    passwordIsRight=(e)=>{
        const {password} = this.state;
        if(e.target.value!==password){
            this.setState({
                helperText:"前后两次密码不一致",
                error:true,
                password1:e.target.value
            })
        }else{
            this.setState({
                helperText:"",
                error:false,
                password1:e.target.value
            })
        }
    }


    render() {
        const { classes } = this.props;
        const { name, password,helperText,error,email,homePage,error1,helperText1 } = this.state;

        return (
            <div>
                <Grid container component="main" className={classes.root}>
                    <Grid item xs={false} sm={4} md={7} className={classes.image} />
                    <Grid item xs={12} sm={8} md={5} elevation={6} >
                        <div className={classes.paper}>
                            <Typography component="h1" variant="h5">注册</Typography>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                error={error1}
                                helperText={helperText1}
                                value={name}
                                placeholder="用户名*"
                                autoFocus
                                id="howay-name"
                                onChange={this.nameChange}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                value={password}
                                placeholder="密码*"
                                type="password"
                                id="howay-password"
                                onChange={this.passwordChange}
                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                error={error}
                                helperText={helperText}
                                placeholder="确认密码*"
                                type="password"
                                id="howay-password-2"
                                onChange={this.passwordIsRight}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                type="email"
                                value={email}
                                placeholder="邮箱"
                                autoFocus
                                id="howay-name"
                                onChange={this.emailChange}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                value={homePage}
                                placeholder="你的主页"
                                autoFocus
                                type="text"
                                id="howay-name"
                                onChange={this.homePageChange}
                            />
                            <Button
                                onClick={this.register}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >注册</Button>
                            
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Register);