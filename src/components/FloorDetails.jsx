import React, { Component } from 'react';
import MyAvatar from './common/MyAvatar';

class FloorDetails extends Component {
    render() {
        const {floor} = this.props;
        return (
            <div style={{marginLeft:80,marginTop:20}}>
                <MyAvatar name={floor.publisher_name} time={floor.update_time} xs={6} />
                <div>{floor.content}</div>
            </div>
        );
    }
}

export default FloorDetails;