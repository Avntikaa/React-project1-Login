import React from 'react'
import ReactDOM  from 'react-dom';
import './PromptBox.css'



const Modaloverlay=(props)=>{
  function onclose(){
  props.closebox();
}
return (
  <div className='outerdiv'>
    <h1>Please enter a valid name and input</h1>
        <button className='button'onClick={onclose}>okay</button>
        </div>
)
}
const PromptBox = (props) => {
    
  return (
    <>
    {ReactDOM.createPortal(<Modaloverlay closebox={props.closebox}/>,document.getElementById('overlay-root'))}
    </>
      
  )
}

export default PromptBox