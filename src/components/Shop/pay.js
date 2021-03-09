import React from "react";
import cartItem from "../../assets/images/cartItem.png";

function Pay() {
  return (
    <div className="product-item-page">
      <nav className="product-item-nav">
        <div className="product-item-nav-logo">
          <span>COMPANY</span>
          <span>LOGO</span>
        </div>
        <div className="product-item-nav-icon">
          <span>Icon 1</span>
          <span>Icon 2</span>
        </div>
      </nav>
      <div className="nav-links">HOME > SHOP > BEARD CARE PRODUCTS</div>
      <div className="red-bg"></div>
      <div className="product-item">
        <div className="product-item-tag"></div>
        <img
          src={cartItem}
          alt="cart item"
          style={{ height: 130, position: "absolute", right: 5, top: 0 }}
        />
        <div className="product-item-details">
          <span>MARINI Men Waves Pomade</span>
        </div>
        <div className="product-item-desc"></div>
      </div>
    </div>
  );
}

export default Pay;
