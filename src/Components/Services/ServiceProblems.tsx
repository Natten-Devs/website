import SPC from "./ServiceProblemCard";

const ServiceProblems = () => {
  return (
    <div className="siteSection dark">
      <h1 className="serviceHeader">Using Softare to Solve Your Problems</h1>

      <div className="serviceProblemContainer">
        <SPC
          h2="> Automation"
          p="Putting trust in an automated system frees up time and resources. Through intelligent automation, we help businesses improve operational efficiency, enhance productivity, and achieve higher levels of accuracy."
        />
        <SPC
          h2="> Online Presence"
          p="In today's digital age, having an online presence is a must for a business to excell. We recognize this significance by creating dynamic websites, user-friendly interfaces, and mobile applications for consumers."
        />
        <SPC
          h2="> Data Analytics"
          p="By harnessing the power of data, we employ analytic techniques and tools to transform raw data into meaningful reports, predictive models, and visualizations."
        />
      </div>
    </div>
  );
};

export default ServiceProblems;
