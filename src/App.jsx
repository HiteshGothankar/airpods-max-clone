import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import BatteryDetailsSection from "./sections/BatteryDetailsSection"
import ColorProductSection from "./sections/ColorProductSection"
import HifiSoundSection from "./sections/HifiSoundSection"
import HighlightsSection from "./sections/HighlightsSection"
import HomeSection from "./sections/HomeSection"
import KeepExploringSection from "./sections/KeepExploringSection"
import ProductDesignSection from "./sections/ProductDesignSection"
import ProductFeatureSection from "./sections/ProductFeatureSection"
import WhyAppleSection from "./sections/WhyAppleSection"
import PreFooterSection from "./sections/PreFooterSection"


function App() {

  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <HomeSection />
        <HighlightsSection />
        <ColorProductSection />
        <HifiSoundSection />
        <ProductFeatureSection />
        <ProductDesignSection />
        <BatteryDetailsSection />
        <WhyAppleSection />
        <KeepExploringSection />
        <PreFooterSection />
        <Footer />
      </div>
    </>
  )
}

export default App
