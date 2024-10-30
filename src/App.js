import { Route } from "wouter";
import Landing from "./Landing";
import About from "./About";
import LatestLaunches from "./LatestLaunches";

function App() {  
  return (
    <div className="w-full overflow-hidden">
      <Route path="/" component={Landing} />
      <Route path="/about" component={About} />
      <Route path="/latest-launches" component={LatestLaunches} />
    </div>
  );
}

export default App;
