import React from "react";
import ReactDOM from "react-dom";

class Todo extends React.Component {
  state = {
    todo: "",
    messages: []
  };
  handleChange(event) {
    this.setState({
      todo: event.target.value,
      messages: this.state.messages
    });
  }
  Add() {
    if (this.state.todo === "") {
      return;
    }
    this.setState({
      todo: "",
      messages: [...this.state.messages, this.state.todo]
    });
  }

  render() {
    return (
      <div>
        {/* <form onSubmit={this.Add.bind(this)}>*/}
        <input
          type="text"
          value={this.state.todo}
          onChange={this.handleChange.bind(this)}
        />
        <button type="submit" onClick={this.Add.bind(this)}>
          Add Todo
        </button>
        <ul>
          {this.state.messages.map((x, i) => {
            return <li key={i}>{x}</li>;
          })}
        </ul>
        {/*</form>*/}
      </div>
    );
  }
}
ReactDOM.render(<Todo />, document.getElementById("root"));
