import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  animate,
  useScroll,
  useTransform,
} from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Separator } from "../../components/ui/separator";
import { Card, CardContent } from "../../components/ui/card";
import { AdditionalFeaturesSection } from "../LandingPage/sections/AdditionalFeaturesSection";
import { WhyChooseMesdoSection } from "../LandingPage/sections/WhyChooseMesdoSection";
import { CommunitySection } from "../LandingPage/sections/CommunitySection/CommunitySection";
import { FeaturesSection } from "../LandingPage/sections/FeaturesSection";
import { FeaturesWrapperSection } from "../LandingPage/sections/FeaturesWrapperSection";
import { ContactSection } from "../LandingPage/sections/ContactSection/ContactSection";
import { FooterSection } from "../LandingPage/sections/FooterSection/FooterSection";

// Smooth Counter Component with optimized rendering
const SmoothCounter = ({ value, className }) => {
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState("0");
  const lastUpdateTime = useRef(0);

  useEffect(() => {
    const unsubscribe = motionValue.on("change", (latest) => {
      const now = Date.now();
      // Throttle updates to 60fps for smoother visual experience
      if (now - lastUpdateTime.current > 16) {
        setDisplayValue(Math.round(latest).toLocaleString("en-IN"));
        lastUpdateTime.current = now;
      }
    });

    return unsubscribe;
  }, [motionValue]);

  useEffect(() => {
    if (value > 0) {
      // Ultra smooth animation with multiple easing segments
      animate(motionValue, value, {
        duration: 4, // 4 seconds for very smooth counting
        ease: [0.16, 1, 0.3, 1], // Smoother easing curve
        type: "tween",
      });
    } else {
      // Quick reset to 0
      animate(motionValue, 0, {
        duration: 0.3,
        ease: "easeOut",
      });
    }
  }, [motionValue, value]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {displayValue}+
    </motion.span>
  );
};

