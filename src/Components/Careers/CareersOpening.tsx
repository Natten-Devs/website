import OpeningAnimation from "../OpeningAnimation";

import AboutSlide from "../About/AboutSlide";

const CareersOpening = () => {
  return (
    <div className="opening careers">
      <AboutSlide
        header="Ignite Your Career in Software Development"
        paragraph="join our team of innovators and shape the future of technology"
      />
      <OpeningAnimation top="fourtytop" />
    </div>
  );
};

export default CareersOpening;
