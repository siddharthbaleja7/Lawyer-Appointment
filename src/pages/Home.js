import React from "react";
import { useSelector } from "react-redux";
import LawyerCard from "../components/LawyerCard";

const Home = () => {
  const lawyers = useSelector((state) => state.lawyers.list);

  return (
    <div className="home">
      <h1>Lawyer Appointment Management</h1>
      <div className="lawyer-grid">
        {lawyers.length > 0 ? (
          lawyers.map((lawyer) => (
            <LawyerCard key={lawyer.id} lawyer={lawyer} />
          ))
        ) : (
          <p>No lawyers available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
