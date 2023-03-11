import React from 'react'
import './UserDetail.css'
const UserDetail = (props) => {

  return (
 <ul className="goal-item">
<li type='none'>{props.username}-{props.age}</li>
    </ul>  )
}

export default UserDetail