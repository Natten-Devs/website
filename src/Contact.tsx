import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ContactForm from "./Components/Contact";
import OpeningAnimation from "./Components/OpeningAnimation";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="opening">
        <ContactForm border={false} title="What Can We Do for You?" />
        <OpeningAnimation top="eightytop" />
      </div>

      <Footer />
    </>
  );
};

export default Contact;
