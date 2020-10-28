import React from "react";
import {NavLink} from "react-router-dom";
import {host} from "../config";

const Tr = (props)=>{
    return <tr>
        <th scope="row">{props.index}</th>
        <td>{props.name_rus}</td>
        <td>{props.name}</td>
    </tr>
}

export class Branches extends React.Component{
    constructor() {
        super();
        this.state ={
            branches: []
        }
    }
    componentDidMount() {
        fetch(host+"getBranchesJSON")
            .then(response=>response.json())
            .then(branches=>{
                this.setState({
                    branches:branches.map((branch,index)=><Tr key={index} index={index+1} name={branch.name} name_rus={branch.name_rus}/>)
                })

            })
    }

    render() {
        return <div>

            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Название</th>
                    <th scope="col">Адрес</th>
                </tr>
                </thead>
                <tbody>
                {this.state.branches}
                </tbody>
            </table>

            <NavLink className="btn btn-primary" to="addBranch">Добавить раздел сайта</NavLink>
        </div>
    }
}