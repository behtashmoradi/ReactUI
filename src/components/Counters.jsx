import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
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
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            id={counter.id}
            onDelete={this.handleDelete}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
