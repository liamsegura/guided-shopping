import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import URL from "../router/url";

interface Phone {
  _id: string;
  brand: string;
  model: string;
  budget: number;
  dataPlan: number;
  talkTime: number;
  image: string;
  color: string;
}

const Show = () => {
  const { id } = useParams();
  const [phone, setPhone] = useState<Phone | null>(null);

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

  console.log(phone);

  return (
    <div className="flex flex-col py-3 px-10 md:flex-row items-center justify-center py-10 md:py-20">
      <div className="mt-6 md:mt-0 md:ml-10">
        <img src={"/" + phone.image} alt="phone" className="w-60 md:w-96" />
      </div>
      <div className="flex flex-col items-start md:justify-start">
        <h1>{phone.brand}</h1>
        <h2>{phone.model}</h2>
        <p>
          Data:{" "}
          {phone.dataPlan > 0
            ? phone.dataPlan.toString().slice(0, -3) + "GB"
            : "Unlimited"}
        </p>
        <p>
          Talk Time:{" "}
          {phone.talkTime > 0 ? `${phone.talkTime} minutes` : "Unlimited"}
        </p>
        <p>Price: £{phone.budget}</p>
      </div>
    </div>
  );
};

export default Show;
