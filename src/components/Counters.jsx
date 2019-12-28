import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleReset = () => {
    const counters = [...this.state.counters];
    for (let index = 0; index < 4; index++) {
      counters[index] = { ...counters[index] };

      counters[index].value = 0;
    }

    this.setState({
      counters
    });
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDelete = componentId => {
    console.log("Deleting component id :", componentId);
    var counters = this.state.counters.filter(c => c.id !== componentId);
    this.setState({ counters });
    console.log("Deleted component id :", componentId);
  };
  render() {
    return (
      <div>
        <button className="btn-primary btn-sm m-2" onClick={this.handleReset}>
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
