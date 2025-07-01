import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiLayers, FiCheckCircle, FiDollarSign, FiBox, FiBookOpen, FiShoppingBag, FiGlobe, FiTool } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';

const Solutions = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const industriesData = [
    {
      title: "Manufacturing",
      icon: <FiTool />,
      description: "Streamline production processes, manage inventory, and optimize supply chain operations with our manufacturing solutions.",
      benefits: [
        "Production planning & scheduling",
        "Quality control management",
        "Equipment maintenance tracking",
        "Supply chain optimization"
      ],
      color: "blue"
    },
    {
      title: "Retail & E-Commerce",
      icon: <FiShoppingBag />,
      description: "Manage inventory, streamline sales, and enhance customer experience across physical and online stores.",
      benefits: [
        "Omnichannel inventory management",
        "Point of sale integration",
        "Customer loyalty programs",
        "E-commerce platform integration"
      ],
      color: "indigo"
    },
    {
      title: "Healthcare",
      icon: <FiBookOpen />,
      description: "Improve patient care, streamline administrative tasks, and ensure compliance with healthcare regulations.",
      benefits: [
        "Patient record management",
        "Appointment scheduling",
        "Billing & insurance processing",
        "Compliance management"
      ],
      color: "violet"
    },
    {
      title: "Financial Services",
      icon: <FiDollarSign />,
      description: "Enhance financial operations, ensure compliance, and improve customer service for banks and financial institutions.",
      benefits: [
        "Customer relationship management",
        "Regulatory compliance",
        "Risk management",
        "Transaction processing"
      ],
      color: "purple"
    },
    {
      title: "Logistics & Transportation",
      icon: <FiBox />,
      description: "Optimize route planning, track shipments, and manage fleet operations for logistics and transportation companies.",
      benefits: [
        "Route optimization",
        "Fleet management",
        "Shipment tracking",
        "Warehouse management"
      ],
      color: "blue"
    },
    {
      title: "Professional Services",
      icon: <FiLayers />,
      description: "Streamline project management, time tracking, and client billing for consulting and professional service firms.",
      benefits: [
        "Project & resource management",
        "Time & expense tracking",
        "Client billing & invoicing",
        "Knowledge management"
      ],
      color: "indigo"
    },
    {
      title: "Education",
      icon: <FiBookOpen />,
      description: "Enhance learning experiences, streamline administrative tasks, and improve communication in educational institutions.",
      benefits: [
        "Student information management",
        "Course scheduling & registration",
        "Learning management system",
        "Financial aid administration"
      ],
      color: "violet"
    },
    {
      title: "Hospitality & Tourism",
      icon: <FiGlobe />,
      description: "Improve guest experiences, streamline reservations, and optimize operations for hotels, restaurants, and tourism businesses.",
      benefits: [
        "Reservation & booking management",
        "Guest relationship management",
        "Point of sale integration",
        "Inventory & procurement"
      ],
      color: "purple"
    }
  ];

  return (
    <div className="overflow-hidden pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-violet-900 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-bold mb-6 max-w-3xl"
          >
            <span className="font-serif italic">Industry-Specific</span> Solutions
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl text-white/80 max-w-2xl mb-10"
          >
            Tailored business solutions designed to address the unique challenges and requirements of your industry.
          </motion.p>
        </div>
        
        <div className="absolute -bottom-10 left-0 right-0 h-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQ0MCA4OSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwQzMxOS43NDQgNzcuMTQ1NyA3MjAuMzI5IDkwLjAwMDEgMTQ0MCAwaFYxMDBIMFYwWiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=')]"></div>
      </section>
      
      {/* Solutions Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Industry Solutions</h2>
            <p className="text-gray-600 text-lg">
              VORNIQ provides tailored solutions that address the specific needs and challenges of various industries. Explore how our platform can transform your business operations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesData.map((industry, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 }
                  }
                }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm transition-all hover:border-violet-200 group relative overflow-hidden h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-${industry.color}-100 text-${industry.color}-600 mb-5`}
                  >
                    {industry.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{industry.title}</h3>
                  <p className="text-gray-600 mb-5">{industry.description}</p>
                  
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2 mb-6">
                    {industry.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <FiCheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-violet-600 font-medium text-sm"
                  >
                    Learn more <FiArrowRight className="ml-2" />
                  </motion.a>
                </div>
                
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-violet-500 to-indigo-500 group-hover:w-full transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute -left-32 top-32 w-64 h-64 rounded-full bg-violet-100/80 blur-3xl"></div>
        <div className="absolute -right-32 bottom-32 w-64 h-64 rounded-full bg-indigo-100/80 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-gray-600 text-lg">
              See how businesses across different industries have transformed their operations with VORNIQ solutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                company: "TechManufacture Inc.",
                industry: "Manufacturing",
                results: "30% reduction in inventory costs and 25% improvement in production efficiency.",
                image: "https://images.unsplash.com/photo-1523192193543-6e7296d960e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              },
              {
                company: "Global Retail Group",
                industry: "Retail",
                results: "40% increase in online sales and seamless integration of in-store and online inventory.",
                image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              },
              {
                company: "MediCare Solutions",
                industry: "Healthcare",
                results: "50% reduction in administrative tasks and improved patient care coordination.",
                image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              }
            ].map((case_study, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5, delay: i * 0.1 }
                  }
                }}
                className="group"
              >
                <div className="rounded-xl overflow-hidden shadow-sm h-full bg-white border border-gray-100">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={case_study.image} 
                      alt={case_study.company} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-violet-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4">
                        <motion.a
                          href="#"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-white text-violet-900 rounded-full text-sm font-medium inline-flex items-center"
                        >
                          Read Case Study <FiArrowRight className="ml-1" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-violet-600 font-semibold mb-2">{case_study.industry}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{case_study.company}</h3>
                    <p className="text-gray-600">{case_study.results}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 py-3 border border-violet-600 text-violet-600 rounded-full hover:bg-violet-50 transition-colors font-medium"
            >
              View All Case Studies <FiArrowRight className="ml-2" />
            </motion.a>
          </div>
        </div>
      </section>
      
      {/* Why Choose VORNIQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose VORNIQ</h2>
            <p className="text-gray-600 text-lg">
              Our industry-specific solutions are designed with your unique challenges in mind, offering unparalleled advantages.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="relative">
                <div className="absolute -top-5 -left-5 w-32 h-32 bg-violet-100 rounded-full z-0"></div>
                <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-indigo-100 rounded-full z-0"></div>
                
                <div className="relative z-10 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Team collaboration" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The VORNIQ Advantage</h3>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Industry Expertise",
                    description: "Our solutions are developed by experts with deep knowledge of your industry's specific challenges and requirements."
                  },
                  {
                    title: "Customizable Platform",
                    description: "Flexible solutions that can be tailored to your unique business processes and workflows."
                  },
                  {
                    title: "Seamless Integration",
                    description: "Our platform integrates smoothly with your existing systems, ensuring a unified business ecosystem."
                  },
                  {
                    title: "Continuous Innovation",
                    description: "Regular updates and new features based on industry trends and customer feedback to keep your business ahead."
                  },
                  {
                    title: "Dedicated Support",
                    description: "Industry-specialized support teams that understand your business context and can provide relevant solutions."
                  }
                ].map((advantage, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-violet-600"></div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{advantage.title}</h4>
                      <p className="text-gray-600">{advantage.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Discover the Right Solution for Your Industry
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/80 mb-8"
            >
              Schedule a consultation with our industry experts to explore how VORNIQ can address your specific business challenges.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-violet-900 rounded-full font-medium flex items-center justify-center hover:shadow-lg hover:shadow-white/20 transition-all"
              >
                Request Consultation
              </motion.a>
              
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent border border-white text-white rounded-full font-medium flex items-center justify-center hover:bg-white/10 transition-all"
              >
                Explore Services
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
