import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import React from "react";

function Index(props) {
  const phones = useLoaderData();

  if (!phones) {
    return (
      <div>
        <Hero />
        <div className="flex flex-col py-3 px-10 md:flex-row items-center justify-center py-10 md:py-20">
          <img
            src={"/Loading_icon.gif"}
            alt="loading"
            className="w-60 md:w-96"
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Hero />

      <div
        id="sectionBelow"
        className="p-1 sm:p-20"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "20px",
          justifyContent: "center",
        }}
      >
        {phones.map((phone) => (
          <Link to={`/phone/${phone._id}`} key={phone._id}>
            <div
              onClick={() => handlePhoneClick(phone._id)}
              key={phone._id}
              style={{ padding: "10px", width: "150px" }}
            >
              <img
                src={phone.image}
                alt={phone.brand}
                style={{ width: "100%", marginBottom: "10px" }}
              />
              <h3>{phone.brand}</h3>
              <h3>{phone.model}</h3>
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
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Index;
