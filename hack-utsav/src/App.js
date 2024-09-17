
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Themes from './Components/Themepage/Themes';
import Home from './Components/HomePage/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FAQSection from './Components/FAQpage/FAQSection';
function App() {
  return (
    <>
   
      {/* <Header></Header>
      <Home></Home> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/theme" element={<Themes />} />
        <Route path="/faq" element={<FAQSection />} />
        {/* <Route path="/join" element={<Join />} /> */}
      </Routes>
    
</>
  );
}

export default App;
