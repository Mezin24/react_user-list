import React, {useState} from 'react'
import UserForm from './components/UserForm'
import UsersStats from './components/UsersStats'
import UserList from './components/UserList'
import { nanoid } from 'nanoid'
import Card from './UI/Card'

function App() {
  const [users, setUsers] = useState([{name: 'Pavel', age:  34, id: nanoid()}])

  const addUser = user => setUsers(prevState => [user, ...prevState])
  const deleteUser = id => {
    if (window.confirm('Are you sure want to delete?')) {
      setUsers(prevState => prevState.filter(user => user.id !== id))
    }
  }

  const content = users.length > 0 ? 
        <>
          <UsersStats users={users}/>
          <Card>
            <UserList users={users} deleteUser={deleteUser}/>
          </Card>
        </>
         : 
        <p className='msg'>No Users Added</p>

  return (
    <div className='container'>
      <Card>
        <UserForm onAddUser={addUser}/>
      </Card>
      
      {content}
    </div>
  )
}

export default App