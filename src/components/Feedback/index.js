import React from "react";

const Feedback = props => {
  return (
        <form method="POST" action="https://formspree.io/lydiarachel@gmail.com">
          <input type="email" className="email" placeholder="Your email" />
          <input
            className="text-area"
            name="message"
            placeholder="Feedback Message"
          />
          <button type="submit">Submit</button>
        </form>
  );
};

export default Feedback;