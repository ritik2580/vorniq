import { motion } from "framer-motion";
import { Rocket, Settings, Brush, Brain } from "lucide-react";

const features = [
  {
    icon: <Rocket size={40} className="text-primary-500" />,
    title: "Fast Performance",
    desc: "Blazing-fast load times and smooth transitions with Vite + React 19.",
  },
  {
    icon: <Settings size={40} className="text-primary-500" />,
    title: "Fully Customizable",
    desc: "Built with scalable components and animation control.",
  },
  {
    icon: <Brush size={40} className="text-primary-500" />,
    title: "Modern UI",
    desc: "Responsive layouts with beautiful Tailwind & motion effects.",
  },
  {
    icon: <Brain size={40} className="text-primary-500" />,
    title: "Smart Features",
    desc: "Scroll-aware animations and enhanced UX focus.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Why Choose VorniqMotion?</h2>
        <p className="text-lg text-gray-300 mb-12">
          Built with performance, customization, and motion-first design.
        </p>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-xl shadow-glow hover:shadow-glow-lg transition-all"
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
