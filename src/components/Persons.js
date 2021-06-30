import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Person from './Person'
import axios from 'axios'
import AuthContext from '../context/AuthContext'

function Persons() {
  const { userId } = useParams()
  const { getLoggedIn, setloginUserID } = useContext(AuthContext)
  setloginUserID(userId)

  const [persons, setPersons] = useState([])

  useEffect(() => {
    fetchItems()
    getLoggedIn()
    // eslint-disable-next-line
  }, [])

  const fetchItems = async () => {
    try {
      await axios
        .get(`http://api.aritrarivu.co.in/posts/${userId}`)
        .then((res, req) => {
          setPersons(res.data)
        })
    } catch (error) {
      console.log(error)
    }
  }

  const deleteItems = async (id) => {
    try {
      console.log(id)
      await axios
        .delete(`http://api.aritrarivu.co.in/posts/${id}`)
        .then((res, req) => {
          alert('Contact details Deleted successfully')
        })
    } catch (error) {
      console.log(error)
    }
  }

  const deleteHandler = (person) => (e) => {
    deleteItems(person._id)
  }

  return (
    <div>
      {persons.map((person, index) => {
        return (
          <div key={person.name}>
            <Person person={person} deleteHandler={deleteHandler} />
          </div>
        )
      })}
    </div>
  )
}

export default Persons
