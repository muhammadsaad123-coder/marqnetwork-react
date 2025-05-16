import React from 'react';
// import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import AboutSection from '../../components/AboutSection/AboutSection';
import ResultsSection from '../../components/ResultsSection/ResultsSection';
import Work from '../../components/Work/Work';
import FeatureSection from '../../components/FeatureSection/FeatureSection';
import FeatureGridSection from '../../components/FeatureGridSection/FeatureGridSection'
import LandinBenefits from '../../components/LandinBenefits/LandinBenefits';
// import ModernFeaturesSection from '../../components/ModernFeaturesSection/ModernFeaturesSection';
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection';
import OurServices from '../../components/OurServices/OurServices';
import LaunchSection from '../../components/LaunchSection/LaunchSection';
import JoinUsNow from '../../components/JoinUsNow/JoinUsNow';
// import Footer from '../../components/Footer/Footer'
import FAQSection from '../../components/FAQSection/FAQSection'
import LandinBenefitCards from '../../components/LandinBenefitCards/LandinBenefitCards';
import './Home.css'

const Home = () => {
  return (
    <div  className="home-container">
     
      {/* <Navbar /> */}
      <Hero />
      <AboutSection />
      <ResultsSection />
      <Work />
      <FeatureSection />
      <FeatureGridSection />
      <LandinBenefits />
      <LandinBenefitCards/>
      {/* <ModernFeaturesSection /> */}
      <PortfolioSection />
      <OurServices />
      <LaunchSection />
      
      <div style={{textAlign:"left" , width: "100%"}}>
        <FAQSection/>
      </div>
      <JoinUsNow />
      {/* <Footer /> */}
      
      
      
    </div>
  );
};

export default Home;
