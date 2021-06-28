import React,{useState} from 'react'
import axios from 'axios'

function CreatePerson() {

const [userDetails, setuserDetails] = useState({
  name: '',
  phone: '',
  email: '',
  address: '',
})

const handleInput=(e)=>{
  const name =e.target.name;
  const value = e.target.value;
  setuserDetails({ ...userDetails, [name]: value })
}

const handleSubmit=(e)=>{
e.preventDefault();
axios
  .post('http://localhost:3006/posts', userDetails,
  {
    withCredentials : true
  }).then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })
setuserDetails({ name: '', phone: '', email: '', address: '' })
alert('Contact details Added Successfully')
}

  return (
    <div className='border border-secondary m-6'>
      <form action='' onSubmit={handleSubmit} autoComplete='off'>
        <h1 className='form-group row align-items-center justify-content-center'>
          Create New Contact Details
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
              value={userDetails.name}
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
              value={userDetails.phone}
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
          <label htmlFor='address' className='col-form-label '>
            <h3>Address :&emsp;</h3>
          </label>
          <div className=''>
            <input
              type='text'
              name='address'
              id='address'
              value={userDetails.address}
              onChange={handleInput}
            />
          </div>
        </div>

        <div className='form-group row align-items-center justify-content-center'>
          <button type='submit' className='btn btn-success'>
            Create Contact
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreatePerson

