import { Route } from "wouter";
import Landing from "./Landing";
import About from "./About";

function App() {  
  return (
    <div className="w-full overflow-x-hidden">
      <Route path="/" component={Landing} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
