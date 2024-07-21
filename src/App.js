
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Education from './components/Education';
import Research from './components/Research';
import Admission from './components/Admission';
import Innovation from './components/Innovation';
import Objectarray from './components/Objectarray';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/foorter" element={<Footer />} />
          <Route path="/education" element={<Education />} />
          <Route path="/research" element={<Research/>} />
          <Route path="/admission" element={<Admission/>} />
          <Route path="/innovation" element={<Innovation/>} />
          <Route path="/objectarray" element={<Objectarray />} />


        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
