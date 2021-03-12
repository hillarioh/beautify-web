import React, { useState, useEffect } from "react";
import ellipse from "../../assets/images/ellipse.png";
import mail from "../../assets/images/mail.png";
import admini from "../../assets/images/admin.png";
import data from "../data/products";

const ProductItem = ({ product }) => {
  return (
    <article className="item">
      <div>
        <h2>{product.product_name}</h2>
        <p>{`$${product.price} Per ${product.rate}`}</p>
      </div>
      <div>
        <button>book</button>
      </div>
    </article>
  );
};

const Products = () => {
  return (
    <div className="product-list">
      {data.map((prod) => {
        return <ProductItem product={prod} key={prod.id} />;
      })}
    </div>
  );
};

function ServiceProvider() {
  const [tab, setTab] = useState("services");
  return (
    <div className="service-body">
      <div className="user-details">
        <h3>Username</h3>
        <img src={ellipse} alt="ellipse" />
        <img src={mail} alt="mail" />
      </div>
      <div className="service-info">
        <ul className="title-details">
          {tab === "services" ? (
            <li
              style={{ borderBottom: "3px solid #be5050" }}
              onClick={(e) => setTab("services")}
            >
              SERVICES
            </li>
          ) : (
            <li onClick={(e) => setTab("services")}>SERVICES</li>
          )}
          {tab === "reviews" ? (
            <li
              style={{ borderBottom: "3px solid #be5050" }}
              onClick={(e) => setTab("reviews")}
            >
              REVIEWS
            </li>
          ) : (
            <li onClick={(e) => setTab("reviews")}>REVIEWS</li>
          )}
          {tab === "about" ? (
            <li
              style={{ borderBottom: "3px solid #be5050" }}
              onClick={(e) => setTab("about")}
            >
              ABOUT
            </li>
          ) : (
            <li onClick={(e) => setTab("about")}>ABOUT</li>
          )}
        </ul>
        <div className="title-body">
          {tab === "services" ? (
            <>
              <Products />
            </>
          ) : tab === "reviews" ? (
            "No Reviews Yet"
          ) : (
            "About section"
          )}
        </div>
        <div className="prof-details">
          <img src={admini} alt="profile " />
          <h3>CASTORIS BABERSHOP</h3>
          <h5>PROFESSIONAL</h5>
          <p>STARS</p>
          <button>Message</button>
          <h4>BUSINESS HOURS</h4>
          <div className="biz-time">
            <ul>
              <li>SUN:</li>
              <li>MON:</li>
              <li>TUE:</li>
              <li>WED:</li>
              <li>THUR:</li>
              <li>FRI:</li>
              <li>SAT:</li>
            </ul>
            <ul>
              <li className="time">9AM -2PM</li>
              <li className="time">9AM -2PM</li>
              <li className="time">9AM -2PM</li>
              <li className="time">9AM -2PM</li>
              <li className="time">9AM -2PM</li>
              <li className="time">9AM -2PM</li>
              <li className="time">9AM -2PM</li>
            </ul>
          </div>
        </div>
        <div className="map-details"></div>
      </div>
    </div>
  );
}

export default ServiceProvider;
