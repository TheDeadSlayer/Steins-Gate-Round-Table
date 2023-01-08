//import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import Create  from './Create/Create';
import Home  from './Homepage/Homepage';
import Navbar from './Navbar/Navbar'
import Chatrooms from './Chatrooms/Chatrooms'
import { AuthenticatedUser } from './context/authState';
import { useContext } from 'react';

import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom"

function App() {
  const { isAuthenticated } = useContext(AuthenticatedUser);

  return (
    <div className="App-page">

      <BrowserRouter>
        <Routes>
          {isAuthenticated ? 
            <>
              {/* protected routes */}
              <Route path='/' element={<Home/>}/>
              <Route path="/Login" element={ <Login/>} />
              <Route path="/Create" element={ <Create/>} />
              <Route path="/Home" element={ <Home/>} />
              <Route path="/Chatrooms" element={ <Chatrooms/>} />
            </>
            :
            <>
              <Route path="/Create" element={<Create />} /> 
              <Route path="*" element={ <Login/>} />
            </>
          }
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
