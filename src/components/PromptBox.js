import React from 'react'
import './PromptBox.css'
const PromptBox = (props) => {
    function closeprompt(){
        props.closebox();
    }
  return (
    <div className='outerdiv'>
        <h1>Please enter a valid name and input</h1>
        <button className='button' onClick={closeprompt}>okay</button>
    </div>
  )
}

export default PromptBox