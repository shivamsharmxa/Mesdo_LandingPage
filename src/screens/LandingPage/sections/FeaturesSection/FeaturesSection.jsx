import { ArrowUpRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { FEATURES_SECTION } from "../../../../constants/landingPageData";
import { motion } from "framer-motion";

export const FeaturesSection = () => {
  return (
    <section className="w-full bg-[linear-gradient(135deg,#0F73FF_0%,#1890FF_100%)]">
      <div className="w-full py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-8 lg:py-24 lg:px-8">
        <div className="mx-auto max-w-[1140px]">
          {/* Responsive Layout - Single container that adapts */}
          <motion.div
            className="flex flex-col md:flex-row items-center md:items-center justify-between gap-6 sm:gap-8 md:gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            {/* Content Section - Responsive */}
            <div className="flex flex-col gap-4 sm:gap-6 flex-1 text-center md:text-left">
              <motion.h2
                className="font-inter text-white text-xl sm:text-2xl md:text-3xl leading-tight max-w-2xl mx-auto md:mx-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                  ease: "easeOut",
                }}
              >
                {FEATURES_SECTION.title}
              </motion.h2>

              <motion.p
                className="font-sm text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                  ease: "easeOut",
                }}
              >
                {FEATURES_SECTION.description}
              </motion.p>
            </div>

            {/* CTA Button Section - Responsive */}
            <motion.div
              className="flex items-center justify-center md:justify-end w-full md:w-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.4,
                ease: "easeOut",
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                }}
                whileTap={{
                  scale: 0.95,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
              >
                <Button
                  variant={FEATURES_SECTION.cta.variant}
                  className="flex items-center justify-center gap-2 bg-white rounded-[8px] text-[#1890FF] hover:bg-gray-50 font-medium transition-all duration-200 shadow-lg min-h-[44px] min-w-[44px]"
                  style={{
                    width: "clamp(160px, 45vw, 180px)",
                    height: "clamp(44px, 12vw, 52px)",
                    borderRadius: "8px",
                    fontSize: "clamp(14px, 4vw, 16px)",
                    padding: "0 clamp(16px, 4vw, 24px)",
                  }}
                >
                  <span className="whitespace-nowrap font-inter">
                    {FEATURES_SECTION.cta.text}
                  </span>
                  <motion.div
                    animate={{
                      x: [0, 3, 0],
                      y: [0, -2, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{
                      x: 5,
                      y: -3,
                      transition: { duration: 0.2 },
                    }}
                    className="flex-shrink-0"
                  >
                    <ArrowUpRightIcon
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      style={{
                        width: "clamp(16px, 4vw, 20px)",
                        height: "clamp(16px, 4vw, 20px)",
                      }}
                    />
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
