import React from "react";
import {NavLink} from "react-router-dom";

const Tr = (props)=>{
    return <tr>
        <th scope="row">{props.index}</th>
        <td>{props.title}</td>
        <td>{props.name}</td>
        <td><NavLink to={"editPage/"+props.pageId}>[Редактировать]</NavLink></td>
    </tr>
}

export class Pages extends React.Component{
    constructor() {
        super();
        this.state = {
            pages: []
        }
    }

    componentDidMount() {
        fetch("http://1.kuzya19l.beget.tech/getPagesJSON")
            .then(response=>response.json())
            .then(pages=>{
                this.setState({
                    pages: pages.map((page,index)=>{
                        return <Tr key={index} pageId={page.id} index={index+1} name={page.name} title={page.title} />
                    })
                })
            })
    }

    render() {
        return <div>

            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Заголовок</th>
                    <th scope="col">Адрес</th>
                    <th scope="col">Управление</th>
                </tr>
                </thead>
                <tbody>
                {this.state.pages}
                </tbody>
            </table>

            <NavLink className="btn btn-primary" to="addPage">Добавить страницу</NavLink>
        </div>
    }
}