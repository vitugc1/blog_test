import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Signin } from './pages/Signin/Signin';
import { Home } from './pages/Home/Home';
import { AppointmentCreate } from './pages/AppointmentCreate/AppointmentCreate';
import { AppointmentDetails } from './pages/AppointmentDetails/AppointmentDetails';


export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Signin} />
        <Route path="/Home" component={Home} />
        <Route path="/CreatePost" component={AppointmentCreate} />
        <Route path="/DetailsPost" component={AppointmentDetails} />
      </Switch>
    </BrowserRouter>
  );
}





