import React from "react";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";

import marini from "../assets/images/marini.png";
import laguah from "../assets/images/laguah.png";
import akusi from "../assets/images/akusi.png";

import fimg1 from "../assets/images/fimg1.png";
import fimg2 from "../assets/images/fimg2.png";
import fimg3 from "../assets/images/fimg3.png";

function Products() {
  const moveCard = () => {
    document.querySelector(".category").scrollBy(150, 0);
  };

  const reverseCard = () => {
    document.querySelector(".category").scrollBy(-150, 0);
  };

  return (
    <div className="product-page">
      <nav className="product-nav">
        <div className="product-nav-logo">
          <span>COMPANY</span>
          <span>LOGO</span>
        </div>
        <div className="product-nav-icon">
          <span>Icon 1</span>
          <span>Icon 2</span>
        </div>
      </nav>
      <div className="product-top">
        <div className="product-top-title">
          <span>PRODUCTS</span> <span>FOR YOU</span>
        </div>
        <img src={img1} alt="initial product 1" className="product-top-img1" />
        <img src={img2} alt="initial product 2" className="product-top-img2" />
        <img src={img3} alt="initial product 3" className="product-top-img3" />
      </div>
      <div className="brand-logo">
        <div className="brand-item">HOME</div>
        <div className="brand-item">SHOP</div>
        <div className="brand-item">BRANDS</div>
        <div className="brand-item">
          <img src={marini} alt="brand 1" style={{ width: 120, height: 120 }} />
        </div>
        <div className="brand-item">
          <img
            src={akusi}
            alt="brand 2"
            style={{ width: 190, marginLeft: -40 }}
          />
        </div>
        <div className="brand-item">
          <img src={laguah} alt="brand 3" style={{ width: 190 }} />
        </div>
      </div>
      <div className="shop-logo">
        <span>SHOP</span>
        <hr className="line" />
      </div>
      <div className="products-category">
        <button className="prv" onClick={(e) => reverseCard(e)}>
          P
        </button>
        <button className="nxt" onClick={(e) => moveCard(e)}>
          N
        </button>
        <div className="category">
          <div className="category-item">
            <span>HAIR CARE PRODUCTS</span>
            <button>Explore</button>
          </div>
          <div className="category-item">
            <span>SHOP THE COLLECTION</span>
            <button>Explore</button>
          </div>
          <div className="category-item">
            <span>BEARD CARE</span>
            <button>Explore</button>
          </div>
          <div className="category-item">
            <span>GROOMING KITS</span>
            <button>Explore</button>
          </div>
          <div className="category-item">
            <span>MAKEUP KITS</span>
            <button>Explore</button>
          </div>
          <div className="category-item">
            <span>SHOP THE COLLECTION</span>
            <button>Explore</button>
          </div>
        </div>
      </div>
      <div className="featured">
        <h4>FEATURED PRODUCTS</h4>
        <div className="featured-products">
          <div className="featured-item">
            <div className="featured-item-img">
              <img
                src={fimg1}
                alt="featured product 1"
                style={{ height: 230, width: 300 }}
              />
            </div>
            <div className="featured-item-details">
              <p>Clear Scalp hair product</p>
              <h2>KES 2500</h2>
              <button>BUY NOW</button>
            </div>
          </div>
          <div className="featured-item">
            <div className="featured-item-img">
              <img
                src={fimg2}
                alt="featured product 1"
                style={{ height: 260, width: 350 }}
              />
            </div>
            <div className="featured-item-details">
              <p>Clear Scalp hair product</p>
              <h2>KES 2500</h2>
              <button>BUY NOW</button>
            </div>
          </div>
          <div className="featured-item">
            <div className="featured-item-img">
              <img
                src={fimg3}
                alt="featured product 1"
                style={{ height: 300, width: 300 }}
              />
            </div>
            <div className="featured-item-details">
              <p>Clear Scalp hair product</p>
              <h2>KES 2500</h2>
              <button>BUY NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
