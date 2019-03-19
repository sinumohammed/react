import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1
  };

  handleIncrement = product => {
    // In angualr - all browsers events are monkey patch
    this.setState({ count: this.state.count + 1 });
    // argument from event
    console.log(product);
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 5 })}
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
