import React,{Component} from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch,Link,NavLink,Redirect,Prompt} from 'react-router-dom';
import Second from './second';

const User = (params) => {
  return (<h1>USER {params.username}</h1>)
}

class App extends Component {
  state = {
    loggedIn:false
  }
  loginHandle=() => {
    this.setState(prevState =>({
   loggedIn: !prevState.loggedIn
    }))
  }
  render(){
  return (
    <Router>
    <div className="App">
    <li><NavLink to="/" exact activeStyle={{color: 'green'}}>Home</NavLink></li>
    <li><NavLink to="/about/" exact activeStyle={{color: 'green'}}>About</NavLink></li>
    <li><NavLink to="/second" exact activeStyle={{color: 'green'}}>Second</NavLink></li>
    <li><NavLink to="/user/Raji" exact activeStyle={{color: 'green'}}>User Raji</NavLink></li>
   <Prompt when={!this.state.loggedIn} message={(location)=>{return location.pathname.startsWith('/user')? 'Are you sure?' : true}}/>
    <input type="button" value={this.state.loggedIn ? 'log out' : 'log in'} onClick={this.loginHandle.bind(this)}></input>
    <Route exact strict path="/" render={ ()=> {return(<h1>FIRST PAGE</h1>)}}></Route>
    <Route exact strict path="/about/" render={ ()=> {return(<h1>ABOUT PATH</h1>)}}></Route>  
    <Route exact strict path="/user/:username" render={({match}) => (this.state.loggedIn? (<User username={match.params.username}/>) : (<Redirect to='/'/>))}></Route>
    <Route exact strict path="/second" component={Second}></Route>
    </div>
    </Router>
  );
}}

export default App;
