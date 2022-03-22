import React from 'react'
import UserItem from './UserItem'
import '../index.css'

function UserList({users, deleteUser}) {
  const usersEls = users.map(user => <UserItem key={user.id} user={user} deleteUser={deleteUser}/>)

  return (
    <ul className='user-list'>
      {usersEls}
    </ul>
  )
}

export default UserList