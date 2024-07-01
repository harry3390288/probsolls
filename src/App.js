import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBartwo from './components/NavBartwo';
import Herosection from './components/Herosection';
import WorkSection from './components/WorkSection';
import About from './components/About';
import MessageSection from './components/MessageSection';
import Footer from './components/Footer';
import Skilltwo from './components/Skilltwo';
import WorkMain from './components/WorkMain'; // Import WorkMain component
import Detail from './components/Detail'; // Import WorkMain component
import ScrollToTop from './components/ScrollToTop';

function Home() {
  return (
    <>
      <NavBartwo/>
      <div id="home"><Herosection /></div>
      <div id="skills"><Skilltwo /></div>
      <div id="work"><WorkSection /></div>
      <div id="about"><About /></div>
      <MessageSection/>
      <Footer/>
      
    </>
  );
}
function WorkMainsec(){
  return(
    <>
    <NavBartwo/>
    <WorkMain/>
    <Footer/>
    </>
  )
}
function Detailedsec(){
  return(
    <>
    <NavBartwo/>
    <Detail/>
    <Footer/>
    </>
  )
}

function App() {
  return (
    <Router>
       <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work-main" element={<WorkMainsec />} />
        <Route path="/detail" element={<Detailedsec />} />
      </Routes>
    </Router>
  );
}

export default App;
