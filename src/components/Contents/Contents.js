
import React from 'react';
import 'antd/dist/antd.css';
import './Contents.css';
import { BsArrowUpRight, BsArrowUp, BsDot } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import Charts from'../Charts/Charts'; 
import { Layout } from 'antd';

const { Content } = Layout;

function Contents() {
    return (
       <Layout className="feautredbackground">
         <Content>
          <div  className="featured">
            <div className="featuredItem">
             <span className="featuredTitle">Revanue</span>

            <div className="featuredMoneyContainer">
            <span className="featuredMoney"><span>&#8358;</span>100,000</span>
          </div>
          <div className="featuredRate">
          <span className="featuredMoneyRate">
            <BsArrowUp  className="featuredIcon"/>5%
         </span>
          </div>
          <span className="featuredleft">70 Customers</span>
          <span className="featuredright">101 Transactions</span>
           </div>

        <div className="featuredItem2">
        <span className="featuredTitle2">Settlement</span>
          <span className="featuredArrow featuredCircle">
          <BsArrowUpRight className="featuredIcon"/>
         </span>
        
        <span className="feauturedCircle"></span>
      
        <div className="recentSub"> <span className="featuredSub"><GoPrimitiveDot className="featuredDot" />Recent</span>
         <span className="verticalLine"></span>
        </div>
        <div className="featuredAmount">
          <span className="featuredMony"><span>&#8358;</span>34,415</span>
        </div>
        
        <div className="pendingSub"> <span className="featuredSub"><GoPrimitiveDot className="featureddot" />Pending</span>
        
        </div>
        <div className="pendingAmount">
          <span className="featuredMony"><span>&#8358;</span>24,000</span>
        </div>

      </div>

         </div>

         <Charts />
         </Content>


       </Layout>
    )
}

export default Contents
 
