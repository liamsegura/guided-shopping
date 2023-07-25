import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import React, { useContext } from "react";
import EventContext from "../EventContext";

function Index(props) {
  const { handlePhoneClick } = useContext(EventContext);
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
                src={`${phone.image.slice(0, -3)}png`}
                alt={phone.brand}
                className="w-full mb-4"
              />
              <div className="ml-2">
                <h3 className="font-semibold">{phone.brand}</h3>
                <h3 className="font-semibold">{phone.model}</h3>
                <p>
                  Data:{" "}
                  {phone.dataPlan > 0
                    ? phone.dataPlan.toString().slice(0, -3) + "GB"
                    : "Unlimited"}
                </p>
                <p>
                  Talk Time:{" "}
                  {phone.talkTime > 0
                    ? `${phone.talkTime} minutes`
                    : "Unlimited"}
                </p>
                <p>Price: £{phone.budget}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Index;
