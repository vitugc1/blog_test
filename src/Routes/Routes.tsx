import { Route, Switch } from 'react-router-dom';

import { Signin } from '../pages/Signin/Signin';
import { Home } from '../pages/Home/Home';
import { AppointmentCreate } from '../pages/AppointmentCreate/AppointmentCreate';
import { AppointmentDetails } from '../pages/AppointmentDetails/AppointmentDetails';

export const Routes = () => {

    return (
        <Switch>
          <Route path="/" exact component={Signin} />
          <Route path="/home" component={Home} />
          <Route path="/post/create" component={AppointmentCreate} />
          <Route path="/post/details/:id" component={AppointmentDetails} />
        </Switch>
    )
}