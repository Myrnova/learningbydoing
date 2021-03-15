import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn/index'
import Dashboard from '../pages/Dashboard/index'
import Documentos from '../pages/Documentos';


const Routes: React.FC = () => (
  <>
  <Switch>
  <Route  path="/" exact component={SignIn} />    
  <Route  path="/dashboard" component={Dashboard} />
  <Route  path="/documentos" component={Documentos}/>
</Switch>
</>
);

export default Routes;