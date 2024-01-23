import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import About from './pages/About/About';
import Service from './pages/Service/Service';
import Protifile from './pages/Protfile/Protifile';
import Contact from './pages/Contact/Contact';
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
// import All from './All';
import Home from './pages/Home/Home';

function App() {

  const setdarkmode = () => {
    document.querySelector("body").setAttribute("data-theme", "light")
    localStorage.setItem("selectedTheme", "light")
  }
  const setlightmode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark")
    localStorage.setItem("selectedTheme", "dark")
  }

  const selectedTheme = localStorage.getItem("selectedTheme")
  if (selectedTheme === "dark") {
    setdarkmode()
  }

  const toggleTheme = (e) => {
    if (e.target.checked) setdarkmode()
    else setlightmode()

  }
  return (
    <>

      <div className="dark-mode">
        <input type="checkbox" id='darkmode-toggle'
          onChange={toggleTheme}
          defaultChecked={selectedTheme === "dark"}
        />
        <label for="darkmode-toggle">
          <FaMoon className='icoon' />
          <CiSun className='icoon' />
        </label>
      </div>


<BrowserRouter>
<div className="bigcontanier">


        <Navbar />

          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='*' element={<Home/>} />
            <Route path='/about' element={<About />} />
            <Route path='/Service' element={<Service />} />
            <Route path='/Protfile' element={<Protifile />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
</div>
</BrowserRouter>

    </>
  );
}

export default App;
