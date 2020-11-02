import React from "react";
import {cmsPath, host} from "../config";
import {Redirect} from "react-router-dom";

const Option = (props)=>{
    return <option value={props.id}>{props.name_rus}</option>
}

export class AddBranch extends React.Component{
    constructor() {
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            referrer: null,
            name: "",
            name_rus: "",
            options: [],
            branch: 1
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
            console.log("Ветка добавлена")
            let formData = new FormData();
            formData.append('name',this.state.name);
            formData.append('title',this.state.name_rus);
            formData.append('html', `<h1>${this.state.name_rus}<h1/>`);
            formData.append('css',"");
            formData.append('js',"");
            formData.append('branch', this.state.branch);
            fetch(host+"addPage",{
                method: 'POST',
                body:formData

            }).then(response=>response.json())
                .then(res=>{
                    console.log("Страница раздела успешно создана");
                    this.setState({
                            referrer:"/branches/",
                        }
                    )
                })
        });
    }

    handleInputChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        console.log(name, value)
        this.setState({
            [name]: value
        });
    }

    componentDidMount() {
        fetch(host+"getBranchesJSON")
            .then(response=>response.json())
            .then(branches=>{
                this.setState({
                    options:branches.map((branch,index)=><Option key={index} id={branch.id} name_rus={branch.name_rus}/>)
                })
            })
    }

    render() {
        const referrer = this.state.referrer;
        if (referrer) return <Redirect to={cmsPath+referrer}/>
        return <div>
            <h2 className="my-2 text-center">Добавление раздела сайта</h2>
            <div className="mb-3">
                <input name="name" value={this.state.name} onChange={this.handleInputChange} type="text" className="form-control" placeholder="Name"/>
            </div>
            <div className="mb-3">
                <input name="name_rus" value={this.state.name_rus} onChange={this.handleInputChange} type="text" className="form-control" placeholder="Name_RUS"/>
                </div>
            <div className="mb-3">
                <select  name="branch" onChange={this.handleInputChange} className="form-control">
                    {this.state.options}

                </select>
            </div>
            <div className="mb-3">
                <button className="btn btn-primary" onClick={this.handleSave}>Добавить</button>
            </div>
        </div>
    }
}