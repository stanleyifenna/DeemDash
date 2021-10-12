import React from 'react';
import './Settings.css';
import RetailSubTable from './RetailSubTable';
import { BiSearch, BiFilterAlt } from 'react-icons/bi';
import { MdDateRange } from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';
import filter  from '../../../icons/filter.svg';
import calender  from '../../../icons/calender.svg';




function Settings() {
    return (
        <div className="subAccount">
        <div className='transactionTitle'>
              <span className="sub-account">Retail sub account</span>
              <span><div className="subSearch">
              <input type="text" placeholder="search" className="search" />
              <div className="searchIcon"><BiSearch /></div>
               </div>
              </span>
              
              <span className="sub-date" >
                  <div className="transactionDate"><img src={calender} alt="calender" /></div>
              </span>

              <span className="sub-filter" >
                  <div className="transactionFilter"><img src={filter} alt="filter" />Filter</div>
              </span>

              <span className="delete" >
                  <div className="transactionDelete">Delete</div>
              </span>

          </div> 
          <div className="sub-account-details-right">
              <ul>
                  <li className="details-right">
                      Sub-account details
                  </li>
                  <li className="station-name">Station name
                      <span className="name-left">Total Station</span>
                  </li>
                  <li className="account-type">Sub-account type
                      <span className="left-side">Retail Manager</span>
                  </li>
                  <li className="staff-name">Staff name
                      <span className="left-side">Joy Daniels</span>
                  </li>
                  <li className="mobile-number">Phone
                      <span className="left-side">08134902354</span>
                  </li>
                  <li className="date-created">Date Created
                      <span className="left-side">September 28, 2021</span>
                  </li>
              </ul>
          </div> 

          <div className="sub-account-details-left">
          <ul>
                  <li className="details-left">
                      Transaction summary
                  </li>
                    <div><hr className="dash" /> </div>
                  <li className="transaction-count">Transaction count
                      <span className="lefty-side">58</span>
                  </li>
                  <li className="total-amount">Total amount
                      <span className="lefty-side">&#8358; 532,000</span>
                  </li>
                  <li className="payment-method">Payment methods
                      <span className="qr-Code"> <span className="qrCode">QR code</span></span>
                  </li>
                  <li className="transaction-timeline">Transaction timeline
                      <span className="lefty-side">Sept 28, 2021 - Jun 10, 2021</span>
                  </li>
              </ul>
          </div>
         <div>
             <span className="table-Sub">Transactions</span>
             <span className="small-line"></span>
             <span className="sub-export" >
                       <div className="transactionExport">Export</div>
             </span>
         </div> 

          <RetailSubTable />
       
   </div>
    )
}

export default Settings
