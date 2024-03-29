import React, { useState, useEffect } from "react";
import ellipse from "../../assets/images/ellipse.png";
import mail from "../../assets/images/mail.png";
import admini from "../../assets/images/admin.png";
import {
  AddService,
  AddProduct,
  AddTime,
  AddImage,
  AddProfile,
  DelProduct,
} from "../overlay/overlay";
import data from "../data/products";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const StatusPic = ({ modal }) => {
  const getModal = (link) => {
    const mode = document.querySelector(link.dataset.modalTarget);
    modal(mode);
  };
  return (
    <div
      className="blank-pic"
      data-modal-target="#add_profile"
      onClick={(e) => getModal(e.target)}
    >
      <h4 data-modal-target="#add_profile">+ Profile picture</h4>
    </div>
  );
};

const ProductItem = ({ product, modal }) => {
  const getModal = (link) => {
    const mode = document.querySelector(link.dataset.modalTarget);
    modal(mode);
  };
  return (
    <article className="item">
      <div>
        <h2>{product.product_name}</h2>
        <p>{`$${product.price} Per ${product.rate}`}</p>
      </div>
      <div>
        <button
          data-modal-target="#add_product"
          onClick={(e) => getModal(e.target)}
        >
          <EditIcon
            data-modal-target="#add_product"
            onClick={(e) => getModal(e.target)}
          />
        </button>
        <button
          data-modal-target="#del_product"
          onClick={(e) => getModal(e.target)}
        >
          <DeleteIcon
            data-modal-target="#del_product"
            onClick={(e) => getModal(e.target)}
          />
        </button>
      </div>
    </article>
  );
};

const Products = ({ modal }) => {
  return (
    <div className="product-list">
      {data.map((prod) => {
        return <ProductItem product={prod} key={prod.id} modal={modal} />;
      })}
    </div>
  );
};

function Profile() {
  const [profpic, setProf] = useState();
  const [overlay, setOverlay] = useState();
  const [tab, setTab] = useState("services");

  useEffect(() => {
    setOverlay(document.getElementById("overlay"));
  }, []);

  let active = "";

  const openModal = (modal) => {
    if (modal == null) return;
    modal.classList.add("active");
    active = `#${modal.id}.active`;
    overlay.classList.add("active");
  };

  const getModal = (link) => {
    const mode = document.querySelector(link.dataset.modalTarget);
    openModal(mode);
  };

  const closeModal = (e) => {
    const modals = document.querySelectorAll(active);
    modals.forEach((modal) => {
      if (modal == null) return;
      modal.classList.remove("active");
      overlay.classList.remove("active");
    });
  };

  return (
    <>
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
                id="services"
                style={{ borderBottom: "3px solid #be5050" }}
                onClick={(e) => setTab("services")}
              >
                SERVICES
              </li>
            ) : (
              <li id="services" onClick={(e) => setTab("services")}>
                SERVICES
              </li>
            )}
            {tab === "reviews" ? (
              <li
                id="reviews"
                style={{ borderBottom: "3px solid #be5050" }}
                onClick={(e) => setTab("reviews")}
              >
                REVIEWS
              </li>
            ) : (
              <li id="reviews" onClick={(e) => setTab("reviews")}>
                REVIEWS
              </li>
            )}
            {tab === "products" ? (
              <li
                id="products"
                style={{ borderBottom: "3px solid #be5050" }}
                onClick={(e) => setTab("products")}
              >
                PRODUCTS
              </li>
            ) : (
              <li id="products" onClick={(e) => setTab("products")}>
                PRODUCTS
              </li>
            )}
          </ul>
          <div className="title-body">
            {tab === "services" ? (
              <>
                <Products modal={openModal} />
                <div
                  className="fab"
                  data-modal-target="#add_service"
                  onClick={(e) => getModal(e.target)}
                >
                  +
                </div>
              </>
            ) : tab === "reviews" ? (
              "No Reviews Yet"
            ) : (
              <>
                <Products modal={openModal} />
                <div
                  className="fab"
                  data-modal-target="#add_product"
                  onClick={(e) => getModal(e.target)}
                >
                  +
                </div>
              </>
            )}
          </div>
          <div className="prof-details">
            {profpic ? (
              <img src={admini} alt="profile " />
            ) : (
              <StatusPic modal={openModal} />
            )}
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
      <AddService />
      <AddProduct />
      <AddProfile />
      <DelProduct />
      <div
        className="overlay"
        id="overlay"
        onClick={(e) => closeModal(e)}
      ></div>
    </>
  );
}

export default Profile;
