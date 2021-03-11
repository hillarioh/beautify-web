import React from "react";
import cart from "../../assets/images/cart.png";
import cartItem from "../../assets/images/cartItem.png";
import cartItem2 from "../../assets/images/cartitem2.png";
import cartItem3 from "../../assets/images/cartitem3.png";
import { Link, useRouteMatch } from "react-router-dom";

function Category() {
  let match = useRouteMatch();
  return (
    <div className="category-page">
      <nav className="category-nav">
        <div className="category-nav-logo">
          <span>COMPANY</span>
          <span>LOGO</span>
        </div>
        <div className="category-nav-icon">
          <span>Icon 1</span>
          <span>Icon 2</span>
        </div>
      </nav>
      <div className="nav-links">HOME > SHOP > BEARD CARE PRODUCTS</div>
      <div className="red-bg"></div>
      <div className="category">
        <Link to={`${match.url}/itemid`} className="category-item">
          <div className="category-item-tag"></div>
          <img
            src={cartItem}
            alt="cart item"
            style={{ height: 130, position: "absolute", right: 5, top: 0 }}
          />
          <div className="category-item-details">
            <span>MARINI Men Waves Pomade</span>
            <div className="category-item-cart">
              <h4>KES 3300</h4>
              <img src={cart} alt="cart icon" style={{}} />
            </div>
          </div>
        </Link>
        <Link to={`${match.url}/itemid`} className="category-item">
          <div className="category-item-tag"></div>
          <img
            src={cartItem}
            alt="cart item"
            style={{ height: 130, position: "absolute", right: 5, top: 0 }}
          />
          <div className="category-item-details">
            <span>MARINI Men Waves Pomade</span>
            <div className="category-item-cart">
              <h4>KES 3300</h4>
              <img src={cart} alt="cart icon" style={{}} />
            </div>
          </div>
        </Link>
        <Link to={`${match.url}/itemid`} className="category-item">
          <div className="category-item-tag"></div>
          <img
            src={cartItem}
            alt="cart item"
            style={{ height: 130, position: "absolute", right: 5, top: 0 }}
          />
          <div className="category-item-details">
            <span>MARINI Men Waves Pomade</span>
            <div className="category-item-cart">
              <h4>KES 3300</h4>
              <img src={cart} alt="cart icon" style={{}} />
            </div>
          </div>
        </Link>
        <Link to={`${match.url}/itemid`} className="category-item">
          <div className="category-item-tag"></div>
          <img
            src={cartItem}
            alt="cart item"
            style={{ height: 130, position: "absolute", right: 5, top: 0 }}
          />
          <div className="category-item-details">
            <span>MARINI Men Waves Pomade</span>
            <div className="category-item-cart">
              <h4>KES 3300</h4>
              <img src={cart} alt="cart icon" style={{}} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Category;
