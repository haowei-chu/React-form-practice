import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import Main from "./components/MainComponent";
import BrowserRouter from "react-router-dom/BrowserRouter";

class App extends Component
{
  render(){
    return (
        <React.Fragment>
            <BrowserRouter>
                <div className="App">
                    <Main />
                </div>
            </BrowserRouter>
        </React.Fragment>
    );
  }
}

export default App;
