import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const leftContentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const rightContentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="flex flex-col items-center gap-12 sm:gap-16 md:gap-20 pt-12 sm:pt-16 md:pt-20 lg:pt-[100px] pb-16 sm:pb-20 md:pb-24 lg:pb-[150px] px-4 sm:px-6 md:px-8 lg:px-0 relative self-stretch w-full flex-[0_0_auto] bg-[#eff7ff]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Desktop Layout (lg and above) - Original exact styling */}
      <div className="hidden lg:flex w-[1140px] items-end justify-between relative flex-[0_0_auto]">
        {/* Left Content - Desktop */}
        <motion.div
          className="flex flex-col items-start gap-10 relative flex-[0_0_auto]"
          variants={leftContentVariants}
        >
          <div className="flex flex-col items-start gap-3.5 relative flex-[0_0_auto]">
            <motion.p
              className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-6 text-sm tracking-[-0.18px] leading-6 whitespace-nowrap"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              Built with Healthcare. Opening Soon.
            </motion.p>

            <motion.h2
              className="relative w-[588px] [font-family:'Inter',Helvetica] font-medium text-[#060b13] text-[44.2px] tracking-[-1.25px] leading-[57.6px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Be the First to Experience the Future of Healthcare Careers.
            </motion.h2>
          </div>

          <motion.p
            className="relative w-[559px] [font-family:'Inter',Helvetica] font-normal text-neutral-9 text-xl tracking-[-0.24px] leading-[35px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Join our early access list to get priority entry, verified profiles,
            and smarter job tools — all tailored for healthcare professionals.
          </motion.p>
        </motion.div>

        {/* Right Content - Form - Desktop */}
        <motion.div className="w-[452px]" variants={rightContentVariants}>
          <Card className="border-none shadow-none bg-transparent">
            <CardContent className="flex flex-col items-start gap-6 p-0">
              {/* Name Input */}
              <motion.div
                className="w-full relative"
                variants={inputVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Input
                  className={`h-[60px] px-[29px] py-3 bg-white rounded-[8px] border-2 transition-all duration-300 [font-family:'Inter',Helvetica] font-normal text-base ${
                    focusedField === "name"
                      ? "border-[#1890FF] shadow-[0_0_0_3px_rgba(24,144,255,0.1)]"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                />
                <motion.div
                  className="absolute inset-0 rounded-[8px] pointer-events-none"
                  initial={false}
                  animate={{
                    boxShadow:
                      focusedField === "name"
                        ? "0 0 0 3px rgba(24, 144, 255, 0.1)"
                        : "0 0 0 0px rgba(24, 144, 255, 0)",
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              {/* Email Input */}
              <motion.div
                className="w-full relative"
                variants={inputVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Input
                  className={`h-[60px] px-[29px] py-3 bg-white rounded-[8px] border-2 transition-all duration-300 [font-family:'Inter',Helvetica] font-normal text-base ${
                    focusedField === "email"
                      ? "border-[#1890FF] shadow-[0_0_0_3px_rgba(24,144,255,0.1)]"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  placeholder="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                />
                <motion.div
                  className="absolute inset-0 rounded-[8px] pointer-events-none"
                  initial={false}
                  animate={{
                    boxShadow:
                      focusedField === "email"
                        ? "0 0 0 3px rgba(24, 144, 255, 0.1)"
                        : "0 0 0 0px rgba(24, 144, 255, 0)",
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              {/* Phone Input */}
              <motion.div
                className="w-full relative"
                variants={inputVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Input
                  className={`h-[60px] px-[29px] py-3 bg-white rounded-[8px] border-2 transition-all duration-300 [font-family:'Inter',Helvetica] font-normal text-base ${
                    focusedField === "phone"
                      ? "border-[#1890FF] shadow-[0_0_0_3px_rgba(24,144,255,0.1)]"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  placeholder="Phone No."
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                />
                <motion.div
                  className="absolute inset-0 rounded-[8px] pointer-events-none"
                  initial={false}
                  animate={{
                    boxShadow:
                      focusedField === "phone"
                        ? "0 0 0 3px rgba(24, 144, 255, 0.1)"
                        : "0 0 0 0px rgba(24, 144, 255, 0)",
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                className="w-full"
                variants={inputVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(24, 144, 255, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Button className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full h-[52px] rounded-[8px] bg-[linear-gradient(180deg,rgba(15,115,255,1)_0%,rgba(24,144,255,1)_100%)] [font-family:'Inter',Helvetica] font-medium text-white text-base hover:shadow-lg transition-all duration-300 group">
                  <span>Register for waitlist</span>
                  <motion.div
                    animate={{
                      x: [0, 3, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <ArrowRightIcon className="w-5 h-5" />
                  </motion.div>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Mobile/Tablet Layout (below lg) - Responsive stacked layout */}
      <div className="flex lg:hidden flex-col items-center gap-8 sm:gap-10 md:gap-12 w-full max-w-2xl">
        {/* Left Content - Mobile/Tablet */}
        <motion.div
          className="flex flex-col items-center text-center gap-6 sm:gap-8 md:gap-10 w-full"
          variants={leftContentVariants}
        >
          <div className="flex flex-col items-center gap-3 sm:gap-3.5 w-full">
            <motion.p
              className="[font-family:'Inter',Helvetica] font-medium text-primary-6 text-xs sm:text-sm tracking-[-0.18px] leading-5 sm:leading-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              Built with Healthcare. Opening Soon.
            </motion.p>

            <motion.h2
              className="[font-family:'Inter',Helvetica] font-medium text-[#060b13] text-2xl sm:text-3xl md:text-4xl tracking-[-0.8px] sm:tracking-[-1px] md:tracking-[-1.25px] leading-tight sm:leading-[1.3] md:leading-[1.3] px-2 sm:px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Be the First to Experience the Future of Healthcare Careers.
            </motion.h2>
          </div>

          <motion.p
            className="[font-family:'Inter',Helvetica] font-normal text-neutral-9 text-sm sm:text-base md:text-lg lg:text-xl tracking-[-0.18px] sm:tracking-[-0.20px] md:tracking-[-0.24px] leading-relaxed sm:leading-7 md:leading-8 px-2 sm:px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Join our early access list to get priority entry, verified profiles,
            and smarter job tools — all tailored for healthcare professionals.
          </motion.p>
        </motion.div>

        {/* Right Content - Form - Mobile/Tablet */}
        <motion.div
          className="w-full max-w-md sm:max-w-lg"
          variants={rightContentVariants}
        >
          <Card className="border-none shadow-none bg-transparent">
            <CardContent className="flex flex-col items-start gap-4 sm:gap-5 md:gap-6 p-0">
              {/* Name Input - Mobile/Tablet */}
              <motion.div
                className="w-full relative"
                variants={inputVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <Input
                  className={`h-12 sm:h-14 md:h-[60px] px-4 sm:px-6 md:px-[29px] py-3 bg-white rounded-[8px] border-2 transition-all duration-300 [font-family:'Inter',Helvetica] font-normal text-sm sm:text-base min-h-[44px] ${
                    focusedField === "name"
                      ? "border-[#1890FF] shadow-[0_0_0_3px_rgba(24,144,255,0.1)]"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                />
                <motion.div
                  className="absolute inset-0 rounded-[8px] pointer-events-none"
                  initial={false}
                  animate={{
                    boxShadow:
                      focusedField === "name"
                        ? "0 0 0 3px rgba(24, 144, 255, 0.1)"
                        : "0 0 0 0px rgba(24, 144, 255, 0)",
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              {/* Email Input - Mobile/Tablet */}
              <motion.div
                className="w-full relative"
                variants={inputVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <Input
                  className={`h-12 sm:h-14 md:h-[60px] px-4 sm:px-6 md:px-[29px] py-3 bg-white rounded-[8px] border-2 transition-all duration-300 [font-family:'Inter',Helvetica] font-normal text-sm sm:text-base min-h-[44px] ${
                    focusedField === "email"
                      ? "border-[#1890FF] shadow-[0_0_0_3px_rgba(24,144,255,0.1)]"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  placeholder="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                />
                <motion.div
                  className="absolute inset-0 rounded-[8px] pointer-events-none"
                  initial={false}
                  animate={{
                    boxShadow:
                      focusedField === "email"
                        ? "0 0 0 3px rgba(24, 144, 255, 0.1)"
                        : "0 0 0 0px rgba(24, 144, 255, 0)",
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              {/* Phone Input - Mobile/Tablet */}
              <motion.div
                className="w-full relative"
                variants={inputVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <Input
                  className={`h-12 sm:h-14 md:h-[60px] px-4 sm:px-6 md:px-[29px] py-3 bg-white rounded-[8px] border-2 transition-all duration-300 [font-family:'Inter',Helvetica] font-normal text-sm sm:text-base min-h-[44px] ${
                    focusedField === "phone"
                      ? "border-[#1890FF] shadow-[0_0_0_3px_rgba(24,144,255,0.1)]"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  placeholder="Phone No."
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                />
                <motion.div
                  className="absolute inset-0 rounded-[8px] pointer-events-none"
                  initial={false}
                  animate={{
                    boxShadow:
                      focusedField === "phone"
                        ? "0 0 0 3px rgba(24, 144, 255, 0.1)"
                        : "0 0 0 0px rgba(24, 144, 255, 0)",
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              {/* Submit Button - Mobile/Tablet */}
              <motion.div
                className="w-full"
                variants={inputVariants}
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0 8px 25px rgba(24, 144, 255, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Button className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 relative self-stretch w-full h-12 sm:h-14 md:h-[52px] rounded-[8px] bg-[linear-gradient(180deg,rgba(15,115,255,1)_0%,rgba(24,144,255,1)_100%)] [font-family:'Inter',Helvetica] font-medium text-white text-sm sm:text-base hover:shadow-lg transition-all duration-300 group min-h-[44px]">
                  <span>Register for waitlist</span>
                  <motion.div
                    animate={{
                      x: [0, 3, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.div>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};
