import React, { Component } from "react";
import Input from "./components/Input";
import Output from "./components/Output";
import AppHeader from "./components/AppHeader";
import "./App.css";

class App extends Component {
  state = {
    results: {
      name: "james",
      hair_color: "brown"
    },
    name: "James",
    name2: "",
    noun: "",
    verb: "",
    hair_color: "brown"
  };

  handleFormSubmit = inputFormula => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    if (inputFormula.length === 0) {
      //    window.M.toast({html: "Please enter a comment before submitting!", classes: 'cyan'});
      alert(`What's wrong with you.. you need to input something!`);
    } else {
      // Example GET request
      fetch("https://swapi.co/api/people/1/")
        .then(results => {
          console.log(results);
          return results.json();
        })
        .then(data => {
          this.setState({
            results: data
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
            <Output results={this.state.results} />

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
