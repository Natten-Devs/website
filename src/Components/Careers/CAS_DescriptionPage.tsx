import Navbar from "../Navbar";
import Footer from "../Footer";
import Application from "./Application";

import { useState } from "react";

const CAS_DescriptionPage = () => {
  const [toggleApplication, setToggleApplication] = useState(false);
  return (
    <>
      <Navbar />
      <div className="descriptionPage">
        <div className="descriptionText">
          <h1>Client Acquisition Specialist</h1>

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
            As a client acquisitionist, you will play a crucial role in driving
            business growth by identifying new clients for our software
            development services. Your primary responsibility will be to build
            and maintain a pipeline of potential clients, establish
            relationships, and convert them into long-term partnerships.
          </p>

          <h2>Responsibilities</h2>
          <ul>
            <li>
              Identify and prospect potential clients generate new business
              opportunities
            </li>
            <li>Engage with prospective clients</li>
            <li>
              Build and maintain strong relationships with key decision-makers
              within client organizations
            </li>
            <li>
              Stay updated with industry trends to identify new business
              opportunities
            </li>
          </ul>

          <h2>Qualifications</h2>
          <ul>
            <li>Excellent communication and interpersonal skills</li>
            <li>Ability to work independently</li>
            <li>Interest in technology</li>
          </ul>

          <div className="applySection">
            <button onClick={() => setToggleApplication(true)}>Apply</button>
          </div>
        </div>
      </div>

      {toggleApplication && <Application job="Client Acquisition Specialist" />}
      <Footer />
    </>
  );
};

export default CAS_DescriptionPage;
