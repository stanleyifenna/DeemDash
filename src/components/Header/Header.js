import React from 'react';
import './Header.css';
import { 
  NotificationsNone,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  } from "@material-ui/icons";

function Header() {
    return (
   <div>
       <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
             {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>        
          <img src='images/mission.png' alt='user' className="topAvatar" />
          <div className="topbarIconContainer">
          <span className='topbarIcon'><DownOutlined /></span>
          </div>
        </div>
      </div>
     </div>
    </div>
    )
}

export default Header
