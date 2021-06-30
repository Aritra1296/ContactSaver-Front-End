import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Persons from './Persons'
import CreatePerson from './CreatePerson'
import CreateAccount from './CreateAccount'
import EditDetails from './EditDetails'
import Login from './Login'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import axios from 'axios'

function Header() {
  const { loggedIn, getLoggedIn, loginUserID } = useContext(AuthContext)
  const history = useHistory()

  async function logOut() {
    try {
      await axios.get(`http://api.aritrarivu.co.in/users/logout`);
      await getLoggedIn();
      alert('You Have Successfully Logged Off')
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Router>
      <div className='bg-dark text-white '>
        <div className='m-3 d-flex'>
          <div className='col-6 row align-items-center justify-content-center'>
            <h1>Contact Saver</h1>
          </div>
          {loggedIn === true && (
            <>
              <div className='m-3 col-2'>
                <Link to={`/persons/${loginUserID}`}>
                  <button className='btn btn-warning'>
                    <b> Show All Contacts </b>
                  </button>
                </Link>
              </div>
              <div className='m-3 col-2'>
                <Link to={`/createPerson/${loginUserID}`}>
                  <button className='btn btn-success'>
                    <b> Create New Contact </b>
                  </button>
                </Link>
              </div>
              <div className='m-3 col-2 '>
                <Link to='/'>
                  <button className='btn btn-danger' onClick={logOut}>
                    <b> Logout </b>
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <Route path='/persons/:userId' component={Persons}></Route>
        <Route path='/createPerson/:userId' component={CreatePerson}></Route>
        <Route path='/editDetails/:id' component={EditDetails}></Route>
        <Route path='/createAccount' component={CreateAccount}></Route>
      </Switch>
    </Router>
  )
}

export default Header
