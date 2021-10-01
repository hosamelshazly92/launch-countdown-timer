import {} from "./Calendar.module.css";

const Calendar = () => {
  let day = new Date().getDay();
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekday = week[day];

  return (
    <div>
      <figure>
        <header>{weekday}</header>
        <section>{new Date().getDate()}</section>
      </figure>
    </div>
  );
};

export default Calendar;
