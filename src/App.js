//import { Route } from "wouter";
import Landing from "./Landing";
import About from "./About";
import LatestLaunches from "./LatestLaunches";
import { Route } from "wouter";

export default function App() {
  return (
    <div className="w-full overflow-hidden">
      <Route path="/" component={Landing} />
      <Route path="/about" component={About} />
      <Route path="/latest" component={LatestLaunches} />
    </div>
  );
}

 // for vercel