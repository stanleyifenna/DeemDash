import React from 'react';
import { Drop,  } from '../../assests/svgs';


function HomeSection() {
    return (
        <>
         <header>
         <main className="main">
           <div className="home-card">
                 <div className='card'>
                   <h3>Revenue</h3>
                   <h2>&#8358; 100,000</h2>
                   <div className='mini-card'>
                    <span><img src={Drop} alt="" className="percentage"/></span> 5%
                   </div>
                   <div className="home-customers">
                     <span className="c-left">70 Customers</span><span className="c-right">65 Transactions</span>
                   </div>
              </div>
              <div className='cards'>
                <h3>Transcations</h3>
                <div className='o-cards'>
                    <div className='mini-cards'>
                        <h5>Cindy paid NGN 3400</h5>
                        <p>10m ago</p>
                        <img src={Drop} alt="" />
                    </div>
                    <vl />
                    <h1>65</h1>
                </div>
              </div>
           </div>
          </main>
         </header>
        </>
    )
}

export default HomeSection;
