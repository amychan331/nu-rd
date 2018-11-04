import React from "react";
import styles from "./Output.css";

const Output = props => {
  console.log("prooops", props);

  return (

    <div className="output-container">
      <div className="output-words-container">
        <div className="output-words">
          {JSON.stringify(props.results || {}, null, 4)}

  {/*
      <div className="output-container">
        <div className="output-words-container">
            <div className="output-words">
                {props.name1} has {props.amount1} {props.noun}, {props.name2} {props.verb} {props.amount2} {props.noun}, how many {props.noun} are there?
            </div>
        </div>
        <div className="output-answer">
            Answer: {Number(props.amount1)+Number(props.amount2)}
     */}

        </div>
      </div>
      <div className="output-answer">Answer: 1</div>
    </div>
  );
};

export default Output;
