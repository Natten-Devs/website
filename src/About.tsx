import { useEffect, useState } from "react";

import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import WhoWeAre from "./Components/About/WhoWeAre";
import AboutOpening from "./Components/About/AboutOpening";
import OurTeam from "./Components/About/OurTeam";
import Partners from "./Components/About/Partners";

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
      <Navbar style="light" />
      <AboutOpening />
      <WhoWeAre />
      <OurTeam />
      <Partners />
      <Contact title="Questions?" />
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
