//import logo from './logo.svg';
//import Button from './components/Button';
import './App.css';
//import Nav from './components/Nav';
import Banner from './components/Banner';
import Sidebar from './components/Sidebar';
import HomeSection1 from './components/HomeSection1';
import HomeSection2 from './components/HomeSection2';
import HomeSection3 from './components/HomeSection3';
import HomeSection4 from './components/HomeSection4';

function App() {
  return (
    <>
      <div className="App bg-blue-400">
        {/*<img src={logo} className="" alt="logo" />*/}
        <Sidebar />
        <Banner />
      </div>
      <HomeSection1/>
      <HomeSection2/>
      <HomeSection3/>
      <HomeSection4/>
    </>
  );
}

export default App;
