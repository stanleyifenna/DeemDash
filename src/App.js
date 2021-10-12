import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Settings from'./components/pages/Settings/Settings';
import PaymentStand from'./components/pages/PaymentStand/PaymentStand';
import NoSubAccount from'./components/pages/RetailSubAccount/NoSubAccount';
import RetailSubTable from'./components/pages/RetailSubAccount/RetailSubTable';
import OnBoarding from'./components/pages/OnBoarding/OnBoarding';
import BankDetails from'./components/pages/OnBoarding/BankDetails';
import PersonalInformation from'./components/pages/OnBoarding/PersonalInformation';
import BusinessDetails from'./components/pages/OnBoarding/BusinessDetails';
import DocumentUpload from'./components/pages/OnBoarding/DocumentUpload';
import AccountVerification from'./components/pages/OnBoarding/AccountVerification';
import Transactions from'./components/pages/Transactions/Transactions';
import Home from './components/Home/Home'; 
import SideNav from './components/SideNav/SideNav'; 
import  LogIn from './components/Auth/LogIn';




function App() {
   const [inactive, setInactive] = useState(false) 
  return (
      <Router>

       
       <SideNav authorized={true}
        onCollapse={(inactive) => {
          setInactive(inactive);
        }}
        />
       <div className={`container ${inactive ? "inactive" : ""}`}>
       <Switch>
         <Route path='/LogIn' exact component={LogIn} />
         <Route path='/OnBoarding' exact component={OnBoarding} />
         <Route path='/AccountVerification' exact  component={AccountVerification} />
         <Route path='/BusinessDetails' exact component={BusinessDetails} />
         <Route path='/BankDetails' exact component={BankDetails} />
         <Route path='/DocumentUpload' exact component={DocumentUpload} />
         <Route path='/PersonalInformation' exact component={PersonalInformation} />
         <Route path='/Transactions' exact component={Transactions} />
         <Route path='/PaymentStand' exact component={PaymentStand} />
         <Route path='/Settings' exact component={Settings} />
         <Route path='/RetailSubTable ' exact component={RetailSubTable } />
         <Route path='/NoSubAccount ' exact component={NoSubAccount } />
         <Route path='/' exact component={Home} />
       </Switch>
       </div>
       
      </Router>
  );
}
export default App;



