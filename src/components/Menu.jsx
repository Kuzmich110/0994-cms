import React from 'react';
import {NavLink} from "react-router-dom";

export const Menu = ()=>{
    return <div className="col-3">
        <div className="nav flex-column nav-pills" aria-orientation="vertical">
            <NavLink className="nav-link" exact to="/">CMS</NavLink>
            <NavLink className="nav-link" to="/pages/">Страницы сайта</NavLink>
        </div>
    </div>
}