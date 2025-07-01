import { motion } from "framer-motion";
import {
  ShieldCheck, Cpu, BarChart3, Users2,
  Rocket, RefreshCcw
} from "lucide-react";

const strengths = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Security First",
    desc: "Top-level encryption and user authentication to protect your business data."
  },
  {
    icon: <Cpu size={28} />,
    title: "AI Automation",
    desc: "Built-in intelligence to automate repetitive workflows and actions."
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Real-time Insights",
    desc: "Live dashboards and analytics to guide smarter decisions."
  },
  {
    icon: <Users2 size={28} />,
    title: "User-Friendly UI",
    desc: "Modern, responsive design built for simplicity and speed."
  },
  {
    icon: <Rocket size={28} />,
    title: "Scalable",
    desc: "Grows with your business from startup to enterprise."
  },
  {
    icon: <RefreshCcw size={28} />,
    title: "All-in-One",
    desc: "From HR to Sales to Finance – everything connected in one platform."
  }
];

export default function CoreStrengths() {
  return (
    <section className="relative z-10 py-28 bg-gradient-to-b from-[#1e1b3a] via-[#1a153d] to-[#0f0c29] text-white overflow-hidden">
      {/* Glowing Background Orbs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-700/20 blur-[200px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-600/20 blur-[200px] rounded-full" />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Core <span className="text-gradient bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">Strengths</span> of Vorniq
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-gray-300 text-lg max-w-2xl mx-auto mb-16"
        >
          Designed for power, built with precision. Here’s what sets us apart.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {strengths.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="relative z-10 p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-lg shadow-xl text-left"
            >
              <div className="mb-4 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-violet-500 to-pink-500 text-white rounded-xl">
                {s.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-300 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
