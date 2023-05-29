import OpeningAnimation from "../OpeningAnimation";

import AboutSlide from "../About/AboutSlide";

const CareersOpening = () => {
  return (
    <div className="opening careers">
      <AboutSlide
        header="Join the Team"
        paragraph="we are looking for talented individuals to expand"
      />

      <OpeningAnimation top="fourtytop" />
    </div>
  );
};

export default CareersOpening;
