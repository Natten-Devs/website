
import Navbar from "./Components/Navbar";
import Tags from "./Components/Tags";
import Posts from "./Components/Posts";
import Footer from "./Components/Footer";

const App = () => {
    return (
        <div className="blogPage">
            <Navbar />
            <Tags />
            <Posts />
            <Footer />
        </div>
    );
};

export default App;