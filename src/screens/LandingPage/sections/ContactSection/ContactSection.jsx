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
      className="flex flex-col items-center gap-20 pt-[100px] pb-[150px] px-0 relative self-stretch w-full flex-[0_0_auto] bg-[#eff7ff]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="flex w-[1140px] items-end justify-between relative flex-[0_0_auto]">
        {/* Left Content */}
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

        {/* Right Content - Form */}
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
    </motion.section>
  );
};
