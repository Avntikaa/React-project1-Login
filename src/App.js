import './App.css';
import InputForm from './components/InputForm';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
  const [userDetail,setUserDetail]=useState([]);

  const addLoginDeatils=(ele)=>{
    setUserDetail((prevexpense)=>{
      return [ele,...prevexpense];
    });
  }
  return (
    <div className="goal-form">
    <InputForm onAddLogin={addLoginDeatils}/>
    <TodoList users={userDetail}/>
    </div>
  );
}

export default App;
