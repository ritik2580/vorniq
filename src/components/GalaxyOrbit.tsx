import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Cpu, UserCheck, Warehouse, BadgeDollarSign,
  ShoppingCart, BarChart3, Smartphone, Megaphone
} from "lucide-react";

const services = [
  { name: "ERP", icon: <Cpu />, path: "/services/erp" },
  { name: "CRM", icon: <UserCheck />, path: "/services/crm" },
  { name: "Inventory", icon: <Warehouse />, path: "/services/inventory" },
  { name: "Payroll", icon: <BadgeDollarSign />, path: "/services/payroll" },
  { name: "E-Commerce", icon: <ShoppingCart />, path: "/services/ecommerce" },
  { name: "Analytics", icon: <BarChart3 />, path: "/services/analytics" },
  { name: "Mobile", icon: <Smartphone />, path: "/services/mobile" },
  { name: "Marketing", icon: <Megaphone />, path: "/services/marketing" },
];

export default function TrainServices() {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-b from-[#0c0c1a] to-[#1a1a2e] text-white py-24 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-500">
          VORNIQ Service Express 🚄
        </h2>
        <p className="text-gray-400 mt-4 text-lg">Each coach carries a powerful module — click to board!</p>
      </div>

      <div className="relative h-64 overflow-hidden w-full">
        <motion.div
          className="absolute flex items-end gap-4 px-4"
          animate={{ x: ["100%", "-130%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          }}
        >
          {/* Engine */}
          <div className="relative">
            <div className="w-44 h-40 bg-yellow-500 border-4 border-yellow-300 rounded-lg shadow-2xl flex flex-col items-center justify-center text-black font-extrabold text-lg relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-5 h-14 bg-gray-700 rounded-t-full animate-bounce-slow" />
              <div className="text-3xl">🚂</div>
              VORNIQ
              <span className="text-xs font-medium">Engine</span>
            </div>
            <div className="flex justify-center gap-3 mt-2">
              <div className="w-6 h-6 bg-black rounded-full" />
              <div className="w-6 h-6 bg-black rounded-full" />
            </div>
          </div>

          {/* Coaches */}
          {services.map((service, i) => (
            <div key={i} className="relative cursor-pointer group" onClick={() => navigate(service.path)}>
              <motion.div
                whileHover={{ scale: 1.1, rotate: -1 }}
                className="w-44 h-36 bg-[#1a1a2e] border-2 border-white/10 backdrop-blur-md rounded-lg shadow-lg flex flex-col items-center justify-center transition-all hover:border-yellow-400"
              >
                <div className="text-yellow-300 text-3xl mb-1">{service.icon}</div>
                <div className="text-sm font-bold group-hover:text-yellow-300 transition-colors">{service.name}</div>
                <div className="mt-2 w-full h-1 bg-yellow-400 rounded-full" />
              </motion.div>

              {/* Wheels */}
              <div className="flex justify-center gap-4 mt-2">
                <div className="w-5 h-5 bg-gray-900 rounded-full" />
                <div className="w-5 h-5 bg-gray-900 rounded-full" />
              </div>

              {/* Coupler */}
              <div className="absolute -left-3 top-1/2 w-4 h-1 bg-yellow-400 z-0" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Track */}
      <div className="mt-10 h-2 w-full bg-yellow-800 rounded-full shadow-inner" />
    </section>
  );
}
