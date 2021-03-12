import React, { useState, useEffect } from "react";
import ellipse from "../../assets/images/ellipse.png";
import mail from "../../assets/images/mail.png";
import Appoint from "./appoint";

function Appointment() {
  const [currentView, setCurrentView] = useState("1");
  const [currApp, setCurrApp] = useState({});
  const [appointment, setAppointment] = useState([
    {
      id: "1",
      user_name: "Patrick",
      service_name: "Haircut",
      date: "12/03/2021",
    },
    {
      id: "2",
      user_name: "Tim",
      service_name: "Facial",
      date: "12/03/2021",
    },
    {
      id: "3",
      user_name: "Maddy",
      service_name: "Blow dry",
      date: "12/03/2021",
    },
  ]);

  useEffect(() => {
    const value = appointment.filter((app) => app.id === currentView);
    setCurrApp(value[0]);
  }, [currentView]);

  return (
    <>
      <div className="appointment">
        <div className="user-details">
          <h3>Username</h3>
          <img src={ellipse} alt="ellipse" />
          <img src={mail} alt="mail" />
        </div>
        <div className="appointment-info">
          <div className="userlist">
            <div className="appnt-list">
              {appointment.map((ap) => {
                return (
                  <Appoint appoint={ap} key={ap.id} setId={setCurrentView} />
                );
              })}
            </div>
          </div>
          <div className="app-info">
            <div className="info-header">
              <span></span>
              <div>
                <h3>{currApp.service_name || "Haircut"}</h3>
                <h4>AT CASTORIS BARBERSHOP</h4>
              </div>
            </div>
            <p>
              You have an appointment today with
              {` ${currApp.id}, ${currApp.user_name} `}
              today at <span>{currApp.date}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Appointment;
