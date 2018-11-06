import React, { Component } from "react";
import "./Input.css";

// export { default } from './Input' in index.js

class Input extends Component {
  state = {
    inputFormula: ""
  };
  handleFormSubmit = event => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.inputFormula);
  };

  handleInputChange = event => {
    console.log(event.target.value);
    this.setState({
      inputFormula: event.target.value
    });
  };

  handleFormClear = event => {
    event.preventDefault();
    this.setState({
      inputFormula: ""
    });
  };

  render() {
    return (
      <div>
        <div>
        <form className={"form " + this.props}>
            <div className="form-inner">
              <input
                value={this.state.inputFormula}
                name="mathInput"
                onChange={this.handleInputChange}
                type="text"
              />
              <div className="col-container">
                <div className="col">
                  <button
                    className="btn-1"
                    type="submit"
                    name="action"
                    onClick={this.handleFormSubmit}
                  >
                    <span>Submit</span>
                  </button>
                </div>

                <div className="col space"></div>

                <div className="col">
                  <button
                    className="btn-2"
                    type="reset"
                    name="action"
                    onClick={this.handleFormClear}
                  >
                    <span>Clear</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Input;