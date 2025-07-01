import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";

const pricingData = {
  monthly: [
    {
      title: "Starter",
      price: "₹999",
      features: ["Basic Support", "Core Modules", "1 User", "1GB Storage"],
    },
    {
      title: "Pro",
      price: "₹2499",
      features: ["Priority Support", "All Modules", "10 Users", "10GB Storage"],
    },
    {
      title: "Enterprise",
      price: "₹4999",
      features: ["24/7 Support", "Unlimited Modules", "Unlimited Users", "100GB Storage"],
    },
  ],
  yearly: [
    {
      title: "Starter",
      price: "₹9999",
      features: ["Basic Support", "Core Modules", "1 User", "1GB Storage"],
    },
    {
      title: "Pro",
      price: "₹24999",
      features: ["Priority Support", "All Modules", "10 Users", "10GB Storage"],
    },
    {
      title: "Enterprise",
      price: "₹49999",
      features: ["24/7 Support", "Unlimited Modules", "Unlimited Users", "100GB Storage"],
    },
  ],
};

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <section className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white min-h-screen pt-32 pb-20 px-4 overflow-hidden">
      <motion.div
        className="absolute w-[1400px] h-[1400px] top-[-800px] left-1/2 -translate-x-1/2 bg-purple-600/10 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />

      <motion.h1
        className="text-5xl md:text-6xl font-bold text-center mb-4 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Our Futuristic Plans 🌫️
      </motion.h1>
      <p className="text-center text-lg text-white/80 mb-12 relative z-10">
        Pick a plan that evolves with your business needs.
      </p>

      <div className="flex justify-center mb-16 z-10 relative">
        <div className="bg-white/10 p-2 rounded-full flex items-center gap-2 backdrop-blur-sm border border-white/20">
          <button
            className={`px-5 py-2 rounded-full transition font-semibold text-sm ${
              billing === "monthly" ? "bg-white text-black" : "text-white/80"
            }`}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-5 py-2 rounded-full transition font-semibold text-sm ${
              billing === "yearly" ? "bg-white text-black" : "text-white/80"
            }`}
            onClick={() => setBilling("yearly")}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto px-4 relative z-10">
        {pricingData[billing].map((plan, idx) => (
          <motion.div
            key={idx}
            className="relative bg-white/5 border border-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl overflow-hidden group hover:scale-[1.03] transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
          >
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-full blur-2xl opacity-10 group-hover:opacity-30 transition"></div>

            <h2 className="text-2xl font-bold text-white mb-3 tracking-wider uppercase">{plan.title}</h2>
            <p className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg">{plan.price}</p>

            <ul className="space-y-4 text-sm text-white/80 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <FiCheckCircle className="text-green-400 shrink-0" /> {feature}
                </li>
              ))}
            </ul>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              className="inline-block text-center w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-full hover:shadow-xl transition-all"
            >
              Start Now
            </motion.a>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center mt-24">
        <motion.h3
          className="text-3xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Built for Scalability
        </motion.h3>
        <motion.p
          className="text-white/70 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Our pricing is designed to adapt with your growth. Whether you're a startup or an enterprise, you’ll find the right fit.
        </motion.p>
      </div>

      <motion.div
        className="mt-20 flex justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <a
          href="/services"
          className="inline-flex items-center px-8 py-3 text-white bg-transparent border border-white rounded-full hover:bg-white/10 transition"
        >
          Explore All Services
        </a>
      </motion.div>
    </section>
  );
}
