import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  FiPackage,
  FiUsers,
  FiDollarSign,
  FiTruck,
  FiBarChart2,
  FiMonitor,
  FiCalendar,
  FiShoppingCart,
  FiHeart,
  FiArrowRight,
} from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';
import ServiceCard from '../components/ServiceCard';


const Services = () => {
  const location = useLocation();
  const mainRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  // Parallax effects
  const heroTextY = useTransform(scrollYProgress, [0, 0.2], [0, 70]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    // Add Google Font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Rajdhani:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const servicesData = [
    {
      icon: <FiUsers />,
      title: 'HR Management',
      description:
        'Comprehensive HR tools for recruitment, payroll, performance, and more.',
      features: [
        'Onboarding & Offboarding',
        'Attendance Tracking',
        'Performance Reviews',
        'Payroll & Compliance',
        'Benefits Portal',
      ],
      color: 'violet',
    },
    {
      icon: <FiDollarSign />,
      title: 'Finance',
      description:
        'Accounting, invoicing & reporting solutions tailored to your needs.',
      features: [
        'Ledger Management',
        'Invoice Automation',
        'Budget Forecasts',
        'Expense Tracking',
        'GST/Tax Compliance',
      ],
      color: 'indigo',
    },
    {
      icon: <FiPackage />,
      title: 'Inventory',
      description:
        'Real-time inventory tracking, reorder automation and warehouse control.',
      features: [
        'Barcode / QR Support',
        'Stock Alerts',
        'Multi-warehouse Support',
        'Valuation Reports',
      ],
      color: 'blue',
    },
    {
      icon: <FiTruck />,
      title: 'Supply Chain',
      description:
        'Streamline logistics, distribution, and supply chain operations.',
      features: [
        'Supplier Management',
        'Order Planning',
        'Logistics Analytics',
        'Route Optimizer',
      ],
      color: 'purple',
    },
    {
      icon: <FiBarChart2 />,
      title: 'Analytics',
      description: 'Interactive dashboards, predictive insights, and KPIs.',
      features: [
        'KPI Dashboards',
        'Real-Time Reports',
        'Custom Charts',
        'Data Forecasts',
      ],
      color: 'indigo',
    },
    {
      icon: <FiMonitor />,
      title: 'CRM',
      description: 'Manage leads, clients, and support with our CRM suite.',
      features: [
        'Lead Pipeline',
        'Email Campaigns',
        'Client Reports',
        'Service Tickets',
      ],
      color: 'violet',
    },
    {
      icon: <FiCalendar />,
      title: 'Projects',
      description:
        'Track tasks, teams, and deadlines with interactive Gantt views.',
      features: [
        'Task Management',
        'Team Assignments',
        'Time Logs',
        'Milestone Goals',
      ],
      color: 'indigo',
    },
    {
      icon: <FiShoppingCart />,
      title: 'E-Commerce',
      description:
        'Sell products, manage orders, and accept payments in one place.',
      features: [
        'Product Listings',
        'Order Fulfillment',
        'Secure Payments',
        'Promo Tools',
      ],
      color: 'blue',
    },
    {
      icon: <FiHeart />,
      title: 'Support',
      description:
        'Support your customers with ticketing, feedback, and helpdesk.',
      features: [
        'Live Chat',
        'Support Tickets',
        'Feedback Portal',
        'Knowledge Base',
      ],
      color: 'purple',
    },
  ];

  return (
    <div ref={mainRef} className="overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-black text-white overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-indigo-950 to-blue-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,58,185,0.1)_0%,rgba(17,17,23,0)_50%)]"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgPHBhdGggZD0iTSAwIDEwIEwgNDAgMTAiIHN0cm9rZT0iIzMzMzdhYiIgc3Ryb2tlLXdpZHRoPSIwLjUiIGZpbGw9Im5vbmUiIG9wYWNpdHk9IjAuMiIvPgogICAgPHBhdGggZD0iTSAwIDIwIEwgNDAgMjAiIHN0cm9rZT0iIzMzMzdhYiIgc3Ryb2tlLXdpZHRoPSIwLjUiIGZpbGw9Im5vbmUiIG9wYWNpdHk9IjAuMiIvPgogICAgPHBhdGggZD0iTSAwIDMwIEwgNDAgMzAiIHN0cm9rZT0iIzMzMzdhYiIgc3Ryb2tlLXdpZHRoPSIwLjUiIGZpbGw9Im5vbmUiIG9wYWNpdHk9IjAuMiIvPgogICAgPHBhdGggZD0iTSAxMCAwIEwgMTAgNDAiIHN0cm9rZT0iIzMzMzdhYiIgc3Ryb2tlLXdpZHRoPSIwLjUiIGZpbGw9Im5vbmUiIG9wYWNpdHk9IjAuMiIvPgogICAgPHBhdGggZD0iTSAyMCAwIEwgMjAgNDAiIHN0cm9rZT0iIzMzMzdhYiIgc3Ryb2tlLXdpZHRoPSIwLjUiIGZpbGw9Im5vbmUiIG9wYWNpdHk9IjAuMiIvPgogICAgPHBhdGggZD0iTSAzMCAwIEwgMzAgNDAiIHN0cm9rZT0iIzMzMzdhYiIgc3Ryb2tlLXdpZHRoPSIwLjUiIGZpbGw9Im5vbmUiIG9wYWNpdHk9IjAuMiIvPgogIDwvcGF0dGVybj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPgo8L3N2Zz4=')] opacity-30"></div>
        
        {/* Animated particles */}
        <ParticleBackground />
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div style={{ y: heroTextY, opacity: heroOpacity }}>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="mb-4 inline-block"
            >
              <div className="px-4 py-1 rounded-full border border-violet-500/30 text-violet-300 text-sm font-medium bg-violet-950/50 backdrop-blur-sm mb-4 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                VORNIQ ENTERPRISE SUITE • 2025
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-6xl md:text-7xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-300">
                The Future of
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-300 to-indigo-400">
                Business Operations
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg text-indigo-100/80 max-w-2xl mx-auto mb-8"
            >
              One integrated platform for all your enterprise needs.
              <br />Powered by advanced AI and cloud technology.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <a 
                href="#services" 
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium overflow-hidden"
              >
                <span className="relative z-10">Explore Services</span>
                <span className="relative z-10 group-hover:translate-x-1 transition-transform">
                  <FiArrowRight />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-violet-700 to-indigo-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <p className="text-indigo-300 text-sm mb-2">Scroll to discover</p>
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-6 h-9 border-2 border-indigo-400/50 rounded-full flex justify-center pt-1"
            >
              <motion.div 
                animate={{ height: ["20%", "40%", "20%"] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 bg-indigo-400 rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 blur-[120px] bg-indigo-300/30 rounded-full z-0"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 blur-[120px] bg-violet-300/20 rounded-full z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-indigo-600 font-medium mb-2"
            >
              OUR OFFERINGS
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              Enterprise Solutions
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 w-24 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto mb-6"
            ></motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Comprehensive business modules designed to transform your operations with cutting-edge technology and seamless integration.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard 
                key={index}
                index={index}
                {...service}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900 via-indigo-900 to-blue-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(138,58,185,0.2)_0%,rgba(17,17,23,0)_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.2)_0%,rgba(17,17,23,0)_60%)]"></div>
        
        {/* Light beams effect */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            initial={{ rotate: -45, x: '-50%', y: '0%' }}
            animate={{ x: '100%', y: '-100%' }}
            transition={{ duration: 15, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
            className="absolute w-[50%] h-[1px] bg-gradient-to-r from-transparent via-violet-400/20 to-transparent blur-[3px]"
          ></motion.div>
          <motion.div 
            initial={{ rotate: 30, x: '100%', y: '100%' }}
            animate={{ x: '-50%', y: '0%' }}
            transition={{ duration: 12, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
            className="absolute w-[30%] h-[1px] bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent blur-[2px]"
          ></motion.div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10 shadow-[0_0_40px_rgba(99,102,241,0.2)]"
          >
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full bg-indigo-900/50 text-indigo-300 text-sm font-medium mb-6 border border-indigo-700/50"
            >
              TRANSFORM YOUR BUSINESS TODAY
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              Ready to Elevate Your Enterprise?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-indigo-100/80 mb-8 max-w-2xl mx-auto"
            >
              Schedule a personalized demo with our solutions team and discover how VORNIQ can revolutionize your operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-indigo-700 font-semibold hover:text-indigo-800 overflow-hidden"
              >
                <span className="relative z-10">Get in Touch</span>
                <FiArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <span className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </a>
              
              <a
                href="/solutions"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/30 text-white font-semibold overflow-hidden"
              >
                <span className="relative z-10">View Solutions</span>
                <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Stats indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { value: "2500+", label: "Enterprise Clients" },
              { value: "99.9%", label: "Uptime SLA" },
              { value: "24/7", label: "Support Team" },
              { value: "15+", label: "Years Experience" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10"
              >
                <p className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-indigo-300 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
