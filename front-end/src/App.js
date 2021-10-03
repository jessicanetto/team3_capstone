// import axios from "axios";
// import { useState, useEffect } from "react";
// import { apiURL } from "./util/apiURL.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserProvider } from "./Providers/UserProvider.js";
import "./index.css";
import { Connections } from "./Pages/Connections";
import { LoginPage } from "./Pages/LoginPage";
import { Dashboard } from "./Pages/Dashboard";
import { Edit } from "./Pages/Edit";
import SignUp from './Components/SignUp'
import QrCode from "./Components/QRCode.js";
import ExternalPage from "./Pages/ExternalPage.js";

// import { UserContext } from "./Providers/UserProvider.js";

// const API = apiURL();

function App() {
  return (
    <section className="App">
      <UserProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route exact path="/external">
              <ExternalPage />
            </Route>
            <Route exact path="/signup" >
              <SignUp />
            </Route>
            <Route exact path="/qrcode" >
              <QrCode />
            </Route>
            <Route path="/connections">
              <Connections />
            </Route>
            <Route exact path="/dashboard/edit">
              <Edit />
            </Route>
            <Route exact path="/dashboard" >
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </UserProvider>
    </section>
  );
}

export default App;
