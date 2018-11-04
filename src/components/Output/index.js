import React from 'react'
import styles from './Output.css'

const Output = (props) => {
  return (
      <div className="output-container">
        <div className="output-words-container">
            <div className="output-words">
                April has 3 apples, John takes 2 apples, how many apples are there?
            </div>
        </div>
        <div className="output-answer">
            Answer: 1
        </div>
      </div>
  )
}

export default Output