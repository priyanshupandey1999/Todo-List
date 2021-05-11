import React, { useState } from "react";
import "./clock.css";

function Clock() {
  let [currentTime, setCurrentTime] = useState("");

  let showTime = () => {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let FullTime = hour + ":" + min + ":" + sec;

    setCurrentTime(FullTime);
  };
  return (
    setInterval(showTime, 1000),
    (<div className="clock">{`Time : ${currentTime} `}</div>)
  );
}

export default Clock;
