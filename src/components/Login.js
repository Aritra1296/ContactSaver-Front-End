import React, { useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Login() {

  const history =useHistory();

  const [userLogin, setuserLogin] = useState({
    email: '',
    password: '',
  })

  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    setuserLogin({ ...userLogin, [name]: value })
  }

  const login = async (e) => {
    e.preventDefault();
    try {
       console.log(userLogin)
       await axios
         .post(`http://localhost:3006/users/login`, userLogin, {
           withCredentials: true,
         })
         .then((res, req) => {
           console.log(res.data._id)
           console.log(typeof res.data._id)

           history.push(`/persons/${res.data._id}`)

         })
    } catch (error) { 
  }  
}

  return (
    <div className='border border-secondary m-6'>
      <form autoComplete='off'>
        <h1 className='form-group row align-items-center justify-content-center'>
          Welcome to Contact Saver App
        </h1>
        <div className='form-group row align-items-center justify-content-center'>
          <label htmlFor='userId' className='col-form-label '>
            <h3>User Id :&emsp;</h3>
          </label>
          <div className=''>
            <input
              type='email'
              name='email'
              id='email'
              value={userLogin.email}
              onChange={handleInput}
            />
          </div>
        </div>

        <div className='form-group row align-items-center justify-content-center'>
          <label htmlFor='password' className=' col-form-label '>
            <h3>Password :&emsp;</h3>
          </label>
          <div className=''>
            <input
              type='password'
              name='password'
              id='password'
              value={userLogin.password}
              onChange={handleInput}
            />
          </div>
        </div>

        <div className='form-group row align-items-center justify-content-center'>
          <Link to='/createAccount'>
            <button type='submit' className='btn btn-primary'>
              Sign Up
            </button>
          </Link>
          &emsp;&emsp;


            <button type='submit' onClick={login} className='btn btn-success'>
              Login
            </button>

        </div>
      </form>
    </div>
  )
}

export default Login
