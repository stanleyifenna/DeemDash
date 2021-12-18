import React from 'react';
import './OnBoarding.css';
import './AccountVerification.css';
import { BiCircle } from 'react-icons/bi';
import { Link } from "react-router-dom";
import { FaCheckCircle } from 'react-icons/fa';
import { RiPlayMiniFill } from 'react-icons/ri';


function AccountVerification() {
    return (
        <div className="OnBoardingBar">
        <div className="onBoarding">Onboarding</div>
        <div className="counting">1/5 Complete</div>
        <ul className="detailsSection">
          <li className="accountList list11"> <FaCheckCircle className="checkIcon"/>Account verification</li>
          <br />
          <li className="accountList"> <BiCircle  className="circleIcon"/>Business information</li>
          <br />
          <li className="accountList"> <BiCircle className="circleIcon"/>Personal information</li>
        <span><RiPlayMiniFill  className="miniFill2" /></span>

          
          <br />
          <li className="accountList"> <BiCircle className="circleIcon"/>Bank details</li>
          <br />
          <li className="accountList"> <BiCircle className="circleIcon"/>Documents</li>
        </ul>

        <div className="leftSection">

          <div className="accountVerification">Account verification</div>
          <div className="mailSection">
            <img src="" alt="mail-logo" className="mailLogo" />
            <div className="emailVerification">Account verification successful</div>
            <div className="checkInbox">On to the next!</div>
            <div className="emailWriteup">
            You have successfully activated your DeemPay account. 
            Please fill your profile details to start accepting money instantly
            </div>
           <Link to="/BusinessDetails"> <button className="resend-btn">Next</button> </Link>
          </div>

        </div>
        

       </div>
    )
}

export default AccountVerification
