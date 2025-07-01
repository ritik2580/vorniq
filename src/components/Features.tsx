import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiLock, FiGlobe, FiCpu, FiSmartphone } from 'react-icons/fi';

const Features = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const leftX = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const rightX = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const featureItems = [
    {
      icon: <FiGlobe className="w-6 h-6" />,
      title: "Cloud-Based Solution",
      description: "Access your business data anywhere, anytime with our secure cloud infrastructure.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <FiLock className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Your data is protected with industry-leading security measures and compliance standards.",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <FiCpu className="w-6 h-6" />,
      title: "AI-Powered Insights",
      description: "Leverage artificial intelligence to gain actionable insights and optimize operations.",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      icon: <FiSmartphone className="w-6 h-6" />,
      title: "Mobile Responsive",
      description: "Manage your business on the go with our fully responsive mobile applications.",
      color: "from-violet-400 to-violet-600"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIGQ9Ik0wLjUgMC41aDYwdjYwaC02MHoiLz48L2c+PC9zdmc+')] opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          style={{ opacity }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white mb-4"
          >
            <span className="font-serif italic">Powerful</span> Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 text-lg"
          >
            Our enterprise-grade platform is built with the latest technologies to provide you with a secure, scalable, and intelligent business solution.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {featureItems.map((feature, index) => (
            <motion.div
              key={index}
              style={{ 
                x: index % 2 === 0 ? leftX : rightX,
                opacity 
              }}
              className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl p-8 overflow-hidden relative group"
            >
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-violet-500/30 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
                backgroundSize: '200% 100%',
                animation: 'shimmer 2s infinite linear'
              }}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-r ${feature.color} mb-6 p-3 text-white`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
                
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-6 inline-flex items-center text-violet-400 hover:text-violet-300 text-sm font-medium"
                >
                  Learn more
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
