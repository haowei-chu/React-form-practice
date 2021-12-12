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
                {/*<Row>*/}
                {/*    <Col className="col-5 col-sm-6">*/}
                <h4 ><b>Description:</b>{props.detail.des}</h4>
                {/*    </Col>*/}
                {/*</Row>*/}
                {/*<Row>*/}
                {/*    <Col md={2}>*/}
                <h4><b>Category:</b><CategoryString cat = {props.detail.cat}/></h4>
                {/*    </Col>*/}
                {/*</Row>*/}
                {/*<Row>*/}
                {/*    <Col md={2}>*/}
                 <h4><b>Content:</b>{props.detail.content}</h4>
                {/*    </Col>*/}
                {/*</Row>*/}
                {/*<Row>*/}
                {/*    <Col md={1}>*/}
                        <NavLink className="btn btn-primary" to='/todo'>
                            <span className="fa fa-lg"></span>back
                        </NavLink>
                {/*    </Col>*/}
                {/*</Row>*/}

            </div>
        )
    }
}

export default InfoDetail;