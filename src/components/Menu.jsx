import React from 'react';
import {NavLink} from "react-router-dom";
import {cmsPath} from "../config";

export const Menu = ()=>{
    return <div className="col-3">
        <div className="nav flex-column nav-pills" aria-orientation="vertical">
            <NavLink className="nav-link" exact to={cmsPath+"/"}><i className="fas fa-home"></i> CMS</NavLink>
            <NavLink className="nav-link" to={cmsPath+"/pages/"}><i className="fas fa-paste"></i> Страницы сайта</NavLink>
            <NavLink className="nav-link" to={cmsPath+"/branches/"}><i className="fas fa-sitemap"></i> Разделы сайта</NavLink>
        </div>
    </div>
}