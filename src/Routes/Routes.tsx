import { Route, Switch } from 'react-router-dom';

import { Signin } from '../pages/Signin/Signin';
import { Home } from '../pages/Home/Home';
import { AppointmentCreate } from '../pages/AppointmentCreate/AppointmentCreate';

export const Routes = () => {
    return (
        <Switch>
          <Route path="/" exact component={Signin} />
          <Route path="/home" component={Home} />
          <Route path="/CreatePost" component={AppointmentCreate} />
        </Switch>
    )
}