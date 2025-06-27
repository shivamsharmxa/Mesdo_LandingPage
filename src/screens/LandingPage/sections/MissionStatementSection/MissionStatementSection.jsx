import { ArrowRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Section, SectionHeader } from "../../../../components/common/Section";
import { MISSION_STATEMENT } from "../../../../constants/landingPageData";
import { motion } from "framer-motion";

export const MissionStatementSection = () => {
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

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Split text into words for individual animation
  const titleText =
    "Mesdo exists to fix what's broken in Indian healthcare. Every healthcare worker deserves opportunity built on merit — not";
  const highlightText = "JUST connections.";
  const words = titleText.split(" ");

  return (
    <Section
      padding="sm"
      background="white"
      className="flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Responsive subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 sm:top-16 md:top-20 left-4 sm:left-8 md:left-10 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-blue-50 rounded-full blur-3xl opacity-40"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 sm:bottom-16 md:bottom-20 right-4 sm:right-8 md:right-10 w-24 h-24 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-purple-50 rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <motion.div
        className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6">
          {/* Responsive Animated Badge */}
          <motion.div variants={badgeVariants}>
            <motion.span
              className="text-xs sm:text-sm font-medium text-primary-600 tracking-wide uppercase relative min-h-[44px] min-w-[44px] flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {/* Background glow effect */}
              <motion.div
                className="absolute inset-0 bg-blue-100 rounded-full blur-sm opacity-0"
                whileHover={{ opacity: 0.6, scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative px-3 py-2 sm:px-4 sm:py-2 rounded-full">
                Mesdo's Mission
              </span>
            </motion.span>
          </motion.div>

          {/* Responsive Animated Title with Word-by-Word Animation */}
          <motion.h2
            className="font-inter text-gray-900 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight max-w-5xl tracking-tight"
            variants={titleVariants}
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-1 sm:mr-2"
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  color: "#1890FF",
                  textShadow: "0 0 8px rgba(24, 144, 255, 0.3)",
                }}
              >
                {word}
              </motion.span>
            ))}{" "}
            <motion.span
              className="font-semibold inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: words.length * 0.05 + 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                color: "#0F73FF",
                textShadow: "0 0 12px rgba(15, 115, 255, 0.4)",
              }}
            >
              {highlightText}
            </motion.span>
          </motion.h2>
        </div>

        {/* Responsive Enhanced Button with Advanced Animations */}
        <motion.div variants={buttonVariants}>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              className="group relative text-white font-medium overflow-hidden border-0 min-h-[44px] min-w-[44px]"
              style={{
                width: "clamp(140px, 40vw, 160px)",
                height: "clamp(44px, 12vw, 52px)",
                borderRadius: "8px",
                background: "linear-gradient(180deg, #0F73FF 0%, #1890FF 100%)",
                padding: "0",
              }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 opacity-0"
                style={{
                  background:
                    "linear-gradient(180deg, #1890FF 0%, #0F73FF 100%)",
                  borderRadius: "8px",
                }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 opacity-0"
                style={{
                  background:
                    "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)",
                  borderRadius: "8px",
                }}
                whileHover={{
                  opacity: 1,
                  x: ["-100%", "100%"],
                }}
                transition={{
                  opacity: { duration: 0.3 },
                  x: { duration: 0.6, ease: "easeInOut" },
                }}
              />

              {/* Responsive Button content */}
              <div className="relative flex items-center gap-1.5 sm:gap-2 z-10">
                <motion.span
                  className="text-sm sm:text-base"
                  initial={{ x: 0 }}
                  whileHover={{ x: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  Know more
                </motion.span>
                <motion.div
                  whileHover={{
                    x: 4,
                    scale: 1.1,
                    rotate: -10,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
              </div>

              {/* Ripple effect on click */}
              <motion.div
                className="absolute inset-0 bg-white rounded-lg opacity-0"
                whileTap={{
                  opacity: [0, 0.2, 0],
                  scale: [0.8, 1, 1.2],
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-lg opacity-0"
                style={{
                  boxShadow: "0 0 20px rgba(24, 144, 255, 0.4)",
                }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>
        </motion.div>

        {/* Responsive floating decorative elements */}
        <motion.div
          className="absolute -top-2 sm:-top-3 md:-top-4 -right-2 sm:-right-3 md:-right-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full opacity-60"
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-4 sm:-bottom-5 md:-bottom-6 -left-4 sm:-left-5 md:-left-6 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-purple-400 rounded-full opacity-40"
          animate={{
            y: [15, -15, 15],
            x: [8, -8, 8],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute top-1/2 -left-4 sm:-left-6 md:-left-8 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-green-400 rounded-full opacity-70"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Additional responsive floating elements for better visual balance */}
        <motion.div
          className="absolute top-1/4 right-4 sm:right-6 md:right-8 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-yellow-400 rounded-full opacity-50"
          animate={{
            y: [-8, 8, -8],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-4 sm:left-6 md:left-8 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-pink-400 rounded-full opacity-60"
          animate={{
            x: [-6, 6, -6],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
      </motion.div>
    </Section>
  );
};
