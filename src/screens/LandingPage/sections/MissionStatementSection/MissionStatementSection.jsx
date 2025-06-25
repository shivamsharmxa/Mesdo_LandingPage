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
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-40"
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
          className="absolute bottom-20 right-10 w-40 h-40 bg-purple-50 rounded-full blur-3xl opacity-30"
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
        className="flex flex-col items-center gap-12 max-w-5xl mx-auto text-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="flex flex-col items-center gap-6">
          {/* Animated Badge */}
          <motion.div variants={badgeVariants}>
            <motion.span
              className="text-sm font-medium text-primary-600 tracking-wide uppercase relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {/* Background glow effect */}
              <motion.div
                className="absolute inset-0 bg-blue-100 rounded-full blur-sm opacity-0"
                whileHover={{ opacity: 0.6, scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative px-4 py-2 rounded-full">
                Mesdo's Mission
              </span>
            </motion.span>
          </motion.div>

          {/* Animated Title with Word-by-Word Animation */}
          <motion.h2
            className="font-inter text-gray-900 text-3xl md:text-4xl lg:text-5xl leading-tight max-w-4xl tracking-tight"
            variants={titleVariants}
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-2"
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

        {/* Enhanced Button with Advanced Animations */}
        <motion.div variants={buttonVariants}>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              className="group relative text-white font-medium overflow-hidden border-0"
              style={{
                width: "160px",
                height: "52px",
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

              {/* Button content */}
              <div className="relative flex items-center gap-2 z-10">
                <motion.span
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
                  <ArrowRightIcon className="w-5 h-5" />
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

        {/* Floating decorative elements */}
        <motion.div
          className="absolute -top-4 -right-4 w-2 h-2 bg-blue-400 rounded-full opacity-60"
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
          className="absolute -bottom-6 -left-6 w-3 h-3 bg-purple-400 rounded-full opacity-40"
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
          className="absolute top-1/2 -left-8 w-1 h-1 bg-green-400 rounded-full opacity-70"
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
      </motion.div>
    </Section>
  );
};
