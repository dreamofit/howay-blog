import React, { Component } from 'react';

class Test extends Component {

    upload = (file) => {
        let formData = new FormData()
        formData.append('file', file)
        fetch("http://localhost:8081/img/upload", {
            body: formData,
            method: "POST",
        }).then(res => {
            res.json().then(r=>{
                console.log(r)
            })
        }).catch((e) => {
            console.log(e)
         });
    }

    change=(e)=>{
        console.log(e.target.files[0]);
        let file = e.target.files[0];
        this.upload(file);
    }

    render() {
        return (
            <div>
                <input onChange={this.change}
                id='file' type='file' accept="image/*"  onChange={this.change} />
            </div>
        );
    }
}

export default Test;