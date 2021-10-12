import React from 'react';
import Charts from './Charts'
import './Home.css';
import { DownOutlined } from '@ant-design/icons';
import { BsArrowUpRight, BsArrowUp, BsCreditCard } from 'react-icons/bs';

function Home() {
    return (
        <div className="homeSection">
         <span className="overview">Overview</span>
         <div classNam="duedate"><span className="numberDays">30 days< DownOutlined className="drpIcon"/></span> </div>
         

         <div className="months">< DownOutlined className="dateIcon"/><span className="numberMonths">Jul-30</span></div>
         
         <div className="featuredItem">
             <span className="featuredTitle">Revanue</span>
            <span className="featuredMoney">&#8358;100,000</span>
          
          <div className="featuredRate">
          <span className="featuredMoneyRate">
            <BsArrowUp />5%
         </span>
          </div>
          <span className="featuredleft">70 Customers</span>
          <span className="featuredright">101 Transactions</span>
           </div>
           
        <div className="featuredItem2">
        <span className="transactionTitle">Transactions</span>
          <div className="featuredBox">
          <span className="transactionpaid">Cindy paid  &#8358;3,400</span>
          <span className="featuredAgo">10m ago</span>
          <span className="featuredwallet"><BsCreditCard className="walletIcon"/></span>
         </div>
         <span className="verticalLine"></span>
         <span className="featureddigit">65</span>     
        
      </div>

      <Charts />

        </div>
    )
}

export default Home
