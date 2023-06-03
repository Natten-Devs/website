import { Route, Routes } from "../node_modules/react-router-dom/dist/index";

import Home from "./Home";
import Blog from "./Blog";
import About from "./About";
import Services from "./Services";
import Careers from "./Careers";
import NotFound from "./NotFound";
import Legal from "./Legal";
import Contact from "./Contact";
import MA_DescriptionPage from "./Components/Careers/MA_DescriptionPage";
import FSE_DescriptionPage from "./Components/Careers/FSE_DescriptionPage";
import CAS_DescriptionPage from "./Components/Careers/CAS_DescriptionPage";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/careers" element={<Careers />}></Route>
      <Route path="/legal" element={<Legal />}></Route>
      <Route path="/contact" element={<Contact />}></Route>

      <Route
        path="/careers/market-analyst"
        element={<MA_DescriptionPage />}
      ></Route>
      <Route
        path="/careers/full-stack-engineer"
        element={<FSE_DescriptionPage />}
      ></Route>
      <Route
        path="/careers/client-acquisition-specialist"
        element={<CAS_DescriptionPage />}
      ></Route>
    </Routes>
  );
};

export default App;
