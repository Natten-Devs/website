import { useEffect, useState } from "react";

import Navbar from "./Components/Navbar";
import Opening from "./Components/Opening";
import HowWeWork from "./Components/HowWeWork";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import WhoWeAre from "./Components/WhoWeAre";
import SoftwareSolutions from "./Components/SoftwareSolutions";

import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

const App = () => {
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
      <Opening />
      <WhoWeAre />
      <SoftwareSolutions />
      <HowWeWork />
      <Contact />
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

export default App;
