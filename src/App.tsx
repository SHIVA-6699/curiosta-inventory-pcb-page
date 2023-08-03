import Account from "@pages/Account";
import Guide from "@pages/Guide";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Request from "@pages/Request";
import Signup from "@pages/Signup";
import Welcome from "@pages/Welcome";
import Return from "@pages/Return";
import Router, { Route } from "preact-router";
import PCB from "@pages/PCB_Components";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Guide} />
      <Route path="/welcome" component={Welcome} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/home" component={Home} />
      <Route path="/account" component={Account} />
      <Route path="/create-requests" component={Request} />
      <Route path="/Return" component={Return}/>
      <Route path="/PCB_Components" component={PCB}/>
    </Router>
  );
};

export default App;
