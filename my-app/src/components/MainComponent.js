import React,{Component} from 'react';
import About from "./AboutComponent";
import Header from "./HeaderComponent";
import{ Switch, Redirect, Route, withRouter } from "react-router-dom";

class Main extends Component
{
    constructor(props){
        // console.log("constructor in Main was called");
        super(props);
    }

    render() {
        const HomePage = () =>{
            return (
                <div>
                    <h1>main page</h1>
                </div>
            );
        };

        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/todo' component={HomePage} />
                    <Route exact path='/about' component={() => <About/>} />
                    <Redirect to="/todo" />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Main);