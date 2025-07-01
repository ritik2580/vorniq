import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
const features = [
  { icon: <Cpu />, title: "ERP", desc: "Robust integration modules." },
  // …add more
];
export default function FeatureGrid() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
        {features.map((f,i) => (
          <motion.div key={i} whileHover={{ scale:1.05, y:-5 }} className="bg-gray-800 p-6 rounded-xl">
            <div className="text-primary-400 mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-400">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
