import React from "react";
import styles from "./Output.css";

const Output = props => {
  console.log("prooops", props);

  return (
    <div className="output-container">
      <div className="output-words-container">
        <div className="output-words">
          {JSON.stringify(props.results || {}, null, 4)}
        </div>
      </div>
      <div className="output-answer">Answer: 1</div>
    </div>
  );
};

export default Output;
