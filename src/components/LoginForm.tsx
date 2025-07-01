import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLock, FiEye, FiEyeOff, FiUser } from 'react-icons/fi';

type FormType = 'login' | 'register';

const LoginForm = () => {
  const [formType, setFormType] = useState<FormType>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle authentication here
    console.log('Form submitted:', { email, password, name });
    
    // For demo purposes, show success message
    alert(`${formType === 'login' ? 'Login' : 'Registration'} successful!`);
  };

  const toggleFormType = () => {
    setFormType(formType === 'login' ? 'register' : 'login');
    // Reset form when switching
    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100"
      >
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 pt-10 pb-12 px-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">
            {formType === 'login' ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-white/80">
            {formType === 'login'
              ? 'Log in to access your VORNIQ dashboard'
              : 'Join VORNIQ to streamline your business'}
          </p>
        </div>
        
        <div className="p-8">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {formType === 'register' && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                      <FiUser />
                    </div>
                    <motion.input
                      whileFocus={{ boxShadow: "0 0 0 2px rgba(124, 58, 237, 0.3)" }}
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-0 focus:border-violet-500 transition-shadow text-gray-900"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>
              )}
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                    <FiMail />
                  </div>
                  <motion.input
                    whileFocus={{ boxShadow: "0 0 0 2px rgba(124, 58, 237, 0.3)" }}
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-0 focus:border-violet-500 transition-shadow text-gray-900"
                    placeholder="you@company.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                    <FiLock />
                  </div>
                  <motion.input
                    whileFocus={{ boxShadow: "0 0 0 2px rgba(124, 58, 237, 0.3)" }}
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-0 focus:border-violet-500 transition-shadow text-gray-900"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>
              
              {formType === 'login' && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-violet-600 focus:ring-violet-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>
                  
                  <div className="text-sm">
                    <a href="#" className="font-medium text-violet-600 hover:text-violet-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
              )}
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-medium rounded-lg shadow-lg hover:shadow-violet-500/30 transition-all"
              >
                {formType === 'login' ? 'Sign In' : 'Create Account'}
              </motion.button>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {formType === 'login' ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={toggleFormType}
                className="ml-1 font-medium text-violet-600 hover:text-violet-500 focus:outline-none"
              >
                {formType === 'login' ? 'Sign up' : 'Log in'}
              </button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginForm;
