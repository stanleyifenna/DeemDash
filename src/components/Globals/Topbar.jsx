import React from 'react';
 import { Drop,  } from '../../assests/svgs';

function Topbar() {
    return (
        <>
            <header>
               <div className='top-bar'>
                  <h1 className='top-head'>Dashboard</h1>
                  <div className='topbar'>
                    <span className='top-notify'><img src={Drop} alt="" /></span><img src={Drop} alt="" width="25px" height="25px"/><span><img src={Drop} alt="" /></span>
                  </div>
               </div>
            </header>
        </>
    )
}

export default Topbar
