import React, { useState, useEffect } from "react";
import ellipse from "../../assets/images/ellipse.png";
import { Link, useRouteMatch } from "react-router-dom";
import SelectDate from "./selectDate";
import SelectLocation from "./selectLocation";
import Location from "./location";

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
        <div className="business">
          {data.map((s) => {
            return <Servicer service={s} key={s.bid} route={userType} />;
          })}
        </div>
        <Location />
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
