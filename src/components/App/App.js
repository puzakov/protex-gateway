import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Auth, CertsList, MobilePIN, MobileApproove } from "../../screens";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/certs" component={CertsList} />
          <Route exact path="/pin" component={MobilePIN} />
          <Route exact path="/approve" component={MobileApproove} />
          <Redirect to="/auth" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(
  state => ({ data: state })
)(App);
