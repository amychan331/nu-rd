import React from "react";
import styles from "./Output.css";

const Output = props => {
  console.log("prooops", props);

  return (
    <div className="output-container">
      <div className="output-words-container">
        <div className="output-words">
          {`
          Question: ${props.results.name}  ${
            props.results.hair_color 
          } ?
          `}

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

     <div>
       <h2>Provide Us Your Email and Feedback</h2>
      <form method="POST" action="https://formspree.io/lydiarachel@gmail.com">
        <input type="email" className="email" placeholder="Your email" />
        <textarea className="text-area" name="message" placeholder="Feedback Message" />
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default Output;
