import ServiceSolutionCard from "./ServiceSolutionCard";

const ServiceSolutions = () => {
  return (
    <>
      <div id="Solutions" className="siteSection serviceSols dark">
        <ServiceSolutionCard
          imgclass="webapppic"
          title="Web Applications"
          shortdesc="A web-based application accessible through a web browser for users to interact with and perform various tasks."
          linkto="web-application"
        />

        <ServiceSolutionCard
          imgclass="mobileapppic"
          title="Mobile Applications"
          shortdesc="An application designed to run on mobile devices such as smartphones or tablets, offering specific functionalities and features."
          linkto="mobile-application"
        />
        <ServiceSolutionCard
          imgclass="aipic"
          title="Artificial Intelligence"
          shortdesc="The development of computer systems capable of performing tasks that typically require human intelligence, such as speech recognition, problem-solving, and decision-making."
          linkto="artificial-intelligence"
        />
        <ServiceSolutionCard
          imgclass="dbmspic"
          title="Database Management Systems"
          shortdesc="Software systems that manage and organize data, allowing users to store, retrieve, update, and analyze information efficiently and securely."
          linkto="database-management"
        />
        <ServiceSolutionCard
          imgclass="ccpic"
          title="Cloud Computing"
          shortdesc="The delivery of computing services over the internet, providing on-demand access to a shared pool of resources, such as servers, storage, and applications, offering scalability and flexibility."
          linkto="cloud-computing"
        />
        <ServiceSolutionCard
          imgclass="blockchainpic"
          title="Blockchain"
          shortdesc="A decentralized and distributed digital ledger technology that securely records and verifies transactions across multiple computers, ensuring transparency, immutability, and trust in various applications."
          linkto="blockchain"
        />
      </div>
    </>
  );
};

export default ServiceSolutions;
