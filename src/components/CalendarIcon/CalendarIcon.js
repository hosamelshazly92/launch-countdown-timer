import { container, figure, section, title } from "./CalendarIcon.module.css";

const CalendarIcon = ({ day, nam }) => {
  return (
    <div className={container}>
      <figure className={figure}>
        <section className={section}>{day}</section>
      </figure>

      <p className={title}>{nam}</p>
    </div>
  );
};

export default CalendarIcon;
