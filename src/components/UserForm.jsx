import React, {useState} from 'react'
import Button from '../UI/Button'
import { nanoid } from 'nanoid'


function UserForm({onAddUser}) {
  const [user, setUser] = useState({name: '', age: '', id: nanoid()})

  const changeHandler = (event) => {
    setUser(prevState => {
      const {name, value} = event.target

      return {...prevState, [name]:  value}
    })
  }

  const submitHandler = event => {
    event.preventDefault()
    onAddUser(user)
    setUser(({name: '', age: '', id: nanoid()}))
  }


  return (
    <form onSubmit={submitHandler }>
      <div className="form-control">
        <label htmlFor="username">Username</label>
        <input type="text" name='name' onChange={changeHandler} value={user.name}/>
      </div>
      <div className="form-control">
        <label htmlFor="age">Age (Years)</label>
        <input type="number" name='age' value={user.age} onChange={changeHandler}/>
      </div>
      <Button type='submit'>Add User</Button>
    </form>
  )
}

export default UserForm