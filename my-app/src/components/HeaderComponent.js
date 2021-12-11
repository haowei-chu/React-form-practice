import React,{Component} from 'react';
import {Nav, Navbar, NavItem} from "reactstrap";
import {BrowserRouter,NavLink} from "react-router-dom";

class Header extends Component
{
    constructor(props) {
        super(props);
    }

    render()
    {
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <Nav navbar className="mr-auto">
                            <NavItem>
                                <NavLink className="nav-link" to="/todo">
                                    <span className="fa fa-lg"></span> todo
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/about'>
                                    <span className="fa fa-lg"></span> about
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header;