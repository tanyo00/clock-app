import React from "react";
export default function Hours() {
  const [hours, setHours] = React.useState(new Date().getHours());
  setInterval(() => {
    setHours(new Date().getHours());
  }, 1000);

  return (
    <div className="container-sections">
      <h1 style={{ color: "white", fontWeight: "300" }}>
        {hours < 10 ? `0${hours}` : hours}
      </h1>
      <p style={{ color: "lightgray", letterSpacing: "2px" }}>HOURS</p>
    </div>
  );
}
