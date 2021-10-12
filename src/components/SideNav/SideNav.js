import React, { useState } from "react";
import "./SideNav.css";
import { FaBars } from "react-icons/fa";
import { RiNotificationLine } from "react-icons/ri";
import { Layout } from "antd";
import { Link, Redirect } from "react-router-dom";
import {
  CheckSquareOutlined,
  DownOutlined,
  HomeOutlined,
  RightOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Header, Sider } = Layout;

function SideNav({ authorized }) {
  if (!authorized) {
    return <Redirect to="/LogIn" />;
  }

  const [inactive, setInactive] = useState(false);
  const [expand, setExpand] = useState(false);

  return (
    <Layout>
      <Sider
        className={`side-menu ${inactive ? "inactive" : ""}`}
        width={"284"}
      >
        <div className="top-section">
          <Link to="/">
            <div>
              <img src="images/icon48.png" alt="logo" className="logo" />
              <span className="deem-Pay">DeemPay</span>
            </div>
          </Link>

          {/*<div className="toggle-menu-btn"  onClick={()=> setInactive(!inactive)}> 
         {inactive ? (<ImCancelCircle  />) : (<FaBars />)}
         </div> */}
        </div>

        <br />

        <div className="merchant active">
          <li className="merchantItem">
            <img
              src="images/mission.png"
              alt="user-image"
              className="sidebarIcon topAvatar"
            />
            Merchant
          </li>
        </div>

        <br />

        <div className="main-menu">
          <ul>
            <li>
              <a className="menu-item">MENU</a>
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/OnBoarding" className="links">
              <li className="sidebarListItem">
                <CheckSquareOutlined className="sidebarIcon" />
                <span>Onboarding</span>
              </li>
            </Link>

            <br />
            <Link to="/" className="links">
              <li className="sidebarListItem">
                <HomeOutlined className="sidebarIcon" />
                <span>Home</span>
              </li>
            </Link>
            <br />
            <li>
              <a className="sidebarListItem" onClick={() => setExpand(!expand)}>
                <HomeOutlined className="sidebarIcon" />
                <span>Payment collection</span>
                <span className="downIcon">
                  {expand ? <RightOutlined /> : <DownOutlined />}
                </span>
              </a>

              <ul className={`sub-menu ${expand ? "active" : ""}`}>
                <Link to="/Transactions" className="links">
                  <li className="subListItem">
                    <a> Transactions</a>
                  </li>
                </Link>
                <Link to="/Report" className="links">
                  <li className="subListItem">
                    <a> Report</a>
                  </li>
                </Link>
                <Link to="/PaymentStand" className="links">
                  <li className="subListItem">
                    <a> Payment Stand</a>
                  </li>
                </Link>
              </ul>
            </li>

            <br />
            <Link to="/Settings" className="links">
              <li className="sidebarListItem">
                <SettingOutlined className="sidebarIcon" />
                <span>Retail Sub Accounts</span>
              </li>
            </Link>
            <br />
            <Link to="/" className="links">
              <li className="sidebarListItem">
                <SettingOutlined className="sidebarIcon" />
                <span>Settings</span>
              </li>
            </Link>
          </ul>
        </div>
      </Sider>

      <Layout>
        <Header className="topbar">
          <div className="topbarWrapper">
            <div className="topLeft"></div>
            <div className="topRight">
              <div className="topbarIconContainer">
                <span className="topNotification">
                  <RiNotificationLine />
                </span>
                <span className="topIconBadge">25</span>
              </div>
              <img src="images/mission.png" alt="user" className="topAvatar" />
              <div className="topbarIconContainer">
                <span className="topIcon">
                  <DownOutlined />
                </span>
              </div>
            </div>
          </div>
        </Header>
      </Layout>
    </Layout>
  );
}

export default SideNav;

{
  /*
  
  
    <Layout>
      <Sider className={`side-menu ${inactive ? "inactive" : ""}`}  width={'284'}>
      <div className="top-section">

        <Link to="/">
        <div>
          <img src="images/icon48.png" alt="logo"  className="logo" />
          <span className="deem-Pay">DeemPay</span>
        </div>
        </Link>

        {/*<div className="toggle-menu-btn"  onClick={()=> setInactive(!inactive)}> 
         {inactive ? (<ImCancelCircle  />) : (<FaBars />)}
         </div> */
}

{
  /*
         </div>

         <br/>
   
         <div className="merchant active">
                 <li className="merchantItem">
                   <img src='images/mission.png' alt='user-image' className="sidebarIcon topAvatar" />
                   Merchant
                 </li>
         </div>
   
         <br/>
   
         <div className="main-menu">
           <ul>
             <li>
               <a className="menu-item">MENU</a>
             </li>
           </ul>
         </div>
   
         <div className="sidebarMenu">
             <ul className="sidebarList">
              
              <Link to="/OnBoarding"  className="links">
               <li className="sidebarListItem">
                 <CheckSquareOutlined className="sidebarIcon" />
                <span>Onboarding</span>
               </li>
               </Link>
             
               <br />
               <Link to="/"  className="links">
                <li className="sidebarListItem">
                 <HomeOutlined className="sidebarIcon" />
                 <span>Home</span>
               </li>
               </Link>
               <br />
               <li >
                 <a className="sidebarListItem" onClick={() => setExpand(!expand)}>
                 <HomeOutlined className="sidebarIcon" />
                <span>Payment collection</span>
                 <span className='downIcon'>{expand ? (<  RightOutlined  />) : (<DownOutlined />)}</span>
                 </a> 
                 
                    <ul className={`sub-menu ${expand ? "active" : ""}`}>
                     <Link to='/Transactions' className="links">
                      <li className="subListItem" >
                       <a> Transactions</a>
                      </li>
                      </Link>
                      <Link to='/Report'  className="links">
                      <li className="subListItem" >
                       <a> Report</a>
                      </li>
                      </Link>
                      <Link to='/PaymentStand'  className="links">
                      <li className="subListItem" >
                      <a> Payment Stand</a>
                      </li>
                      </Link>
                    </ul>             
               </li>
               
               <br />
               <Link to="/Settings"  className="links">
               <li className="sidebarListItem">
                 <SettingOutlined className="sidebarIcon" />
                <span>Retail Sub Accounts</span>
               </li>
               </Link>
               <br />
               <Link to='/'  className="links">
               <li className="sidebarListItem">
                 <SettingOutlined className="sidebarIcon" />
                <span>Settings</span>
               </li>
               </Link>
             </ul>
           </div>
       </Sider>
   
   <Layout>
       
   <Header className="topbar">
   <div className="topbarWrapper">
   <div className="topLeft">
   
   </div>
   <div className="topRight">
     <div className="topbarIconContainer">
       <span className='topNotification'><RiNotificationLine /></span>
       <span className="topIconBadge">25</span>
     </div>        
     <img src='images/mission.png' alt='user' className="topAvatar" />
     <div className="topbarIconContainer">
     <span className='topIcon'><DownOutlined /></span>
     </div>
   </div>
   </div>
   </Header>
   
   </Layout>
   </Layout>

 */
}
