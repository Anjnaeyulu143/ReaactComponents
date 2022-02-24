import React, { Component } from "react";
import "./ClassComponent.css";

class ClassComponent extends Component {
  state = { number: 0 };

  increment = () => {
    this.setState((prevState) => ({ number: prevState.number + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({ number: prevState.number - 1 }));
  };

  render() {
    const { number } = this.state;
    return (
      <div className="classcomponent">
        <h1 className="classcomponent__title">
          This green color heading is created by using{" "}
          <strong>Class Component</strong>
        </h1>

        <div
          style={{
            width: "20em",
            height: "20em",
            margin: "0 auto",
            backgroundColor: "blue",
          }}
        >
          <p style={{ textAlign: "center", fontSize: "2rem", color: "white" }}>
            {number}
          </p>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrements</button>
        </div>
      </div>
    );
  }
}

export default ClassComponent;
