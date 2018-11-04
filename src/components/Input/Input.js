import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  state = {
    inputFormula: "2+2",
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
          <label htmlFor="comment">Enter Math Problem</label>

          <form className={"form " + this.props}>
            <div>
              <input
                value={this.state.inputFormula}
                name="commentInput"
                onChange={this.handleInputChange}
                type="text"
              />

              <button
                classname="btn-1"
                type="submit"
                name="action"
                onClick={this.handleFormSubmit}
              >
                Button
              </button>
            </div>
          </form>

          <h2 className="gist-comment">Comments </h2>
          <div>
            {(this.state.results && this.state.results.name) || ""}
            {/* {this.props.comments.map(comment => (
                  <Comment
                      key={comment._id}
                      comment={comment.comment}
                      authorName={comment.author.name}
                      date = {comment.date}
                  />
              ))} */}
          </div>
        </div>
      </div>
    );
  }
}

export default Input;
