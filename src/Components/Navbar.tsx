import logo from "../assets/natten logo large light.svg";
import { useEffect, useState } from "react";
import FancyContactButton from "./FancyContactButton";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [userScrolledUp, setUserScrolledUp] = useState(false);
  const [toggledContent, setToggledContent] = useState(false);
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

  const toggleMenu = () => {
    window.scrollTo({ top: 0});
    setUserScrolledUp(false);
    setToggledContent(!toggledContent);
  }

  return (
    <nav
      className={`${isNavVisible ? "" : "navBarScrolled"} ${
        userScrolledUp ? "navBarBlackBG" : ""
      }`}
    >
      <img src={logo} className="navBarLogo"></img>
      <div className="navBarLinks">
        <a id="link1" href="index">
          Home
        </a>
        <a id="link2" href="index">
          About
        </a>
        <a id="link3" href="/blog">
          Blog
        </a>
        <a id="link4" href="index">
          Products
        </a>
      </div>
      <a className="contactBtnLink" href="#contactSection">
        <FancyContactButton />
      </a>

      <button onClick={toggleMenu} className="dropDownBtn none">
        <i
          id="dropDownIcon"
          className="bi bi-list"
          aria-hidden="true"
        ></i>
      </button>
      {toggledContent && (
        <div className="dropDownContent">
          <a id="link1" className="bigLink" href="index">
            Home
          </a>
          <a id="link2" className="bigLink" href="index">
            About
          </a>
          <a id="link3" className="bigLink" href="index">
            Blog
          </a>
          <a id="link4" className="bigLink" href="index">
            Products
          </a>
          <a href="#contactSection">
            <FancyContactButton />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
