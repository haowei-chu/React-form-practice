import React, {Component, useState} from 'react';
import {Label, Row, Col, Button} from "reactstrap";

function InfoForm (props)
{
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleFormSubmit = (values) =>
    {
        values.preventDefault();
        // console.log(inputs);
        props.handleSubmit(inputs.description,parseInt(inputs.category),inputs.content);
    }

    return(
        <React.Fragment>
            <div
                // className="col-10 col-md-5"
            >
            <form onSubmit={handleFormSubmit}>
                <Row className="form-group">
                    <Label htmlFor="description" md={5}>
                        Description:
                    </Label>
                    <Col md={2}>
                        <input
                            model=".description"
                            id="description"
                            name="description"
                            // placeholder="description"
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Label htmlFor="category" md={5}>
                        Category:
                    </Label>
                    <Col md={2}>
                        <select
                            model=".category"
                            id="category"
                            name="category"
                            // value="1"
                            onChange={handleChange}
                        >
                            <option value=''></option>
                            <option value="1" >html</option>
                            <option value="2" >css</option>
                            <option value="3">js</option>

                        </select>
                    </Col>
                </Row>
                <Row className="form-group">
                    <Label htmlFor="content" md={5}>
                        Content:
                    </Label>
                    <Col md={2}>
                        <textarea
                            model=".content"
                            id="content"
                            name="content"
                            rows="2"
                            cols="25"
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Col md={5}>
                        {
                            (inputs.description && inputs.category)? (
                            <Button
                                type="submit"
                                color="primary"
                                // color={ ()=> (inputs.description == "")?"secondary":"primary"}
                            >
                                Submit
                            </Button>
                            ):(
                                <Button
                                    type="submit"
                                    color="light"
                                    // color={ ()=> (inputs.description == "")?"secondary":"primary"}
                                >
                                    Submit
                                </Button>
                            )
                        }
                    </Col>
                </Row>
            </form>
            </div>
        </React.Fragment>
    );

}

export default InfoForm;