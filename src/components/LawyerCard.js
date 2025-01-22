import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LawyerCard.css";

const LawyerCard = ({ lawyer }) => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/booking", { state: { lawyer } });
  };

  return (
    <div className="lawyer-card">
      <h2>{lawyer.name}</h2>
      <p>Specialty: {lawyer.specialty}</p>
      <p>Rate: ${lawyer.rate}/hour</p>
      <button onClick={handleBooking}>Book Appointment</button>
    </div>
  );
};

export default LawyerCard;