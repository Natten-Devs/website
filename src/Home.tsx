import { useEffect, useState } from "react";

import Navbar from "./Components/Navbar";
import Opening from "./Components/Home/Opening";
import HowWeWork from "./Components/Home/HowWeWork";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import WhoWeAre from "./Components/About/WhoWeAre";
import SoftwareSolutions from "./Components/Home/SoftwareSolutions";

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
      <Navbar style="light" />
      <Opening />
      <WhoWeAre />
      <SoftwareSolutions />
      <HowWeWork />
      <Contact title="Tell Us About Your Project!" />
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
