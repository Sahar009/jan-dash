import React from 'react'
import './login.scss'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
<div className='loginContainer'>
  <div className='loginFormFieldSection'>
  <h1 className='loginHeader'>Welcome back</h1>
  <div classame='loginSection'>  
    <form className='loginForm'>
      <div className='inputDiv'>
        <label>Name:</label>
        <input type="text" placeholder='name' required/>
      </div>
      <div className='inputDiv'>
        <label>Password:</label>
        <input type="text" id="password" name="password" required placeholder='Password'></input>
      </div>
     <button className='loginBtn'>Sign In</button>
    </form>
    <p className='otherLogin'>Or continue with</p>
    <div className='loginGoogleDiv'>
<button className='loginGoogleBtn'><FcGoogle size={30}/>Google</button>
<button className='loginGithubBtn'><FaGithub size={25}/>Github</button>
</div>
<p className='CreateAccount'>already have an account?<Link to="/register" className='signUpLink'>sign up</Link></p>
   
    <div>
      
    </div>
  </div>
  </div>
</div>
  )
}

export default Login