import React from 'react';
import './OnBoarding.css';
import './BankDetails.css';
import { BiCircle } from 'react-icons/bi';
import { Link } from "react-router-dom";
import { FaCheckCircle } from 'react-icons/fa';
import { RiPlayMiniFill } from 'react-icons/ri';
import { DownOutlined } from '@ant-design/icons';

function BankDetails() {
    return (
        <div>
              <div className="OnBoardingBar">
        <div className="onBoarding">Onboarding</div>
        <div className="counting">3/5 Complete</div>
        <ul className="detailsSection">
          <li className="accountList"> <FaCheckCircle className="checkIcon"/>Account verification</li>
          <br />
          <li className="accountList"><FaCheckCircle className="checkIcon"/>Business information</li>
          <br />
          <li className="accountList"> <FaCheckCircle className="checkIcon"/>Personal information</li>
        <span><RiPlayMiniFill  className="miniFill2" /></span>

          
          <br />
          <li className="accountList list11"> <BiCircle className="circleIcon"/>Bank details</li>
          <br />
          <li className="accountList"> <BiCircle className="circleIcon"/>Documents</li>
        </ul>

        <div className="leftSection">

          <div className="accountVerification">Bank Details</div>
          <div className="personalDetails">Please provide your bank details. This is required to settle 
          your payment to your bank account. Your account name must match with your first and last name
          in your ID documents. 
          </div>
          <form className="bankSection">
            <lable className="bank">Bank
            <input type="text" placeholder="placeholder" className="Bank" />
            < DownOutlined className="dropdown"/>
            </lable>
            <lable className="accountNumber" >Account Number
            <input type="text" placeholder="placeholder"  className="account-Number" />
            </lable>
            <lable className="accountName">Account Name
            <input type="email" placeholder="placeholder" className="account-Name" />
            </lable>
                      
           <Link to="/DocumentUpload"> <button className="nxt-btn">Next</button> </Link>
          </form>

        </div>
        
        

       </div>
        </div>
    )
}

export default BankDetails
