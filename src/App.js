import React, { useState } from "react";
import "./assets/styles/style.css";
import Shop from "./components/Shop/shop";
import Category from "./components/Shop/category";
import Pay from "./components/Shop/pay";
import Checkout from "./components/Shop/checkout";
import ProductItem from "./components/Shop/productItem";
import Home from "./components/home";
import Book from "./components/client/book";
import Login from "./components/login/login";
import SignUp from "./components/register/register";
import UserProfile from "./components/services/userprofile";
import SetUpBiz from "./components/register/setupbiz";
import LoggedHome from "./components/loggedhome";
import {
  ProtectedClientRoute,
  ProtectedServiceRoute,
  ProtectedRoute,
} from "./ProtectedRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/user-profile" component={UserProfile} />
        <Route path="/set-up" component={SetUpBiz} />
        <ProtectedRoute path="/book" component={Book} />
        <ProtectedServiceRoute
          path="/service-provider"
          component={LoggedHome}
        />
        <Route path="/pay" component={Pay} />
        <Route path="/shop/:category/:item" component={ProductItem} />
        <Route path="/shop/:category" exact component={Category} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/" exact component={Home} />
        <ProtectedClientRoute path="/user" component={LoggedHome} />
        <Route path="*">
          <div>404 Not found </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
