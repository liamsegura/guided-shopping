// EventContext.js
import React, { createContext, useState, useEffect } from "react";

const EventContext = createContext(null);

export const EventProvider = ({ children }) => {
  const [eventData, setEventData] = useState([]); // Initialize with an empty array

  // Function to handle product button click event
  const handleHome = () => {
    const currentTime = Date.now();
    const duration = eventData.length
      ? currentTime - eventData[0].startTime
      : 0;
    const newEventData = {
      eventType: "homeButtonClick",
      startTime: eventData.length ? eventData[0].startTime : currentTime,
      timestamp: currentTime,
      duration,
    };
    setEventData((prevData) => [...prevData, newEventData]);
  };

  // Function to handle product button click event
  const handleProductButtonClick = () => {
    const currentTime = Date.now();
    const duration = eventData.length
      ? currentTime - eventData[0].startTime
      : 0;
    const newEventData = {
      eventType: "productButtonClick",
      startTime: eventData.length ? eventData[0].startTime : currentTime,
      timestamp: currentTime,
      duration,
    };
    setEventData((prevData) => [...prevData, newEventData]);
  };

  // Function to handle phone click event
  const handlePhoneClick = (phoneId) => {
    const currentTime = Date.now();
    const duration = eventData.length
      ? currentTime - eventData[0].startTime
      : 0;
    const newEventData = {
      eventType: "phoneClick",
      phoneId,
      startTime: eventData.length ? eventData[0].startTime : currentTime,
      timestamp: currentTime,
      duration,
    };
    setEventData((prevData) => [...prevData, newEventData]);
  };

  // Function to handle Help button click event
  const handleOpenForm = () => {
    const currentTime = Date.now();
    const duration = eventData.length
      ? currentTime - eventData[0].startTime
      : 0;
    const newEventData = {
      eventType: "formOpen",
      startTime: eventData.length ? eventData[0].startTime : currentTime,
      timestamp: currentTime,
      duration,
    };
    setEventData((prevData) => [...prevData, newEventData]);
  };

  const handleCloseForm = () => {
    const currentTime = Date.now();
    const duration = eventData.length
      ? currentTime - eventData[0].startTime
      : 0;
    const newEventData = {
      eventType: "formClosed",
      startTime: currentTime,
      timestamp: currentTime,
      duration,
    };
    setEventData((prevData) => [...prevData, newEventData]);
  };

  const handleSubmitForm = (formData) => {
    const currentTime = Date.now();
    const duration = eventData.length
      ? currentTime - eventData[0].startTime
      : 0;
    const newEventData = {
      eventType: "formSubmit",
      startTime: currentTime,
      timestamp: currentTime,
      duration,
      formData: formData, // Save the form data in the event
    };
    setEventData((prevData) => [...prevData, newEventData]);
  };

  const handleChoice = (phoneId) => {
    const currentTime = Date.now();
    const duration = eventData.length
      ? currentTime - eventData[0].startTime
      : 0;
    const newEventData = {
      eventType: "formSubmit",
      startTime: currentTime,
      timestamp: currentTime,
      duration,
      choice: phoneId, // Save choice in the event
    };
    setEventData((prevData) => [...prevData, newEventData]);
  };

  // Function to format duration to display in seconds with 2 decimal places
  const formatDurationInSeconds = (duration) => {
    return (duration / 1000).toFixed(2); // Convert milliseconds to seconds and fix to 2 decimal places
  };

  // useEffect to create the "enterSite" event when the component mounts
  useEffect(() => {
    const currentTime = Date.now();
    const newEnterSiteEvent = {
      eventType: "enterSite",
      startTime: currentTime,
      timestamp: currentTime,
      duration: 0,
    };
    setEventData([newEnterSiteEvent]);
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // useEffect to log the updated eventData (optional)
  useEffect(() => {
    console.log(
      eventData.map((event) => ({
        ...event,
        duration: formatDurationInSeconds(event.duration),
      }))
    );
  }, [eventData]);

  return (
    <EventContext.Provider
      value={{
        eventData,
        handleHome,
        handlePhoneClick,
        handleOpenForm,
        handleCloseForm,
        handleProductButtonClick,
        handleSubmitForm,
        handleChoice,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventContext;
