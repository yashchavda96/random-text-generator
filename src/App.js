import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import InputFields from './InputFields';
import DisplayArea from './DisplayArea';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  generateText = (data) => {
    console.log("generated text", data);
    this.setState({
      text: data
    });
  };
  onValueChange = (e) => {
    console.log(e);
  };
  render() {
    return (
      <div id="app">
        <NavBar />
        <div className="container">
          <InputFields generateText={this.generateText}/>
          {this.state.text !== "" ? <DisplayArea text={this.state.text} />: "" }
        </div>
		    <div className="container center">
          <span className="black-text">Random text API by </span>
          <a className="github-link" target="_blank" rel="noopener noreferrer" href="https://loripsum.net/">Loripsum.Net</a>
        </div>
      </div>
    );
  }
}

export default App;
