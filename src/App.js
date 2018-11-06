import React, { Component } from "react";
import AppHeader from "./components/AppHeader";
import Input from "./components/Input";
import Output from "./components/Output";
import Feedback from "./components/Feedback";
import "./App.css";

class App extends Component {
  state = {
    results: {
      name1: "",
      name2: "",
      noun: "",
      verb: ""
    }
  };

  handleFormSubmit = inputFormula => {
    inputFormula.replace(" ", "");
    const separatedInput = inputFormula
      .split("+")
      .join(",")
      .split("-")
      .join(",")
      .split("*")
      .join(",")
      .split("/")
      .join(",")
      .split(",");
    const operand = inputFormula.substr(separatedInput[0].length, 1);

    console.log(separatedInput);
    console.log(encodeURI(operand));
    // Preventing the default behavior of the form submit (which is to refresh the page)
    if (inputFormula.length === 0) {
      //    window.M.toast({html: "Please enter a comment before submitting!", classes: 'cyan'});
      alert(`What's wrong with you.. you need to input something!`);
    } else {
      // Example GET request
      fetch(
        `/.netlify/functions/get-data?operator=${encodeURIComponent(operand)}`
      )
        .then(results => {
          return results.json();
        })
        .then(data => {
          console.log(data);
          this.setState({
            results: data,
            num1: separatedInput[0],
            num2: separatedInput[1]
          });
          // this.setState({ name: data.name, noun: data.noun, verb: data.verb });
        });
    }
  };
  render() {
    return (
      <div>
        <AppHeader />

        <div className="outer-wrapper">
          <div className="inner-container">
            <h3>Enter Math Equation</h3>
            <Input
              inputFormula={this.state.inputFormula}
              handleInputChage={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
            <h3>Math Word Problem</h3>
            {/* <div>{(this.state.results && this.state.results.name) || ""}</div> */}
            <Output
              num1={this.state.num1}
              num2={this.state.num2}
              results={this.state.results}
            />
            <h3>Provide Us Your Email and Feedback</h3>
            <Feedback />
          </div>
        </div>
      </div>
    );
  }
}

export default App;