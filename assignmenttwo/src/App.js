import React, {Component} from 'react';
import './App.css';
import Validation from './Validation';
import CharComponent from './CharComponent';

class App extends Component {
  state = {
    userInput : ''
  }

  inputChangedHandler = (event) => {
  this.setState({userInput: event.target.value});
  }

  deleteCharacterHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  render (){
    const charList = this.state.userInput.split('').map((ch,index) => {
      return <CharComponent 
      character={ch} 
      key={index} 
      clicked={() => this.deleteCharacterHandler(index)}/>;
       });

  return (
    <div className="App">
      <input type = "text" onChange = {this.inputChangedHandler} 
      value={this.state.userInput}/>
      <p>{this.state.userInput.length}</p>
      <Validation inputLength={this.state.userInput.length}/>
      {charList}
    </div>
  );
}}

export default App;
