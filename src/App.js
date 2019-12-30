import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './views/LoginPage';
import SignupPage from './views/SignupPage';
import Dashbaord from './views/Dashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Switch> */}
          <Route exact path='/' component={Dashbaord} />
          <Route path='/login' component={LoginPage} />
          <Route exact path='/signup' component={SignupPage} />
          {/* <Route component={() => <div>Error</div>} /> */}
        {/* </Switch> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
