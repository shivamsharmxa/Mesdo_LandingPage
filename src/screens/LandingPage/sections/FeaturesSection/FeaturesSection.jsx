import { ArrowUpRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Section } from "../../../../components/common/Section";
import { FEATURES_SECTION } from "../../../../constants/landingPageData";
import { motion } from "framer-motion";

export const FeaturesSection = () => {
  return (
    <Section
      className="bg-[linear-gradient(135deg,#0F73FF_0%,#1890FF_100%)]"
      padding="default"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex flex-col gap-6 flex-1">
          <h2 className="font-inter text-white text-2xl md:text-3xl leading-tight max-w-2xl">
            {FEATURES_SECTION.title}
          </h2>
          <p className="font-sm text-white/90 text-base md:text-lg leading-relaxed max-w-xl">
            {FEATURES_SECTION.description}
          </p>
        </div>

        <div className="flex items-center justify-center md:justify-end">
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{
              scale: 0.98,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
          >
            <Button
              variant={FEATURES_SECTION.cta.variant}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white rounded-[8px] text-[#1890FF] hover:bg-gray-50 font-medium text-[16px] h-auto transition-all duration-200 shadow-lg"
              style={{
                width: "180px",
                height: "52px",
                borderRadius: "8px",
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
              >
                <ArrowUpRightIcon className="w-5 h-5" />
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
