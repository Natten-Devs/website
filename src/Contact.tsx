import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ContactForm from "./Components/Contact";
import OpeningAnimation from "./Components/OpeningAnimation";

const Contact = () => {
  return (
    <>
      <Navbar style="light" />

      <div className="opening">
        <ContactForm
          style="light"
          border={false}
          title="What Can We Do for You?"
        />
        <OpeningAnimation top="eightytop" />
      </div>

      <Footer style="light" />
    </>
  );
};

export default Contact;
