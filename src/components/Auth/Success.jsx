import React from 'react';
import { Thanks, DeempayLogo } from '../../assests/svgs';
import { Link } from "react-router-dom";


function Success() {
    return (
        <>
        <div className="success">
          <main>
            <div className='image-wrap'>
               <img src={DeempayLogo} alt='logo' />
            </div>
            <div className='success-content'>            
              <form>
                <div>
                 <img src={Thanks} alt='logo' />
                </div>
                <h2>Congratulations</h2>
                <h4>You have successfully activated your Deempay account</h4>
                <button type="submit"><Link to="/Login" className='link'>Next</Link></button>
              </form>
            </div>
          </main>
        </div>
      </>
    )
}

export default Success