export const AboutPage = () => {
  const storyRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [targetCount, setTargetCount] = useState(0);
  const countRef = useRef(null);
  const lineRef = useRef(null);
  const secondLineRef = useRef(null);
  const thirdLineRef = useRef(null);
  const isInView = useInView(countRef, { once: false, amount: 0.3 });

  // Use scroll progress for line animation like Home page
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["start 0.8", "end 0.2"],
  });

  // Second line scroll progress
  const { scrollYProgress: secondScrollYProgress } = useScroll({
    target: secondLineRef,
    offset: ["start 0.8", "end 0.2"],
  });

  // Third line scroll progress
  const { scrollYProgress: thirdScrollYProgress } = useScroll({
    target: thirdLineRef,
    offset: ["start 0.8", "end 0.2"],
  });

  // Transform scroll progress to line height with direction sensitivity
  const lineHeight = useTransform(scrollYProgress, [0, 0.3, 1], [0, 200, 200]);
  const secondLineHeight = useTransform(secondScrollYProgress, [0, 0.3, 1], [0, 200, 200]);
  const thirdLineHeight = useTransform(thirdScrollYProgress, [0, 0.3, 1], [0, 200, 200]);

  useEffect(() => {
    if (isInView) {
      // Smooth transition to target number
      setTargetCount(65000000);
    } else {
      // Reset to 0 when out of view
      setTargetCount(0);
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const fadeInUpVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const scaleInVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      filter: "blur(8px)",
      rotateX: 25,
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
  };

  const slideInVariants = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const conversationData = [
    {
      text: "Ek junior nurse I know has been jobless for 2 months.",
      position: "top-2 left-16",
      rotation: "rotate-1",
      borderRadius: "rounded-[15px_15px_15px_0px]",
      side: "left",
    },
    {
      text: "Have you not tried using LinkedIn or Naukri?",
      position: "top-[134px] left-[132px]",
      rotation: "-rotate-1",
      borderRadius: "rounded-[15px_15px_0px_15px]",
      side: "right",
    },
    {
      text: "Hardly any roles. Most people still rely on WhatsApp forwards",
      position: "top-[260px] left-px",
      rotation: "rotate-1",
      borderRadius: "rounded-[15px_15px_15px_0px]",
      side: "left",
    },
    {
      text: "...Wait — this is how healthcare jobs still work?",
      position: "top-[386px] left-[113px]",
      rotation: "-rotate-1",
      borderRadius: "rounded-[15px_15px_0px_15px]",
      side: "right",
    },
  ];

  const statisticsData = [
    {
      percentage: "70%",
      title: "Disconnected and Outdated",
      description:
        "offline, merit-based hiring suffers, leaving many qualified professionals overlooked.",
    },
    {
      percentage: "70%", 
      title: "Disconnected and Outdated",
      description:
        "offline, merit-based hiring suffers, leaving many qualified professionals overlooked.",
    },
    {
      percentage: "70%",
      title: "Disconnected and Outdated", 
      description:
        "offline, merit-based hiring suffers, leaving many qualified professionals overlooked.",
    },
  ];

  const teamMembers = [
    {
      name: "Rahul Thakar",
      role: "Co-Founder & Director",
    },
    {
      name: "Rachit Elhance",
      role: "Co-Founder & Director",
    },
    {
      name: "Shivam Sharma",
      role: "Lead Engineer",
    },
    {
      name: "Shreeti Mohapatra",
      role: " Product Designer",
    },
  ];

  const nextSlide = () => {
    const nextIndex = Math.floor(currentSlide / 4) * 4 + 4;
    if (nextIndex < teamMembers.length) {
      setCurrentSlide(nextIndex);
    } else {
      setCurrentSlide(0);
    }
  };

  const prevSlide = () => {
    const prevIndex = Math.floor(currentSlide / 4) * 4 - 4;
    if (prevIndex >= 0) {
      setCurrentSlide(prevIndex);
    } else {
      setCurrentSlide(Math.floor((teamMembers.length - 1) / 4) * 4);
    }
  };

  const handleScrollIndicatorClick = () => {
    if (storyRef.current) {
      storyRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white w-full min-h-screen">
      <div className="w-full">
        <motion.div
          className="flex flex-col w-full items-start"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Hero Section */}
          <motion.section
            className="relative w-full h-[889px] bg-[linear-gradient(180deg,rgba(0,0,1,1)_0%,rgba(6,18,58,1)_5%,rgba(11,32,105,1)_10%,rgba(16,45,149,1)_15%,rgba(19,61,191,1)_20%,rgba(14,86,212,1)_25%,rgba(8,110,232,1)_30%,rgba(6,141,255,1)_37%,rgba(21,160,255,1)_44%,rgba(35,179,255,1)_51%,rgba(65,207,255,1)_58%,rgba(100,216,255,1)_66%,rgba(166,232,255,1)_76%,rgba(214,245,255,1)_84%,rgba(250,254,255,1)_95%,rgba(255,255,255,1)_100%)] overflow-hidden flex items-center justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
          >
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-white/10 rounded-full"
                  initial={{
                    x:
                      Math.random() *
                      (typeof window !== "undefined"
                        ? window.innerWidth
                        : 1200),
                    y:
                      Math.random() *
                      (typeof window !== "undefined"
                        ? window.innerHeight
                        : 800),
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

            {/* Main content container - using flexbox centering from parent */}
            <motion.div
              className="flex flex-col items-center justify-center text-center px-4 relative z-10"
              variants={fadeInUpVariants}
            >
              <motion.div
                className="flex flex-col items-center gap-2 max-w-4xl mx-auto"
                variants={containerVariants}
              >
                <motion.h1
                  ref={countRef}
                  className="[font-family:'Inter',Helvetica] font-bold text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0] leading-tight text-center"
                  variants={scaleInVariants}
                  whileHover={{
                    scale: 1.05,
                    textShadow: "0 0 20px rgba(255,255,255,0.5)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <SmoothCounter
                    value={targetCount}
                    className="[font-family:'Inter',Helvetica] font-bold text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0] leading-tight"
                  />
                </motion.h1>
                <motion.p
                  className="[font-family:'Inter',Helvetica] font-normal text-neutral-1 text-lg sm:text-xl md:text-2xl lg:text-[26px] tracking-[0] leading-relaxed text-center"
                  variants={fadeInUpVariants}
                >
                  Healthcare vacancies by 2030
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Enhanced Scroll Indicator */}
            <motion.div
              className="absolute inset-x-0 bottom-8 mx-auto w-max cursor-pointer"
              variants={fadeInUpVariants}
              onClick={handleScrollIndicatorClick}
            >
              <motion.div
                className="flex flex-col items-center gap-4 group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Scroll Text with Background */}
                <motion.div
                  className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
                  whileHover={{
                    bg: "rgba(255, 255, 255, 0.15)",
                    borderColor: "rgba(255, 255, 255, 0.3)",
                    boxShadow: "0 8px 32px rgba(255, 255, 255, 0.2)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.p
                    className="[font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0.5px] uppercase"
                    whileHover={{ color: "#ffffff" }}
                  >
                    Scroll to explore
                  </motion.p>
                </motion.div>

                {/* Modern Scroll Icon Container */}
                <motion.div
                  className="relative"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Scroll Mouse Icon */}
                  <motion.div
                    className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center relative group-hover:border-white/60"
                    whileHover={{
                      borderColor: "rgba(255, 255, 255, 0.8)",
                      boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Mouse Wheel Dot */}
                    <motion.div
                      className="w-1 h-2 bg-white/60 rounded-full mt-2 group-hover:bg-white/80"
                      animate={{
                        y: [0, 8, 0],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>

                  {/* Floating Arrow */}
                  <motion.div
                    className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
                    animate={{
                      y: [0, 4, 0],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  >
                    <svg
                      className="w-4 h-4 text-white/60 group-hover:text-white/80"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </motion.div>
                </motion.div>

                {/* Glowing Dots */}
                <motion.div
                  className="flex gap-1 mt-2"
                  variants={containerVariants}
                >
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-1 bg-white/40 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Story Section */}
          <motion.section
            ref={storyRef}
            className="flex flex-col items-center gap-[72px] py-[120px] px-4 sm:px-6 md:px-8 lg:px-[150px] xl:px-[295px] flex-[0_0_auto] relative self-stretch w-full max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div
              className="flex flex-col items-center gap-8 relative flex-[0_0_auto]"
              variants={fadeInUpVariants}
            >
              <motion.header
                className="flex flex-col items-center gap-8 relative flex-[0_0_auto]"
                variants={fadeInUpVariants}
              >
                <motion.p
                  className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-6 text-sm text-center tracking-[0.56px] leading-[normal]"
                  variants={slideInVariants}
                >
                  How it all started
                </motion.p>

                <motion.h2
                  className="relative w-[622px] [font-family:'Inter',Helvetica] font-medium text-[#060b13] text-[44.2px] text-center tracking-[-1.25px] leading-[57.6px]"
                  variants={fadeInUpVariants}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                >
                  {(() => {
                    const text = "Our Original Story";
                    const words = text.split(" ");
                    return (
                      <span className="font-medium">
                        {words.map((word, index) => (
                          <motion.span
                            key={index}
                            className="inline-block mr-1"
                            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                            whileInView={{
                              opacity: 1,
                              y: 0,
                              filter: "blur(0px)",
                            }}
                            transition={{
                              duration: 0.5,
                              delay: index * 0.1,
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
                        ))}
                      </span>
                    );
                  })()}
                </motion.h2>
              </motion.header>

              <motion.div
                className="inline-flex flex-col items-center gap-28 relative flex-[0_0_auto]"
                variants={containerVariants}
              >
                <motion.div
                  ref={lineRef}
                  className="relative overflow-hidden"
                  style={{
                    height: lineHeight,
                  }}
                  whileHover={{
                    height: 220,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Separator
                    orientation="vertical"
                    className="w-0.5 h-[200px] bg-gradient-to-b from-gray-400 to-gray-600"
                  />
                </motion.div>

                <motion.div
                  className="inline-flex flex-col items-center justify-center gap-4 relative flex-[0_0_auto]"
                  variants={fadeInUpVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.p
                    className="relative w-[850px] [font-family:'Inter',Helvetica] font-normal text-[#060b13] text-[32px] text-center tracking-[0] leading-[43px]"
                    variants={fadeInUpVariants}
                  >
                    <motion.span
                      className="font-medium underline inline-flex items-center gap-2 cursor-pointer"
                      whileHover={{ color: "#1890FF", scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => window.open('https://www.linkedin.com/in/rthakar07/', '_blank')}
                    >
                      <motion.div
                        className="w-8 h-8 rounded-full border-2 border-white shadow-lg overflow-hidden"
                        initial={{ scale: 0, rotate: 0 }}
                        animate={{ scale: 1, rotate: 360 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.5,
                          type: "spring",
                          stiffness: 200,
                          damping: 10,
                        }}
                        whileHover={{
                          rotate: 720,
                          scale: 1.2,
                          boxShadow: "0 8px 25px rgba(24, 144, 255, 0.4)",
                          transition: { duration: 0.4 },
                        }}
                      >
                        <img
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                          alt="Rahul profile"
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      Rahul
                    </motion.span>
                    <span className="font-medium"> and </span>
                    <motion.span
                      className="font-medium underline inline-flex items-center gap-2 cursor-pointer"
                      whileHover={{ color: "#1890FF", scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => window.open('https://www.linkedin.com/in/rachitelhance/', '_blank')}
                    >
                      <motion.div
                        className="w-8 h-8 rounded-full border-2 border-white shadow-lg overflow-hidden"
                        initial={{ scale: 0, rotate: 0 }}
                        animate={{ scale: 1, rotate: -360 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.7,
                          type: "spring",
                          stiffness: 200,
                          damping: 10,
                        }}
                        whileHover={{
                          rotate: -720,
                          scale: 1.2,
                          boxShadow: "0 8px 25px rgba(15, 115, 255, 0.4)",
                          transition: { duration: 0.4 },
                        }}
                      >
                        <img
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                          alt="Rachit profile"
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      Rachit
                    </motion.span>
{(() => {
                      const text = "have known each other since First Day of the college. Over chai, calls, and long walks, we kept circling one shared thought—what would it look like to build something meaningful of our own? We explored a bunch of directions. But nothing felt real... until one conversation flipped everything.";
                      const words = text.split(" ");
                      return (
                        <span className="font-medium">
                          {" "}
                          {words.map((word, index) => (
                            <motion.span
                              key={index}
                              className="inline-block mr-1"
                              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                              whileInView={{
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)",
                              }}
                              transition={{
                                duration: 0.5,
                                delay: index * 0.08,
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
                          ))}
                        </span>
                      );
                    })()}
                  </motion.p>
                </motion.div>

                <motion.div
                  ref={thirdLineRef}
                  className="relative overflow-hidden"
                  style={{
                    height: thirdLineHeight,
                  }}
                  whileHover={{
                    height: 220,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Separator
                    orientation="vertical"
                    className="w-0.5 h-[200px] bg-gradient-to-b from-gray-400 to-gray-600"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Benefits Overview Section */}
          <motion.section
            className="h-[875px] relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px] xl:px-[295px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.header
              className="absolute h-[43px] -top-px left-1/8 transform -translate-x-1/2 [font-family:'Inter',Helvetica] font-normal text-[#060b13] text-lg sm:text-xl md:text-2xl lg:text-[32px] text-center tracking-[0] leading-[43px] whitespace-nowrap"
              variants={fadeInUpVariants}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              {(() => {
                const text = "One fine day";
                const words = text.split(" ");
                return (
                  <span className="font-medium">
                    {words.map((word, index) => (
                      <motion.span
                        key={index}
                        className="inline-block mr-1"
                        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          filter: "blur(0px)",
                        }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
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
                    ))}
                    {" "}
                  </span>
                );
              })()}
              <motion.span
                className="font-medium underline inline-flex items-center gap-2 cursor-pointer"
                whileHover={{ color: "#1890FF", scale: 1.05 }}
                transition={{ duration: 0.2 }}
                onClick={() => window.open('https://www.linkedin.com/in/rachitelhance/', '_blank')}
              >
                <motion.div
                  className="w-7 h-7 rounded-full border-2 border-white shadow-md overflow-hidden"
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  transition={{
                    duration: 0.6,
                    delay: 1,
                    type: "spring",
                    stiffness: 150,
                    damping: 12,
                  }}
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                    boxShadow: "0 6px 20px rgba(24, 144, 255, 0.3)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                    alt="Rachit profile"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                Rachit
              </motion.span>
{(() => {
                const text = "was talking to his relative.";
                const words = text.split(" ");
                return (
                  <span className="font-medium">
                    {" "}
                    {words.map((word, index) => (
                      <motion.span
                        key={index}
                        className="inline-block mr-1"
                        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          filter: "blur(0px)",
                        }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
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
                    ))}
                  </span>
                );
              })()}
            </motion.header>

            <motion.div
              className="absolute w-full max-w-[994px] h-[486px] top-[101px] left-1/2 transform -translate-x-1/2"
              variants={containerVariants}
            >
              {conversationData.map((bubble, index) => (
                <motion.div
                  key={index}
                  className={`inline-flex items-center gap-2 px-8 py-[22px] ml-[80px] absolute ${bubble.position} ${bubble.borderRadius} ${bubble.rotation} bg-[linear-gradient(180deg,rgba(15,115,255,1)_0%,rgba(24,144,255,1)_100%)] cursor-pointer`}
                  initial={{
                    opacity: 0,
                    scale: 0.3,
                    x: bubble.side === "left" ? -100 : 100,
                    y: 50,
                    rotate: bubble.rotation.includes("-") ? -20 : 20,
                    filter: "blur(12px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    y: 0,
                    rotate: bubble.rotation.includes("-") ? -1 : 1,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.9,
                      delay: index * 1.2, // Longer delay between messages
                      ease: [0.175, 0.885, 0.32, 1.275],
                      type: "spring",
                      stiffness: 120,
                      damping: 15,
                    },
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  whileHover={{
                    scale: 1.08,
                    y: -5,
                    rotate: bubble.rotation.includes("-") ? -3 : 3,
                    boxShadow: "0 20px 40px rgba(24, 144, 255, 0.5)",
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                      duration: 0.3,
                    },
                  }}
                  whileTap={{ scale: 0.92 }}
                  animate={{
                    boxShadow: [
                      "0 4px 15px rgba(24, 144, 255, 0.2)",
                      "0 8px 25px rgba(24, 144, 255, 0.4)",
                      "0 4px 15px rgba(24, 144, 255, 0.2)",
                    ],
                    rotate: [
                      bubble.rotation.includes("-") ? -1 : 1,
                      bubble.rotation.includes("-") ? -2 : 2,
                      bubble.rotation.includes("-") ? -1 : 1,
                    ],
                  }}
                  transition={{
                    boxShadow: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 1.5,
                    },
                    rotate: {
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 1.2,
                    },
                  }}
                >
                  <motion.div
                    className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-white text-[32px] tracking-[0] leading-[50px] whitespace-nowrap"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 1.2 + 0.6, // Text appears after bubble animation
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    viewport={{ once: false }}
                  >
                    {bubble.text}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Content Wrapper Section - Updated with animations */}
          <motion.section
            className="flex flex-col items-center justify-center pt-0 pb-[200px] px-4 sm:px-6 md:px-8 lg:px-[150px] xl:px-[295px] flex-[0_0_auto] relative self-stretch w-full max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div
              className="inline-flex flex-col items-center gap-[72px] relative flex-[0_0_auto]"
              variants={fadeInUpVariants}
            >
              <motion.div
                className="relative w-44 h-[88px]"
                variants={scaleInVariants}
              />
            </motion.div>

            <motion.div
              className="inline-flex flex-col items-center justify-center gap-[180px] relative flex-[0_0_auto] ml-[-49.99px] mr-[-49.99px] mt-[-125px]"
              variants={containerVariants}
            >
              <motion.div
                className="inline-flex flex-col items-center justify-center gap-[72px] relative flex-[0_0_auto]"
                variants={fadeInUpVariants}
              >
                <motion.div
                  ref={secondLineRef}
                  className="relative overflow-hidden"
                  style={{
                    height: secondLineHeight,
                  }}
                  whileHover={{
                    height: 220,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="w-0.5 h-[200px] bg-gradient-to-b from-gray-400 to-gray-600" />
                </motion.div>

                <motion.div
                  className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-transparent text-[32px] text-center tracking-[0] leading-[43px] whitespace-nowrap"
                  variants={fadeInUpVariants}
                >
                  {(() => {
                    const text = "What";
                    const words = text.split(" ");
                    return (
                      <span className="font-medium text-[#060b13]">
                        {words.map((word, index) => (
                          <motion.span
                            key={index}
                            className="inline-block mr-1"
                            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                            whileInView={{
                              opacity: 1,
                              y: 0,
                              filter: "blur(0px)",
                            }}
                            transition={{
                              duration: 0.5,
                              delay: index * 0.1,
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
                        ))}
                        {" "}
                      </span>
                    );
                  })()}
                  <motion.span
                    className="font-medium text-[#060b13] underline inline-flex items-center gap-2 cursor-pointer"
                    whileHover={{ color: "#1890FF" }}
                    onClick={() => window.open('https://www.linkedin.com/in/rachitelhance/', '_blank')}
                  >
                    <motion.div
                      className="w-7 h-7 rounded-full border-2 border-white shadow-md overflow-hidden"
                      initial={{ scale: 0, rotate: 0 }}
                      animate={{ scale: 1, rotate: -360 }}
                      transition={{
                        duration: 0.6,
                        delay: 1.2,
                        type: "spring",
                        stiffness: 150,
                        damping: 12,
                      }}
                      whileHover={{
                        rotate: -360,
                        scale: 1.1,
                        boxShadow: "0 6px 20px rgba(15, 115, 255, 0.3)",
                        transition: { duration: 0.3 },
                      }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                        alt="Rachit profile"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    Rachit
                  </motion.span>
                  {(() => {
                    const text = "&";
                    const words = text.split(" ");
                    return (
                      <span className="font-medium text-[#060b13]">
                        {" "}
                        {words.map((word, index) => (
                          <motion.span
                            key={index}
                            className="inline-block mr-1"
                            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                            whileInView={{
                              opacity: 1,
                              y: 0,
                              filter: "blur(0px)",
                            }}
                            transition={{
                              duration: 0.5,
                              delay: index * 0.1 + 0.3,
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
                        ))}
                        {" "}
                      </span>
                    );
                  })()}
                  <motion.span
                    className="font-medium text-[#060b13] underline inline-flex items-center gap-2 cursor-pointer"
                    whileHover={{ color: "#1890FF" }}
                    onClick={() => window.open('https://www.linkedin.com/in/rthakar07/', '_blank')}
                  >
                    <motion.div
                      className="w-7 h-7 rounded-full border-2 border-white shadow-md overflow-hidden"
                      initial={{ scale: 0, rotate: 0 }}
                      animate={{ scale: 1, rotate: 360 }}
                      transition={{
                        duration: 0.6,
                        delay: 1.4,
                        type: "spring",
                        stiffness: 150,
                        damping: 12,
                      }}
                      whileHover={{
                        rotate: 720,
                        scale: 1.1,
                        boxShadow: "0 6px 20px rgba(24, 144, 255, 0.3)",
                        transition: { duration: 0.3 },
                      }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                        alt="Rahul profile"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    Rahul
                  </motion.span>
                  {(() => {
                    const text = "Found out next was shocking";
                    const words = text.split(" ");
                    return (
                      <span className="font-medium text-[#060b13]">
                        {" "}
                        {words.map((word, index) => (
                          <motion.span
                            key={index}
                            className="inline-block mr-1"
                            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                            whileInView={{
                              opacity: 1,
                              y: 0,
                              filter: "blur(0px)",
                            }}
                            transition={{
                              duration: 0.5,
                              delay: index * 0.1 + 0.6,
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
                        ))}
                      </span>
                    );
                  })()}
                </motion.div>
              </motion.div>

              <motion.div
                className="inline-flex flex-col items-center justify-center gap-[104px] relative flex-[0_0_auto]"
                variants={containerVariants}
              >
                {statisticsData.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUpVariants}
                    className="group cursor-pointer"
                    whileHover={{
                      scale: 1.02,
                      y: -6,
                      transition: {
                        type: "spring",
                        stiffness: 260,
                        damping: 18,
                      },
                    }}
                    animate={{
                      boxShadow: [
                        "0 4px 20px rgba(24, 144, 255, 0.1)",
                        "0 8px 30px rgba(24, 144, 255, 0.2)",
                        "0 4px 20px rgba(24, 144, 255, 0.1)",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.8,
                    }}
                  >
                    <motion.div
                      className="bg-primary-1 opacity-70 rounded-[16px] px-12 py-14 border-none shadow-none relative overflow-hidden"
                      whileHover={{
                        background: "linear-gradient(180deg,rgba(15,115,255,1) 0%,rgba(24,144,255,1) 100%)",
                        opacity: 1,
                        borderRadius: "18px",
                        paddingLeft: "54px",
                        paddingRight: "54px", 
                        paddingTop: "64px",
                        paddingBottom: "64px",
                        boxShadow: "0 25px 50px rgba(24, 144, 255, 0.4)",
                        transition: {
                          duration: 0.3,
                          ease: "easeOut"
                        }
                      }}
                    >
                      <div className="flex flex-col items-start gap-10 group-hover:gap-[46px] transition-all duration-300">
                        <motion.div
                          className="relative w-fit [font-family:'Inter',Helvetica] font-bold text-center tracking-[0] whitespace-nowrap text-daybreak-blue6 text-[64px] leading-[64px] group-hover:text-neutral-1 group-hover:text-[72px] group-hover:leading-[72px] transition-all duration-300"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          viewport={{ once: false }}
                        >
                          {stat.percentage}
                        </motion.div>

                        <div className="inline-flex flex-col items-start justify-center gap-4 relative flex-[0_0_auto]">
                          <motion.div
                            className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap text-neutral-10 text-[24px] leading-[32px] group-hover:text-neutral-1 group-hover:text-[26px] group-hover:leading-[36px] transition-all duration-300"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: false }}
                          >
                            {stat.title}
                          </motion.div>

                          <motion.div
                            className="relative [font-family:'Inter',Helvetica] font-normal tracking-[0] text-neutral-10 text-lg leading-[32px] w-[540px] group-hover:text-neutral-1 group-hover:text-[20px] group-hover:leading-[36px] group-hover:w-[600px] transition-all duration-300"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: false }}
                          >
                            {stat.description}
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="inline-flex flex-col items-center gap-[72px] relative flex-[0_0_auto]"
                variants={fadeInUpVariants}
              >
                <motion.div
                  className="inline-flex flex-col items中心 justify-center gap-4 relative flex-[0_0_auto]"
                  variants={containerVariants}
                >
                  <motion.p
                    className="relative w-[850px] [font-family:'Inter',Helvetica] font-normal text-[#060b13] text-[32px] text-center tracking-[0] leading-[43px]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                    }}
                    viewport={{ once: false }}
                  >
                    {(() => {
                      const text = "That's why Mesdo started. Because healthcare professionals shouldn't have to rely on luck, contacts, or WhatsApp forwards to find the right job. We're here to change that — one step at a time";
                      const words = text.split(" ");
                      return (
                        <span className="font-medium">
                          {words.map((word, index) => (
                            <motion.span
                              key={index}
                              className="inline-block mr-1"
                              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                              whileInView={{
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)",
                              }}
                              transition={{
                                duration: 0.5,
                                delay: index * 0.08,
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
                          ))}
                        </span>
                      );
                    })()}
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Main Content Section - Meet Our Team */}
          <motion.section
            className="min-h-[894px] bg-[linear-gradient(180deg,rgba(15,115,255,1)_0%,rgba(24,144,255,1)_100%)] relative w-full overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
          >
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-white/10 rounded-full"
                  initial={{
                    x:
                      Math.random() *
                      (typeof window !== "undefined"
                        ? window.innerWidth
                        : 1200),
                    y:
                      Math.random() *
                      (typeof window !== "undefined"
                        ? window.innerHeight
                        : 800),
                    opacity: 0,
                  }}
                  animate={{
                    y: [null, -50],
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{
                    duration: Math.random() * 4 + 3,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                  }}
                />
              ))}
            </div>

            <motion.div
              className="container mx-auto px-6 lg:px-[150px] pt-[118px] relative z-10"
              variants={containerVariants}
            >
              <motion.div
                className="flex flex-col items-start gap-5 mb-[169px]"
                variants={fadeInUpVariants}
              >
                <motion.div
                  className="flex flex-col items-start"
                  variants={slideInVariants}
                >
                  <motion.div
                    className="[font-family:'Inter',Helvetica] font-medium text-primary-1 text-sm tracking-[-0.18px] leading-6 whitespace-nowrap mb-2"
                    whileHover={{ scale: 1.05, color: "#ffffff" }}
                    transition={{ duration: 0.2 }}
                  >
                    Reach The Top
                  </motion.div>

                  <motion.h1
                    className="max-w-[588px] [font-family:'Inter',Helvetica] font-medium text-white text-[44.2px] tracking-[-1.25px] leading-[57.6px]"
                    variants={fadeInUpVariants}
                    whileHover={{
                      scale: 1.02,
                      textShadow: "0 0 20px rgba(255,255,255,0.3)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Meet Our Team
                  </motion.h1>
                </motion.div>

                <motion.p
                  className="max-w-[1043px] [font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[-0.24px] leading-[35px]"
                  variants={fadeInUpVariants}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  From stagnant applications to verified recognition and
                  stronger peer networks — here&apos;s what your journey looks
                  like with Mesdo by your side.
                </motion.p>
              </motion.div>

              {/* Team Grid - 4 Cards with Arrows */}
              <div className="relative w-full px-0 pb-[120px] mt-[-100px]">
                {/* Navigation Arrows */}
                <motion.button
                  className="hidden xl:flex ml-[-100px] absolute -left-4 top-1/4 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full items-center justify-center hover:bg-white/30 transition-all duration-300"
                  onClick={prevSlide}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeftIcon className="w-6 h-6 text-white" />
                </motion.button>

                <motion.button
                  className="hidden xl:flex mr-[-100px] absolute -right-4 top-1/4 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full items-center justify-center hover:bg-white/30 transition-all duration-300"
                  onClick={nextSlide}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRightIcon className="w-6 h-6 text-white" />
                </motion.button>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                >
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={member.name}
                      variants={fadeInUpVariants}
                      whileHover={{
                        y: -6,
                        scale: 1.02,
                        boxShadow: "0 15px 35px rgba(255, 255, 255, 0.3)",
                      }}
                      transition={{
                        hover: {
                          type: "spring",
                          stiffness: 280,
                          damping: 20,
                        },
                        initial: {
                          delay: index * 0.1,
                          duration: 0.6,
                          ease: "easeOut",
                        },
                      }}
                    >
                      <Card className="w-full bg-transparent border-none shadow-none">
                        <CardContent className="p-0 flex flex-col items-start gap-6">
                          <motion.div
                            className="w-full h-[350px] rounded-[12px] bg-white/10 backdrop-blur-[1px]"
                            whileHover={{
                              scale: 1.05,
                              boxShadow: "0 25px 50px rgba(255,255,255,0.25)",
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 20,
                            }}
                          />
                          <div className="flex flex-col items-start gap-2">
                            <h3 className="[font-family:'Inter',Helvetica] font-medium text-white text-2xl tracking-[0] leading-6">
                              {member.name}
                            </h3>
                            <p className="[font-family:'Inter',Helvetica] font-medium text-primary-1 text-sm tracking-[-0.18px] leading-6">
                              {member.role}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.section>

          {/* Additional Features Section - Using Homepage Component */}
          <AdditionalFeaturesSection />

          {/* Why Choose Mesdo Section - Using Homepage Component */}
          <WhyChooseMesdoSection />

          {/* Community Section - Using Homepage Component */}
          <CommunitySection />

          {/* Features Section - Using Homepage Component */}
          <FeaturesSection />

          {/* Features Wrapper Section - Using Homepage Component */}
          <FeaturesWrapperSection />

          {/* Contact Section - Using Homepage Component */}
          <ContactSection />

          {/* Footer Section - Using Homepage Component */}
          <FooterSection />
        </motion.div>
      </div>
    </div>
  );
};
