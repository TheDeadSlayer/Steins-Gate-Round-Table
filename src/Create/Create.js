import React from 'react'
import Steinslogo from "../Images/Steins Logo.png"
import "./Create.css"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom'
import { FaRegUser } from 'react-icons/fa';
import { FiLock } from 'react-icons/fi';
import {MdOutlineEmail} from 'react-icons/md';
import {TiTickOutline} from 'react-icons/ti';
import * as yup from 'yup';


const schema = yup
  .object({
    email: yup
    .string()
    .required('*Email is required')
    .email('*Invalid Email'),

    username: yup
    .string()
    .required('*Username is required')
    .max(15, '*Max length is 15 charcters '),

    password: yup
    .string()
    .required('*Password is required')
    .min(8, '*Must be at least 8 character long')
    .matches(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
    '*Password must contain: 1 Lower Case, 1 Upper Case, 1 Number, 1 Special Character'
    ),
    passwordConfirm: yup
      .string()
      .required('*Password confrimation is required')
      .oneOf([yup.ref('Password'), '*Passwords do not match'], '*Passwords do not match'),
  })
  .required();

export default function Create() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
      });

  return (
    <div className='create-page'>
        <div className='creatediv'>

        <img src={Steinslogo} alt="My Logo" className="create-logoimg"/> 
       {/*<img src={DivergeGif} alt="My Logo" className="gif"/>*/}

        <div className='create-formdiv'>
          <form action="" method='post' className='registerForm' onSubmit={handleSubmit}>

                <div className='create-inputs'>
                  {/*<label htmlFor="" className='lbl'>Username: </label>*/}
                  <MdOutlineEmail className='create-icons'/>
                  <input type="text" name="email" className='create-email' placeholder='Email' {...register('email')} />
                  <p className="text-error">{errors?.email?.message}</p>
                </div>

                <div className='create-inputs'>
                  {/*<label htmlFor="" className='lbl'>Username: </label>*/}
                  <FaRegUser className='create-icons'/> 
                  <input type="text" name="username" className='create-userName' placeholder='Username' {...register('username')} />
                  <p className="text-error">{errors?.username?.message}</p>
                  
                </div>

              <div className='create-inputs'>
                {/*<label htmlFor="" className='lbl'>Password: </label>*/}
                <FiLock  className='create-icons'/> 
                <input type="password" name="password" className='create-pass' placeholder='Password' {...register('password')} /> 
                <p className="text-error">{errors?.password?.message}</p> 

              </div>

              <div className='create-inputs'>
                {/*<label htmlFor="" className='lbl'>Password: </label>*/}
                <TiTickOutline  className='create-icons'/> 
                <input type="password" name="Cpassword" className='create-confrimpass' placeholder='Confrim Password' {...register('passwordConfirm') }  />
                <p className="text-error">{errors?.passwordConfirm?.message}</p>  

              </div>
              
              <button className='registerBtn'>Become a Labmem</button>
          </form>
          <span className='signin-Link'>Already a Labmem? <Link to="/Login" className='loginLink' >Login</Link> </span>
        </div>
        
      </div>
    </div>


  )
}
