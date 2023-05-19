import logo from "../assets/natten logo large light.svg";

const Footer = () => {
  return (
    <footer>
      <div> 
        <img src={logo} className="footerLogo"></img>
        <a href="mailto:contact@natten.net" className="footerLink">
          contact@natten.net
        </a>
      </div>
      <div>
        <p className="followText">Follow Us</p>
        <div className="socials">
          <a href="#"><i className="bi bi-twitter"></i></a>
          <a href="https://instagram.com/nattendevs"><i className="bi bi-instagram"></i></a>
          <a href="https://github.com/Natten-Devs"><i className="bi bi-github"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
