import Navbar from "./Components/Navbar";
import CareersOpening from "./Components/Careers/CareersOpening";
import Footer from "./Components/Footer";
import JobCard from "./Components/Careers/JobCard";

const Careers = () => {
  return (
    <>
      <Navbar style="light" />
      <CareersOpening />

      <div className="siteSection">
        <h1>Vacancies</h1>

        <div className="infoHolder vacancies">
          <JobCard
            title="Market Analyst"
            location="Remote"
            jobId="market-analyst"
          ></JobCard>
          <JobCard
            title="Full-Stack Engineer"
            location="Remote"
            jobId="full-stack-engineer"
          ></JobCard>
          <JobCard
            title="Client Acquisition Specialist"
            location="Remote"
            jobId="client-acquisition-specialist"
          ></JobCard>
        </div>
      </div>

      <Footer style="light" />
    </>
  );
};

export default Careers;
