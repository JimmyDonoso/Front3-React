import "./styles.css";
import Home from "./components/Home";
import Guauguaus from "./components/Guauguas";
import Miausmiaus from "./components/Miausmiaus";
import { Router, Route, browserHistory } from "react-router-3";

export default function App() {
  return (
    <div className="App">
      <Router history={browserHistory}>
        <Route path="/" component={Home}>
          <Route path="/guauguaus" component={Guauguaus} />
          <Route path="/miausmiaus" component={Miausmiaus} />
        </Route>
      </Router>
    </div>
  );
}
