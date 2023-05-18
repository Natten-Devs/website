import logo from "../assets/natten logo large light.gif";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logo} className="footerLogo"></img>
        <a href="mailto:contact@natten.net" className="footerLink">
          contact@natten.net
        </a>
      </div>
    </footer>
  );
};

export default Footer;
