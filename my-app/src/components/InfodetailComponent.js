import React, {Component} from 'react';
import {Col, NavItem, Row} from "reactstrap";
import {NavLink} from "react-router-dom";
function CategoryString (props){
    let ret = "";
    switch (props.cat)
    {
        case 1:
            ret = "html";
            break;
        case 2:
            ret = "css"
            break;
        case 3:
            ret = "js"
            break;
    }
    return ret;
}


const InfoDetail = (props) =>
{
    // console.log (props.detail);

    if (!props.detail) {
        return (
            <div>
                <h1>Item not exist</h1>
                <NavLink className="btn btn-primary" to='/todo'>
                    <span className="fa fa-lg"></span>back
                </NavLink>
            </div>
        )
    }
    else
    {
        return (
            <div>
                <h4 ><b>Description:</b>{props.detail.des}</h4>
                <h4><b>Category:</b><CategoryString cat = {props.detail.cat}/></h4>
                <h4><b>Content:</b>{props.detail.content}</h4>
                <NavLink className="btn btn-primary" to='/todo'>
                    <span className="fa fa-lg"></span>back
                </NavLink>
            </div>
        )
    }
}

export default InfoDetail;