import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1
  };
  //   constructor() {
  //     // experimental but noisy
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  // convert to arrow function to get the context
  handleIncrement = () => {
    console.log("Increment clicked", this);
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 btn-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
