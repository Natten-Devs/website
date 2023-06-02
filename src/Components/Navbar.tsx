import logoLight from "../assets/natten logo large light.svg";
import logoDark from "../assets/natten logo large dark.svg";
import { useEffect, useState } from "react";
import FancyContactButton from "./FancyContactButton";

interface NProps {
  style: string;
}

const Navbar: React.FC<NProps> = (props) => {
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
    window.scrollTo({ top: 0 });
    setUserScrolledUp(false);
    setToggledContent(!toggledContent);
  };

  return (
    <nav
      className={`${isNavVisible ? "" : "navBarScrolled"} ${
        userScrolledUp ? "navBarBlackBG" : ""
      } ${props.style === "light" ? "" : "darkMode"}`}
    >
      <img
        src={`${props.style === "light" ? logoLight : logoDark}`}
        className="navBarLogo"
      ></img>
      <div className="navBarLinks">
        <a id="navlink1" href="/home" className="navLink">
          Home
        </a>
        <a id="navlink2" href="/about" className="navLink">
          About
        </a>
        <a id="navlink3" href="/blog" className="navLink">
          Blog
        </a>
        <a id="navlink4" href="services" className="navLink">
          Services
        </a>
      </div>
      <a className="contactBtnLink" href="/contact">
        <FancyContactButton />
      </a>

      <button onClick={toggleMenu} className="dropDownBtn none">
        <i id="dropDownIcon" className="bi bi-list" aria-hidden="true"></i>
      </button>
      {toggledContent && (
        <div className="dropDownContent">
          <a id="link1" className="bigLink navLink" href="/home">
            Home
          </a>
          <a id="link2" className="bigLink navLink" href="/about">
            About
          </a>
          <a id="link3" className="bigLink navLink" href="/blog">
            Blog
          </a>
          <a id="link4" className="bigLink navLink" href="/services">
            Services
          </a>
          <a href="/contact">
            <FancyContactButton />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
