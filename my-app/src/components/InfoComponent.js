import React,{Component} from 'react';
import InfoForm from "./InfoformComponent";
import DisplayForm from "./DisplayinfoComponent";
import {Col, Row} from "reactstrap";

class Info extends Component
{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='mt-5'>
                <Row>
                    <Col>
                        <InfoForm
                            handleSubmit = {this.props.handleSubmit}
                        />
                    </Col>
                    <Col>
                        <DisplayForm
                            infoList = {this.props.infoList}
                            MasterChecked = {this.props.MasterChecked}
                            onItemCheck = {this.props.onItemCheck}
                            onMasterCheck = {this.props.onMasterCheck}
                            onDeleteSelected = {this.props.onDeleteSelected}
                            onItemDelete = {this.props.onItemDelete}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Info;