import React, { Component } from 'react';
import MyAvatar from './common/MyAvatar';
import ReplyButton from './common/ReplyButton';

class LayerDetails extends Component {

    render() {
        const { layer,f_id } = this.props;
        return (
            <div style={{ marginLeft: 40, marginTop: 20 }}>
                <MyAvatar
                    name={layer.publisher_name}
                    time={layer.update_time}
                    xs={6}
                    level={layer.level}
                    rank={"layer"} />
                <div>{layer.replied_lid === -1 ? layer.content : " 回复 " + layer.responder_name + ": " + layer.content}</div>
                <ReplyButton xs={5} f_id={f_id} responder={layer.publisher} replied_lid={layer.l_id}
                rank={"LAYER"} level={this.props.getMaxLevel()+1}  {...this.props} />
            </div>
        );

    }
}

class FloorDetails extends Component {

    getMaxLevel = () => {
        const { floor } = this.props;
        let max = 0;
        if (floor.layer === undefined) {
            return;
        } else {
            for (let i = 0; i < floor.layer.length; i++) {
                if (max < floor.layer[i].level) {
                    max = floor.layer[i].level;
                }
            }
            return max;
        }
    }

    render() {
        const { floor } = this.props;
        return (
            <div style={{ marginLeft: 80, marginTop: 20 }}>
                <MyAvatar
                    name={floor.publisher_name}
                    time={floor.update_time}
                    xs={6}
                    level={floor.level}
                    rank={"floor"} />
                <div>{floor.content}</div>
                <ReplyButton xs={5} f_id={floor.f_id} responder={floor.publisher}
                rank={"FLOOR"} level={this.getMaxLevel()+1}  {...this.props} />

                {floor.layer.map(layer => {
                    return <LayerDetails f_id={floor.f_id} getMaxLevel={this.getMaxLevel} layer={layer} {...this.props}  />
                })}
            </div>
        );
    }
}

export default FloorDetails;