import { useLayoutEffect, useState } from 'react';
import './App.css'
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import TabsSection from './components/Tabs_Section/TabsSection';
import useWindowDimensions from './hook/useWindowDimensions';
import ActionSection from './components/Action_Section/ActionSection';
import ViewSection from './components/View_Section/ViewSection';
import TestimonialSection from './components/Testimonial_Section/TestimonialSection';
import PricingSection from './components/Pricing_Section/PricingSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';



function App() {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  // const { width } = useWindowDimensions();
  // useLayoutEffect(() => {
  //   if (width > 1024) {
  //     setIsOpen(true);
  //   }
  // }, [width]);

  // function fixedPage() {
  //   if (isOpen && width < 1024) {
  //     return "fixed"
  //   }
  // }

  return (
    <div className={`w-screen`}>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className=''>
        <HeroSection />
        <TabsSection />
        <ActionSection />
        <ViewSection />
        <TestimonialSection />
        <PricingSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}

export default App
