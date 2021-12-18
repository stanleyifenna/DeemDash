import React from 'react';
import './styles/app.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Failed, Forgot, Home, Login, Register, Success, Verify } from './components';





function App() {
  return (
     <>
      <Router>
       <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Failed" component={Failed} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Success" component={Success} />
        <Route exact path="/Verify" component={Verify} />
        <Route exact path="/Forgot" component={Forgot} />

       </Switch>
      </Router>
     </>
  );
}
export default App;


