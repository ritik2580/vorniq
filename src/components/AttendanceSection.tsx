import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiCalendar, FiUser, FiCheck, FiX, FiAlertCircle } from 'react-icons/fi';

const AttendanceSection = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'employees' | 'analytics'>('overview');
  
  // Mock data for attendance
  const attendanceData = [
    { id: 1, name: "John Doe", position: "Software Developer", status: "present", time: "08:45 AM" },
    { id: 2, name: "Jane Smith", position: "UX Designer", status: "present", time: "09:02 AM" },
    { id: 3, name: "Mark Johnson", position: "Project Manager", status: "absent", time: "-" },
    { id: 4, name: "Sarah Williams", position: "Content Writer", status: "late", time: "10:15 AM" },
    { id: 5, name: "Robert Brown", position: "DevOps Engineer", status: "present", time: "08:30 AM" },
    { id: 6, name: "Emily Davis", position: "Marketing Specialist", status: "present", time: "08:55 AM" }
  ];
  
  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'present':
        return <FiCheck className="text-green-500" />;
      case 'absent':
        return <FiX className="text-red-500" />;
      case 'late':
        return <FiAlertCircle className="text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 right-0 w-96 h-96 rounded-full bg-violet-100/50 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            <span className="font-serif italic">Smart</span> Attendance Management
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Track employee attendance, manage time-off requests, and generate comprehensive reports with our intelligent attendance system.
          </motion.p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 max-w-5xl mx-auto">
          {/* Header with current date */}
          <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold flex items-center">
                  <FiCalendar className="mr-2" /> Attendance Dashboard
                </h3>
                <p className="text-white/80 mt-1">
                  {new Date().toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
                <FiClock />
                <span>
                  {new Date().toLocaleTimeString('en-US', { 
                    hour: '2-digit', 
                    minute: '2-digit'
                  })}
                </span>
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            {['overview', 'employees', 'analytics'].map((tab) => (
              <motion.button
                key={tab}
                whileHover={{ backgroundColor: "rgba(124, 58, 237, 0.05)" }}
                whileTap={{ scale: 0.98 }}
                className={`flex-1 py-4 px-4 text-sm font-medium ${
                  activeTab === tab 
                    ? 'text-violet-600 border-b-2 border-violet-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab(tab as any)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </div>
          
          {/* Attendance Summary */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                { label: "Present", value: "15", color: "green" },
                { label: "Absent", value: "3", color: "red" },
                { label: "Late", value: "2", color: "yellow" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-${stat.color}-50 border border-${stat.color}-100 rounded-lg p-4 flex items-center`}
                >
                  <div className={`w-12 h-12 rounded-full bg-${stat.color}-100 flex items-center justify-center text-${stat.color}-600 mr-4`}>
                    {getStatusIcon(stat.label.toLowerCase())}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                    <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Attendance List */}
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clock In</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {attendanceData.map((employee, i) => (
                    <motion.tr
                      key={employee.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ backgroundColor: "rgba(124, 58, 237, 0.05)" }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                            <FiUser className="text-gray-500" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{employee.position}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${
                          employee.status === 'present' ? 'green' : 
                          employee.status === 'absent' ? 'red' : 'yellow'
                        }-100 text-${
                          employee.status === 'present' ? 'green' : 
                          employee.status === 'absent' ? 'red' : 'yellow'
                        }-800`}>
                          {getStatusIcon(employee.status)}
                          <span className="ml-1 capitalize">{employee.status}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {employee.time}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttendanceSection;
