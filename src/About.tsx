import { useEffect, useState } from "react";

import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import WhoWeAre from "./Components/WhoWeAre";
import AboutOpening from "./Components/AboutOpening";
import OurTeam from "./Components/OurTeam";
import Partners from "./Components/Partners";

import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

const About = () => {
  const [backToTopBtnAvailable, setBackToTopBtnAvailable] = useState(false);

  let currentScrollPosition = window.scrollY;
  useEffect(() => {
    window.addEventListener("scroll", scrollFunc);
    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollFunc = () => {
    const scrolling = window.scrollY >= currentScrollPosition;
    setBackToTopBtnAvailable(scrolling);

    currentScrollPosition = window.scrollY;
    const visible = currentScrollPosition >= 100;
    setBackToTopBtnAvailable(visible);
  };

  return (
    <>
      <Navbar />
      <AboutOpening />
      <WhoWeAre />
      <OurTeam />
      <Partners />
      <Footer />

      <>
        {backToTopBtnAvailable && (
          <button
            onClick={scrollToTop}
            className="backToTopBtn"
            data-tooltip-id="bttb"
            data-tooltip-content="back to top"
            data-tooltip-place="left"
          >
            &#129045;
          </button>
        )}
      </>

      <ReactTooltip id="bttb" />
    </>
  );
};

export default About;
