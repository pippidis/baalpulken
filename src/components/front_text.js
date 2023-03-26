import React from "react"

const Feature = (props) => {
    const text_1 = props.text_1
    const text_2 = props.text_2
  
    return (
        <div className="front_text">
            <div className="front_text_text">{text_1}</div>
            <div className="front_text_text">{text_1}</div>
        </div>
    )
  }
  
export default Feature