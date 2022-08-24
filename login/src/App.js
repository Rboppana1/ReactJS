import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router,Route,hasHistory,Switch,Link} from 'react-router-dom';
import ValidatedLoginForm from "./ValidatedLoginForm";
import Dashboard from './Dashboard';

import "./App.css";

class App extends Component {
  render(){
  return (
    <div className="App">
    <Router>
      <switch>
      <Route exact strict path ="/" component = {ValidatedLoginForm}/>
      <Route exact strict path ="/page1" component = {Dashboard}/> 
   </switch>
    </Router></div>
  );
}}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;