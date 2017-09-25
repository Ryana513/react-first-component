import React, { Component } from "react";

class App extends Component {
  state = {
    count: this.props.count
  };

  handleIncrement = props => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleDecrement} type="button">
          -
        </button>
        <button onClick={this.handleIncrement} type="button">
          +
        </button>
      </div>
    );
  }
}

export default App;
