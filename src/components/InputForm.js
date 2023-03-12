import React,{useState,useRef} from 'react'
import PromptBox from './PromptBox';
import './InputForm.css'

const InputForm = (props) => {
const nameref=useRef();
const ageref=useRef();
 const collegeref=useRef();
const [IsNotValid,setIsNotValid]=useState(false);

  // const NameInputChangeHandler = event => {
  //   if(event.target.value.length!==0)
  //   setIsNotValid(false);
  //   setNameValue(event.target.value);
  // };

  //  const AgeInputChangeHandler = event => {
  //   const newage=parseInt(event.target.value);
  //   console.log(typeof(newage));
  //   if(event.target.value<0)
  //   setIsNotValid(true);
  //   setAgeValue(event.target.value);
  // };

  const formSubmitHandler = event => {
    event.preventDefault();
        const nameValue=nameref.current.value;
        const ageValue=ageref.current.value;
        const collegeValue=collegeref.current.value;
    if(nameValue.trim().length===0 || ageValue==='' || parseInt(ageValue)<0 || collegeValue.trim().length===0){
      setIsNotValid(true);
      return;
    }
    const obj={
user:nameValue,
age:ageValue,
college:collegeValue
    }
    nameref.current.value='';
    ageref.current.value='';
    collegeref.current.value='';
    props.onAddLogin(obj);
  };

  const closebox=()=>{
    setIsNotValid(false);
  }

  return (
    <>    
    {
        IsNotValid &&
        <PromptBox closebox={closebox}/>
    }
        
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label>UserName</label>
        <input type="text" ref={nameref}/>
        <label>Age</label>
        <input type="number" ref={ageref}/>
         <label>College Name</label>
        <input type="text" ref={collegeref}/>
      </div>
      <button type="submit" className='button'>Add Goal</button>
    </form>
    
    </>
  );
}

export default InputForm;