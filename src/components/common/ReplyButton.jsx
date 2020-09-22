import { Button, Grid, Popover, TextField, Box, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { inject, observer } from 'mobx-react';
import { getCookie } from '../../utils/GetCookieToMap';

@inject("baseStore")
@observer
class ReplyButton extends Component {
    
    constructor(props){
        super(props);
        this.state={
            content:""
        }
    }

    write = () => {
        const {rank,baseStore,level,essay_id,getEssayDetails,f_id,responder,replied_lid} = this.props;
        const {content} = this.state;
        console.log(content);
        let u_id = getCookie("cl_id");
        if(u_id===undefined){
            return;
        }else{
            if(rank==="ESSAY"||rank==="essay"){
                const res = baseStore.handleWriteFloor(essay_id,content,u_id,level);
                res.then(r=>{
                    if(r.RE_CODE===0){
                        getEssayDetails();
                    }
                })
            }else if(rank==="FLOOR"||rank==="floor"){
                const res = baseStore.handleWriteLayer(f_id,content,u_id,responder,level,-1);
                res.then(r=>{
                    if(r.RE_CODE===0){
                        getEssayDetails();
                    }
                })
    
            }else if(rank==="LAYER"||rank==="layer"){
                const res = baseStore.handleWriteLayer(f_id,content,u_id,responder,level,replied_lid);
                res.then(r=>{
                    if(r.RE_CODE===0){
                        getEssayDetails();
                    }
                })
            }else{
    
            }
            
        }
        
    }

    contentChange =　(e) => {
        this.setState({
            content:e.target.value
        })
    }

    render() {
        const {content} = this.state;
        const {xs} = this.props;
        return (
            <Grid container>
                <Grid item xs={xs}></Grid>
                <Grid item xs={1}>
                    {
                        <PopupState variant="popover" popupId="demo-popup-popover">
                            {
                                (popupState) => (
                                    <div>
                                        <Button color="primary" {...bindTrigger(popupState)}>回复</Button>
                                        <Popover
                                            {...bindPopover(popupState)}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'center',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'center',
                                            }}
                                        >
                                            <Box p={2}>
                                                <Typography>回帖</Typography>
                                                <TextField
                                                    variant="outlined"
                                                    multiline
                                                    value={content}
                                                    onChange={this.contentChange}
                                                    placeholder="请文明发言" />
                                                <Grid container xs={12}>
                                                    <Grid item xs={8}></Grid>
                                                    <Grid item xs={2}>
                                                        <Button color="secondary" 
                                                        onClickCapture={()=>{
                                                            popupState.setOpen(false);
                                                            this.setState({content:""});
                                                        }}
                                                        onClick={this.write}>ok</Button>
                                                    </Grid>
                                                </Grid>

                                            </Box>
                                        </Popover>
                                    </div>
                                )
                            }
                        </PopupState>
                    }

                </Grid>
            </Grid>
        );
    }
}

export default ReplyButton;