import './App.css';
import Home from './screens/Home';
import About from './screens/About';
import { Routes, Route, Navigate } from 'react-router-dom';
import Services from './screens/Services';
import WebDevelopmentServices from './screens/WebDevelopmentServices';
import Contact from './screens/Contact';
import CaseStudies from './screens/CaseStudies';
import Blog from './screens/Blog';
import LatestProject from './components/LatestProject/LatestProject';
import Bloginner from './components/BlogInnerSection/BlogInner'
import CasestudyInner from './components/CaseStudyInnerSection/CasestudyInner';
import PrivacyPolicyPage from './screens/PrivacyPolicyPage';
import Header from './components/Header/Header';
import SocialMediaMarketing from './screens/SocialMediaMarketing';
import GoogleAds from './screens/GoogleAds';
import PerformanceMarketing from './screens/PerformanceMarketing';
import UIUXDevelopment from './screens/UIUXDevelopment';
import EcommerceDevelopment from './screens/EcommerceDevelopment';
import ApplicationDevelopment from './screens/ApplicationDevelopment';
import SearchEngineOptimization from './screens/SearchEngineOptimization';
import DesignAndBranding from './screens/DesignAndBranding';

import BlogsScreen from "./AdminScreens/BlogsScreens/BlogsScreen";
import AdminScreen from "./AdminScreens/AdminScreen";
import LocationScreen from './screens/LocationScreens/LocationScreen';
import LocationPages from "./components/LocationPages_/LocationPages"
import BlogInnerPage from './screens/BlogInnerPage';




function App() {
  return (
    <div className="App">
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

        <Route path="/design-and-branding" element={<DesignAndBranding />} />
        <Route path="/web-development" element={<WebDevelopmentServices />} />
        <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
        <Route path="/google-ads" element={<GoogleAds />} />
        <Route path="/search-engine-optimization" element={<SearchEngineOptimization />} />
        <Route path="/performance-marketing" element={<PerformanceMarketing />} />
        <Route path="/uiux-development" element={<UIUXDevelopment />} />
        <Route path="/ecommerce-development" element={<EcommerceDevelopment />} />
        <Route path="/application-development" element={<ApplicationDevelopment />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/casestudies" element={<CaseStudies />} />
        <Route path="/casestudyinner" element={<CasestudyInner />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogs/:id" element={<BlogInnerPage />} />
        <Route path="/projects" element={<LatestProject />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

        <Route path="/admin" element={<AdminScreen />} />
        <Route path="/admin/blogs" element={<BlogsScreen />} />
        <Route path='/location/:slug' element={<LocationPages />} />
        <Route path='/admin/location-pages' element={<LocationScreen />}/>
      </Routes>
    </div>
  );
}

export default App;
