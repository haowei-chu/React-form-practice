import React,{Component} from 'react';
import {useHistory} from "react-router-dom";
import {Col, Row} from "reactstrap";

// import { DataGrid } from '@mui/x-data-grid';

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

const YourComponent = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/about");
    }

    return (
        <div>
            <button onClick={handleClick} type="button" />
        </div>
    );
}

// class DisplayForm extends Component
const DisplayForm = (props)=>
{
    const history = useHistory();

    const handleRoute = (props) =>{
        console.log(props);
        history.push(`/todo/${props}`);
    }

    // console.log(props.infoList);
    return(
        <React.Fragment>
            <Row>
                <Col md={5}>
                    <button
                        className="btn btn-primary btn-sm l"
                        onClick={() => props.onDeleteSelected()}
                    >
                        Delete selected
                    </button>
             </Col>
            </Row>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        checked={props.MasterChecked}
                                        id="mastercheck"
                                        onChange={(e) => props.onMasterCheck(e)}
                                    />
                                </th>
                                <th scope="col">Description</th>
                                <th scope="col">Category</th>
                                <th scope="col">Operate</th>
                            </tr>
                            </thead>
                            <tbody>
                            {props.infoList.map((info) => (
                                <tr key={info.id} className={info.selected ? "selected" : ""}>
                                    <th scope="row">
                                        <input
                                            type="checkbox"
                                            checked={info.selected}
                                            className="form-check-input"
                                            id="rowcheck{info.id}"
                                            onChange={(e) => props.onItemCheck(e, info)}
                                        />
                                    </th>
                                    <td
                                        onClick={(id) => handleRoute(info.id)}
                                    >
                                        {info.des}
                                    </td>
                                    <td
                                        onClick={(id) => handleRoute(info.id)}
                                    >
                                        <CategoryString cat = {info.cat}/>
                                    </td>
                                    <td
                                        onClick={() => props.onItemDelete(info.id)}
                                    >
                                        Delete
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default DisplayForm;
