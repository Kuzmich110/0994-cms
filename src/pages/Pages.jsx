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
        fetch("http://dip.kuzya19l.beget.tech/getPagesJSON")
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
            <h2 className="my-2 text-center">Список страниц сайта</h2>
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th scope="col" class="text-center">ID</th>
                    <th scope="col" class="text-center">Заголовок</th>
                    <th scope="col" class="text-center">Адрес</th>
                    <th scope="col" class="text-center">Управление</th>
                </tr>
                </thead>
                <tbody>
                {this.state.pages}
                </tbody>
            </table>

            <NavLink className="btn btn-primary" to="addPage"><i className="fas fa-plus-square"></i> Добавить страницу</NavLink>
        </div>
    }
}