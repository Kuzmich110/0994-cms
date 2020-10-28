import React from "react";
import {host} from "../config";
import {Redirect} from "react-router-dom";

export class AddBranch extends React.Component{
    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            referrer: null,
            name: "",
            name_rus: ""
        }
    }
    handleSave(){
        let formData = new FormData();
        formData.append('name',this.state.name);
        formData.append('name_rus',this.state.name_rus);
        fetch(host+"addBranch",{
            method: "POST",
            body: formData
        }).then(response=>response.json()).then(res=>{
            this.setState({
                referrer:"/branches/"}
            )
        });
    }

    handleInputChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    }

    render() {
        const referrer = this.state.referrer;
        if (referrer) return <Redirect to={referrer}/>
        return <div>
            <h2 className="my-2 text-center">Добавление раздела сайта</h2>
            <div className="mb-3">
                <input name="name" value={this.state.name} onChange={this.handleInputChange} type="text" className="form-control" placeholder="Name"/>
            </div>
            <div className="mb-3">
                <input name="name_rus" value={this.state.name_rus} onChange={this.handleInputChange} type="text" className="form-control" placeholder="Name_RUS"/>
                </div>
            <div className="mb-3">
                <button className="btn btn-primary" onClick={this.handleSave}>Добавить</button>
            </div>
        </div>
    }
}