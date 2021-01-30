import React, { Component } from 'react';
import { Button, Grid, Input, TextField } from '@material-ui/core';
import HowayEditor from 'howay-editor';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatStrikethroughIcon from '@material-ui/icons/FormatStrikethrough';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatClearIcon from '@material-ui/icons/FormatClear';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const styles = { fontSize: 18 }
const howayEditorStyles = {
    width: "78%",
    height: "100%",
    marginLeft: -30,
    float: "none",
}
const toolBarStyles = {
    background: "#C8E6C9",
    height: "auto",
    width: "99%",
    padding: 10
}

function Icon(E) {
    return <E style={styles} />
}

class WriteEssay extends Component {
    render() {
        const iconBlod = Icon(FormatBoldIcon);
        const iconItalic = Icon(FormatItalicIcon);
        const iconUderline = Icon(FormatUnderlinedIcon);
        const iconStriket = Icon(FormatStrikethroughIcon);
        const iconCenter = Icon(FormatAlignCenterIcon);
        const iconLeft = Icon(FormatAlignLeftIcon);
        const iconRight = Icon(FormatAlignRightIcon);
        const iconFull = Icon(FormatAlignJustifyIcon);
        const iconUndo = Icon(UndoIcon);
        const iconRedo = Icon(RedoIcon);
        const iconDelete = Icon(FormatClearIcon);
        const iconImg = Icon(ArtTrackIcon);
        return (
            <div>
                <Grid item container>
                    <Grid xs={1}>
                        标题：</Grid>
                    <Grid xs={11}>
                        <TextField style={{ marginLeft: -30, width: "78%" }} variant={"outlined"} />
                        <Button
                            variant="contained"
                            color="primary"
                            style={{marginLeft:20,width:120}}
                            startIcon={<CloudUploadIcon />}
                        >发表</Button>
                    </Grid>
                </Grid>
                <div style={{ width: "100%", height: 20 }}></div>
                <Grid item container>
                    <Grid xs={1}>
                        正文：</Grid>
                    <Grid xs={11}>
                        <HowayEditor
                            styles={howayEditorStyles}
                            editorHeight={400}
                            toolBarStyles={toolBarStyles}
                            iconBlod={iconBlod}
                            iconUderline={iconUderline}
                            iconStriket={iconStriket}
                            iconCenter={iconCenter}
                            iconLeft={iconLeft}
                            iconRight={iconRight}
                            iconFull={iconFull}
                            iconUndo={iconUndo}
                            iconRedo={iconRedo}
                            iconDelete={iconDelete}
                            iconImg={iconImg}
                            iconItalic={iconItalic} />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default WriteEssay;