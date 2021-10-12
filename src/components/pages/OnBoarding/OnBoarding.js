import React from 'react';
import './OnBoarding.css';
import { BiCircle } from 'react-icons/bi';
import { Link } from "react-router-dom";
import { RiPlayMiniFill } from 'react-icons/ri';




function OnBoarding() {
    return (
        <div className="OnBoardingBar">
         <div className="onBoarding">Onboarding</div>
         <div className="counting">0/5 Complete</div>
         <ul className="detailsSection">
           <li className="accountList list1"> <BiCircle className="circleIcon"/>Account verification</li>
           <br />
           <li className="accountList"> <BiCircle  className="circleIcon"/>Business information</li>
           <br />
           <li className="accountList"> <BiCircle className="circleIcon"/>Personal information</li>
         <span><RiPlayMiniFill  className="miniFill" /></span>

           
           <br />
           <li className="accountList list"> <BiCircle className="circleIcon"/>Bank details</li>
           <br />
           <li className="accountList"> <BiCircle className="circleIcon"/>Documents</li>
         </ul>

         <div className="leftSection">

           <div className="accountVerification">Account Verification</div>
           <div className="mailSection">
             <img src="" alt="mail-logo" className="mailLogo" />
             <div className="emailVerification">Email verification needed</div>
             <div className="checkInbox">Check your inbox!</div>
             <div className="emailWriteup">
               Please verify the email sent to your email address, to be able to proceed
               with the onboarding
             </div>
            <Link to="/AccountVerification"> <button className="resend-btn">Resend</button> </Link>
           </div>

         </div>
         

        </div>
    )
}

export default OnBoarding
