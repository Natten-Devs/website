import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/services" component={Services}></Route>
        <Route path="/blog" component={Blog}></Route>
        <Route path="/careers" component={Careers}></Route>
        <Route path="/legal" component={Legal}></Route>
        <Route path="/contact" component={Contact}></Route>

        <Route
          path="/careers/market-analyst"
          component={MA_DescriptionPage}
        ></Route>
        <Route
          path="/careers/full-stack-engineer"
          component={FSE_DescriptionPage}
        ></Route>
        <Route
          path="/careers/client-acquisition-specialist"
          component={CAS_DescriptionPage}
        ></Route>

        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  );
};

export default App;
