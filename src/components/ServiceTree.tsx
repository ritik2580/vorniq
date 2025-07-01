import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

interface ServiceNode {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
  id: number;
}

interface ServiceTreeProps {
  services: ServiceNode[];
}

const colorMap = {
  violet: {
    main: 'from-violet-500 to-violet-600',
    light: 'from-violet-300/30 to-violet-400/20',
    text: 'text-violet-600',
    glow: 'shadow-violet-500/20',
    branch: 'stroke-violet-400/30',
  },
  indigo: {
    main: 'from-indigo-500 to-indigo-600',
    light: 'from-indigo-300/30 to-indigo-400/20',
    text: 'text-indigo-600',
    glow: 'shadow-indigo-500/20',
    branch: 'stroke-indigo-400/30',
  },
  blue: {
    main: 'from-blue-500 to-blue-600',
    light: 'from-blue-300/30 to-blue-400/20',
    text: 'text-blue-600',
    glow: 'shadow-blue-500/20',
    branch: 'stroke-blue-400/30',
  },
  purple: {
    main: 'from-purple-500 to-purple-600',
    light: 'from-purple-300/30 to-purple-400/20',
    text: 'text-purple-600',
    glow: 'shadow-purple-500/20',
    branch: 'stroke-purple-400/30',
  },
};

export default function ServiceTree({ services }: ServiceTreeProps) {
  const [expanded, setExpanded] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Calculate positions in a circular pattern
  const getNodePosition = (index: number, total: number) => {
    // Radius increases based on number of services
    const radius = Math.min(window.innerWidth, window.innerHeight) * 0.25;
    const angle = (index / total) * Math.PI * 2;
    
    // Slight offset for even distribution
    const xOffset = Math.cos(angle) * radius;
    const yOffset = Math.sin(angle) * radius;
    
    return { x: xOffset, y: yOffset };
  };

  // Reset on view change
  useEffect(() => {
    if (!inView) {
      setExpanded(false);
    }
  }, [inView]);

  return (
    <div className="relative h-[800px] w-full overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      
      {/* Background grid */}
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(99, 102, 241, 0.1)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      
      {/* Center container */}
      <div 
        ref={containerRef} 
        className="absolute inset-0 flex items-center justify-center"
      >
        {/* The seed/root node */}
        <motion.div 
          className={`relative z-20 cursor-pointer ${expanded ? 'pointer-events-none' : ''}`}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          onClick={() => setExpanded(true)}
        >
          <div className="relative">
            <motion.div 
              className="w-24 h-24 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/30"
              animate={{
                scale: expanded ? [1, 1.5, 0.8] : 1,
                opacity: expanded ? [1, 0.8, 0] : 1,
              }}
              transition={{ duration: 0.6 }}
            >
              {!expanded && (
                <div className="text-white text-xl">
                  <FiPlus size={34} />
                </div>
              )}
            </motion.div>
            
            {!expanded && (
              <motion.div 
                className="absolute inset-0 rounded-full bg-violet-500/20 blur-md z-[-1]"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 0.5, 0.7]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            )}
            
            {!expanded && (
              <motion.div 
                className="absolute -top-3 -right-2 px-3 py-1 rounded-full bg-white shadow-md text-sm font-medium text-indigo-600 border border-indigo-100"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Explore Services
              </motion.div>
            )}
          </div>
        </motion.div>
        
        {/* Service branches and nodes */}
        <AnimatePresence>
          {expanded && (
            <>
              {/* SVG for branches */}
              <svg 
                className="absolute inset-0 w-full h-full z-10 pointer-events-none"
                style={{ overflow: 'visible' }}
              >
                {services.map((service, index) => {
                  const pos = getNodePosition(index, services.length);
                  const colors = colorMap[service.color as keyof typeof colorMap];
                  
                  return (
                    <motion.path
                      key={`branch-${index}`}
                      d={`M 0,0 Q 0,${pos.y * 0.5} ${pos.x},${pos.y}`}
                      fill="none"
                      className={`${colors.branch} transition-all duration-300`}
                      strokeWidth={hoveredNode === service.id ? "3" : "1.5"}
                      strokeDasharray="5,3"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.3 + (index * 0.05),
                        ease: "easeOut"
                      }}
                    />
                  );
                })}
              </svg>
              
              {/* Service nodes */}
              {services.map((service, index) => {
                const pos = getNodePosition(index, services.length);
                const colors = colorMap[service.color as keyof typeof colorMap];
                const isHovered = hoveredNode === service.id;
                
                return (
                  <motion.div
                    key={`node-${index}`}
                    className="absolute z-20"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      x: pos.x, 
                      y: pos.y,
                      transition: { 
                        type: "spring",
                        damping: 15,
                        delay: 0.3 + (index * 0.08),
                        duration: 0.8
                      }
                    }}
                    whileHover={{ scale: 1.05 }}
                    onHoverStart={() => setHoveredNode(service.id)}
                    onHoverEnd={() => setHoveredNode(null)}
                  >
                    <div className="relative">
                      {/* Node glow */}
                      <motion.div 
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.light} blur-xl ${colors.glow} z-[-1]`}
                        animate={{ 
                          scale: isHovered ? 1.2 : 1,
                          opacity: isHovered ? 0.8 : 0.4
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Node content */}
                      <div className={`
                        w-52 bg-white/90 backdrop-blur-sm shadow-lg rounded-2xl p-4
                        border border-gray-100 transition-all duration-300
                        ${isHovered ? 'shadow-xl' : 'shadow-md'}
                      `}>
                        {/* Icon */}
                        <div className={`
                          mb-3 w-10 h-10 rounded-lg text-white flex items-center justify-center
                          bg-gradient-to-br ${colors.main}
                        `}>
                          {service.icon}
                        </div>
                        
                        {/* Title */}
                        <h3 className="font-bold mb-1 text-gray-800">
                          {service.title}
                        </h3>
                        
                        {/* Description/features - visible on hover */}
                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <p className="text-xs text-gray-500 mb-2">
                                {service.description}
                              </p>
                              
                              <ul className="text-xs space-y-1">
                                {service.features.slice(0, 3).map((feature, i) => (
                                  <li key={i} className="flex items-start">
                                    <span className={`${colors.text} mr-1 text-xs`}>✓</span>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
              
              {/* Close button */}
              <motion.button
                className="absolute bottom-6 z-30 px-4 py-2 rounded-full bg-white shadow-md text-indigo-600 border border-indigo-100 flex items-center gap-2 hover:bg-indigo-50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                onClick={() => setExpanded(false)}
              >
                <FiMinus size={18} />
                <span>Collapse View</span>
              </motion.button>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
