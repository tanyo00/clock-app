import React from "react";
export default function Day() {
  let [day, setDay] = React.useState(new Date().getDay());
  setInterval(() => {
    setDay(new Date().getDay());
  });
  if (day === 1) {
    day = "MON";
  } else if (day === 2) {
    day = "TUES";
  } else if (day === 3) {
    day = "WED";
  } else if (day === 4) {
    day = "THURS";
  } else if (day === 5) {
    day = "FR";
  } else if (day === 6) {
    day = "SAT";
  } else {
    day = "SUN";
  }
  return (
    <div className="container-sections">
      <h1 style={{ color: "white", fontWeight: "300" }}>{day}</h1>
      <p style={{ color: "lightgray", letterSpacing: "2px" }}>DAY</p>
    </div>
  );
}
