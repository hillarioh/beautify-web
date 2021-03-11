import "./assets/styles/style.css";
import Shop from "./components/Shop/shop";
import Category from "./components/Shop/category";
import Pay from "./components/Shop/pay";
import Checkout from "./components/Shop/checkout";
import ProductItem from "./components/Shop/productItem";
import Home from "./components/home";
import Login from "./components/services/login/login";

import UserProfile from "./components/services/userprofile";
import ListBiz from "./components/services/listbiz";
import Admin from "./components/services/admin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/user-profile" component={UserProfile} />
        <Route path="/list-business" component={ListBiz} />
        <Route path="/admin" component={Admin} />
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
