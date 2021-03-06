import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    console.log("Counters.render ");
    return (
      <div>
        <button className="btn-primary btn-sm m-2" onClick={this.props.onReset}>
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecerement={this.props.onDecerement}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
