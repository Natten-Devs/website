import Navbar from "../Navbar";
import Footer from "../Footer";
import Application from "./Application";

import { useState } from "react";

const FSE_DescriptionPage = () => {
  const [toggleApplication, setToggleApplication] = useState(false);

  return (
    <>
      <Navbar />
      <div className="descriptionPage">
        <div className="descriptionText">
          <h1>Full-Stack Engineer</h1>

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
            We are looking for a Software Engineer with a versatile skill set
            and a passion for learning. As a Software Engineer at Natten, you
            will be responsible for building applications in diverse
            technologies such as
          </p>
          <br></br>
          <ul>
            <li>Web Applications</li>
            <li>Mobile Applications</li>
            <li>Artificial Intelligence</li>
            <li>Database Management Systems</li>
            <li>Cloud Computing</li>
            <li>Blockchain</li>
          </ul>
          <br></br>
          <p>
            As an engineer at Natten, you will have the opportunity to work on
            cutting-edge projects, tackle complex challenges, and contribute to
            the development of innnovative software solutions.
          </p>

          <h2>Responsibilities</h2>
          <ul>
            <li>
              Collaborate with cross-functional teams to understand project
              requirements
            </li>
            <li>Design, develop, test, and deploy applications</li>
            <li>Participate in reviews during the scrum development process</li>
          </ul>

          <h2>Qualifications</h2>
          <ul>
            <li>Proven experience in software development</li>
            <li>Strong programming skills</li>
            <li>Excellent problem solving skills</li>
            <li>Ability to learn new technologies</li>
            <li>Strong communication and collaboration skills</li>
          </ul>

          <div className="applySection">
            <button onClick={() => setToggleApplication(true)}>Apply</button>
          </div>
        </div>
      </div>
      {toggleApplication && <Application job="Full-Stack Engineer" />}
      <Footer />
    </>
  );
};

export default FSE_DescriptionPage;
