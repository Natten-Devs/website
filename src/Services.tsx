import Navbar from "./Components/Navbar";
import ServiceOpening from "./Components/Services/ServiceOpening";
import ServiceCard from "./Components/Services/ServiceCard";

const Services = () => {
  return (
    <div className="nooverflow">
      <Navbar style="dark" />

      <ServiceOpening />

    </div>
  );
};

export default Services;
