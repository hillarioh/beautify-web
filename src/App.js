import "./assets/styles/style.css";
import Products from "./components/Shop/products";
import Category from "./components/Shop/category";
import Pay from "./components/Shop/pay";
import Checkout from "./components/Shop/checkout";
import ProductItem from "./components/Shop/productItem";
import Home from "./components/home";
import ListBiz from "./components/services/listbiz";
import Admin from "./components/services/admin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/list-business" component={ListBiz} />
        <Route path="/admin" component={Admin} />
        <Route path="/pay" component={Pay} />
        <Route path="/products" component={Products} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/productitem" component={ProductItem} />
        <Route path="/category" component={Category} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
