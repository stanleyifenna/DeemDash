import React from 'react'
import './OnBoarding.css';
import './DocumentUpload.css';
import { BiCircle } from 'react-icons/bi';
import { Link } from "react-router-dom";
import { FaCheckCircle } from 'react-icons/fa';
import { RiPlayMiniFill } from 'react-icons/ri';
import { DownOutlined } from '@ant-design/icons';

function DocumentUpload() {
    return (
        <div>
        <div className="OnBoardingBar">
  <div className="onBoarding">Onboarding</div>
  <div className="counting">4/5 Complete</div>
  <ul className="detailsSection">
    <li className="accountList"> <FaCheckCircle className="checkIcon"/>Account verification</li>
    <br />
    <li className="accountList"><FaCheckCircle className="checkIcon"/>Business information</li>
    <br />
    <li className="accountList"><FaCheckCircle className="checkIcon"/>Personal information</li>
  <span><RiPlayMiniFill  className="miniFill2" /></span>

    
    <br />
    <li className="accountList"><FaCheckCircle className="checkIcon"/>Bank details</li>
    <br />
    <li className="accountList list11"> <BiCircle className="circleIcon"/>Documents</li>
  </ul>

  <div className="leftSection">

    <div className="accountVerification">Document Upload</div>
    <form className="uploadSection">
      <lable className="certificateBusiness">Cerificate of business
      <input type="text" placeholder="placeholder" className="certificate-Business" />
       < DownOutlined className="dropdown"/>
        </lable>
        <lable className="registeration" >Registeration
         <input type="text" placeholder="placeholder"  className="Registeration" />
         </lable>
       <lable className="businessLogo"> Business logo
       <span className="chooseFile"><span className="choose-File">Choose file</span> </span>
      </lable>
     <Link to="/"> <button className="submit-btn">Submit</button> </Link>
    </form>

  </div>
  
  

 </div>
  </div>
    )
}

export default DocumentUpload
