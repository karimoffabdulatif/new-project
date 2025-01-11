import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "./components/header/navbar";
import Banner from "./components/ui/banner-section/banner";
import Footer from './components/footer/footer'
import FutureSection from './components/ui/future-section/future';

const App = () => {
  return (
    <Router>
      <div>
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Philosopher&display=swap" rel="stylesheet" />
        </Helmet>

        <Navbar />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/about" element={<div>About Us Page</div>} />
          <Route path="/menu" element={<div>Menu Page</div>} />
          <Route path="/features" element={<div>Features Page</div>} />
          <Route path="/contact" element={<div>Contact Us Page</div>} />
        </Routes>
        <FutureSection/>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
