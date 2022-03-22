import React from 'react'
import { CgCloseO } from 'react-icons/cg'
import '../index.css'

function UserItem({user, deleteUser}) {


  return (
    <li className='user-list__item'>
      {`${user.name} (${user.age} years old)`} 
      <button onClick={() => deleteUser(user.id)}><CgCloseO color="blueviolet"/></button>
    </li>
  )
}

export default UserItem