import React, { useState } from "react";
import ellipse from "../../assets/images/ellipse.png";
import mail from "../../assets/images/mail.png";
import Appoint from "./appoint";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Dashboard() {
  const [clients, setClient] = useState(800);
  const [currentView, setCurrentView] = useState("1");
  const [total, setTotal] = useState(600800);
  const [value, onChange] = useState(new Date());
  const [appointment, setAppointment] = useState([
    {
      user_name: "Patrick",
      service_name: "Haircut",
      date: "12/03/2021",
    },
    {
      user_name: "Tim",
      service_name: "Facial",
      date: "12/03/2021",
    },
    {
      user_name: "Maddy",
      service_name: "Blow dry",
      date: "12/03/2021",
    },
  ]);
  return (
    <>
      <div className="dashboard">
        <div className="user-details">
          <h3>Username</h3>
          <img src={ellipse} alt="ellipse" />
          <img src={mail} alt="mail" />
        </div>
        <div className="dashboard-info">
          <div className="clients">
            <h2>{clients}</h2>
            <p>Clients Through the Last Year</p>
          </div>
          <div className="total">
            <h2>{total}</h2>
            <p>Total Amount Transacted</p>
          </div>
          <div className="annual"></div>
          <div className="calendar">
            <Calendar onChange={onChange} value={value} />
          </div>
          <div className="appnt">
            <ul>
              <li>Appointments</li>
              <li>January 20 2021</li>
            </ul>
            <div className="appnt-list">
              {appointment.map((ap) => {
                return (
                  <Appoint appoint={ap} key={ap.id} setId={setCurrentView} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
