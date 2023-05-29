import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import TumbleWeeds from "./assets/tumbleweed.gif";

const NotFound = () => {
  return (
    <>
      <Navbar />

      <div className="opening">
        <h1>Hmmm... seems empty here</h1>
        <a className="openinglink" href="/home">
          Take me home →
        </a>
        <img className="notFound" src={TumbleWeeds}></img>
      </div>

      <Footer />
    </>
  );
};

export default NotFound;
