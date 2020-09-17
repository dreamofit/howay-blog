import React, { Component } from 'react';

const style = {
    card:{

    }
}

class EssayCard extends Component {
    constructor(props){
        super(props);
    }
    render() {
        let essay = this.props.essay;
        return (
            <div style={style.card}>
                {essay.title}
            </div>
        );
    }
}

export default EssayCard;