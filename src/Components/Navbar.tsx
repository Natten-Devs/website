import logo from "../assets/natten logo large dark.gif";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [userScrolledUp, setUserScrolledUp] = useState(false);
  let currentScrollPosition = window.scrollY;

  useEffect(() => {
    window.addEventListener("scroll", scrollFunc);
    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  });

  const scrollFunc = () => {
    const scrolling = window.scrollY < currentScrollPosition;
    setUserScrolledUp(scrolling);

    currentScrollPosition = window.scrollY;
    const visible = currentScrollPosition < 100;
    setIsNavVisible(visible);
  };

  return (
    <nav
      className={`${isNavVisible ? "" : "navBarScrolled"} ${
        userScrolledUp ? "navBarBlackBG" : ""
      }`}
    >
      <img src={logo} className="navBarLogo"></img>
      <div className="navBarLinks">
        <a href="index">Home</a>
        <a href="index">About</a>
        <a href="index">Blog</a>
        <a href="index">Products</a>
      </div>
      <button className="navBarButton">Contact Us</button>
    </nav>
  );
};

export default Navbar;
