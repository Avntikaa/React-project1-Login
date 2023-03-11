import React,{useState} from 'react'
import PromptBox from './PromptBox';
import './InputForm.css'
const InputForm = (props) => {

 const [nameValue, setNameValue] = useState('');
const[ageValue,setAgeValue]=useState('');
const [IsNotValid,setIsNotValid]=useState(false);

  const NameInputChangeHandler = event => {
    if(event.target.value.length!==0)
    setIsNotValid(false);
    setNameValue(event.target.value);
  };

   const AgeInputChangeHandler = event => {
    const newage=parseInt(event.target.value);
    console.log(typeof(newage));
    if(event.target.value<0)
    setIsNotValid(true);
    setAgeValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(nameValue.trim().length===0 || ageValue==='' || parseInt(ageValue)<0){
      setIsNotValid(true);
      return;
    }
    const obj={
user:nameValue,
age:ageValue
    }
    props.onAddLogin(obj);
  };

  const closebox=()=>{
    setIsNotValid(false);
  }
  return (
    <div>
        
    {
        IsNotValid &&
        <PromptBox closebox={closebox}/>
    }
        
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label>UserName</label>
        <input type="text" value={nameValue} onChange={NameInputChangeHandler} />
        <label>Age</label>
        <input type="number" value={ageValue} onChange={AgeInputChangeHandler} />
      </div>
      <button type="submit" className='button'>Add Goal</button>
    </form>
    
    </div>
  );
}

export default InputForm;