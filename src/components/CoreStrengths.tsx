import { ShieldCheck, Activity, Code2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const strengths = [
  {
    icon: <ShieldCheck size={40} className="text-primary-500" />,
    title: "Secure Architecture",
    desc: "We use modern frameworks with built-in security practices.",
  },
  {
    icon: <Activity size={40} className="text-primary-500" />,
    title: "Real-Time Monitoring",
    desc: "Stay ahead with integrated performance and uptime analytics.",
  },
  {
    icon: <Code2 size={40} className="text-primary-500" />,
    title: "Clean Codebase",
    desc: "Built with reusable, maintainable, and scalable components.",
  },
  {
    icon: <Sparkles size={40} className="text-primary-500" />,
    title: "Stunning Visuals",
    desc: "Every pixel is crafted for beauty, clarity, and animation.",
  },
];

export default function CoreStrengths() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Core Strengths</h2>
        <p className="text-lg text-gray-400 mb-12">
          Innovation, scalability, and motion-first design at the heart of every solution.
        </p>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {strengths.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900 p-6 rounded-xl shadow-glow hover:shadow-glow-lg transition-all"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
