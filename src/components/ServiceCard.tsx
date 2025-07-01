import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
  index: number;
}

export default function ServiceCard({ icon, title, description, features, color, index }: ServiceCardProps) {
  const colorMap = {
    violet: {
      bg: 'bg-violet-100/80',
      text: 'text-violet-600',
      border: 'border-violet-500',
      glow: 'from-violet-500',
      iconBg: 'bg-gradient-to-br from-violet-500 to-violet-600',
      lightGlow: 'from-violet-300/30 to-violet-400/20'
    },
    indigo: {
      bg: 'bg-indigo-100/80',
      text: 'text-indigo-600',
      border: 'border-indigo-500',
      glow: 'from-indigo-500',
      iconBg: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
      lightGlow: 'from-indigo-300/30 to-indigo-400/20'
    },
    blue: {
      bg: 'bg-blue-100/80',
      text: 'text-blue-600',
      border: 'border-blue-500',
      glow: 'from-blue-500',
      iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600',
      lightGlow: 'from-blue-300/30 to-blue-400/20'
    },
    purple: {
      bg: 'bg-purple-100/80',
      text: 'text-purple-600',
      border: 'border-purple-500',
      glow: 'from-purple-500',
      iconBg: 'bg-gradient-to-br from-purple-500 to-purple-600',
      lightGlow: 'from-purple-300/30 to-purple-400/20'
    },
  };

  const colors = colorMap[color as keyof typeof colorMap];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="relative group"
    >
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.lightGlow} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
      
      <div className="relative bg-white/80 backdrop-blur-md border border-gray-100 shadow-xl hover:shadow-2xl rounded-2xl p-6 transition-all duration-300 overflow-hidden z-10">
        {/* Background subtle gradient */}
        <div className={`absolute top-0 right-0 w-40 h-40 rounded-full bg-gradient-to-br ${colors.lightGlow} blur-[80px] -z-10 opacity-50`}></div>
        
        {/* Icon container */}
        <div className="mb-5 relative">
          <div className={`inline-flex items-center justify-center w-14 h-14 text-xl rounded-xl text-white ${colors.iconBg} shadow-lg mb-1`}>
            {icon}
          </div>
          
          {/* Decorative element */}
          <div className="absolute top-2 right-0 w-20 h-1 bg-gradient-to-r from-transparent to-gray-200 rounded-full"></div>
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{description}</p>
        
        <ul className="text-gray-700 text-sm space-y-2 relative">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start group/item">
              <span className={`${colors.text} mr-2 transition-transform duration-300 group-hover/item:scale-110`}>✓</span>
              <span className="group-hover/item:font-medium transition-all duration-300">{feature}</span>
            </li>
          ))}
        </ul>
        
        {/* Bottom bar indicator */}
        <div className={`absolute -bottom-1 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r ${colors.glow} to-indigo-600 transition-all duration-500`}></div>
      </div>
    </motion.div>
  );
}
