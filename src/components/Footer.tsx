import { motion } from 'framer-motion';
import { FiTwitter, FiLinkedin, FiFacebook, FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
      <div className="absolute -left-64 top-32 w-96 h-96 rounded-full bg-violet-900/20 blur-3xl"></div>
      <div className="absolute -right-64 bottom-32 w-96 h-96 rounded-full bg-indigo-900/20 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <div className="text-2xl font-bold text-white">
                <span className="font-serif italic">V</span>ORNIQ
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              Enterprise solutions designed to streamline your business operations and drive growth.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FiTwitter />, href: "#" },
                { icon: <FiLinkedin />, href: "#" },
                { icon: <FiFacebook />, href: "#" },
                { icon: <FiInstagram />, href: "#" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -3, color: "#8b5cf6" }}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Pricing", href: "/pricing" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" }
              ].map((link, i) => (
                <li key={i}>
                  <Link 
                    to={link.href}
                    className="text-gray-400 hover:text-violet-400 transition-colors inline-block relative group"
                  >
                    <span>{link.label}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-violet-400 transition-all group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                { label: "HR Management", href: "/services/hr" },
                { label: "Financial Solutions", href: "/services/finance" },
                { label: "Inventory Control", href: "/services/inventory" },
                { label: "CRM Platform", href: "/services/crm" },
                { label: "Attendance System", href: "/services/attendance" }
              ].map((service, i) => (
                <li key={i}>
                  <Link 
                    to={service.href}
                    className="text-gray-400 hover:text-violet-400 transition-colors inline-block relative group"
                  >
                    <span>{service.label}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-violet-400 transition-all group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {[
                { 
                  icon: <FiMapPin className="w-5 h-5 text-violet-400" />,
                  content: "123 Business Avenue, Tech District, NY 10001, USA" 
                },
                { 
                  icon: <FiPhone className="w-5 h-5 text-violet-400" />,
                  content: "+1 (555) 123-4567" 
                },
                { 
                  icon: <FiMail className="w-5 h-5 text-violet-400" />,
                  content: "info@vorniq.com" 
                }
              ].map((contact, i) => (
                <li key={i} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    {contact.icon}
                  </div>
                  <p className="ml-3 text-gray-400">{contact.content}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {currentYear} VORNIQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
