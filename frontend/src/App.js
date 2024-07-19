
import './App.css';
import Home from './screens/Home';
import About from './screens/About';
import { Routes, Route, Navigate } from 'react-router-dom';
import Services from './screens/Services';
import ServciesInner from './screens/ServciesInner';
import Contact from './screens/Contact';
import CaseStudies from './screens/CaseStudies';
import FooterHero from './components/FooterSection/FooterHero';
import Blog from './screens/Blog';
import LatestProject from './components/LatestProject/LatestProject';
import Bloginner from './components/BlogInnerSection/BlogInner'
import CasestudyInner from './components/CaseStudyInnerSection/CasestudyInner';
import PrivacyPolicyPage from './screens/PrivacyPolicyPage';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/servicesinner" element={<ServciesInner />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/casestudies" element={<CaseStudies />} />
        <Route path="/casestudyinner" element={<CasestudyInner />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/bloginner" element={<Bloginner />} />
        <Route path="/projects" element={<LatestProject />} />
        <Route path="/privacy_policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </div>
  );
}

export default App;
