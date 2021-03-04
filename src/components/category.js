import React from "react";
import cart from "../assets/images/cart.png";
import cartItem from "../assets/images/cartItem.png";

function Category() {
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
        <div className="category-item">
          <div className="category-item-details">
            <div>
              <img src={cartItem} alt="" srcset="" />
            </div>
            <span>MARINI Men Waves Pomade</span>
            <div className="category-item-cart">
              <h4>KES 3300</h4>
              <img src={cart} alt="cart icon" style={{}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
