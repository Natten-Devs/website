import {
  BrowserRouter,
  Route,
  Routes,
} from "../node_modules/react-router-dom/dist/index";
import Home from "./Home";
import Blog from "./Blog";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/blog" exact element={<Blog />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
