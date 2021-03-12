import React from "react";
import ellipse from "../../assets/images/ellipse.png";

function Book() {
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
        <div className="tl">TODAY</div>
        <div className="tl">NAIROBI</div>
      </section>
      <section className="filter-body">
        <article className="business"></article>
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
    </div>
  );
}

export default Book;
