import React, { Component } from "react";
import Input from "./components/Input";
import Output from "./components/Output";
import AppHeader from "./components/AppHeader";
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
            <Input
              inputFormula={this.state.inputFormula}
              handleInputChage={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
            <Output num1={this.state.num1} num2={this.state.num2} results={this.state.results} />

            {/* <div className="outer-wrapper">
              <div className="inner-container">
                <Input />
                <Output name1="Veronica" name2="Chris" amount1="3" amount2="2" noun="apples" verb="brings"/>
              </div>
      */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
