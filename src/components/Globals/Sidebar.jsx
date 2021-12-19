import React from 'react';
 import { Calender, DeempayLogo, Drop,  } from '../../assests/svgs';

function Sidebar() {
    return (
        <>
          <div className='sidebar'>
              <div className='sidebar-brand'>
                <img src={DeempayLogo} alt='logo' />
              </div>
              <div className='sidebar-menu'>
                  <ul>
                      <li className='dashboard'>
                          <p>
                          <span><img src={Calender} alt="" width="25px" height="25px" /></span>Merchant
                          </p>
                      </li>
                      <li className='menu'>
                          MENU
                      </li>
                      <li>
                          <span><img src={Calender} alt="" /></span>Onboarding
                      </li>
                      <li>
                          <span><img src={Calender} alt="" /></span>Home
                      </li>
                      <li>
                          <span><img src={Calender} alt="" /></span>Payment collection<img src={Drop} alt="" className='drop-down'/>
                      </li>
                      <li>
                          <span><img src={Calender} alt="" /></span>Retail sub account
                      </li>
                      <li>
                          <span><img src={Calender} alt="" /></span>Settings
                      </li>
                      <li className='out'>
                          <span><img src={Calender} alt="" /></span>Sign out
                      </li>
                  </ul>
              </div>
          </div>
        </>
    )
}

export default Sidebar
