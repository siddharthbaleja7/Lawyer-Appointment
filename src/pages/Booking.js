import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAppointment } from "../redux/actions";
import "../styles/Booking.css";

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { lawyer } = location.state;

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const appointment = {
      lawyerId: lawyer.id,
      date,
      time,
    };

    dispatch(addAppointment(appointment));
    alert("Appointment booked successfully!");
    navigate("/");
  };

  return (
    <div className="booking">
      <h1>Book Appointment with {lawyer.name}</h1>
      <form onSubmit={handleSubmit}>
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

        <label>Time:</label>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default Booking;