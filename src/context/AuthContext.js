import React, { useEffect, createContext, useState } from 'react'
import axios from 'axios'
const  AuthContext =createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);

  async function getLoggedIn() {
   try {
     const loggedInRes = await axios.get('http://localhost:3006/users/loggedIn')
     setLoggedIn(loggedInRes.data)
   } catch (error) {
     setLoggedIn(false);
   }
  };

      useEffect(() => {
      getLoggedIn();
    }, []);
  
  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  )
}
export default AuthContext;
export  {AuthContextProvider};