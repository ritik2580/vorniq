import { useEffect } from 'react';
import { motion } from 'framer-motion';
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen py-16 flex flex-col items-center justify-center bg-gray-50 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -left-64 top-32 w-96 h-96 rounded-full bg-violet-200/50 blur-3xl"></div>
        <div className="absolute -right-64 bottom-32 w-96 h-96 rounded-full bg-indigo-200/50 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-blue-200/30 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <Link to="/" className="inline-flex items-center text-violet-600 hover:text-violet-700 mb-8">
          <FiArrowLeft className="mr-2" /> Back to Home
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            <span className="font-serif italic">Welcome</span> to VORNIQ
          </h1>
          <p className="text-gray-600">Sign in to access your business dashboard</p>
        </motion.div>
        
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
