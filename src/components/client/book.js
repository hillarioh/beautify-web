import React, { useState, useEffect } from "react";
import ellipse from "../../assets/images/ellipse.png";
import { Link, useRouteMatch } from "react-router-dom";
import SelectDate from "./selectDate";
import SelectLocation from "./selectLocation";
const data = [
  {
    businessname: "CASTORIS BARBERSHOP",
    artisan: "PETER PAN",
    price: "1000 KES",
    bid: "247",
  },
  {
    businessname: "HERS AND HERS EXEC SALON",
    artisan: "KAYTON ASHLEY",
    price: "1000 KES",
    bid: "27",
  },
  {
    businessname: "THE MANCAVE BARBERSHOP",
    artisan: "JOHN DOE",
    price: "1000 KES",
    bid: "47",
  },
  {
    businessname: "GLENS MAKEUP STUDIO",
    artisan: "LIZ PANABAKER",
    price: "1000 KES",
    bid: "107",
  },
];

const Servicer = ({ service, route }) => {
  return (
    <div className="item">
      <div className="item-pic">
        <img
          src="https://www.delexdesigns.co.ke/images/salon-and-barbershop/barbershop-delex.jpg"
          alt={service.businessname}
        />
      </div>
      <div className="item-details">
        <h3>{service.artisan}</h3>
        <h3>{service.businessname}</h3>
        <h4>{service.price}</h4>
      </div>
      <button>
        <Link to={`${route}/profile/service/${service.bid}`}>VISIT</Link>
      </button>
    </div>
  );
};

function Book({ type }) {
  let match = useRouteMatch();
  const [userType, setUserType] = useState("");
  const [overlay, setOverlay] = useState();

  useEffect(() => {
    if (type === "client") {
      setUserType("user");
    } else {
      setUserType("service-provider");
    }
  }, []);

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
    <div className="booking-page">
      <header className="header">
        <h2>COMPANYLOGO</h2>
        <div>
          <h3>Username</h3>
          <img src={ellipse} alt="ellipse" />
        </div>
      </header>
      <section className="filter">
        <div className="td">
          <span>HAIRCUT:</span>
          <span>{new Date().toDateString()}</span>
          <span>NAIROBI</span>
        </div>
        <h5
          className="tl"
          data-modal-target="#select_date"
          onClick={(e) => getModal(e.target)}
        >
          Select date
        </h5>
        <h5
          className="tl"
          data-modal-target="#select_location"
          onClick={(e) => getModal(e.target)}
        >
          Select Location
        </h5>
      </section>
      <section className="filter-body">
        <article className="business">
          {data.map((s) => {
            return <Servicer service={s} key={s.bid} route={userType} />;
          })}
        </article>
        <article className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8122997379865!2d36.81474831393296!3d-1.2866891359875117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10c55202d22b%3A0x9476f14fd49cde4d!2sKenyatta%20Ave%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1615562630369!5m2!1sen!2ske"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "0 15px 15px 0",
              border: "0",
              allowfullscreen: "",
              loading: "lazy",
            }}
            title="location"
          ></iframe>
        </article>
      </section>
      <SelectDate />
      <SelectLocation />
      <div
        className="overlay"
        id="overlay"
        onClick={(e) => closeModal(e)}
      ></div>
    </div>
  );
}

export default Book;
