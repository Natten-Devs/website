import { useEffect, useState } from "react";

import Navbar from "./Components/Navbar";
import ServiceOpening from "./Components/Services/ServiceOpening";
import Footer from "./Components/Footer";
import ServiceProblems from "./Components/Services/ServiceProblems";
import ServiceSteps from "./Components/Services/ServiceSteps";
import ServiceSolutions from "./Components/Services/ServiceSolutions";
import Contact from "./Components/Contact";

const Services = () => {
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
    <div className="nooverflow">
      <Navbar style="dark" />

      <ServiceOpening />

      <ServiceProblems />

      <ServiceSteps />

      <ServiceSolutions />

      <Contact border={false} title="Let's Connect" style="dark" />

      <Footer style="dark" />

      <>
        {backToTopBtnAvailable && (
          <button
            onClick={scrollToTop}
            className="backToTopBtn backToTopBtnDark"
            data-tooltip-id="bttb"
            data-tooltip-content="back to top"
            data-tooltip-place="left"
          >
            ↑
          </button>
        )}
      </>
    </div>
  );
};

export default Services;
