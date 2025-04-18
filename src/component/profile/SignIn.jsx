import React from 'react'
import { Link } from 'react-router-dom'
function SignIn() {
  function SwitchContent(){
    let content=document.getElementById('content');
    let registerBtn=document.getElementById('register');
    let loginBtn=document.getElementById('login');
    registerBtn.addEventListener('click',()=>{
      content.classList.add("active")
    });
    loginBtn.addEventListener('click',()=>{
      content.classList.remove("active")
    });
  }
  return (
    <div className='signin'>
      {/* sign up */}
      <div className="content justify-content-center align-items-center d-flex shadow-lg" id='content'>
        <div className='col-md-6 d-flex justify-content-center'>
          <form>
            <div className='header-text mb-4'>
              <h1>Create Account</h1>
            </div>
            <div className='input-group mb-3'>
              <input type="text" name="" id="" placeholder='Name' className='form-control form-control-lg bg-light fd-6' />
            </div>
            <div className='input-group mb-3'>
              <input type="email" name="" id="" placeholder='Email' className='form-control form-control-lg bg-light fd-6' />
            </div>
            <div className='input-group mb-3'>
              <input type="password" name="" id="" placeholder='Password' className='form-control form-control-lg bg-light fd-6' />
            </div>
            <div className='input-group mb-3 justify-content-center'>
              <button className='btn border-white text-white w-50 fs-6'>Sign Up</button>
            </div>
          </form>
        </div>
      


      {/* sign in */}
        <div className='col-md-6 d-flex right-box'>
          <form>
            <div className='header-text mb-4'>
              <h1>Sign In</h1>
            </div>
            <div className='input-group mb-3'>
              <input type="email" name="" id="" placeholder='Email' className='form-control form-control-lg bg-light fd-6' />
            </div>
            <div className='input-group mb-3'>
              <input type="password" name="" id="" placeholder='Password' className='form-control form-control-lg bg-light fd-6' />
            </div>
            <div className='input-group mb-5 d-flex justify-content-between'>
              <div className='form-check'>
                <input type='checkbox' className='form-check-input'/>
                <label htmlFor="formcheck" className='form-check-label text-secondary'><small>Remember me</small></label>
              </div>
              <div className="forgot">
                <small><a href="#">Forgot password?</a></small>
              </div>
            </div>
            <div className='input-group mb-3 justify-content-center'>
              <button className='btn border-white text-white w-50 fs-6'>Sign In</button>
            </div>
          </form>
        </div>
      
      {/* switch */}
      <div className="switch-content">
        <div className="switch">
          <div className='switch-panel switch-left'>
            <h1>Hello, Again</h1>
            <p>We are happy to see you back</p>
            <button className='hidden btn text-white w-50 fs-6' id='login' onClick={SwitchContent} >Sign In</button>
          </div>
          <div className='switch-panel switch-right'>
            <h1>Welcome</h1>
            <p>
              Join our unique platform, Explore a new experience
            </p>
            <button className='hidden btn border-white text-white w-50 fs-6' id='register' onClick={SwitchContent}>Sign Up</button>
          </div>
        </div>
      </div>
      </div>
      </div>
  )
}

export default SignIn