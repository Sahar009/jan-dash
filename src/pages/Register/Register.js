import React from 'react'
import './register.scss'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Register = () => {
  return (
   <div className='registerContainer'>
    <div className='formSection'>
      <div className='formHeader'>
       <h1>Create your account</h1>
        <form className='formField'>
          <div className='nameDiv'>
          <input type="text" id="firstname" name="name" required placeholder='Firstname'/>
          <input type="text" id="lastname" name="name" required placeholder='Lastname'></input>
          </div>
          <div className='emailDiv'>
          <input type="text" id="email" name="email" required placeholder='Email'></input>
          <select>
        <option>Teacher</option>
          <option>Principal</option>
         
        </select>
          </div>
       
        <div className='passwordDiv'>
        <input type="text" id="password" name="password" required placeholder='Password'></input>
        <input type="text" id="password" name="confirm-password" required placeholder='Confirm Password'></input>
        </div>
     
         <button className='formBtn'>Sign up</button> 
       </form>
<div className='googleDiv'>
<button className='googleBtn'><FcGoogle size={30}/>Google</button>
<button className='githubBtn'><FaGithub size={25}/>Github</button>
</div>
       <p className='loginCreateAccount'>already have an account?<Link to='/login' className='signInLink'>sign in</Link></p>
      </div>

    </div>

   </div>
  )
}

export default Register