import React from 'react';
import { Link } from "react-router-dom";
import { DeempayLogo } from '../../assests/svgs';

function Login() {
  return (
    <>
      <div className="login">
        <div className="login-wrap">
          <div className='image-wrap'>
             <img src={DeempayLogo} alt='logo' />
          </div>
          <div className='login-content'>
            <form1>
              <p>
                Sign in using your phone and password used when
                creating your account
              </p>
            </form1>
          
            <form>
              <h2>Welcome back</h2>
              <p>Enter your credentials to access your account</p>
              <label>Phone</label>
              <input type="text" placeholder="Email" required />
              <label htmlFor="for">Password</label>
              <input
                type="password"
                placeholder="Password"
                required
              />
              <button type="submit"><Link to="/" className='sign'>Sign In</Link></button>
              <h4><Link to="/Forgot" className='forgt'>Forgot password?</Link></h4>
            </form>
            <div className='login-create'>
              <p>New user? <span><Link to="/Register" className='link'>Create account</Link></span></p>
            </div>
          </div>
      
        </div>
      </div>
    </>
  )
}

export default Login
