import React from "react";
import App from "../App";
import Search from "../components/Search/Search.js";
import Bookshelf from "../components/Bookshelf/Bookshelf.js";
import Details from "../components/Details/Details";
import { Route, Switch } from "react-router-dom";
import { CookieProvider } from "../api/SessionContext.js";
import { ProtectedRoute } from "./ProtectedRoute.js";
import NavBar from "../components/Navbar/NavBar";

export const Routes = () => {
  return (
    <CookieProvider>
      <NavBar />
      <Switch>
        <Route exact path="/" component={App} />
        <ProtectedRoute path="/Search" component={Search} />
        <ProtectedRoute path="/Bookshelf" component={Bookshelf} />
        <ProtectedRoute path="/Details/:id" component={Details} />
      </Switch>
    </CookieProvider>
  );
};
