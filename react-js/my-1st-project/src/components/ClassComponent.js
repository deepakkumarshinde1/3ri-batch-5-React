import React from "react";
import hoc from "./hoc";
class ClassComponent extends React.Component {
  constructor({ params, text, name }) {
    super();
    console.log(text, name);
    this.state = { count: Number(params.id) };
  }
  incCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.incCount}>INC</button>
      </>
    );
  }
}

export default hoc(ClassComponent);
