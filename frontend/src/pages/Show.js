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
    return (
      <div className="flex flex-col py-3 px-10 md:flex-row items-center justify-center py-10 md:py-20">
        <img src={"/Loading_icon.gif"} alt="loading" className="w-60 md:w-96" />
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row items-center sm:justify-center py-10 sm:py-20 px-20 md:px-40 lg:px-48">
      <div className="w-full sm:1/2 md:w-1/3 lg:w-1/3">
        <img
          src={"/" + phone.image.slice(0, -3) + "png"}
          alt="phone"
          className=""
        />
      </div>
      <div className="mt-6 md:mt-0 sm:ml-8 lg:ml-16 w-full md:w-3/5 lg:w-2/3">
        <h1 className="text-2xl md:text-3xl font-bold">{phone.brand}</h1>
        <h2 className="text-xl md:text-2xl font-bold mt-2">{phone.model}</h2>
        <p className="mt-2">
          Data:{" "}
          {phone.dataPlan > 0
            ? phone.dataPlan.toString().slice(0, -3) + "GB"
            : "Unlimited"}
        </p>
        <p>
          Talk Time:{" "}
          {phone.talkTime > 0 ? `${phone.talkTime} minutes` : "Unlimited"}
        </p>
        <p className="mt-2">Price: £{phone.budget}</p>
      </div>
    </div>
  );
};

export default Show;
