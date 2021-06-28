import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function CreateAccount() {

  const [userDetails, setuserDetails] = useState({
    userName: '',
    email: '',
    password: '',
  })

  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    setuserDetails({ ...userDetails, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:3006/users', userDetails)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
    setuserDetails({ userName: '', email: '', password: '' })
    alert('New User details added')
  }

  return (
    <div className='border border-secondary m-6'>
      <form action='' onSubmit={handleSubmit} autoComplete='off'>
        <h1 className='form-group row align-items-center justify-content-center'>
          Create A new User Account
        </h1>
        <div className='form-group row align-items-center justify-content-center'>
          <label htmlFor='name' className='col-form-label '>
            <h3>User Name :&emsp;</h3>
          </label>
          <div className=''>
            <input
              type='text'
              name='userName'
              id='userName'
              value={userDetails.userName}
              onChange={handleInput}
            />
          </div>
        </div>

        <div className='form-group row align-items-center justify-content-center'>
          <label htmlFor='email' className='col-form-label '>
            <h3>Email ID : &emsp;</h3>
          </label>
          <div className=''>
            <input
              type='email'
              name='email'
              id='email'
              value={userDetails.email}
              onChange={handleInput}
            />
          </div>
        </div>
        <div className='form-group row align-items-center justify-content-center'>
          <label htmlFor='phone' className=' col-form-label '>
            <h3>Password :&emsp;</h3>
          </label>
          <div className=''>
            <input
              type='password'
              name='password'
              id='password'
              value={userDetails.password}
              onChange={handleInput}
            />
          </div>
        </div>

        <div className='form-group row align-items-center justify-content-center'>
          <Link exact to='/'>
            <button type='submit' className='btn btn-primary'>
              Go to Sign In
            </button>
          </Link>
          &emsp;&emsp;
          <button type='submit' className='btn btn-success'>
            Create New User
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateAccount
