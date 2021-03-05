import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn/index'
import Dashboard from '../pages/Dashboard/index'
import UploadDoc from '../pages/UploadDoc/index'


const Routes: React.FC = () => (
  <Switch>
  <Route  path="/" exact component={SignIn} />
  <Route  path="/dashboard" component={Dashboard} />
  <Route  path="/uploaddoc" component={UploadDoc} />

</Switch>
);

export default Routes;