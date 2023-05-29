import {
  BrowserRouter,
  Route,
  Routes,
} from "../node_modules/react-router-dom/dist/index";

import Home from "./Home";
import Blog from "./Blog";
import About from "./About";
import Careers from "./Careers";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/careers" element={<Careers />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
