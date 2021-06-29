import React, { useEffect, createContext, useState } from 'react'
import axios from 'axios'
const  AuthContext =createContext();

function AuthContextProvider(props) {

  const [loginUserID, setloginUserID] = useState('');
  const [loggedIn, setLoggedIn] = useState(undefined);

  async function getLoggedIn() {
   try {
     const loggedInRes = await axios.get(
       'https://contact-saver-aritra.herokuapp.com/users/loggedIn'
     )
     setLoggedIn(loggedInRes.data)
   } catch (error) {setLoggedIn(false);}
  };
      useEffect(() => {
      getLoggedIn();
    }, []);
  
  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn,loginUserID, setloginUserID }}>
      {props.children}
    </AuthContext.Provider>
  )
}
export default AuthContext;
export  {AuthContextProvider};