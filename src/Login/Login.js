import React from "react";
import Steinslogo from "../Images/Steins Logo.png";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import {['far', 'user']} from '@fortawesome/free-solid-svg-icons'
import { FaRegUser } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    username: yup
    .string()
    .required('*Username is required'),

    password: yup
    .string()
    .required('*Password is required'),

  })
  .required();
export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  return (
    <div className="login-page">
      <div className="logindiv">
        <img src={Steinslogo} alt="My Logo" className="login-logoimg" />
        {/*<img src={DivergeGif} alt="My Logo" className="gif"/>*/}

        <div className="login-formdiv">
          <form action="" className="signinForm" method="post" onSubmit={handleSubmit}>
            <div className="login-inputs">
              {/*<label htmlFor="" className='lbl'>Username: </label>*/}
              <FaRegUser className="login-icons" />
              <input
                type="text"
                name="username"
                className="login-userName"
                placeholder="Username"
                {...register('username')}
              />
              <p className="text-error2">{errors?.username?.message}</p>
              
            </div>

            <div className="login-inputs">
              {/*<label htmlFor="" className='lbl'>Password: </label>*/}
              <FiLock className="login-icons" />
              <input
                type="password"
                name="password"
                className="login-pass"
                placeholder="Password"
                {...register('password')}
              />
              <p className="text-error2">{errors?.password?.message}</p> 
              
            </div>

            <button className="loginBtn" onClick={() => navigate("/Home")}>
              Login
            </button>
          </form>
          <span className="registerLink">
            Not a Labmem?{" "}
            <Link to="/Create" className="create-Link">
              Register
            </Link>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
