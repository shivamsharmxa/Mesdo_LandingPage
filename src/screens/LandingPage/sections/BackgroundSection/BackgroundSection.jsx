import { LaptopIcon, BriefcaseIcon, ClockIcon, UsersIcon } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

import { Card, CardContent } from "../../../../components/ui/card";

export const BackgroundSection = () => {
  // Enhanced mouse tracking for magnetic effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  // Refined spring physics for ultra-smooth interactions
  const springConfig = { damping: 30, stiffness: 200, mass: 0.6 };
  const phone1RotateX = useSpring(
    useTransform(mouseY, [-300, 300], [8, -8]),
    springConfig
  );
  const phone1RotateY = useSpring(
    useTransform(mouseX, [-300, 300], [-8, 8]),
    springConfig
  );
  const phone2RotateX = useSpring(
    useTransform(mouseY, [-300, 300], [-6, 6]),
    springConfig
  );
  const phone2RotateY = useSpring(
    useTransform(mouseX, [-300, 300], [6, -6]),
    springConfig
  );

  // Enhanced parallax effects
  const phone1X = useSpring(
    useTransform(mouseX, [-300, 300], [-15, 15]),
    springConfig
  );
  const phone1Y = useSpring(
    useTransform(mouseY, [-300, 300], [-10, 10]),
    springConfig
  );
  const phone2X = useSpring(
    useTransform(mouseX, [-300, 300], [10, -10]),
    springConfig
  );
  const phone2Y = useSpring(
    useTransform(mouseY, [-300, 300], [8, -8]),
    springConfig
  );

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  // Enhanced feature data with better UX details
  const features = [
    {
      icon: <BriefcaseIcon className="w-5 h-5 text-blue-500" />,
      title: "Find Tailored Job Matches",
      description:
        "Get matched to jobs based on your specialty, experience, and location. No spam. No guesswork.",
      color: "from-blue-500 to-cyan-500",
      hoverColor: "hover:from-blue-600 hover:to-cyan-600",
    },
    {
      icon: <ClockIcon className="w-5 h-5 text-emerald-500" />,
      title: "Stand Out with Verified Credentials",
      description:
        "Hospitals trust verified profiles. Get credential-checked and boost your visibility instantly.",
      color: "from-emerald-500 to-teal-500",
      hoverColor: "hover:from-emerald-600 hover:to-teal-600",
    },
    {
      icon: <UsersIcon className="w-5 h-5 text-purple-500" />,
      title: "Build Your Medical Network",
      description:
        "Message recruiters, join peer groups, and grow your career inside a professional healthcare-only network.",
      color: "from-purple-500 to-violet-500",
      hoverColor: "hover:from-purple-600 hover:to-violet-600",
    },
    {
      icon: <LaptopIcon className="w-5 h-5 text-orange-500" />,
      title: "Skip First Interviews",
      description:
        "With Mesdo-approved profiles, you can skip screening calls and go straight to final rounds.",
      color: "from-orange-500 to-red-500",
      hoverColor: "hover:from-orange-600 hover:to-red-600",
    },
  ];

  // Enhanced section entrance animation
  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="flex flex-col items-start gap-2 py-[80px] sm:py-[100px] md:py-[120px] lg:py-[140px] xl:py-[150px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[150px] relative w-full bg-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {/* Enhanced responsive ambient background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 sm:top-16 md:top-20 left-4 sm:left-8 md:left-12 lg:left-16 xl:left-20 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-60 xl:h-60 bg-blue-100/40 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-28 xl:bottom-32 right-4 sm:right-8 md:right-12 lg:right-16 xl:right-20 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 bg-purple-100/40 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.35, 0.15],
            x: [0, -25, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between relative w-full z-10 gap-8 xl:gap-0">
        <div className="flex flex-col items-start gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-[59px] w-full xl:max-w-[613px]">
          <motion.div
            className="flex flex-col items-start gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 w-full xl:max-w-[520px]"
            variants={headerVariants}
          >
            <div className="flex flex-col items-start gap-3 sm:gap-3.5">
              <motion.span
                className="font-normal text-primary-6 text-xs sm:text-sm tracking-[-0.18px] leading-6 whitespace-nowrap"
                whileHover={{
                  scale: 1.05,
                  color: "#1890FF",
                  letterSpacing: "0.5px",
                }}
                transition={{ duration: 0.3 }}
              >
                Key Features Built for Healthcare
              </motion.span>

              <motion.h2
                className="w-full font-inter text-[#060b13] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[44.2px] xl:w-[588px] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1px] xl:tracking-[-1.25px] leading-tight sm:leading-tight md:leading-tight xl:leading-tight font-normal"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                Crafted for Healthcare.{" "}
                <motion.span
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  Every Click, Every Feature.
                </motion.span>
              </motion.h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-7 xl:gap-8 w-full">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-start gap-3 sm:gap-4 group cursor-pointer relative p-2 sm:p-0"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <motion.div
                  className="relative"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Card className="rounded-[56px] w-11 h-11 bg-neutral-1 border border-solid border-[#e9ebf1] p-0 relative overflow-hidden group-hover:shadow-lg transition-all duration-300">
                    <CardContent className="flex items-center justify-center p-0 relative z-10 w-full h-full">
                      <motion.div
                        className="flex items-center justify-center"
                        whileHover={{
                          scale: 1.2,
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        {feature.icon}
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  className="flex flex-col items-start gap-2"
                  whileHover={{
                    x: 3,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                >
                  <motion.h3
                    className="font-normal text-black text-lg sm:text-xl leading-[1.5] sm:leading-[30px] w-full sm:max-w-[275px] transition-colors duration-300"
                    style={{
                      color:
                        hoveredFeature === index
                          ? index === 0
                            ? "#3b82f6"
                            : index === 1
                            ? "#10b981"
                            : index === 2
                            ? "#8b5cf6"
                            : "#f97316"
                          : "#000000",
                    }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p className="font-normal text-neutral-7 text-sm leading-[1.5] sm:leading-[21px] w-full sm:max-w-[275px] group-hover:text-neutral-8 transition-colors duration-300">
                    {feature.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="relative w-full md:w-[350px] lg:w-[400px] xl:w-[459px] h-[300px] md:h-[380px] lg:h-[440px] xl:h-[508px] mx-auto xl:mx-0 mt-8 xl:mt-0"
          initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          whileHover={{ scale: 1.03 }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            mouseX.set(0);
            mouseY.set(0);
          }}
          style={{ perspective: "2000px" }}
        >
          {/* Enhanced holographic background glow */}
          <motion.div
            className="absolute inset-0 rounded-[20px] opacity-30"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(24, 144, 255, 0.4), rgba(15, 115, 255, 0.3), transparent 70%)",
              filter: "blur(25px)",
            }}
            animate={{
              scale: isHovered ? [1, 1.3, 1] : [1, 1.15, 1],
              opacity: isHovered ? [0.3, 0.7, 0.3] : [0.3, 0.5, 0.3],
              rotate: [0, 360],
            }}
            transition={{
              scale: {
                duration: isHovered ? 3 : 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
              opacity: {
                duration: isHovered ? 3 : 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          />

          {/* Enhanced magnetic field lines */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`field-${i}`}
              className="absolute border border-blue-300/30 rounded-full"
              style={{
                width: `${180 + i * 35}px`,
                height: `${180 + i * 35}px`,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                scale: isHovered ? [1, 1.15, 1] : [1, 1.08, 1],
                opacity: isHovered ? [0.1, 0.4, 0.1] : [0.05, 0.2, 0.05],
                rotate: [0, 360],
              }}
              transition={{
                scale: {
                  duration: 3 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 3 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotate: {
                  duration: 25 + i * 8,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            />
          ))}

          <motion.div
            className="relative w-full h-full md:w-[400px] md:h-[430px] lg:w-[470px] lg:h-[500px] xl:w-[536px] xl:h-[580px] bg-gradient-to-br from-[#eff7ff] via-[#f0f8ff] to-[#e6f3ff] rounded-[16px] md:rounded-[18px] xl:rounded-[20px_20px_8px_8px] overflow-hidden"
            style={{
              transformStyle: "preserve-3d",
              perspective: "2000px",
              background: `
                radial-gradient(circle at 30% 20%, rgba(24, 144, 255, 0.1), transparent 50%),
                radial-gradient(circle at 70% 80%, rgba(15, 115, 255, 0.1), transparent 50%),
                linear-gradient(135deg, #eff7ff, #f0f8ff, #e6f3ff)
              `,
              boxShadow: `
                0 0 40px rgba(24, 144, 255, 0.15),
                inset 0 1px 0 rgba(255, 255, 255, 0.5),
                0 10px 30px rgba(0, 0, 0, 0.08)
              `,
            }}
            animate={{
              rotateY: isHovered ? [0, 3, 0, -3, 0] : [0, 1, 0, -1, 0],
              rotateX: isHovered ? [0, 2, 0, -2, 0] : [0, 0.5, 0, -0.5, 0],
              scale: isHovered ? [1, 1.02, 1] : [1, 1.01, 1],
            }}
            transition={{
              duration: isHovered ? 4 : 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              rotateY: 8,
              rotateX: 4,
              scale: 1.03,
              transition: { duration: 0.3 },
            }}
          >
            {/* Advanced particle system */}
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${Math.random() * 6 + 2}px`,
                  height: `${Math.random() * 6 + 2}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: `radial-gradient(circle, 
                    ${
                      i % 3 === 0
                        ? "rgba(24, 144, 255, 0.6)"
                        : i % 3 === 1
                        ? "rgba(15, 115, 255, 0.6)"
                        : "rgba(255, 255, 255, 0.8)"
                    })`,
                  filter: "blur(0.5px)",
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.sin(i) * 20, 0],
                  opacity: isHovered ? [0.3, 0.8, 0.3] : [0.2, 0.6, 0.2],
                  scale: [1, 1.5, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2,
                }}
              />
            ))}

            {/* Energy waves */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`wave-${i}`}
                className="absolute inset-0 border border-blue-400/30 rounded-[20px_20px_8px_8px]"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: i * 1,
                }}
              />
            ))}

            {/* Phone 2 with responsive magnetic field interaction */}
            <motion.img
              src="/Phone2.png"
              alt="Phone interface showing medical app"
              className="absolute w-[200px] h-[400px] md:w-[220px] md:h-[440px] lg:w-[250px] lg:h-[500px] xl:w-[280px] xl:h-[560px] top-[-5px] md:top-[-5px] lg:top-[-5px] xl:top-[-5px] left-[140px] md:left-[150px] lg:left-[170px] xl:left-[190px] object-cover object-center z-10 mt-[15px] md:mt-[18px] xl:mt-[20px]"
              style={{
                transformStyle: "preserve-3d",
                rotateX: phone2RotateX,
                rotateY: phone2RotateY,
                x: phone2X,
                y: phone2Y,
                filter: `
                  drop-shadow(0 15px 30px rgba(0,0,0,0.12))
                  drop-shadow(0 0 15px rgba(24, 144, 255, 0.25))
                  brightness(${isHovered ? 1.1 : 1})
                  contrast(${isHovered ? 1.05 : 1})
                `,
              }}
              initial={{
                opacity: 0,
                rotateY: -30,
                x: 100,
                y: -50,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0, -8, 0],
                rotateZ: [0, 1, 0, -1, 0],
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.3 },
                scale: { duration: 1, delay: 0.3, ease: "easeOut" },
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                },
                rotateZ: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                },
              }}
              whileHover={{
                scale: 1.08,
                z: 50,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            />

            {/* Phone 1 with responsive enhanced magnetic interaction */}
            <motion.img
              src="/Phone1.png"
              alt="Phone interface showing medical features"
              className="absolute w-[240px] h-[320px] md:w-[260px] md:h-[350px] lg:w-[290px] lg:h-[390px] xl:w-[330px] xl:h-[440px] top-[110px] md:top-[120px] lg:top-[135px] xl:top-[150px] left-[15px] md:left-[18px] xl:left-[20px] object-cover object-center z-20 shadow-lg"
              style={{
                transformStyle: "preserve-3d",
                rotateX: phone1RotateX,
                rotateY: phone1RotateY,
                x: phone1X,
                y: phone1Y,
                filter: `
                  drop-shadow(0 20px 40px rgba(0,0,0,0.2))
                  drop-shadow(0 0 25px rgba(15, 115, 255, 0.3))
                  brightness(${isHovered ? 1.15 : 1})
                  contrast(${isHovered ? 1.1 : 1})
                  saturate(${isHovered ? 1.1 : 1})
                `,
              }}
              initial={{
                opacity: 0,
                rotateY: 30,
                x: -100,
                y: 50,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -15, 0, -12, 0],
                rotateZ: [0, -1, 0, 1, 0],
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.6 },
                scale: { duration: 1.2, delay: 0.6, ease: "easeOut" },
                y: {
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                },
                rotateZ: {
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3,
                },
              }}
              whileHover={{
                scale: 1.12,
                z: 100,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            />

            {/* Responsive holographic overlay */}
            <motion.div
              className="absolute inset-0 rounded-[16px] md:rounded-[18px] xl:rounded-[20px_20px_8px_8px] pointer-events-none"
              style={{
                background: `
                  linear-gradient(45deg, 
                    transparent 30%, 
                    rgba(255, 255, 255, 0.1) 50%, 
                    transparent 70%
                  )
                `,
                backgroundSize: "200% 200%",
              }}
              animate={{
                backgroundPosition: isHovered
                  ? ["0% 0%", "100% 100%", "0% 0%"]
                  : ["0% 0%", "50% 50%", "0% 0%"],
              }}
              transition={{
                duration: isHovered ? 2 : 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Quantum dots */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`quantum-${i}`}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${15 + (i % 4) * 25}%`,
                  top: `${15 + Math.floor(i / 4) * 25}%`,
                  boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.5, 0.5],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
