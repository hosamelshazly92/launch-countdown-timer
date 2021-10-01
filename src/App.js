import {
  container,
  title,
  text,
  main,
  footer,
  socialMediaLinks,
  icon,
} from "./App.module.css";
import facebookIcon from "./images/icon-facebook.svg";
import pinterestIcon from "./images/icon-pinterest.svg";
import instagramIcon from "./images/icon-instagram.svg";
import CalendarIcon from "./components/CalendarIcon/CalendarIcon";
import { useState } from "react";

function App() {
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  // Set the date we're counting down to
  let countDownDate = new Date("Jan 1, 2022 15:37:25").getTime();

  // Update the count down every 1 second
  let intervals = setInterval(function () {
    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(intervals);
      // "EXPIRED"
    }
  }, 1000);

  return (
    <div className={container}>
      <h1 className={title}>We are launching soon</h1>
      <p className={text}>in 2022</p>

      <main className={main}>
        <CalendarIcon day={days} nam="days" />
        <CalendarIcon day={hours} nam="hours" />
        <CalendarIcon day={minutes} nam="minutes" />
        <CalendarIcon day={seconds} nam="seconds" />
      </main>

      <footer className={footer}>
        <div className={socialMediaLinks}>
          <img className={icon} src={facebookIcon} alt="facebook icon" />
          <img className={icon} src={pinterestIcon} alt="pinterest icon" />
          <img className={icon} src={instagramIcon} alt="instagram icon" />
        </div>
      </footer>
    </div>
  );
}

export default App;
