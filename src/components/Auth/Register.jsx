import React from "react";
import { Link } from "react-router-dom";
import { DeempayLogo } from "../../assests/svgs";
import {  MdCheckBoxOutlineBlank } from 'react-icons/md'

function Register() {
  return (
    <>
      <div className="register">
        <div className="register-wrap">
          <div className="row">
              <div className="column">
                <div className="image-wrap">
                  <div className="">
                     <img src={DeempayLogo} alt="logo" />
                  </div>
                  <h2>Set up your account</h2>
                  <p>Get up & running in to time</p>
                </div>
               </div>
            <div className="column">
              <div className="wrapper">
               <form>
                 <label>Country</label>
                 <select type="text" placeholder="Email" required>
                     <option>Nigeria</option>
                 </select>
                 <label>Full Name</label>
                 <input type="text" placeholder="Full Name" required />
                 <label>Phone Number</label>
                 <input type="number" placeholder="Phone Number" required />
                 <label htmlFor="for">Password</label>
                 <input type="password" placeholder="Password" required />
                 <button type="submit"><Link to="/Verify" className="links">Create account</Link></button>
                 <p>
                     <MdCheckBoxOutlineBlank className="icon"/>By clicking on the Create account, you have agreed to DeemPay 
                     <span><Link to="#"  className="link"> privacy</Link></span> and <span><Link to="#"  className="link" >terms of services</Link></span>
                 </p>
                </form>
                <div className="register-create">
                 <p>Existing user?<span><Link to="/Login"  className="link" > Log In</Link></span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
