import React from "react";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "Key",
      value: "Value"
    };
  }
  handleKeyChange = event => {
    this.setState({ key: event.target.value });
  };
  handleValueChange = event => {
    this.setState({ value: event.target.value });
  };
  handleSubmit = event => {
    localStorage.setItem(this.state.key, this.state.value);
    this.setState({ key: "Key", value: "Value" });
    event.preventDefault();
  };
  renderStorage = () => {
    return Object.keys(localStorage).map((key, index) => (
      <div key={index}>
        {key}
        <button onClick={() => this.removeSpecificKey(key)}>Delete</button>
        <button onClick={() => this.getInfo(key)}>Get info</button>
      </div>
    ));
  };
  clearStorage = () => {
    localStorage.clear();
    this.forceUpdate();
  };
  removeSpecificKey = key => {
    localStorage.removeItem(key);
    this.forceUpdate();
  };
  getInfo = key => {
    alert(`Key: ${key} Value: ${localStorage.getItem(key)}`);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input value={this.state.key} onChange={this.handleKeyChange} />
            <input value={this.state.value} onChange={this.handleValueChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <button onClick={() => this.clearStorage()}>Clear local storage</button>
        {this.renderStorage()}
      </div>
    );
  }
}

export default App;
