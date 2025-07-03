import { X, Check } from "lucide-react";
import { motion } from "framer-motion";

export const WhyChooseMesdoSection = () => {
  // Define comparison data for the table
  const comparisonFeatures = [
    {
      name: "Job Response Time",
      others: "Slow Replies",
      mesdo: "Instant Notifications",
    },
    {
      name: "Profile Verification",
      others: "Manual/Untrusted",
      mesdo: "Verified by Mesdo",
    },
    {
      name: "Network Access",
      others: "Limited or none",
      mesdo: "Real Healthcare Community",
    },
    {
      name: "Resume Visibility",
      others: "Hidden in Clunky Systems",
      mesdo: "Smart Matching",
    },
    {
      name: "Direct Recruiter Chat",
      others: "Email-only",
      mesdo: "In-App Chat",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const tableVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="flex flex-col items-center gap-12 sm:gap-16 lg:gap-20 py-[60px] sm:py-[80px] lg:py-[100px] pb-[80px] sm:pb-[120px] lg:pb-[150px] relative self-stretch w-full px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="flex flex-col items-center gap-10 sm:gap-14 lg:gap-16 max-w-[1110px] w-full">
        {/* Section Header */}
        <motion.div
          className="flex flex-col items-center gap-4 sm:gap-5 lg:gap-6 w-full"
          variants={headerVariants}
        >
          <div className="flex flex-col items-center gap-3 sm:gap-4 lg:gap-[17px] w-full">
            <motion.span
              className="self-stretch [font-family:'Inter',Helvetica] font-normal text-primary-6 text-xs sm:text-sm lg:text-sm text-center tracking-[0.4px] sm:tracking-[0.5px] lg:tracking-[0.56px]"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Why Choose Mesdo
            </motion.span>

            <motion.h2
              className="[font-family:'Inter',Helvetica] font-medium text-[#060b13] text-2xl sm:text-3xl lg:text-[44.2px] text-center tracking-[-0.8px] sm:tracking-[-1px] lg:tracking-[-1.25px] leading-tight sm:leading-[1.3] lg:leading-[57.6px] px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Why Choose Mesdo Over Everyone Else?
            </motion.h2>
          </div>

          <motion.div
            className="flex flex-col items-center justify-center gap-6 sm:gap-7 lg:gap-8 w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="max-w-[918px] [font-family:'Inter',Helvetica] font-normal text-neutral-9 text-base sm:text-lg lg:text-xl text-center tracking-[-0.18px] sm:tracking-[-0.2px] lg:tracking-[-0.24px] leading-relaxed sm:leading-[1.6] lg:leading-[35px] px-4 sm:px-6 lg:px-0">
              If you want to achieve ground-breaking growth with increased sales
              and profitability with paid ads, then you&apos;re in the right
              place.
            </p>
          </motion.div>
        </motion.div>

        {/* Comparison Table */}
        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-10 w-full">
          <motion.div
            variants={tableVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full"
          >
            {/* Mobile Layout (below md) */}
            <div className="block md:hidden w-full">
              <div className="space-y-4">
                {comparisonFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm"
                    variants={rowVariants}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {/* Feature Name */}
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                      <motion.h3
                        className="font-inter font-medium text-black text-base"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1 + 0.6,
                        }}
                      >
                        {feature.name}
                      </motion.h3>
                    </div>

                    {/* Comparison Content */}
                    <div className="p-4 space-y-3">
                      {/* Others */}
                      <motion.div
                        className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5"
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.1 + 0.7,
                            type: "spring",
                            stiffness: 200,
                          }}
                          whileHover={{
                            scale: 1.2,
                            rotate: 10,
                            transition: { duration: 0.2 },
                          }}
                        >
                          <X className="w-4 h-4 text-red-500" strokeWidth={2} />
                        </motion.div>
                        <div className="flex-1">
                          <p className="text-xs font-medium text-red-600 mb-1">
                            Other Platforms
                          </p>
                          <motion.p
                            className="font-inter text-gray-700 text-sm leading-relaxed"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.1 + 0.8,
                            }}
                          >
                            {feature.others}
                          </motion.p>
                        </div>
                      </motion.div>

                      {/* Mesdo */}
                      <motion.div
                        className="flex items-start gap-3 p-3 rounded-lg border"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(15,115,255,0.1) 0%, rgba(24,144,255,0.1) 100%)",
                          borderColor: "rgba(15,115,255,0.3)",
                        }}
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5"
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.1 + 0.9,
                            type: "spring",
                            stiffness: 300,
                          }}
                          whileHover={{
                            scale: 1.3,
                            rotate: 360,
                            transition: { duration: 0.3 },
                          }}
                        >
                          <Check
                            className="w-4 h-4 text-blue-600"
                            strokeWidth={2}
                          />
                        </motion.div>
                        <div className="flex-1">
                          <p className="text-xs font-medium text-blue-600 mb-1">
                            Mesdo
                          </p>
                          <motion.p
                            className="font-inter text-gray-700 text-sm leading-relaxed"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.1 + 1.0,
                            }}
                          >
                            {feature.mesdo}
                          </motion.p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Desktop/Tablet Layout (md and above) */}
            <div className="hidden md:block w-full max-w-[1110px] border-0 shadow-none overflow-hidden">
              <div className="p-0">
                <div className="relative overflow-x-auto">
                  {/* Table Headers */}
                  <motion.div
                    className="flex min-w-[600px]"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <div className="w-[300px] lg:w-[518px] h-[60px] lg:h-[71px]"></div>
                    <motion.div
                      className="w-[200px] lg:w-[296px] h-[60px] lg:h-[71px] flex items-center justify-center bg-neutral-50 rounded-[12px_12px_0px_0px] lg:rounded-[16px_16px_0px_0px] border-t border-r border-l border-[#e9ebf1]"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="[font-family:'Inter',Helvetica] font-normal text-neutral-8 text-sm lg:text-base text-center px-2 leading-tight lg:leading-[57.6px]">
                        Other Platforms
                      </span>
                    </motion.div>
                    <motion.div
                      className="w-[200px] lg:w-[296px] h-[60px] lg:h-[71px] flex items-center justify-center rounded-[12px_12px_0px_0px] lg:rounded-[16px_16px_0px_0px] bg-[linear-gradient(180deg,rgba(15,115,255,1)_0%,rgba(24,144,255,1)_100%)]"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 8px 25px rgba(15, 115, 255, 0.3)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="[font-family:'Inter',Helvetica] font-medium text-white text-lg lg:text-xl text-center px-2 leading-tight lg:leading-[57.6px]">
                        Mesdo
                      </span>
                    </motion.div>
                  </motion.div>

                  {/* Table Content */}
                  <div className="border-collapse min-w-[600px]">
                    <div>
                      {comparisonFeatures.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="border-0 flex"
                          variants={rowVariants}
                          whileHover={{
                            scale: 1.01,
                            transition: { duration: 0.2 },
                          }}
                        >
                          <div
                            className={`w-[300px] lg:w-[518px] h-[60px] lg:h-[72px] border-t border-l border-[#e9ebf1] px-4 lg:px-6 flex items-center ${
                              index === comparisonFeatures.length - 1
                                ? "border-b rounded-bl-[12px] lg:rounded-bl-[16px]"
                                : ""
                            }`}
                          >
                            <motion.span
                              className="[font-family:'Inter',Helvetica] font-normal text-black text-sm lg:text-base leading-[1.4] lg:leading-[57.6px]"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{
                                duration: 0.4,
                                delay: index * 0.1 + 0.6,
                              }}
                            >
                              {feature.name}
                            </motion.span>
                          </div>
                          <div
                            className={`w-[200px] lg:w-[296px] h-[60px] lg:h-[72px] border-t border-l border-[#e9ebf1] bg-neutral-50 p-3 lg:p-6 flex items-center ${
                              index === comparisonFeatures.length - 1
                                ? "border-b"
                                : ""
                            }`}
                          >
                            <motion.div
                              className="flex items-center gap-2"
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <motion.div
                                className="w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center flex-shrink-0"
                                initial={{ scale: 0, rotate: -180 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                transition={{
                                  duration: 0.5,
                                  delay: index * 0.1 + 0.7,
                                  type: "spring",
                                  stiffness: 200,
                                }}
                                whileHover={{
                                  scale: 1.2,
                                  rotate: 10,
                                  transition: { duration: 0.2 },
                                }}
                              >
                                <X
                                  className="w-4 h-4 lg:w-5 lg:h-5 text-red-500"
                                  strokeWidth={2}
                                />
                              </motion.div>
                              <motion.span
                                className="[font-family:'Inter',Helvetica] font-normal text-neutral-8 text-sm lg:text-base leading-[1.4] lg:leading-[57.6px]"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.4,
                                  delay: index * 0.1 + 0.8,
                                }}
                              >
                                {feature.others}
                              </motion.span>
                            </motion.div>
                          </div>
                          <div
                            className={`w-[200px] lg:w-[296px] h-[60px] lg:h-[72px] border-t border-[#40a9ff] p-3 lg:p-6 flex items-center bg-[#1890FF] ${
                              index === comparisonFeatures.length - 1
                                ? "border-b rounded-br-[12px] lg:rounded-br-[16px]"
                                : ""
                            }`}
                          >
                            <motion.div
                              className="flex items-center gap-2"
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <motion.div
                                className="w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center flex-shrink-0"
                                initial={{ scale: 0, rotate: -180 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                transition={{
                                  duration: 0.5,
                                  delay: index * 0.1 + 0.9,
                                  type: "spring",
                                  stiffness: 300,
                                }}
                                whileHover={{
                                  scale: 1.3,
                                  rotate: 360,
                                  transition: { duration: 0.3 },
                                }}
                              >
                                <Check
                                  className="w-4 h-4 lg:w-5 lg:h-5 text-white"
                                  strokeWidth={2}
                                />
                              </motion.div>
                              <motion.span
                                className="[font-family:'Inter',Helvetica] font-normal text-white text-sm lg:text-base leading-[1.4] lg:leading-[57.6px]"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.4,
                                  delay: index * 0.1 + 1.0,
                                }}
                              >
                                {feature.mesdo}
                              </motion.span>
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.p
            className="[font-family:'Inter',Helvetica] font-normal italic text-neutral-9 text-base sm:text-lg lg:text-xl text-center tracking-[-0.18px] sm:tracking-[-0.2px] lg:tracking-[-0.24px] leading-relaxed sm:leading-[1.6] lg:leading-[35px] px-4 sm:px-6 lg:px-0 max-w-[600px] lg:max-w-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            whileHover={{
              scale: 1.05,
              color: "#1890FF",
              transition: { duration: 0.2 },
            }}
          >
            Other platforms treat you like a number. Mesdo treats you like a
            professional.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};
