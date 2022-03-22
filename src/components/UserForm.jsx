import React, {useState} from 'react'
import Modal from './Modal'
import Button from '../UI/Button'
import { nanoid } from 'nanoid'


function UserForm({onAddUser}) {
  const [user, setUser] = useState({name: '', age: '', id: nanoid()})
  const [showModal, setShowModal] = useState(false)
  const [msg, setMsg] = useState('')

  const changeHandler = (event) => {
    setUser(prevState => {
      const {name, value} = event.target

      return {...prevState, [name]:  value}
    })
  }

  const submitHandler = event => {
    event.preventDefault()

    if (user.name === '' && user.age === '') {
      setMsg('Please enter a valid name and age (non-empty values)')
    } else if (user.age < 1) {
      setMsg('Please enter a valid age (more then 0)')
    } else if (user.name.length < 3) {
      setMsg('Name must be more then 3 characters')
    } else {
      onAddUser(user)
      setUser(({name: '', age: '', id: nanoid()}))
      return
    }
    setShowModal(true)
    
  }

  const toggleModal = () => { 
    setShowModal(prevState => !prevState)
  }


  return (
    <>
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
      {showModal && <Modal handleModal={toggleModal} msg={msg}/>}
    </>
  )
}

export default UserForm