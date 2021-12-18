import React from 'react';
import './OnBoarding.css';
import './PersonalInformation.css';
import { BiCircle } from 'react-icons/bi';
import { Link } from "react-router-dom";
import { FaCheckCircle } from 'react-icons/fa';
import { RiPlayMiniFill } from 'react-icons/ri';
import { DownOutlined } from '@ant-design/icons';

function PersonalInformation() {
    return (
        <div className="OnBoardingBar">
        <div className="onBoarding">Onboarding</div>
        <div className="counting">2/5 Complete</div>
        <ul className="detailsSection">
          <li className="accountList"> <FaCheckCircle className="checkIcon"/>Account verification</li>
          <br />
          <li className="accountList"><FaCheckCircle className="checkIcon"/>Business information</li>
          <br />
          <li className="accountList list11"> <BiCircle className="circleIcon"/>Personal information</li>
        <span><RiPlayMiniFill  className="miniFill2" /></span>

          
          <br />
          <li className="accountList"> <BiCircle className="circleIcon"/>Bank details</li>
          <br />
          <li className="accountList"> <BiCircle className="circleIcon"/>Documents</li>
        </ul>

        <div className="leftSection">

          <div className="accountVerification">Personal Information</div>
          <div className="personalDetails">Please tell us more about yourself. This is required to verify 
          your identity. Your name should match with that on your ID documents. 
          </div>
          <form className="personalSection">
            <lable className="genderName">Gender
            <input type="text" placeholder="placeholder" className="gender-Name" />
            < DownOutlined className="dropdown"/>
            </lable>
            <lable className="firstName" >First Name
            <input type="text" placeholder="placeholder"  className="first-Name" />
            </lable>
            <lable className="lastName">Last Name
            <input type="email" placeholder="placeholder" className="last-Name" />
            </lable>
            <li className="identificationType" >Identification Type
            <input type="text" placeholder="placeholder" className="identification-Type" />
            < DownOutlined className="dropdown"/>
            </li>
            <li className="identificationNumber" >Identification Number
            <input type="link" placeholder="placeholder"  className="identification-Number" />
            </li>
            <lable className="birthday">Birthday
            <input type="text" placeholder="Month"  className="Birthday" />
            </lable>
            <li className="day">Day
            <input type="text" placeholder="Day" className="Day" />
            </li>
            <li className="year">Year
            <input type="text" placeholder="year" className="Year" />
            </li>
            <lable className="choseFile">
             <span className="chose-File">Choose file</span>
            </lable>
           <Link to="/BankDetails"> <button className="next-btn">Next</button> </Link>
          </form>

        </div>
        
        

       </div>
    )
}

export default PersonalInformation
