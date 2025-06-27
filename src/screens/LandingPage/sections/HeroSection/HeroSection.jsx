import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import { Section } from "../../../../components/common/Section";
import { HERO_SECTION } from "../../../../constants/landingPageData";
import { motion } from "framer-motion";

export const HeroSection = () => {
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
    hidden: { opacity: 0, y: 60 },
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
    hidden: { opacity: 0, y: 40 },
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.8,
      rotateX: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.8,
      },
    },
  };

  const floatingVariants = {
    floating: {
      y: [-10, 10, -10],
      rotateY: [-2, 2, -2],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <Section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #000001 0%, #06123A 5.44%, #0B2069 10%, #102D95 15.08%, #133DBF 20%, #0E56D4 25%, #086EE8 30%, #068DFF 35.26%, #15A0FF 40.19%, #23B3FF 44.78%, #41CFFF 50%, #64D8FF 54.98%, #81DFFF 60%, #A6E8FF 65.07%, #D6F5FF 70%, #E6F9FF 74.71%, #F5FDFF 80%, #FAFEFF 90%, #FFFFFF 100%)",
      }}
      padding="none"
      maxWidth="full"
    >
      {/* Responsive animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-white/10 rounded-full"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1200),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 800),
              opacity: 0,
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="flex flex-col items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 pt-16 sm:pt-20 md:pt-24 min-h-screen relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col items-center gap-8 sm:gap-12 md:gap-16 flex-1 justify-center">
          <motion.div
            className="flex flex-col items-center justify-center gap-8 sm:gap-10 md:gap-12 w-full"
            variants={fadeInUpVariants}
          >
            <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
              <motion.div
                className="flex items-center gap-4"
                variants={badgeVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Badge className="px-3 py-2 sm:px-4 sm:py-2.5 bg-primary-600 rounded-full font-semibold text-white text-xs sm:text-sm tracking-wide shadow-lg backdrop-blur-sm min-h-[44px] min-w-[44px] flex items-center justify-center">
                    {HERO_SECTION.badge.text}
                  </Badge>
                </motion.div>
              </motion.div>

              <motion.h1
                className="font-semibold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center leading-tight max-w-6xl"
                variants={titleVariants}
              >
                {HERO_SECTION.title.split("\n").map((line, index) => (
                  <motion.span
                    key={index}
                    className="block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5 + index * 0.2,
                      ease: "easeOut",
                    }}
                  >
                    {line}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            <motion.p
              className="text-white text-sm sm:text-base md:text-lg lg:text-xl text-center leading-relaxed max-w-4xl px-4"
              variants={fadeInUpVariants}
            >
              {HERO_SECTION.description}
            </motion.p>
          </motion.div>

          <motion.div variants={buttonVariants}>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                size="lg"
                className="group relative bg-white font-inter overflow-hidden transform transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-blue-500/25 min-h-[44px] min-w-[44px]"
                style={{
                  width: "clamp(180px, 50vw, 222px)",
                  height: "clamp(48px, 12vw, 60px)",
                  borderRadius: "10px",
                  color: "#1890FF",
                }}
              >
                {/* Background animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100"
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <div className="relative flex items-center justify-center gap-2 sm:gap-3">
                  <span
                    className="text-sm sm:text-base lg:text-lg font-sm font-inter transition-colors duration-300"
                    style={{ color: "#1890FF" }}
                  >
                    {HERO_SECTION.cta.text}
                  </span>
                  <motion.svg
                    className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    whileHover={{
                      x: 4,
                      y: -4,
                      scale: 1.1,
                      rotate: 5,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="#1890FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </div>

                {/* Ripple effect */}
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ opacity: 0, scale: 0 }}
                  whileTap={{ opacity: 0.2, scale: 1 }}
                  transition={{ duration: 0.15 }}
                  style={{ borderRadius: "10px" }}
                />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Responsive Image Card Section */}
        <motion.div
          className="mt-12 sm:mt-16 md:mt-20 w-full"
          variants={cardVariants}
        >
          <motion.div
            className="relative w-full max-w-6xl mx-auto"
            variants={floatingVariants}
            animate="floating"
            style={{ perspective: "1000px" }}
          >
            {/* Main Card Container - Responsive */}
            <motion.div
              className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mx-auto"
              whileHover={{
                rotateY: 2,
                rotateX: 1,
                scale: 1.02,
                z: 50,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Responsive Glowing Background Effect */}
              <motion.div
                className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl blur-xl opacity-60"
                style={{
                  background:
                    "linear-gradient(45deg, #1890FF, #15A0FF, #41CFFF, #1890FF)",
                  backgroundSize: "300% 300%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Main Responsive Card */}
              <Card className="relative w-full h-full rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl"
                  style={{
                    background:
                      "linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)",
                    backgroundSize: "200% 200%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Responsive Image Container */}
                <motion.div
                  className="relative w-full h-full p-2 sm:p-3 md:p-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                >
                  {/* Main Responsive Image */}
                  <motion.img
                    className="w-full h-full object-cover rounded-lg sm:rounded-xl lg:rounded-2xl"
                    alt="Mesdo platform preview"
                    src="/HeroSectionImage.png"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                    whileHover={{
                      scale: 1.05,
                      filter: "brightness(1.1) saturate(1.1)",
                    }}
                    onError={(e) => {
                      console.error("Image failed to load:", e.target.src);
                      e.target.style.display = "none";
                      // Show fallback
                      const fallback =
                        e.target.parentNode.querySelector(".fallback-content");
                      if (fallback) fallback.style.display = "flex";
                    }}
                    onLoad={() => {
                      console.log("Image loaded successfully");
                    }}
                  />

                  {/* Fallback content for failed image loads */}
                  <div
                    className="fallback-content absolute inset-2 sm:inset-3 md:inset-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center"
                    style={{ display: "none" }}
                  >
                    <div className="text-center text-white">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl sm:text-3xl md:text-4xl font-bold">
                          M
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                        Mesdo Platform
                      </h3>
                      <p className="text-sm sm:text-base opacity-90">
                        Healthcare Career Platform
                      </p>
                    </div>
                  </div>

                  {/* Subtle Overlay on Hover */}
                  <motion.div
                    className="absolute inset-2 sm:inset-3 md:inset-4 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-lg sm:rounded-xl lg:rounded-2xl opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Responsive Corner Accent Dots */}
                  <motion.div
                    className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(74, 222, 128, 0.7)",
                        "0 0 0 4px rgba(74, 222, 128, 0)",
                        "0 0 0 0 rgba(74, 222, 128, 0.7)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.div
                    className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(96, 165, 250, 0.7)",
                        "0 0 0 3px rgba(96, 165, 250, 0)",
                        "0 0 0 0 rgba(96, 165, 250, 0.7)",
                      ],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  />

                  {/* Enhanced Responsive Fallback Content */}
                  <motion.div
                    className="absolute inset-2 sm:inset-3 md:inset-4 flex items-center justify-center bg-gradient-to-br from-blue-600/90 to-purple-600/90 text-white rounded-lg sm:rounded-xl lg:rounded-2xl backdrop-blur-sm z-0"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  >
                    <div className="text-center p-4 sm:p-6 md:p-8">
                      <motion.div
                        className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4"
                        animate={{
                          scale: [1, 1.05, 1],
                          textShadow: [
                            "0 0 20px rgba(255,255,255,0.5)",
                            "0 0 30px rgba(255,255,255,0.8)",
                            "0 0 20px rgba(255,255,255,0.5)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        ✨ Mesdo Platform
                      </motion.div>
                      <div className="text-sm sm:text-base md:text-lg mb-2 sm:mb-4 opacity-90">
                        Loading amazing preview...
                      </div>
                      <motion.div
                        className="w-32 sm:w-40 h-1 bg-white/30 rounded-full mx-auto overflow-hidden"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2 }}
                      >
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 2, delay: 0.5 }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Responsive floating elements */}
                <motion.div
                  className="absolute top-1/4 left-4 sm:left-6 md:left-8 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-yellow-400 rounded-full"
                  animate={{
                    y: [-5, 5, -5],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="absolute bottom-1/3 right-4 sm:right-6 md:right-8 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-400 rounded-full"
                  animate={{
                    x: [-3, 3, -3],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />

                {/* Responsive Floating Light Particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/60 rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 2) * 40}%`,
                      }}
                      animate={{
                        y: [-20, 20, -20],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              </Card>

              {/* Responsive reflection effect */}
              <motion.div
                className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 left-1/2 transform -translate-x-1/2 w-3/4 h-4 sm:h-6 md:h-8 bg-gradient-to-b from-white/10 to-transparent rounded-full blur-lg"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scaleX: [0.8, 1.1, 0.8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Responsive Simple Floating Elements */}
            <motion.div
              className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-3 h-3 sm:w-4 sm:h-4 bg-blue-400/40 rounded-full blur-sm"
              animate={{
                y: [-10, 10, -10],
                x: [-5, 5, -5],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute -bottom-6 sm:-bottom-8 -right-6 sm:-right-8 w-4 h-4 sm:w-6 sm:h-6 bg-purple-400/30 rounded-full blur-md"
              animate={{
                y: [15, -15, 15],
                x: [8, -8, 8],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            <motion.div
              className="absolute top-1/3 -right-6 sm:-right-8 w-2 h-2 sm:w-3 sm:h-3 bg-green-400/50 rounded-full"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
};
