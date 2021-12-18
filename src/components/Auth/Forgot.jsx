import React from 'react';
import { Link } from "react-router-dom";
import { DeempayLogo } from '../../assests/svgs';

function Forgot() {
    return (
        <>
       <div className="forgot">
        <div className="forgot-wrap">
          <div className='image-wrap'>
             <img src={DeempayLogo} alt='logo' />
          </div>
          <div className='forgot-content'>          
            <form>
              <h2>Recover your password</h2>
              <p>Enter your new details</p>
              <label>Phone</label>
              <input type="text" placeholder="Email" required />
              <button type="submit"><Link to="/Login" className='link'>Recover password</Link></button>
            </form>
          </div>
      
        </div>
      </div>
        </>
    )
}

export default Forgot
