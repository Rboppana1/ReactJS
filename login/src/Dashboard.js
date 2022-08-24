import React ,{Component}from "react";
import {BrowserRouter as Router,Route,NavLink,Prompt} from 'react-router-dom';
import Contents from "./Contents";
import Piechart from "./Piechart";
import Barchart from "./Barchart";
import "./App.css";
import auth from "./auth";

class Dashboard extends Component {
  state = {
    loggedIn:true
  }
  loginHandle=() => {
    this.setState({loggedIn:false})
  }
    render(){
    return (
       <Router>
      <div className="App">
      <h1>STROS DASHBOARD</h1>
      <ul>
      <li><NavLink to="/page1" exact activeStyle= {{color : 'blue'}}>Overview</NavLink></li>
      <li><NavLink to="/details" exact activeStyle ={{color: 'blue'}}>Details</NavLink></li>
      <li><NavLink to="/piechart" exact activeStyle={{color: 'blue'}}>Piechart</NavLink></li>
      <li><NavLink to="/barchart" exact activeStyle={{color: 'blue'}}>Barchart</NavLink></li>
      </ul>
      <Prompt when={this.state.loggedIn} message = {(location)=>{return location.pathname.startsWith('/page1')? "Do you want to go back to overview?" : true}}/>
      <Route exact strict path="/Piechart" component = {Piechart}></Route>
      <Route exact strict path="/barchart" component = {Barchart}></Route>
      <Route exact strict path="/details" component ={Contents}></Route>
      <button
        onClick={() => {
          auth.logout(() => {
            this.props.history.push("/");
          });
        }}
      >
        Logout
      </button>
      </div></Router>
    );
  }}
  
  export default Dashboard;
  