import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class InputFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paras: 1,
      textLength: "short",
      textType: "plaintext",
      options:[]
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://loripsum.net/api/${this.state.paras}/${this.state.textLength}/${this.state.textType}`,)
    .then( (res) => {
      this.props.generateText(res.data);
    })
    .catch( (error) => {
      console.log(error);
    });
  };
  onValueChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log(this.state));
  };
  render() {
    return (
      <form action="#">
        <div className="card-panel">
          <div className="row" style={{marginBottom: "-20px"}}>
            <div className="input-field col s12 m2 l2">
              <input id="paras" type="number" name="paras" className="validate" placeholder="No of paragraphs" value={this.state.paras} onChange={this.onValueChange} />
              <label htmlFor="paras">No of paragraphs</label>
            </div>
            <div className="input-field col s12 m4 l4">
              <select id="textLength" name="textLength" value={this.state.textLength} onChange={this.onValueChange} >
                <option value="short">Short</option>
                <option value="medium">Medium</option>
                <option value="long">Long</option>
                <option value="verylong">Very Long</option>
              </select>
              <label>Text length</label>
            </div>
            <div className="input-field col s12 m4 l4">
              <select id="textType" name="textType"  value={this.state.textType} onChange={this.onValueChange} >
                <option value="plaintext">Plain text</option>
                <option value="">HTML</option>
              </select>
              <label>Text type</label>
            </div>
            <div className="input-field col s12 m2 l2">
            <a className="waves-effect waves-light btn yellow darken-2" rel="noopener noreferrer"  onClick={this.handleSubmit}><i className="material-icons right">play_arrow</i>Go</a>
            </div>
          </div>
        </div>
      </form>
    );
  }
  
}

export default InputFields;
