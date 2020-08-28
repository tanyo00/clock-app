import React from "react";
export default function Seconds() {
  const [sec, setSec] = React.useState(new Date().getSeconds());
  setInterval(() => {
    setSec(new Date().getSeconds());
  }, 1000);
  return (
    <div className="container-sections">
      <h1 style={{ color: "white", fontWeight: "300" }}>
        {sec < 10 ? `0${sec}` : sec}
      </h1>
      <p style={{ color: "lightgray", letterSpacing: "2px" }}>SECONDS</p>
    </div>
  );
}
