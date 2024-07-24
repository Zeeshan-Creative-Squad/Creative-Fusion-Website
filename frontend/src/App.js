
import './App.css';
import Home from './screens/Home';
import About from './screens/About';
import { Routes, Route, Navigate } from 'react-router-dom';
import Services from './screens/Services';
import ServciesInner from './screens/ServciesInner';
import WebDevelopmentServices from './screens/WebDevelopmentServices';
import Contact from './screens/Contact';
import CaseStudies from './screens/CaseStudies';
import FooterHero from './components/FooterSection/FooterHero';
import Blog from './screens/Blog';
import LatestProject from './components/LatestProject/LatestProject';
import Bloginner from './components/BlogInnerSection/BlogInner'
import CasestudyInner from './components/CaseStudyInnerSection/CasestudyInner';
import PrivacyPolicyPage from './screens/PrivacyPolicyPage';
import Header from './components/Header/Header';
import SocialMediaMarketing from './screens/SocialMediaMarketing';
import GoogleAds from './screens/GoogleAds';
import ServiceEngineOptimization from './screens/SearchEngineOptimization';
import PerformanceMarketing from './screens/PerformanceMarketing';
import UIUXDevelopment from './screens/UIUXDevelopment';
import EcommerceDevelopment from './screens/EcommerceDevelopment';
import ApplicationDevelopment from './screens/ApplicationDevelopment';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

        <Route path="/servicesinner" element={<ServciesInner />} />
        <Route path="/web-development" element={<WebDevelopmentServices />} />
        <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
        <Route path="/google-ads" element={<GoogleAds />} />
        <Route path="/service-engine-optimization" element={<ServiceEngineOptimization />} />
        <Route path="/performance-marketing" element={<PerformanceMarketing />} />
        <Route path="/uiux-development" element={<UIUXDevelopment />} />
        <Route path="/ecommerce-development" element={<EcommerceDevelopment />} />
        <Route path="/application-development" element={<ApplicationDevelopment />} />

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
