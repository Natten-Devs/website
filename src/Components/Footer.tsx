import logoLight from "../assets/natten logo large light.svg";
import logoDark from "../assets/natten logo large dark.svg";

interface FProps {
  style: string;
}

const Footer: React.FC<FProps> = (props) => {
  return (
    <footer className={`${props.style === "light" ? "" : "darkMode"}`}>
      <div>
        <img
          src={`${props.style === "light" ? logoLight : logoDark}`}
          className="footerLogo"
        ></img>
        <a href="mailto:contact@natten.net" className="footerLink" id="link1">
          contact@natten.net
        </a>
      </div>
      <div>
        <p
          className={`followText ${props.style === "light" ? "" : "darkText"}`}
        >
          Follow Us!
        </p>
        <div className="socials">
          <a href="https://twitter.com/nattenupdates">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="https://instagram.com/nattendevs">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://github.com/Natten-Devs">
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
      <div>
        <a href="/careers" className="followText link" id="link2">
          Careers
        </a>
        <br></br>
        <a href="/legal" className="followText link" id="link3">
          Legal
        </a>
      </div>
    </footer>
  );
};

export default Footer;
