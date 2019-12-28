import React, { Component } from "react";
import "./App.css";
import Counters from "./components/Counters";
import NavBar from "./components/navbar";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  constructor() {
    super();
    console.log("constructor is called");
  }
  componentDidMount() {
    //component is mounted in the mount and ready so for example we now can call ajax methods to populate
    console.log("component did mount is called");
  }
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
    console.log("App.render is called");
    return (
      <React.Fragment>
        <NavBar
          totalCountersCount={
            this.state.counters.filter(c => c.value !== 0).length
          }
        ></NavBar>
        <main role="main" className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
          ></Counters>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
