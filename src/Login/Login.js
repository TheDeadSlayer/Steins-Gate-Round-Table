import React from 'react'
import Steinslogo from "../Images/Steins Logo.png"
import "./Login.css"
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import {['far', 'user']} from '@fortawesome/free-solid-svg-icons'
import { FaRegUser } from 'react-icons/fa';
import { FiLock } from 'react-icons/fi';

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="login-page">

      <div className="logindiv">
      
       <img src={Steinslogo} alt="My Logo" className="login-logoimg"/>
       {/*<img src={DivergeGif} alt="My Logo" className="gif"/>*/}

        <div className='login-formdiv'>
          <form action="" className='signinForm'>
                <div className='login-inputs'>
                  {/*<label htmlFor="" className='lbl'>Username: </label>*/}
                  <input type="text" name="username" className='login-userName' placeholder='Username' />
                  <FaRegUser className='login-icons'/>
                </div>

              <div className='login-inputs'>
                {/*<label htmlFor="" className='lbl'>Password: </label>*/}
                <input type="password" name="password" className='login-pass' placeholder='Password' />
                <FiLock  className='login-icons'/>
              </div>
              
              <button className='loginBtn' onClick={()=>navigate("/Home")}>Login</button>
          </form>
          <span className='registerLink'>Not a Labmem? <Link to="/Create" className='create-Link' >Register</Link> </span>
        </div>
        
      </div>
    </div>
  )
}
