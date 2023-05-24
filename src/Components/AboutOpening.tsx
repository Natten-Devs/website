import OpeningAnimation from "./OpeningAnimation";

import AboutSlide from "./AboutSlide";
import { useState } from "react";

const AboutOpening = () => {
  const [slideNum, setSlideNum] = useState(0);

  const handleClick = (adjustment: boolean) => {
    let num = adjustment ? slideNum + 1 : slideNum - 1;
    if (num < 0) {
      num += 4;
    }
    setSlideNum(num % 4);
  };

  return (
    <div className="opening slideshow">
      {slideNum === 0 && (
        <AboutSlide
          header="Our Team Is Your Team"
          paragraph="using a client-centric approach"
        />
      )}
      {slideNum === 1 && (
        <AboutSlide
          header="Not Just Developers"
          paragraph="we think through your business plans at an analytical level"
        />
      )}
      {slideNum === 2 && (
        <AboutSlide
          header="We Add Value"
          paragraph="maximizing operational effectiveness, accelerating growth, and boosting profitability"
        />
      )}
      {slideNum === 3 && (
        <AboutSlide
          header="Providing Exponential Opportunity"
          paragraph="we aid businesses making the transition to the digital world"
        />
      )}

      <OpeningAnimation top="threefivetop" />

      <a className="previous" onClick={() => handleClick(false)}>
        &#10094;
      </a>
      <a className="next" onClick={() => handleClick(true)}>
        &#10095;
      </a>
    </div>
  );
};

export default AboutOpening;
