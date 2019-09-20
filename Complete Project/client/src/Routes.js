import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./pages/HomePage";
// import Policy from "./pages/Policy";
import DonorLogin from "./pages/DonorLogin";
import HospitalLogin from "./pages/HospitalLogin";
import DonorSignUp from "./pages/DonorSignUp";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
// import Home from "./pages/Home";

import HospitalList from "./pages/HospitalList";
import HospitalTest from "./pages/hospital/test";

import Hnav from "./pages/hospital/Hnav";

import HospitalNav from "./pages/hospital/HospitalNav";
import Hprofile from "./pages/hospital/Hprofile";
import Happrove from "./pages/hospital/Happrove";
import Hregister from "./pages/hospital/Hregister";
import Hmatch from "./pages/hospital/Hmatch";
import Hrecord from "./pages/hospital/Hrecord";
import PrivateRoute from "./pages/PrivateRoute";




class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/policy" component={Policy} /> */}
        <Route exact path="/donorlogin" component={DonorLogin} />
        <Route exact path="/signup" component={DonorSignUp} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/hospital/Approve-Donor" component={Happrove} authenticated={this.props.authenticated}/>
        <Route exact path="/donor/list/:city" component={HospitalList} />
        <Route exact path="/hospital/nav" component={HospitalNav} authenticated={this.props.authenticated} />
        <Route exact path="/hospital/hnav" component={Hnav} authenticated={this.props.authenticated} />
        <Route exact path="/hospital/test" component={HospitalTest} authenticated={this.props.authenticated} />
        <Route exact path="/hospital/Profile" component={Hprofile} authenticated={this.props.authenticated} />
        <Route exact path="/hospital/Register-Recipient" component={Hregister} authenticated={this.props.authenticated} />
        <Route exact path="/hospital/Transplant-Match" component={Hmatch} authenticated={this.props.authenticated} />
        <Route exact path="/hospital/Patient-Record" component={Hrecord} authenticated={this.props.authenticated} />
        {!this.props.authenticated ?
          <Route exact path="/hospital" render={() => (<HospitalLogin loginUser={(data) => this.props.loginUser(data)} />)} />
          : <Redirect to="/hospital/Profile" />
        }
        <Route exact path="" component={NotFound} />
        {/* <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        /> */}
      </Switch>
    );
  }
}

export default Routes;
