import React from "react";
import Header from "../../components/Header/Header.jsx";
import MainContent from "./components/MainContentSection/MainContent.jsx";
import SpecialContent from "./components/SpecialContentSection/SpecialContent.jsx";
import "./Home.css";
import FaqSection from "./components/FaqSectionSection/FaqSection.jsx";
import JoinUsBenefits from "./components/JoinUsBenefitsSection/JoinUsBenefits.jsx";
import DeviceShowcase from "./components/DeviceShowcaseSection/DeviceShowcase.jsx";
import Footer from "../../components/Footer/Footer.jsx";
function Home() {
  return (
    <div className="home__wrapper">
 
      <MainContent />
      <SpecialContent />
      <JoinUsBenefits />
      <DeviceShowcase />
      <FaqSection />
      <Footer />
    </div>
  );
}

export default Home;
