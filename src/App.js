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
import User from "./components/services/user";
import Client from "./components/client/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/user-profile" component={UserProfile} />
        <Route path="/set-up" component={SetUpBiz} />
        <Route path="/booking" component={Book} />
        <Route path="/client" component={Client} />
        <Route path="/user" component={User} />
        <Route path="/pay" component={Pay} />
        <Route path="/shop/:category/:item" component={ProductItem} />
        <Route path="/shop/:category" exact component={Category} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
