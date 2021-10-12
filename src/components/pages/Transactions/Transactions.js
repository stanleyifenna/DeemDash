import React from 'react';
import './Transactions.css';
import TransactionTable from './TransactionTable';
import filter  from '../../../icons/filter.svg';
import calender  from '../../../icons/calender.svg';
import { BiSearch, BiFilterAlt } from 'react-icons/bi';
import { MdDateRange } from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';



function Transactions() {
    return (
        <div>
           <div className="transactionBar">
               <div className='transactionTitle'>
                   <span className="transactions">Transactions</span>
                   <span className="valueBadge">21</span>
                   <span><div className="transactionSearch">
                   <input type="text" placeholder="search" className="search" />
                   <div className="searchIcon"><BiSearch /></div>
                    </div>
                   </span>
                   
                   <span className="date" >
                       <div className="transactionDate"><img src={calender} alt="calender" /></div>
                   </span>

                   <span className="new" >
                       <div className="transactionNew"><FiPlus className="fiPlus" />New</div>
                   </span>

                   <span className="filter" >
                       <div className="transactionFilter"><img src={filter} alt="filter" />Filter</div>
                   </span>

                   <span className="export" >
                       <div className="transactionExport">Export</div>
                   </span>

               </div>                    
               <div className="transactionGross">
                   <h3 className="grossAmount">Total Gross Amount</h3>
                   <hr className="horizontal"/>
                     <div className="transactionAmount">&#8358; 532,000</div>
               </div>
               <TransactionTable />
           </div>
        </div>
    )
}

export default Transactions
