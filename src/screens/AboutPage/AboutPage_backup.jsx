import React, { useState, useRef } from "react";
import {
  motion,
} from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Separator } from "../../components/ui/separator";
import { Card, CardContent } from "../../components/ui/card";
import { CommunitySection } from "../LandingPage/sections/CommunitySection/CommunitySection";
import { ContactSection } from "../LandingPage/sections/ContactSection/ContactSection";
import { FooterSection } from "../LandingPage/sections/FooterSection/FooterSection";

export const AboutPage = () => {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const conversationRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);




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
    hidden: {
      opacity: 0,
      y: 60,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const scaleInVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateX: 15,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const slideInVariants = {
    hidden: {
      opacity: 0,
      x: -30,
      filter: "blur(2px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: "easeOut",
        type: "spring",
        stiffness: 140,
        damping: 20,
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
      isHighlighted: false,
      cardClasses: "bg-primary-1 opacity-70 rounded-[20px] px-16 py-20",
      percentageClasses: "text-daybreak-blue6 text-[88px] leading-[88px]",
      titleClasses: "text-neutral-10 text-[32px] leading-[43px]",
      descriptionClasses: "text-neutral-10 text-2xl leading-[43px] w-[720px]",
      gap: "gap-14",
    },
    {
      percentage: "70%",
      title: "Disconnected and Outdated",
      description:
        "offline, merit-based hiring suffers, leaving many qualified professionals overlooked.",
      isHighlighted: true,
      cardClasses:
        "rounded-[22.41px] bg-[linear-gradient(180deg,rgba(15,115,255,1)_0%,rgba(24,144,255,1)_100%)] px-[71.7px] py-[89.62px]",
      percentageClasses: "text-neutral-1 text-[98.6px] leading-[98.6px]",
      titleClasses: "text-neutral-1 text-[35.8px] leading-[48.2px]",
      descriptionClasses:
        "text-neutral-1 text-[26.9px] leading-[48.2px] w-[806.59px]",
      gap: "gap-[62.73px]",
    },
    {
      percentage: "70%",
      title: "Disconnected and Outdated",
      description:
        "offline, merit-based hiring suffers, leaving many qualified professionals overlooked.",
      isHighlighted: false,
      cardClasses: "bg-primary-1 opacity-70 rounded-[20px] px-16 py-20",
      percentageClasses: "text-daybreak-blue6 text-[88px] leading-[88px]",
      titleClasses: "text-neutral-10 text-[32px] leading-[43px]",
      descriptionClasses: "text-neutral-10 text-2xl leading-[43px] w-[720px]",
      gap: "gap-14",
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
            ref={heroRef}
            className="relative w-full h-[889px] bg-[linear-gradient(180deg,rgba(0,0,1,1)_0%,rgba(6,18,58,1)_5%,rgba(11,32,105,1)_10%,rgba(16,45,149,1)_15%,rgba(19,61,191,1)_20%,rgba(14,86,212,1)_25%,rgba(8,110,232,1)_30%,rgba(6,141,255,1)_37%,rgba(21,160,255,1)_44%,rgba(35,179,255,1)_51%,rgba(65,207,255,1)_58%,rgba(100,216,255,1)_66%,rgba(166,232,255,1)_76%,rgba(214,245,255,1)_84%,rgba(250,254,255,1)_95%,rgba(255,255,255,1)_100%)] overflow-hidden flex items-center justify-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Enhanced animated background particles with parallax */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
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
                    scale: [1, 1.2, 1],
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
                  className="[font-family:'Inter',Helvetica] font-bold text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0] leading-tight text-center"
                  variants={scaleInVariants}
                  whileHover={{
                    scale: 1.05,
                    textShadow: "0 0 20px rgba(255,255,255,0.5)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  6,50,00,000+
                </motion.h1>
                <motion.p
                  className="[font-family:'Inter',Helvetica] font-normal text-neutral-1 text-lg sm:text-xl md:text-2xl lg:text-[26px] tracking-[0] leading-relaxed text-center"
                  variants={fadeInUpVariants}
                  whileHover={{
                    scale: 1.02,
                    color: "rgba(255,255,255,0.9)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Healthcare vacancies by 2030
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.button
              type="button"
              aria-label="Scroll to content"
              onClick={handleScrollIndicatorClick}
              className="flex flex-col items-center justify-center absolute inset-x-0 bottom-10 mx-auto w-max cursor-pointer min-h-[44px] min-w-[44px]"
              variants={fadeInUpVariants}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.1,
                y: -5,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <motion.p
                className="[font-family:'Inter',Helvetica] font-normal text-primary-6 text-xl tracking-[0] leading-[30px] whitespace-nowrap mb-2"
                variants={fadeInUpVariants}
              >
                Scroll
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(24, 144, 255, 0.3)",
                    "0 0 0 8px rgba(24, 144, 255, 0)",
                    "0 0 0 0 rgba(24, 144, 255, 0.3)",
                  ],
                }}
              >
                <svg
                  className="w-6 h-8 text-primary-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="m7 13 3 3 3-3m-3-4v7m6-8V5a2 2 0 00-2-2H8a2 2 0 00-2 2v6"></path>
                </svg>
              </motion.div>
            </motion.button>
          </motion.section>

          {/* Story Section */}
          <motion.section
            ref={storyRef}
            className="flex flex-col items-center gap-[72px] py-[120px] px-4 sm:px-6 md:px-8 lg:px-[150px] xl:px-[295px] flex-[0_0_auto] relative self-stretch w-full max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
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
                  Our Original Story
                </motion.h2>
              </motion.header>

              <motion.div
                className="inline-flex flex-col items-center gap-28 relative flex-[0_0_auto]"
                variants={containerVariants}
              >
                <motion.div
                  variants={scaleInVariants}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                  animate={{
                    boxShadow: [
                      "0 4px 15px rgba(0,0,0,0.1)",
                      "0 8px 25px rgba(0,0,0,0.15)",
                      "0 4px 15px rgba(0,0,0,0.1)",
                    ],
                  }}
                >
                  <Separator
                    orientation="vertical"
                    className="w-0.5 h-[118px] bg-current"
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
                    whileHover={{ y: -2, scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span
                      className="font-medium underline"
                      whileHover={{ 
                        color: "#1890FF", 
                        scale: 1.05,
                        textShadow: "0 0 8px rgba(24, 144, 255, 0.3)"
                      }}
                      transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                    >
                      Rahul
                    </motion.span>
                    <span className="font-medium"> and </span>
                    <motion.span
                      className="font-medium underline"
                      whileHover={{ 
                        color: "#1890FF", 
                        scale: 1.05,
                        textShadow: "0 0 8px rgba(24, 144, 255, 0.3)"
                      }}
                      transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                    >
                      Rachit
                    </motion.span>
                    <span className="font-medium">
                      {" "}
                      have known each other since First Day of the college. Over
                      chai, calls, and long walks, we kept circling one shared
                      thought—what would it look like to build something
                      meaningful of our own?"
                      <br />
                      "We explored a bunch of directions. But nothing felt
                      real... until one conversation flipped everything.
                    </span>
                  </motion.p>
                </motion.div>

                <motion.div
                  variants={scaleInVariants}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                  animate={{
                    boxShadow: [
                      "0 4px 15px rgba(0,0,0,0.1)",
                      "0 8px 25px rgba(0,0,0,0.15)",
                      "0 4px 15px rgba(0,0,0,0.1)",
                    ],
                  }}
                >
                  <Separator
                    orientation="vertical"
                    className="w-0.5 h-[118px] bg-current"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Benefits Overview Section */}
          <motion.section
            ref={conversationRef}
            className="h-[875px] relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px] xl:px-[295px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.header
              className="absolute h-[43px] -top-px left-1/8 transform -translate-x-1/2 [font-family:'Inter',Helvetica] font-normal text-[#060b13] text-lg sm:text-xl md:text-2xl lg:text-[32px] text-center tracking-[0] leading-[43px] whitespace-nowrap"
              variants={fadeInUpVariants}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="font-medium">One fine day </span>
              <motion.span
                className="font-medium underline"
                whileHover={{ 
                  color: "#1890FF", 
                  scale: 1.05,
                  textShadow: "0 0 8px rgba(24, 144, 255, 0.3)"
                }}
                transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
              >
                Rachit
              </motion.span>
              <span className="font-medium"> was talking to his relative.</span>
            </motion.header>

            <motion.div
              className="absolute w-full max-w-[994px] h-[486px] top-[101px] left-1/8 ml-[-140px] transform -translate-x-1/2"
              variants={containerVariants}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {conversationData.map((bubble, index) => (
                <motion.div
                  key={index}
                  className={`inline-flex items-center gap-2 px-8 py-[22px] absolute ${bubble.position} ${bubble.borderRadius} ${bubble.rotation} bg-[linear-gradient(180deg,rgba(15,115,255,1)_0%,rgba(24,144,255,1)_100%)] cursor-pointer min-h-[44px] min-w-[44px]`}
                  variants={{
                    hidden: {
                      opacity: 0,
                      scale: 0.6,
                      rotate: bubble.rotation.includes("-") ? -25 : 25,
                      filter: "blur(8px)",
                      y: 30,
                    },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      rotate: bubble.rotation.includes("-") ? -1 : 1,
                      filter: "blur(0px)",
                      y: 0,
                      transition: {
                        duration: 0.8,
                        delay: index * 0.3,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 140,
                        damping: 20,
                      },
                    },
                  }}
                  whileHover={{
                    scale: 1.08,
                    y: -6,
                    rotateY: 5,
                    boxShadow: "0 20px 40px rgba(24, 144, 255, 0.5)",
                    transition: {
                      type: "spring",
                      stiffness: 280,
                      damping: 15,
                      duration: 0.3,
                    },
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 6px 20px rgba(24, 144, 255, 0.2)",
                      "0 10px 30px rgba(24, 144, 255, 0.4)",
                      "0 6px 20px rgba(24, 144, 255, 0.2)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.8,
                  }}
                  style={{
                    perspective: "1000px",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <motion.div
                    className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-white text-[32px] tracking-[0] leading-[50px] whitespace-nowrap"
                    initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ 
                      delay: index * 0.3 + 0.4, 
                      duration: 0.6,
                      type: "spring",
                      stiffness: 150,
                      damping: 25
                    }}
                    whileHover={{
                      scale: 1.02,
                      textShadow: "0 0 12px rgba(255,255,255,0.4)",
                    }}
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
            viewport={{ once: true, amount: 0.2 }}
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
                  className="relative w-0.5 h-[118px] bg-gradient-to-b from-gray-300 to-gray-500"
                  variants={scaleInVariants}
                />

                <motion.div
                  className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-transparent text-[32px] text-center tracking-[0] leading-[43px] whitespace-nowrap"
                  variants={fadeInUpVariants}
                >
                  <span className="font-medium text-[#060b13]">What </span>
                  <motion.span
                    className="font-medium text-[#060b13] underline"
                    whileHover={{ 
                      color: "#1890FF",
                      textShadow: "0 0 8px rgba(24, 144, 255, 0.3)",
                      scale: 1.05
                    }}
                    transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                  >
                    Rachit
                  </motion.span>
                  <span className="font-medium text-[#060b13]"> & </span>
                  <motion.span
                    className="font-medium text-[#060b13] underline"
                    whileHover={{ 
                      color: "#1890FF",
                      textShadow: "0 0 8px rgba(24, 144, 255, 0.3)",
                      scale: 1.05
                    }}
                    transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                  >
                    Rahul
                  </motion.span>
                  <span className="font-medium text-[#060b13]">
                    {" "}
                    Found out next was shocking
                  </span>
                </motion.div>
              </motion.div>

              <motion.div
                className="inline-flex flex-col items-center justify-center gap-[104px] relative flex-[0_0_auto]"
                variants={containerVariants}
              >
                {statisticsData.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 80,
                        scale: 0.8,
                        rotateX: 20,
                        filter: "blur(8px)",
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotateX: 0,
                        filter: "blur(0px)",
                        transition: {
                          duration: 1.2,
                          delay: index * 0.3,
                          ease: "easeOut",
                          type: "spring",
                          stiffness: 100,
                          damping: 15,
                        },
                      },
                    }}
                    whileHover={{
                      scale: 1.03,
                      y: -8,
                      rotateY: 2,
                      boxShadow: "0 25px 50px rgba(24, 144, 255, 0.4)",
                      transition: {
                        type: "spring",
                        stiffness: 280,
                        damping: 15,
                      },
                    }}
                    animate={{
                      boxShadow: [
                        "0 8px 25px rgba(24, 144, 255, 0.1)",
                        "0 12px 35px rgba(24, 144, 255, 0.2)",
                        "0 8px 25px rgba(24, 144, 255, 0.1)",
                      ],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 1.2,
                    }}
                    style={{
                      perspective: "1000px",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <Card
                      className={`inline-flex flex-col items-start ${stat.gap} relative flex-[0_0_auto] ${stat.cardClasses} border-none shadow-none`}
                    >
                      <CardContent className="p-0 flex flex-col items-start gap-4">
                        <motion.div
                          className={`relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-center tracking-[0] whitespace-nowrap ${
                            stat.percentageClasses
                          } ${stat.isHighlighted ? "mt-[-1.12px]" : ""}`}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          {stat.percentage}
                        </motion.div>

                        <div className="inline-flex flex-col items-start justify-center gap-4 relative flex-[0_0_auto]">
                          <motion.div
                            className={`relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap ${
                              stat.titleClasses
                            } ${stat.isHighlighted ? "mt-[-1.12px]" : ""}`}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                          >
                            {stat.title}
                          </motion.div>

                          <motion.div
                            className={`relative [font-family:'Inter',Helvetica] font-normal tracking-[0] ${stat.descriptionClasses}`}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                          >
                            {stat.description}
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="inline-flex flex-col items-center gap-[72px] relative flex-[0_0_auto]"
                variants={fadeInUpVariants}
              >
                <motion.div
                  className="inline-flex flex-col items-center justify-center gap-4 relative flex-[0_0_auto]"
                  variants={containerVariants}
                >
                  <motion.div
                    className="relative w-[880px] [font-family:'Inter',Helvetica] font-normal text-[#060b13] text-[32px] text-center tracking-[0] leading-[43px]"
                    initial={{ opacity: 0, y: 50, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 1.2,
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 80,
                      damping: 25,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.02,
                      y: -3,
                      textShadow: "0 0 15px rgba(24, 144, 255, 0.2)",
                    }}
                  >
                    <motion.span
                      className="inline-block"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      That&apos;s why Mesdo started
                    </motion.span>
                    <br />
                    <br />
                    <motion.span
                      className="inline-block"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      Because healthcare professionals shouldn&apos;t have to rely
                      on luck, contacts, or WhatsApp forwards to find the right
                      job.
                    </motion.span>
                    <br />
                    <motion.span
                      className="inline-block font-medium"
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.05,
                        color: "#1890FF",
                        textShadow: "0 0 10px rgba(24, 144, 255, 0.3)",
                      }}
                    >
                      We&apos;re here to change that — one step at a time
                    </motion.span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Main Content Section - Meet Our Team */}
          <motion.section
            className="min-h-[894px] bg-[linear-gradient(180deg,rgba(15,115,255,1)_0%,rgba(24,144,255,1)_100%)] relative w-full overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {/* Enhanced animated background particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(12)].map((_, i) => (
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
                    x: [null, Math.random() * 20 - 10],
                    opacity: [0, 0.8, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: Math.random() * 4 + 3,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                    ease: "easeInOut",
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
                    className="[font-family:'Inter',Helvetica] font-medium text-primary-1 text-sm tracking-[-0.18px] leading-6 whitespace-nowrap mb-2 min-h-[44px] min-w-[44px] flex items-center"
                    whileHover={{ 
                      scale: 1.05, 
                      color: "#ffffff",
                      textShadow: "0 0 8px rgba(255,255,255,0.5)"
                    }}
                    transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                  >
                    Reach The Top
                  </motion.div>

                  <motion.h1
                    className="max-w-[588px] [font-family:'Inter',Helvetica] font-medium text-white text-[44.2px] tracking-[-1.25px] leading-[57.6px]"
                    variants={fadeInUpVariants}
                    whileHover={{
                      scale: 1.02,
                      textShadow: "0 0 20px rgba(255,255,255,0.3)",
                      y: -2,
                    }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
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
                  className="hidden xl:flex ml-[-100px] absolute -left-4 top-1/4 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full items-center justify-center hover:bg-white/30 transition-all duration-300 min-h-[44px] min-w-[44px]"
                  onClick={prevSlide}
                  whileHover={{ 
                    scale: 1.15, 
                    boxShadow: "0 10px 25px rgba(255,255,255,0.2)",
                    backgroundColor: "rgba(255,255,255,0.4)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    whileHover={{ x: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronLeftIcon className="w-6 h-6 text-white" />
                  </motion.div>
                </motion.button>

                <motion.button
                  className="hidden xl:flex mr-[-100px] absolute -right-4 top-1/4 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full items-center justify-center hover:bg-white/30 transition-all duration-300 min-h-[44px] min-w-[44px]"
                  onClick={nextSlide}
                  whileHover={{ 
                    scale: 1.15, 
                    boxShadow: "0 10px 25px rgba(255,255,255,0.2)",
                    backgroundColor: "rgba(255,255,255,0.4)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRightIcon className="w-6 h-6 text-white" />
                  </motion.div>
                </motion.button>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
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
                            className="w-full h-[350px] rounded-[12px] bg-white/10 backdrop-blur-[1px] overflow-hidden"
                            whileHover={{
                              scale: 1.05,
                              boxShadow: "0 25px 50px rgba(255,255,255,0.25)",
                              y: -4,
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 20,
                            }}
                            animate={{
                              boxShadow: [
                                "0 10px 30px rgba(255,255,255,0.1)",
                                "0 15px 40px rgba(255,255,255,0.15)",
                                "0 10px 30px rgba(255,255,255,0.1)",
                              ],
                            }}
                          >
                            {/* Placeholder content with animated gradient */}
                            <motion.div
                              className="w-full h-full bg-gradient-to-br from-white/5 to-white/15 flex items-center justify-center"
                              animate={{
                                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            >
                              <motion.div
                                className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm"
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.8 }}
                              >
                                <span className="text-2xl font-bold text-white">
                                  {member.name.split(" ").map((n) => n[0]).join("")}
                                </span>
                              </motion.div>
                            </motion.div>
                          </motion.div>
                          <div className="flex flex-col items-start gap-2">
                            <motion.h3 
                              className="[font-family:'Inter',Helvetica] font-medium text-white text-2xl tracking-[0] leading-6"
                              whileHover={{ 
                                color: "rgba(255,255,255,0.9)",
                                textShadow: "0 0 10px rgba(255,255,255,0.3)",
                                scale: 1.02
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              {member.name}
                            </motion.h3>
                            <motion.p 
                              className="[font-family:'Inter',Helvetica] font-medium text-primary-1 text-sm tracking-[-0.18px] leading-6"
                              whileHover={{ 
                                scale: 1.05,
                                color: "rgba(255,255,255,0.8)"
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              {member.role}
                            </motion.p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.section>

          {/* Community Section - Using Homepage Component */}
          <CommunitySection />

          {/* Contact Section - Using Homepage Component */}
          <ContactSection />

          {/* Footer Section - Using Homepage Component */}
          <FooterSection />
        </motion.div>

        {/* Enhanced floating decorative elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1.5 h-1.5 rounded-full ${
              i % 3 === 0 ? "bg-blue-400/40" : i % 3 === 1 ? "bg-purple-400/40" : "bg-green-400/40"
            }`}
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              x: [0, Math.random() * 20 - 10, 0],
              y: [0, Math.random() * 15 - 7, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};
