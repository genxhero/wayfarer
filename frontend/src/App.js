import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import GreetingContainer from "./components/greeting/greeting_container";
import SignUpFormContainer from "./components/session_form/signup_form_container";
import LogInFormContainer from "./components/session_form/login_form_container";
import Splash from "./components/splash";
import { AuthRoute, ProtectedRoute} from "./util/route_util";
import GasPane from "./components/gas_pane";
import AddVehicleFormContainer from "./components/add_vehicle_form_container";
import VehicleIndexContainer from "./components/vehicle_index_container";


const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>
    <Switch>
      <Route exact path="/" component={Splash} />
      <Route exact path="/distance" component={GasPane}/ >
      <Route exact path="/addvehicle" component={AddVehicleFormContainer} />
      <ProtectedRoute exact path="/vehicles" component={VehicleIndexContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;
