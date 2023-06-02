import OpeningAnimation from "../OpeningAnimation";

import AboutSlide from "./AboutSlide";
const AboutOpening = () => {
  return (
    <div className="opening slideshow">
      <AboutSlide
        header="Our Team Is Your Team"
        paragraph="using a client-centric approach"
      />

      <OpeningAnimation top="threefivetop" />
    </div>
  );
};

export default AboutOpening;
