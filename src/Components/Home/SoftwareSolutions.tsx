import { useState } from "react";

import aiIcon from "../../assets/Artificial Intelligence Icon.svg";
import blockchainIcon from "../../assets/Blockchain Icon.svg";
import cloudComputingIcon from "../../assets/Cloud Computing Icon.svg";
import dbmIcon from "../../assets/Database Management Icon.svg";
import mobileIcon from "../../assets/Mobile App Icon.svg";
import webappIcon from "../../assets/Webapp Icon.svg";
import SoftwareSolutionCard from "./SoftwareSolutionCard";

const SoftwareSolutions = () => {
  const [selectiveDiv, setSelectedDiv] = useState(1);

  const handleClick = (id: number) => {
    setSelectedDiv(id);
  };

  return (
    <div className="siteSection" id="softwareSolutions">
      <h1>Software Solutions</h1>
      <p className="learnMoreText">
        Learn about these technologies on our{" "}
        <a id="link3" className="link" href="/services">
          services page
        </a>
        .
      </p>

      <div className="infoHolder">
        <SoftwareSolutionCard
          cName={`selected3 ` + (selectiveDiv === 1 ? "selected" : "")}
          onClick={() => handleClick(1)}
          title="Web Applications"
          img={webappIcon}
        />
        <SoftwareSolutionCard
          cName={`selected4 ` + (selectiveDiv === 2 ? "selected" : "")}
          onClick={() => handleClick(2)}
          title="Mobile Applications"
          img={mobileIcon}
        />
        <SoftwareSolutionCard
          cName={`selected1 ` + (selectiveDiv === 3 ? "selected" : "")}
          onClick={() => handleClick(3)}
          title="Artificial Intelligence"
          img={aiIcon}
        />
        <SoftwareSolutionCard
          cName={`selected2 ` + (selectiveDiv === 4 ? "selected" : "")}
          onClick={() => handleClick(4)}
          title="Database Management"
          img={dbmIcon}
        />
        <SoftwareSolutionCard
          cName={`selected3 ` + (selectiveDiv === 5 ? "selected" : "")}
          onClick={() => handleClick(5)}
          title="Cloud Computing"
          img={cloudComputingIcon}
        />
        <SoftwareSolutionCard
          cName={`selected4 ` + (selectiveDiv === 6 ? "selected" : "")}
          onClick={() => handleClick(6)}
          title="Blockchain"
          img={blockchainIcon}
        />
      </div>

      <div className="moreInformationHolder" id="webapp">
        {selectiveDiv === 1 && (
          <>
            <h2>Web Applications</h2>
            <p>
              Elevate your online presence with dynamic and interactive websites
              that cater to your needs. From e-commerce platforms to customer
              relationship management (CRM) systems, our team ensures
              high-performance functionality in addition to approaching your
              project with an aesthetic mindset for the user interface.
            </p>
          </>
        )}
        {selectiveDiv === 2 && (
          <>
            <h2>Mobile Applications</h2>
            <p>
              Unlock exponential growth and gain a competitve edge in today's
              digital world by developing a mobile application tailed to your
              needs. Whether you need your platform on iOS, Android, or both,
              Natten is prepared to deliver high-performance functionality while
              retaining an engaging user experience.
            </p>
          </>
        )}
        {selectiveDiv === 3 && (
          <>
            <h2>Artificial Intelligence</h2>
            <p>
              Embrace the transformative wave of AI solutions taking over our
              digital landscape. From machine learning algorithms to intelligent
              automation, Natten leverages the power of AI to drive innovation
              and efficiency.
            </p>
          </>
        )}
        {selectiveDiv === 4 && (
          <>
            <h2>Database Management Systems</h2>
            <p>
              With an endless amount of solutions for a database, experience
              seamless efficiency, enhanced "zero-trust" data security, and
              streamlined operations with our cutting-edge database management
              systems. Natten offers a "Triple S" approach by providing
              security, scalablilty, and speed to your existing or new database.
              With expertise in data modeling, performance tuning, and data
              analysis, Natten is ready to cater to your service requirements.
            </p>
          </>
        )}
        {selectiveDiv === 5 && (
          <>
            <h2>Cloud Computing</h2>
            <p>
              Natten offers efficient solutions for cloud computing needs,
              empowering businesses with scalable and secure cloud-based
              applications. We leverage leading cloud platforms such as Amazon
              Web Services (AWS), Microsoft Azure, and Google Cloud Platform to
              optimize performance, scalability, and cost-effectiveness.
            </p>
          </>
        )}
        {selectiveDiv === 6 && (
          <>
            <h2>Blockchain Applications</h2>
            <p>
              Embrace the future of a decentralized, secure, and reliable
              blockchain application. Whether it's building private or public
              blockchains, implementing smart contracts, or exploring
              blockchain-based solutions, Natten ensures seamless integration
              and enhanced data integrity. Contact us to see if a blockchain
              solution is right for you.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default SoftwareSolutions;
