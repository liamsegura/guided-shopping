import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import URL from "../router/url";

const Show = () => {
  const { id } = useParams();
  const [phone, setPhone] = useState(null);

  useEffect(() => {
    const fetchPhoneDetails = async () => {
      try {
        const response = await fetch(URL + `/phone/${id}`);
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
    <div className="flex flex-col py-30 px-10 md:flex-row items-center justify-center py-10 md:py-20">
      <div className="mt-6 md:mt-0 md:ml-10">
        <img src="/mock.png" alt="phone" className="w-64 md:w-96" />
      </div>
      <div className="flex flex-col items-start md:justify-start">
        <h1>{phone.brand}</h1>
        <h2>{phone.model}</h2>
        <p>Data: {phone.dataPlan}</p>
        <p>Talk Time: {phone.talkTime}</p>
        <p>Price: £{phone.budget}</p>
      </div>
    </div>
  );
};

export default Show;
