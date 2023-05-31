import Navbar from "../Navbar";
import Footer from "../Footer";
import Application from "./Application";

import { useState } from "react";

const MA_DescriptionPage = () => {
  const [toggleApplication, setToggleApplication] = useState(false);
  return (
    <>
      <Navbar />
      <div className="descriptionPage">
        <div className="descriptionText">
          <h1>Market Analyst</h1>

          <h2>About Our Company</h2>
          <p>
            Natten is a team of software engineering students in Central
            Florida. Natten’s goal is to provide technical expertise and support
            for leading innovators. By offering software development services,
            Natten partners with product owners through a contract.
          </p>
          <br></br>
          <p>
            With the first ideas of Natten dating back to 2020, Natten Founder &
            CEO Carson Frankovich wanted to create a team of software
            development students collaborating on projects to gain real-world
            experience. Despite the group breaking up one year later in 2021,
            Natten made a comeback in Summer 2023 with a new business model and
            vision.
          </p>
          <br></br>
          <p>
            While Natten does not own an office space, team members are located
            in Central Florida and communicate online.
          </p>

          <h2>Job Description</h2>
          <p>
            As a Market Analyst, you will be responsible for conducting thorough
            market research, analyzing industry trends, and assessing
            competitive landscapes. You will gather and interpret data to
            identify market opportunities, potential clients, and emerging
            technology trends.
          </p>
          <br></br>
          <p>
            Your findings will support strategic decision-making processes,
            helping the company capitalize on market trends and align its
            services with client needs. The ideal candidate should possess a
            strong analytical mindset, exceptional research skills, and an
            understanding of the software development industry.
          </p>

          <h2>Responsibilities</h2>
          <ul>
            <li>Conduct comprehensive market research</li>
            <li>
              Identify potential clients for software contracting services
            </li>
            <li>Stay updated on industry news</li>
            <li>Support business development</li>
            <li>
              Provide research and analytics to executives to support company
              objectives
            </li>
            <li>Assist in identifying potential clients</li>
            <li>Prepare reports for internal operations</li>
          </ul>

          <h2>Qualifications</h2>
          <ul>
            <li>Strong analytical skills</li>
            <li>Profficiency in market research</li>
            <li>Excellent written and verbal communication</li>
          </ul>

          <div className="applySection">
            <button onClick={() => setToggleApplication(true)}>Apply</button>
          </div>
        </div>
      </div>
      {toggleApplication && <Application job="Market Analyst" />}
      <Footer />
    </>
  );
};

export default MA_DescriptionPage;
