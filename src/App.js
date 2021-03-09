import "./assets/styles/style.css";
import Products from "./components/Shop/products";
import Category from "./components/Shop/category";
import Pay from "./components/Shop/pay";
import Checkout from "./components/Shop/checkout";
import ProductItem from "./components/Shop/productItem";
import Home from "./components/home";
import Admin from "./components/services/admin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin" exact component={Admin} />
        <Route path="/pay" exact component={Pay} />
        <Route path="/products" exact component={Products} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/productitem" exact component={ProductItem} />
        <Route path="/category" exact component={Category} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
