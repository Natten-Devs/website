import Navbar from "./Components/Navbar";
import ServiceOpening from "./Components/Services/ServiceOpening";
import Footer from "./Components/Footer";
import ServiceProblems from "./Components/Services/ServiceProblems";
import ServiceSteps from "./Components/Services/ServiceSteps";
import ServiceSolutions from "./Components/Services/ServiceSolutions";
import Contact from "./Components/Contact";

const Services = () => {
  return (
    <div className="nooverflow">
      <Navbar style="dark" />

      <ServiceOpening />

      <ServiceProblems />

      <ServiceSteps />

      <ServiceSolutions />

      <Contact border={false} title="Let's Connect" style="dark" />

      <Footer style="dark" />
    </div>
  );
};

export default Services;
