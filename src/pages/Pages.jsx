import React from "react";
import {NavLink} from "react-router-dom";

export class Pages extends React.Component{
    constructor() {
        super();
    }
    render() {
        return <div>
            <NavLink className="btn btn-primary" to="addPage">Добавить страницу</NavLink>
        </div>
    }
}