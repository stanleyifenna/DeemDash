import React from 'react';
import './OnBoarding.css';
import './BusinessDetails.css';
import { BiCircle } from 'react-icons/bi';
import { Link } from "react-router-dom";
import { FaCheckCircle } from 'react-icons/fa';
import { RiPlayMiniFill } from 'react-icons/ri';
import { DownOutlined } from '@ant-design/icons';

function BusinessDetails() {
    return (
        <div className="OnBoardingBar">
        <div className="onBoarding">Onboarding</div>
        <div className="counting">1/5 Complete</div>
        <ul className="detailsSection">
          <li className="accountList"> <FaCheckCircle className="checkIcon"/>Account verification</li>
          <br />
          <li className="accountList list11"> <BiCircle  className="circleIcon"/>Business information</li>
          <br />
          <li className="accountList"> <BiCircle className="circleIcon"/>Personal information</li>
        <span><RiPlayMiniFill  className="miniFill2" /></span>

          
          <br />
          <li className="accountList"> <BiCircle className="circleIcon"/>Bank details</li>
          <br />
          <li className="accountList"> <BiCircle className="circleIcon"/>Documents</li>
        </ul>

        <div className="leftSection">

          <div className="accountVerification">Business details</div>
          <div className="businessDetails">Please tell us more about your business, this
              information is required to verify your business
          </div>
          <form className="businessSection">
            <lable className="soleTrader"><span className="sole-Trader">Sole Trader</span></lable>
            <lable className="registeredBusiness" ><span className="registered-Business" >Registered business</span></lable>
            <lable className="businessName">Business name
            <input type="text" placeholder="placeholder" className="business-Name" />
            </lable>
            <lable className="businessCategory" >Business category
         
            <input type="text" placeholder="placeholder"  className="business-Category" />
            < DownOutlined className="dropdown"/>
            </lable>
            <lable className="businessEmail">Business email
            <input type="email" placeholder="placeholder" className="business-Email" />
            </lable>
            <li className="businessPhone" >Business phone
            <input type="text" placeholder="placeholder" className="business-Phone" />
            </li>
            <li className="businessWebsite" >Website ( optional )
            <input type="link" placeholder="placeholder"  className="business-Website" />
            </li>
            <lable className="businessState">State
            <input type="text" placeholder="Day"  className="business-State" />
            </lable>
            <li className="businessCity">City
            <input type="text" placeholder="year" className="business-City" />
            </li>
            <lable className="businessAddress">Business address
            <input type="text" placeholder="placeholder" className="business-Address" />
            </lable>
           <Link to="/PersonalInformation"> <button className="next-btn">Next</button> </Link>
          </form>

        </div>
        
        

       </div>
    )
}

export default BusinessDetails
