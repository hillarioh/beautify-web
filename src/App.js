import "./assets/styles/style.css";
import Products from "./components/products";
import Category from "./components/category";
import ProductItem from "./components/productItem";
import Home from "./components/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/products" exact component={Products} />
        <Route path="/productItem" exact component={ProductItem} />
        <Route path="/category" exact component={Category} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
