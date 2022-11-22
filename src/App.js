//import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import Create  from './Create/Create';
import Home  from './Homepage/Homepage';
import Navbar from './Navbar/Navbar'
import Chatrooms from './Chatrooms/Chatrooms'

import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App-page">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/Login" element={ <Login/>} />
          <Route path="/Create" element={ <Create/>} />
          <Route path="/Home" element={ <Home/>} />
          <Route path="/Chatrooms" element={ <Chatrooms/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
