import React from 'react';
import { Link } from "react-router-dom";
import { DeempayLogo, Fail } from '../../assests/svgs';

function Verify() {
    return (
        <>
        <div className="verify">
          <div className="verify-wrap">
            <div className='image-wrap'>
               <img src={DeempayLogo} alt='logo' />
            </div>
            <div className='verify-content'>            
              <form>
                <div>
                 <img src={Fail} alt='logo' />
                </div>
                <h2>Verify your number</h2>
                <h4>Please enter the verification code sent to 080*****778 for confirmation</h4>
                <input type="number"  required />
                <p>Your verification code should arrive within 60s</p>
                <button type="submit"><Link to="/Success" className='link'>Submit</Link></button>
              </form>
              <div className='verify-create'>
                <p>Need help? <span><Link to="#" className='link2'>Contact support</Link></span></p>
              </div>
            </div>
        
          </div>
        </div>
      </>
    )
}

export default Verify
