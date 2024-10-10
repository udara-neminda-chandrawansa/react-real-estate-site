//import logo from './logo.svg';
//import Button from './components/Button';
import './App.css';
//import Nav from './components/Nav';
import Banner from './components/Banner';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
    <div className="App bg-blue-400">
      {/*<img src={logo} className="" alt="logo" />*/}
      <Sidebar/>
      <Banner/>
    </div>
    <div className='h-[200px] bg-white'>
        hi hi hi
      </div>
    </>
  );
}

export default App;
