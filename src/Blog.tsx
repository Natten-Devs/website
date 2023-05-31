import Navbar from "./Components/Navbar";
import Tags from "./Components/Tags";
import Posts from "./Components/Posts";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="blogPage">
      <Navbar style="light" />
      <Tags />
      <Posts />
      <Footer style="light" />
    </div>
  );
};

export default App;
