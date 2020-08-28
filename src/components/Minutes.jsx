import React from "react";
export default function Minutes() {
  const [min, setMin] = React.useState(new Date().getMinutes());
  setInterval(() => {
    setMin(new Date().getMinutes());
  }, 1000);
  return (
    <div className="container-sections">
      <h1 style={{ color: "white", fontWeight: "300" }}>
        {min < 10 ? `0${min}` : min}
      </h1>
      <p style={{ color: "lightgray", letterSpacing: "2px" }}>MINUTES</p>
    </div>
  );
}
