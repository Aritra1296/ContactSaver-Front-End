import React from 'react'
import {  Link } from 'react-router-dom'

function Person({ person, deleteHandler }) {
  return (
    <div>
      <form className='border border-secondary m-6 form-group bg-light text-secondary'>
        <div className='row align-items-center justify-content-center'>
          <h2>
            <b>Name</b>:{person.name}
          </h2>
        </div>
        <div className='row align-items-center justify-content-center'>
          <h3>
            <b>Phone</b>: {person.phone}
          </h3>
        </div>
        <div className='row align-items-center justify-content-center'>
          <h3>
            <b>Email Id</b>: {person.email}
          </h3>
        </div>
        <div className='row align-items-center justify-content-center'>
          <h3>
            {' '}
            <b>Address</b>: {person.address}
          </h3>
        </div>
        <div className='m-3 d-flex row align-items-center justify-content-center'>
          <div>
            <Link to={`/editDetails/${person._id}`}>
              <button className='btn btn-primary'>
                Edit Details
              </button>
            </Link> 
          </div>
          <div>
            <button className='btn btn-danger' onClick={deleteHandler(person)}>
              Delete Contact
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Person
