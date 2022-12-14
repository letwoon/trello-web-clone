import { useLayoutEffect, useState } from 'react';
import './App.css'
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import useWindowDimensions from './hook/useWindowDimensions';



function App() {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { width } = useWindowDimensions();
  useLayoutEffect(() => {
    if (width > 1024) {
      setIsOpen(true);
    }
  }, [width]);

  function fixedPage() {
    if (isOpen && width < 1024) {
      return "fixed"
    }
  }

  return (
    <div className={`w-full ${fixedPage()} `}>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <HeroSection />
    </div>
  );
}

export default App
