import React from "react";
import styles from "./Output.css";

const Output = props => {
  return (
    <div className="output-container">
      <div className="output-words-container">
        <div className="output-words">
          {props.results.name1.length === 0
            ? ""
            : `

          ${props.results.name1} has ${props.num1} ${props.results.noun}s. 
          ${props.results.name2} ${props.results.verb} ${props.num2} ${
                props.results.noun
              }s. 
          How many ${props.results.noun}s does ${props.results.name1} now have?

          `}
        </div>
      </div>
      <div className="output-answer">Answer: 4</div>
    </div>
  );
};

export default Output;