//import { Route } from "wouter";
import Landing from "./Landing";
import About from "./About";
import LatestLaunches from "./LatestLaunches";
import { useState } from "react";

export default function App() {
  const [activePage, setActivePage] = useState("home");
  const changeActivePage = (page) => {
    setActivePage(page);
  };
  return (
    <div className="w-full overflow-hidden">
      {activePage === "home" && <Landing changeActivePage={changeActivePage} />}
      {activePage === "about" && <About changeActivePage={changeActivePage} />}
      {activePage === "latestL" && (
        <LatestLaunches changeActivePage={changeActivePage} />
      )}
    </div>
  );
}

