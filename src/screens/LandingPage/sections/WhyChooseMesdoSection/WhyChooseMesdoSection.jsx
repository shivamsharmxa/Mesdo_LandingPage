import { Card, CardContent } from "../../../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "../../../../components/ui/table";
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
      className="flex flex-col items-center gap-20 py-[100px] pb-[150px] relative self-stretch w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="flex flex-col items-center gap-16 max-w-[1110px]">
        {/* Section Header */}
        <motion.div
          className="flex flex-col items-center gap-6"
          variants={headerVariants}
        >
          <div className="flex flex-col items-center gap-[17px]">
            <motion.span
              className="self-stretch [font-family:'Inter',Helvetica] font-normal text-primary-6 text-sm text-center tracking-[0.56px]"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Why Choose Mesdo
            </motion.span>

            <motion.h2
              className="[font-family:'Inter',Helvetica] font-medium text-[#060b13] text-[44.2px] text-center tracking-[-1.25px] leading-[57.6px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Why Choose Mesdo Over Everyone Else?
            </motion.h2>
          </div>

          <motion.div
            className="flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="max-w-[918px] [font-family:'Inter',Helvetica] font-normal text-neutral-9 text-xl text-center tracking-[-0.24px] leading-[35px]">
              If you want to achieve ground-breaking growth with increased sales
              and profitability with paid ads, then you&apos;re in the right
              place.
            </p>
          </motion.div>
        </motion.div>

        {/* Comparison Table */}
        <div className="flex flex-col items-center gap-10">
          <motion.div
            variants={tableVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="w-full max-w-[1110px] border-0 shadow-none">
              <CardContent className="p-0">
                <div className="relative">
                  {/* Table Headers */}
                  <motion.div
                    className="flex"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <div className="w-[518px] h-[71px]"></div>
                    <motion.div
                      className="w-[296px] h-[71px] flex items-center justify-center bg-neutral-50 rounded-[16px_16px_0px_0px] border-t border-r border-l border-[#e9ebf1]"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="[font-family:'Inter',Helvetica] font-normal text-neutral-8 text-base leading-[57.6px]">
                        Other Platforms
                      </span>
                    </motion.div>
                    <motion.div
                      className="w-[296px] h-[71px] flex items-center justify-center rounded-[16px_16px_16px_0px] bg-[linear-gradient(180deg,rgba(15,115,255,1)_0%,rgba(24,144,255,1)_100%)]"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 8px 25px rgba(15, 115, 255, 0.3)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="[font-family:'Inter',Helvetica] font-medium text-white text-xl leading-[57.6px]">
                        Mesdo
                      </span>
                    </motion.div>
                  </motion.div>

                  {/* Table Content */}
                  <Table className="border-collapse">
                    <TableBody>
                      {comparisonFeatures.map((feature, index) => (
                        <motion.tr
                          key={index}
                          className="border-0"
                          variants={rowVariants}
                          whileHover={{
                            scale: 1.01,
                            transition: { duration: 0.2 },
                          }}
                        >
                          <TableCell
                            className={`w-[518px] h-[72px] border-t border-l border-[#e9ebf1] ${
                              index === comparisonFeatures.length - 1
                                ? "border-b rounded-bl-[16px]"
                                : ""
                            }`}
                          >
                            <motion.span
                              className="[font-family:'Inter',Helvetica] font-normal text-black text-base leading-[57.6px]"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{
                                duration: 0.4,
                                delay: index * 0.1 + 0.6,
                              }}
                            >
                              {feature.name}
                            </motion.span>
                          </TableCell>
                          <TableCell
                            className={`w-[296px] h-[72px] border-t border-l border-[#e9ebf1] bg-neutral-50 p-6 ${
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
                                className="w-6 h-6 flex items-center justify-center"
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
                                  className="w-5 h-5 text-red-500"
                                  strokeWidth={2}
                                />
                              </motion.div>
                              <motion.span
                                className="[font-family:'Inter',Helvetica] font-normal text-neutral-8 text-base leading-[57.6px]"
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
                          </TableCell>
                          <TableCell
                            className={`w-[296px] h-[72px] border-t border-[#40a9ff] p-6 ${
                              index === comparisonFeatures.length - 1
                                ? "border-b rounded-br-[16px]"
                                : ""
                            }`}
                            style={{
                              background:
                                "linear-gradient(180deg, rgba(15,115,255,1) 0%, rgba(24,144,255,1) 100%)",
                            }}
                          >
                            <motion.div
                              className="flex items-center gap-2"
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <motion.div
                                className="w-6 h-6 flex items-center justify-center"
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
                                  className="w-5 h-5 text-white"
                                  strokeWidth={2}
                                />
                              </motion.div>
                              <motion.span
                                className="[font-family:'Inter',Helvetica] font-normal text-white text-base leading-[57.6px]"
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
                          </TableCell>
                        </motion.tr>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.p
            className="[font-family:'Inter',Helvetica] font-normal italic text-neutral-9 text-xl text-center tracking-[-0.24px] leading-[35px]"
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
