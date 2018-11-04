import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  state = {
    inputFormula: "2+2"
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

  render() {
    return (
      <div>
        <div>
          <label htmlFor="comment">Enter Math Equation</label>

          <form className={"form " + this.props}>
            <div className="form-inner">
              <input
                value={this.state.inputFormula}
                name="mathInput"
                onChange={this.handleInputChange}
                type="text"
              />

              <button
                className="btn-1"
                type="submit"
                name="action"
                onClick={this.handleFormSubmit}
              >
                <span>Submit</span>
              </button>
            </div>

            <div>
              <button
                className="btn-2"
                type="reset"
                name="action"
                onClick={this.handleFormSubmit}
              >
                <span>Clear</span>
              </button>
            </div>
          </form>

          <h2 className="gist-comment">Math Word Problem</h2>
          <div>
            {(this.state.results && this.state.results.name) || ""}

          </div>
        </div>
      </div>
    );
  }
}

export default Input;
