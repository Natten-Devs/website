import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navBar redBorder">
      <img src={logo} className="navBarLogo"></img>
      <div className="navBarLinks">
        <a href="index">About</a>
        <a href="index">Blog</a>
        <a href="index">Products</a>
        <a href="index">Services</a>
      </div>
      <button className="navBarButton">Contact Us</button>
    </div>
  );
};

export default Navbar;
