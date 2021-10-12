{/*

import React from 'react';
import './Charts.css';


function Charts() {
  return (
    <div className="chartboundary">
     <div className="chart-title"> Total sold</div>


   
     <form className="signupSection">
          

            <lable className="firstName" >First name
            <input type="text" placeholder="placeholder"  className="first-Name" />
            </lable>

            <lable className="lastname" >Last name
            <input type="text" placeholder="placeholder"  className="last-Name" />
            </lable>
            
            <lable className="email" >Email
            <input type="email" placeholder="placeholder"  className="Email" />
            </lable>

            <lable className="password">Password
            <input type="text" placeholder="password" className="Password" />
            <BsEye className="dropdown"/>
            </lable>
                      
           <Link to="/OnBoarding"> <button className="create-btn">Create account</button> </Link>
           <BsEye className="dropdown"/>
           <span>By clicking the Create account, you have agreed to Deemapay privacy and trems of services</span>
          </form>
          <span>Existing user?</span>
          <Link to="/LogIn"><span>Log In</span></Link>



    </div>
  )
}

export default Charts 



import React, { useState } from 'react';
import './SignUp.css';
import { Link } from "react-router-dom";
import { DownOutlined } from '@ant-design/icons';
import { BsEyeSlash, BsEye } from 'react-icons/bs'
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import 'antd/dist/antd.css';
import {
  Form,
  Input,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';

const { Option } = Select;
const country = [
  {
    value: 'Nigeria',
    label: 'Nigeria',
  
  },
  
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
   
    
  },
};


function SignUp() {

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

 
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };

 

    return (
        <div className="signup-background">

        <div class="column">
        <div>
            <img src="images/icon48.png" alt="logo"  className="logo" />
            <span  className="signupDeempay">DeemPay</span>
          </div>
          <span  className="setAccount" >Set up your account.</span>
          <span  className="noTime" >Get up & running in no time</span>
        </div>

        <div className="column">
        <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    className="signup-Card">

       <Form
        rules={[
          {
            type: 'array',
            message: 'Please select your country!',
          },
        ]} 
      >
        <lable className="country-name">Country
            <input type="text" placeholder="placeholder" className="Country" options={country} className="country-input"  />
            < DownOutlined className="dropdown"/>
        </lable>
      </Form>
     

      <Form
        name="firstname"
        label="First name"
        rules={[
          {
            message: 'Please input your firstname!',
            whitespace: true,
          },
        ]}
      >
        <lable className="firstName" >First name
        <input type="text" placeholder="placeholder"  className="first-Name" /> 
         </lable>
      </Form>

      <Form
        name="lastname"
        label="Last name"
        rules={[
          {
            message: 'Please input your lastname!',
            whitespace: true,
          },
        ]}
      >
        <lable className="lastname" >Last name
            <input type="text" placeholder="placeholder"  className="last-Name" />
            </lable>
      </Form>

      <Form
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <lable className="email" >Email
            <input type="email" placeholder="placeholder"  className="input-Email" />
        </lable>

      </Form>

      <Form
        name="password"
        label="Password"
        rules={[
          {
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
         <lable className="password">Password
            <BsEye className="dropdown"/>
         </lable>
        <Input.Password  className="password-input"/>
      </Form>

    
      <Form
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
       
      </Form>
        <Button  className="create-account">
          Create account
        </Button>
  
      <Checkbox className="check-part">
        By clicking the Create account, you have agreed to Deemapay  <a target="_blank" href="https://www.google.com">privacy</a> and <a target="_blank" href="https://www.google.com">terms of service</a>
        </Checkbox>
    </Form>
        </div>





        </div>
    )
}

export default SignUp





*/}