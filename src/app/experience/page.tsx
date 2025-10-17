"use client";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function ExperiencePage() {
  return (
    <main className="min-h-dvh">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <section className="py-12 md:py-16 pb-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            >
              <Briefcase className="size-8 text-white" />
            </motion.div>
            <motion.h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              Experience
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
              My professional journey in IT support, telephony, and technical services.
            </motion.p>
          </motion.div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="py-6 md:py-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Student Telephony Analyst */}
            <motion.div 
              className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Student Telephony Analyst</h2>
                  <div className="flex items-center gap-4 text-gray-600 mb-2">
                    <div className="flex items-center gap-2">
                      <Briefcase className="size-4" />
                      <span className="font-medium">Sun Life Financial</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="size-4" />
                      <span>Waterloo, ON</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="size-4" />
                    <span>September 2024 - April 2025</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="text-gray-600 leading-relaxed">
                  Coordinated setup and removal of telephone extensions for employee onboarding and offboarding processes.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Maintained and updated telecom asset inventories using Excel and Cimpl to ensure accurate tracking of service changes.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Supported the migration of phone systems from Avaya to Amazon Connect, assisting with data validation and cutover tasks.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Tracked and managed telephony service requests using ServiceNow.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Configured user profiles, voicemail, and other telephony features through Avaya System Manager and related platforms.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Streamlined telecom processes by creating and refining spreadsheets that improved tracking efficiency and cost visibility.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Provided regular email support to staff, answering telephony questions and resolving issues quickly.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Reviewed telecom data and processes to improve number management and reduce overall costs.
                </p>
              </div>
            </motion.div>

            {/* IT Support Intern */}
            <motion.div 
              className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">IT Support Intern</h2>
                  <div className="flex items-center gap-4 text-gray-600 mb-2">
                    <div className="flex items-center gap-2">
                      <Briefcase className="size-4" />
                      <span className="font-medium">Blue Ant Media</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="size-4" />
                      <span>Toronto, ON</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="size-4" />
                    <span>January 2024 - April 2024</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="text-gray-600 leading-relaxed">
                  Managed Google Workspace administration, specializing in setting up first-time users and efficiently managing user accounts.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Installed and maintained software for employee computers, ensuring optimal functionality and efficiency.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Proactively troubleshooted and resolved software or hardware issues encountered by employees.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Demonstrated effective communication skills through clear and concise interaction with users to promptly identify and address issues, resulting in timely resolutions.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Collaborated with team members to enhance security measures by implementing encryption protocols across all Windows-based PCs, strengthening data protection.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Contributed to the successful deployment of Mobile Device Management (MDM) software, streamlining the management of all Apple assets, and facilitating efficient monitoring and control of device functionalities.
                </p>
              </div>
            </motion.div>

            {/* Junior Service Technician */}
            <motion.div 
              className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Junior Service Technician</h2>
                  <div className="flex items-center gap-4 text-gray-600 mb-2">
                    <div className="flex items-center gap-2">
                      <Briefcase className="size-4" />
                      <span className="font-medium">Dock Systems</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="size-4" />
                      <span>Brampton, ON</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="size-4" />
                    <span>May 2023 - September 2023</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="text-gray-600 leading-relaxed">
                  Assisted senior technicians in installing and maintaining loading docks and doors.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Conducted inspections to identify equipment issues and ensure safety compliance.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Managed detailed records of service tasks and completed work orders efficiently.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Contributed to team projects, promoting seamless operations and customer satisfaction.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}