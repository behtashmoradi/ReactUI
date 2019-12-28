import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Counter extends Component {
  styles = {
    fontSize: 35,
    fontWeight: "bold"
  };
  handleReset;
  render() {
    const { id, counter, onIncrement, onDelete } = this.props;
    console.log(this.props);
    return (
      <div>
        <h4>{id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "bagde  m-2 badge-";
    classes += this.props.counter.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
