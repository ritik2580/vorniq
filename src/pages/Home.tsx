import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import Hero from '../components/Hero';
import Services from '../components/Services';
import InteractiveIcons from '../components/InteractiveIcons';
import Testimonials from '../components/Testimonials';
import CoreStrengths from '../components/CoreStrengths';
import WhyChooseUs from '../components/WhyChooseUs';
import GalaxyOrbit from '../components/GalaxyOrbit';
import ParticlesBg from '../components/ParticlesBg';




const Home = () => {
  const location = useLocation();

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="overflow-hidden">
      {/* Animated Background Particles */}
      <ParticlesBg />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
      </motion.section>
      
      {/* Interactive Icons */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <InteractiveIcons />
      </motion.section>


      {/* Core Strengths */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <CoreStrengths />
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Services />
      </motion.section>

      {/* Galaxy Orbit (Tech Representation) */}
      <motion.section
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <GalaxyOrbit />
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <WhyChooseUs />
      </motion.section>

  

      {/* Testimonials */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Testimonials />
      </motion.section>
    </div>
  );
};

export default Home;
