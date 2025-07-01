import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    content: "VORNIQ has transformed how we manage our business operations. The attendance tracking system is phenomenal, and the interface is intuitive and beautiful.",
    author: "Jessica Thompson",
    position: "HR Director, TechNova Inc.",
    rating: 5
  },
  {
    id: 2,
    content: "The integrated approach VORNIQ offers saved us from juggling multiple software solutions. Everything we need is in one place, and the animations make it a joy to use daily.",
    author: "Michael Chen",
    position: "Operations Manager, Globex Corp",
    rating: 5
  },
  {
    id: 3,
    content: "Implementing VORNIQ was the best business decision we made last year. The financial insights alone have helped us optimize our spending and increase profitability.",
    author: "Samantha Wilson",
    position: "CEO, Bright Futures Ltd",
    rating: 4
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const constraintsRef = useRef(null);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -left-32 top-32 w-64 h-64 rounded-full bg-violet-100/80 blur-3xl"></div>
      <div className="absolute -right-32 bottom-32 w-64 h-64 rounded-full bg-blue-100/80 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            <span className="font-serif italic">What</span> Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Discover how VORNIQ has helped businesses streamline operations and drive growth.
          </motion.p>
        </div>

        <div ref={constraintsRef} className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-violet-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
                  {testimonials[current].author.charAt(0)}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonials[current].rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-800 text-lg md:text-xl mb-6 font-medium italic">
                    "{testimonials[current].content}"
                  </blockquote>
                  
                  <div>
                    <p className="text-gray-900 font-bold">{testimonials[current].author}</p>
                    <p className="text-gray-500">{testimonials[current].position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-3">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-violet-50 hover:border-violet-300 hover:text-violet-600 transition-colors"
            >
              <FiChevronLeft size={20} />
            </motion.button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full ${
                    current === i ? 'bg-violet-600' : 'bg-gray-300'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
            
            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-violet-50 hover:border-violet-300 hover:text-violet-600 transition-colors"
            >
              <FiChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
