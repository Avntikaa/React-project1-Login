import React from 'react'
import UserDetail from './UserDetail'

const TodoList = (props) => {
  return (
    <div className='goal-list'>
{props.users.length>0 &&
    props.users.map((user)=>{
      return  <UserDetail key={Math.random()} username={user.user} age={user.age} college={user.college}/>
    })
}
    </div>
  )
}

export default TodoList