import Header from './components/Header'
import axios from "axios";
import {AuthContextProvider} from './context/AuthContext';

 axios.defaults.withCredentials= true;

function App() {

  return (
    <>
      <AuthContextProvider>
        <Header />
      </AuthContextProvider>
    </>

  )
}

export default App;
