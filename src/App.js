import {
  container,
  title,
  main,
  footer,
  socialMediaLinks,
  icon,
} from "./App.module.css";
import facebookIcon from "./images/icon-facebook.svg";
import pinterestIcon from "./images/icon-pinterest.svg";
import instagramIcon from "./images/icon-instagram.svg";
import Calendar from "./components/Calendar/Calendar";

function App() {
  return (
    <div className={container}>
      <h1 className={title}>We are launching soon</h1>

      <main className={main}>
        <Calendar />
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
