import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  handleIncrement = product => {
    // In angualr - all browsers events are monkey patch
    this.setState({ value: this.state.value + 1 });
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
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
