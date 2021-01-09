import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Route from './Route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard/index';

// import Route from './Route';
import LogIn from '../pages/LogIn/index';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={LogIn} />
      <Route path="/signin" component={SignIn} />

      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
