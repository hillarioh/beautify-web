import React from "react";
import cart from "../assets/images/cart.png";
import cartItem from "../assets/images/cartItem.png";

function ProductItem() {
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
          <h4 className="product-item-cart">KES 3300</h4>
        </div>
        <div className="product-item-desc">
          <div className="brand-rate">
            <div>
              <span>Brand: </span>
              <span>Marini Naturals</span>
            </div>
            <div>
              <span>stars</span>
              <span>42</span>
            </div>
          </div>
          <div className="brand-feature">
            <ul>
              <li>Perfect for men</li>
              <li>400gramms</li>
              <li>Perfect waves for your scalp</li>
            </ul>
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
