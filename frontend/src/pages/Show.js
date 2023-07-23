import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Show = () => {
  const { id } = useParams();
  const [phone, setPhone] = useState(null);

  useEffect(() => {
    const fetchPhoneDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4444/phone/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const phoneData = await response.json();
        setPhone(phoneData);
      } catch (error) {
        console.error("Error fetching phone details:", error);
      }
    };

    fetchPhoneDetails();
  }, [id]);

  if (!phone) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src="/mock.png" alt={phone.brand} style={{ width: '30%', marginBottom: '10px' }} />
      <h1>{phone.brand}</h1>
      <h2>{phone.model}</h2>
      <p>Data: {phone.dataPlan}</p>
      <p>Talk Time: {phone.talkTime}</p>
      <p>Price: £{phone.budget}</p>
    </div>
  );
};

export default Show;
