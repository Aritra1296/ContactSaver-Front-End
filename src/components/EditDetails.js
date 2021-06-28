import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function EditDetails() {
  const { id } = useParams();
  const [edit, setEdit] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
  })

  useEffect(() => {
    loadUser()
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3006/posts/${id}`)
    setEdit(result.data)
  }

  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    setEdit({ ...edit, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const  data  = await axios.patch(
      `http://localhost:3006/posts/${id}`,
      edit
    );
    console.log(data);
alert('Contact details Updated successfully')
  }

  return (
    <div className='border border-secondary m-6'>
      <form action='' onSubmit={handleSubmit} autoComplete='off'>
        <h1 className='form-group row align-items-center justify-content-center'>
          Edit Details
        </h1>
        <div className='form-group row align-items-center justify-content-center'>
          <label htmlFor='name' className='col-form-label '>
            <h3>Name :&emsp;</h3>
          </label>
          <div className=''>
            <input
              type='text'
              name='name'
              id='name'
              value={edit.name}
              onChange={handleInput}
            />
          </div>
        </div>
        <div className='form-group row align-items-center justify-content-center'>
          <label htmlFor='phone' className=' col-form-label '>
            <h3>Phone :&emsp;</h3>
          </label>
          <div className=''>
            <input
              type='phone'
              name='phone'
              id='phone'
              value={edit.phone}
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
              value={edit.email}
              onChange={handleInput}
            />
          </div>
        </div>
        <div className='form-group row align-items-center justify-content-center'>
          <label htmlFor='address' className='col-form-label '>
            <h3>Address :&emsp;</h3>
          </label>
          <div className=''>
            <input
              type='text'
              name='address'
              id='address'
              value={edit.address}
              onChange={handleInput}
            />
          </div>
        </div>

        <div className='form-group row align-items-center justify-content-center'>
          <button type='submit' className='btn btn-success'>
            Edit Contact
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditDetails