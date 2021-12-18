import React from 'react';
import { Link } from "react-router-dom";
import { DeempayLogo, Fail } from '../../assests/svgs';


function Failed () {
    return (
        <>
        <div className="fail">
          <div className='fail-wrap'>
            <div className='image-wrap'>
               <img src={DeempayLogo} alt='logo' />
            </div>
            <div className='fail-content'>            
              <form>
                <div>
                 <img src={Fail} alt='logo' />
                </div>
                <h2>Sorry verification failed</h2>
                <h4>The code doesn't match, please re-enter the code
                    again or check the phone number you provided.
                </h4>
                <button type="submit"><Link to="/Register" className='link'>Retry</Link></button>
              </form>
              <div className='fail-create'>
                <p>Need help? <span><Link to="#" className='link2'>Contact support</Link></span></p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default Failed
