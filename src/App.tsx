import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import './index.css';
import './styles/animations.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    let locomotiveScroll: any = null;

    // Define handleResize outside to ensure reference is the same for add/remove
    const handleResize = () => {
      if (locomotiveScroll) locomotiveScroll.update();
    };

    const initLocomotiveScroll = async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;

        // Wait for DOM to be ready
        const el = document.querySelector('#main-content') as HTMLElement | null;
        if (!el) return;

        locomotiveScroll = new LocomotiveScroll({
          el,
          smooth: true,
          multiplier: 0.8,
          lerp: 0.07,
          smartphone: {
            smooth: true
          },
          tablet: {
            smooth: true,
            breakpoint: 1024 // or another appropriate value for your design
          }
        });

        // Update scroll on window resize
        window.addEventListener('resize', handleResize);
      } catch (error) {
        console.error('Failed to initialize locomotive scroll:', error);
      }
    };

    // Initialize smooth scroll after loading
    if (!loading) {
      initLocomotiveScroll();
    }

    return () => {
      clearTimeout(timer);
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
        locomotiveScroll = null;
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [loading]);

  useEffect(() => {
    // Add Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <Router>
      <div className="font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>
        {/* Preloader */}
        <Preloader />
        
        {/* Main content */}
        <motion.div
          id="main-content"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: loading ? 0 : 1,
            transition: { duration: 0.5, delay: 0.2 }
          }}
          className="relative"
        >
          <Navbar />
          
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
          
          <Footer />
        </motion.div>
      </div>
    </Router>
  );
};

export default App;
