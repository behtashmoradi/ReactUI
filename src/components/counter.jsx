import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Counter extends Component {
  styles = {
    fontSize: 35,
    fontWeight: "bold"
  };
  componentDidUpdate(prevProps, prevState) {
    console.log("previous props", prevProps);
    console.log("this props", this.props);
    if (prevProps.counter.value !== this.props.counter.value) {
      console.log("you may consider calling ajax method");
    }
  }
  componentWillUnmount() {
    console.log("component unmount");
  }
  handleReset;
  render() {
    const { counter, onIncrement, onDecerement, onDelete } = this.props;
    console.log("Counter.render");
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => onDecerement(counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(this.props.counter.id)}
          >
            X
          </button>
        </div>
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
