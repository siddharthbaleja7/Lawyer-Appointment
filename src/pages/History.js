import React from "react";
import { useSelector } from "react-redux";
import "../styles/History.css";

const History = () => {
  const appointments = useSelector((state) => state.appointments.bookings);

  return (
    <div className="history">
      <h1>Appointment History</h1>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>
            Lawyer ID: {appointment.lawyerId}, Date: {appointment.date}, Time: {appointment.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
