import { useState, useEffect, useRef } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
  PauseIcon,
  RefreshCw,
  Users,
  Mail,
  MessageSquareX,
  UserX,
  FileText,
  MessageCircle,
  Stethoscope,
  Network,
  Award,
  Eye,
  Repeat,
  Building,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";

export const BenefitsSection = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const intervalRef = useRef(null);

  // Set mounted state
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Data for all medical professionals
  const profiles = [
    {
      id: 0,
      name: "Dr Rohit Sharma",
      title: "MBBS Graduate, Early-Career Doctor",
      image: "/Doctor1.png",
      backstory:
        "Just finished MBBS from a private college in Noida. Now looking for his first real job.",
      currentStruggle:
        "Rohit keeps applying but gets no replies. Every hospital asks the same questions again and again.",
      color: "from-blue-500 to-cyan-500",
      challenges: [
        {
          icon: RefreshCw,
          title: "Same Interview. Again. And Again.",
          description:
            "Hospitals ask identical questions — no one saves progress.",
          position: "top-[60px] left-[40px]",
          color: "bg-red-50 border-red-200",
          iconColor: "bg-red-500",
        },
        {
          icon: Building,
          title: "Every job board feels random.",
          description:
            "Naukri and LinkedIn are flooded with IT & marketing. Rahul has to dig deep to find one real medical opportunity",
          position: "top-[60px] right-[40px]",
          color: "bg-orange-50 border-orange-200",
          iconColor: "bg-orange-500",
        },
        {
          icon: Mail,
          title: "No Replies After Applying",
          description: "Sent out 25+ applications. Hardly anyone sees them.",
          position: "bottom-[60px] left-[40px]",
          color: "bg-purple-50 border-purple-200",
          iconColor: "bg-purple-500",
        },
        {
          icon: Network,
          title: "No Network, No Guidance",
          description:
            "No mentors, no peers, no verified network to ask for advice or help",
          position: "bottom-[60px] right-[40px]",
          color: "bg-pink-50 border-pink-200",
          iconColor: "bg-pink-500",
        },
      ],
    },
    {
      id: 1,
      name: "Meena Joseph",
      title: "Final-Year Nursing Student",
      image: "/Doctor2.png",
      backstory:
        "Finishing B.Sc. Nursing at a small college in Kerala. Wants to work in a good city hospital.",
      currentStruggle:
        "Her college has no placement support. She's applying on WhatsApp groups — and getting nowhere.",
      color: "from-green-500 to-emerald-500",
      challenges: [
        {
          icon: UserX,
          title: "No Placement, No Guidance",
          description: "College doesn't support job search — she's on her own.",
          position: "top-[60px] left-[40px]",
          color: "bg-red-50 border-red-200",
          iconColor: "bg-red-500",
        },
        {
          icon: FileText,
          title: "No Way to Stand Out",
          description: "Her resume looks the same as hundreds of others.",
          position: "top-[60px] right-[40px]",
          color: "bg-yellow-50 border-yellow-200",
          iconColor: "bg-yellow-500",
        },
        {
          icon: MessageCircle,
          title: "Only Finds Jobs on WhatsApp",
          description: "Unverified links, dead ends, and no real offers.",
          position: "bottom-[60px] left-[40px]",
          color: "bg-green-50 border-green-200",
          iconColor: "bg-green-500",
        },
        {
          icon: Users,
          title: "No Mentors, No Clarity",
          description:
            "No one to guide her on interviews, skills, or career paths.",
          position: "bottom-[60px] right-[40px]",
          color: "bg-indigo-50 border-indigo-200",
          iconColor: "bg-indigo-500",
        },
      ],
    },
    {
      id: 2,
      name: "Dr. Renu Prakash",
      title: "Dermatologist, 25+ Years of Experience",
      image: "/Doctor3.png",
      backstory:
        "Dr. Renu has served in government and private hospitals across 6 cities due to transfers",
      currentStruggle:
        "She's tired of rebuilding her reputation and network from scratch every few years — and wants a platform that carries her experience forward, no matter where she goes.",
      color: "from-purple-500 to-violet-500",
      challenges: [
        {
          icon: Award,
          title: "Reputation Doesn't Travel with Her",
          description:
            "Each new hospital treats her like a fresh face — decades of experience don't follow.",
          position: "top-[60px] left-[40px]",
          color: "bg-blue-50 border-blue-200",
          iconColor: "bg-blue-500",
        },
        {
          icon: Network,
          title: "Disconnected After Every Transfer",
          description:
            "No long-term network — colleagues change, WhatsApp groups vanish.",
          position: "top-[60px] right-[40px]",
          color: "bg-red-50 border-red-200",
          iconColor: "bg-red-500",
        },
        {
          icon: Stethoscope,
          title: "Loses Ongoing Case Discussions",
          description:
            "No consistent peer group to discuss complex cases or learn from.",
          position: "bottom-[60px] left-[40px]",
          color: "bg-teal-50 border-teal-200",
          iconColor: "bg-teal-500",
        },
        {
          icon: FileText,
          title: "No Single Place to Track Her Career",
          description:
            "No verified digital profile that captures her journey across cities and institutions.",
          position: "bottom-[60px] right-[40px]",
          color: "bg-amber-50 border-amber-200",
          iconColor: "bg-amber-500",
        },
      ],
    },
    {
      id: 3,
      name: "Vikram Singh",
      title: "OT Technician, 7 Years of Experience",
      image: "/Doctor4.png",
      backstory:
        "Vikram works as an OT tech in a Tier 2 city hospital. He's trained, experienced, and looking for better opportunities in a bigger hospital.",
      currentStruggle:
        "He finds it hard to get noticed, prove his skills, or switch jobs, especially when hiring still depends on internal referrals and old-school CVs.",
      color: "from-orange-500 to-red-500",
      challenges: [
        {
          icon: Award,
          title: "No Way to Prove Real Experience",
          description:
            "His work is hands-on, but there's no verified record that shows it.",
          position: "top-[60px] left-[40px]",
          color: "bg-emerald-50 border-emerald-200",
          iconColor: "bg-emerald-500",
        },
        {
          icon: Eye,
          title: "Overlooked by Recruiters",
          description:
            "Most hiring platforms are built for doctors or nurses — AHPs get ignored.",
          position: "top-[60px] right-[40px]",
          color: "bg-violet-50 border-violet-200",
          iconColor: "bg-violet-500",
        },
        {
          icon: Repeat,
          title: "Same Process, Every Time",
          description:
            "Every job means printing a CV and going through basic screenings again.",
          position: "bottom-[60px] left-[40px]",
          color: "bg-rose-50 border-rose-200",
          iconColor: "bg-rose-500",
        },
        {
          icon: Users,
          title: "No Peer Community",
          description:
            "There's no space for OT techs to connect, discuss, or learn from each other.",
          position: "bottom-[60px] right-[40px]",
          color: "bg-sky-50 border-sky-200",
          iconColor: "bg-sky-500",
        },
      ],
    },
  ];

  const currentProfile = profiles[currentProfileIndex];

  // Auto-rotation effect
  useEffect(() => {
    // Clear any existing interval first
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Only start auto-play if component is mounted and conditions are met
    if (isMounted && isAutoPlaying && !isPaused) {
      // Small delay to ensure everything is rendered
      const timeoutId = setTimeout(() => {
        intervalRef.current = setInterval(() => {
          setDirection(1);
          setCurrentProfileIndex((prevIndex) =>
            prevIndex === profiles.length - 1 ? 0 : prevIndex + 1
          );
        }, 4000);
      }, 100);

      return () => {
        clearTimeout(timeoutId);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      };
    }

    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isMounted, isAutoPlaying, isPaused, profiles.length]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  const handlePrevious = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    setIsLoading(true);

    // Pause auto-rotation temporarily when user interacts
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000); // Resume after 8 seconds

    setDirection(-1);
    const newIndex =
      currentProfileIndex === 0 ? profiles.length - 1 : currentProfileIndex - 1;
    setCurrentProfileIndex(newIndex);

    // Brief loading state for smooth UX
    setTimeout(() => setIsLoading(false), 300);
  };

  const handleNext = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    setIsLoading(true);

    // Pause auto-rotation temporarily when user interacts
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000); // Resume after 8 seconds

    setDirection(1);
    const newIndex =
      currentProfileIndex === profiles.length - 1 ? 0 : currentProfileIndex + 1;
    setCurrentProfileIndex(newIndex);

    // Brief loading state for smooth UX
    setTimeout(() => setIsLoading(false), 300);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Enhanced animation variants
  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 400 : -400,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 12 : -12,
      filter: "blur(4px)",
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      filter: "blur(0px)",
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 400 : -400,
      opacity: 0,
      scale: 0.9,
      rotateY: direction < 0 ? 12 : -12,
      filter: "blur(4px)",
    }),
  };

  const challengeCardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }),
    hover: {
      scale: 1.05,
      y: -8,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const challengeIconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
      backgroundColor: "#ffffff",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 12,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const iconVariants = {
    hover: {
      x: [0, -3, 3, 0],
      scale: 1.1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      className="flex flex-col items-center gap-12 sm:gap-16 md:gap-20 pt-[80px] sm:pt-[120px] md:pt-[150px] pb-[120px] sm:pb-[160px] md:pb-[200px] relative w-full bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Full-width background with centered content container */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 sm:gap-16 md:gap-20 w-full max-w-6xl mx-auto">
            {/* Enhanced responsive header section */}
            <motion.div
              className="inline-flex flex-col items-center gap-4 sm:gap-5 relative flex-[0_0_auto]"
              variants={sectionVariants}
            >
              <div className="inline-flex flex-col items-center gap-3 sm:gap-4 md:gap-[17px] relative flex-[0_0_auto]">
                <motion.p
                  className="relative self-stretch mt-[-1.00px] font-normal text-primary-6 text-xs sm:text-sm text-center tracking-[0.56px] leading-[normal] font-['Inter',Helvetica]"
                  whileHover={{ scale: 1.05, color: "#1890FF" }}
                  transition={{ duration: 0.2 }}
                >
                  Everyday Struggles. Real People.
                </motion.p>

                <motion.h2
                  className="relative w-full max-w-[622px] font-medium text-[#060b13] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[44.2px] text-center tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.25px] leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight font-['Inter',Helvetica] px-4 sm:px-6 md:px-0"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  Why Navigating a Medical Career Feels{" "}
                  <motion.span
                    className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    Broken
                  </motion.span>
                </motion.h2>
              </div>

              <motion.div
                className="inline-flex flex-col items-center justify-center gap-4 relative flex-[0_0_auto]"
                variants={sectionVariants}
              >
                <p className="relative w-full max-w-[944px] font-normal text-neutral-9 text-sm sm:text-base md:text-lg text-center tracking-[0] leading-relaxed sm:leading-[1.5] md:leading-[27px] font-['Inter',Helvetica] px-4 sm:px-6 md:px-0">
                  No trusted network. No verified identity. No space to grow.
                  For years, doctors, nurses, and AHPs have been navigating
                  their careers without a platform built just for them.
                </p>
              </motion.div>
            </motion.div>

            {/* Enhanced responsive main content section */}
            <motion.div
              className="relative w-full max-w-[1200px] mx-auto"
              variants={sectionVariants}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Desktop layout - original code structure for xl: and above */}
              <div className="hidden xl:block">
                <motion.div
                  className="relative w-[1200px] h-[535px]"
                  variants={sectionVariants}
                >
                  {/* Enhanced Navigation Buttons */}
                  <motion.button
                    onClick={handlePrevious}
                    disabled={isLoading}
                    className="absolute w-12 h-12 top-[240px] left-[360px] bg-white rounded-full border-2 border-gray-200 shadow-xl group flex items-center justify-center z-50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    aria-label="Previous profile"
                    type="button"
                  >
                    <motion.div variants={iconVariants} whileHover="hover">
                      <ChevronLeftIcon className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                    </motion.div>

                    {/* Loading indicator */}
                    {isLoading && (
                      <motion.div
                        className="absolute inset-0 bg-blue-500/20 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    )}
                  </motion.button>

                  <motion.button
                    onClick={handleNext}
                    disabled={isLoading}
                    className="absolute w-12 h-12 top-[240px] right-[360px] bg-white rounded-full border-2 border-gray-200 shadow-xl group flex items-center justify-center z-50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    aria-label="Next profile"
                    type="button"
                  >
                    <motion.div variants={iconVariants} whileHover="hover">
                      <ChevronRightIcon className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                    </motion.div>

                    {/* Loading indicator */}
                    {isLoading && (
                      <motion.div
                        className="absolute inset-0 bg-blue-500/20 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    )}
                  </motion.button>

                  {/* Enhanced Central Profile Card */}
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={currentProfile.id}
                      custom={direction}
                      variants={cardVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      layout="preserve"
                      transition={{
                        x: {
                          type: "spring",
                          stiffness: 140,
                          damping: 25,
                          mass: 0.8,
                        },
                        opacity: {
                          duration: 0.3,
                          ease: "easeInOut",
                        },
                        scale: {
                          duration: 0.3,
                          ease: "easeInOut",
                        },
                        rotateY: {
                          duration: 0.4,
                          ease: "easeInOut",
                        },
                        filter: {
                          duration: 0.3,
                          ease: "easeInOut",
                        },
                      }}
                      className="absolute w-[342px] h-[535px] top-0 left-[429px]"
                      style={{ willChange: "transform, opacity" }}
                    >
                      <Card className="w-full h-full bg-white rounded-[20px] shadow-[0px_1px_92px_#bb22f705,1px_4px_204px_82px_#1890ff26] border border-gray-100">
                        <CardContent className="p-0">
                          {/* Enhanced Profile Image */}
                          <motion.div
                            className="absolute w-[294px] h-[200px] top-6 left-6 rounded-2xl border-2 border-gray-100 shadow-lg overflow-hidden"
                            whileHover={{ scale: 1.02, y: -2 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 20,
                            }}
                          >
                            <motion.div
                              className="w-full h-full relative"
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: 0.2, duration: 0.6 }}
                            >
                              {/* Gradient overlay */}
                              <motion.div
                                className={`absolute inset-0 bg-gradient-to-br ${currentProfile.color} opacity-0 z-10`}
                                whileHover={{ opacity: 0.1 }}
                                transition={{ duration: 0.3 }}
                              />

                              {currentProfile.image ? (
                                <div className="relative w-full h-full">
                                  <motion.img
                                    src={currentProfile.image}
                                    alt={currentProfile.name}
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    onLoad={(e) => {
                                      console.log(
                                        `Successfully loaded image: ${currentProfile.image}`
                                      );
                                    }}
                                    onError={(e) => {
                                      console.error(
                                        `Failed to load image: ${currentProfile.image}`
                                      );
                                      e.target.style.display = "none";
                                      e.target.nextSibling.style.display =
                                        "flex";
                                    }}
                                  />
                                  {/* Enhanced Fallback */}
                                  <div
                                    className={`absolute inset-0 bg-gradient-to-br ${currentProfile.color} flex items-center justify-center`}
                                    style={{ display: "none" }}
                                  >
                                    <motion.div
                                      className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center backdrop-blur-sm"
                                      whileHover={{ rotate: 360, scale: 1.1 }}
                                      transition={{ duration: 0.8 }}
                                    >
                                      <span className="text-2xl font-bold text-gray-700">
                                        {currentProfile.name
                                          .split(" ")
                                          .map((n) => n[0])
                                          .join("")}
                                      </span>
                                    </motion.div>
                                  </div>
                                </div>
                              ) : (
                                <div
                                  className={`w-full h-full bg-gradient-to-br ${currentProfile.color} flex items-center justify-center`}
                                >
                                  <motion.div
                                    className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center backdrop-blur-sm"
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.8 }}
                                  >
                                    <span className="text-2xl font-bold text-gray-700">
                                      {currentProfile.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                    </span>
                                  </motion.div>
                                </div>
                              )}
                            </motion.div>
                          </motion.div>

                          {/* Enhanced Profile Content */}
                          <motion.div
                            className="flex flex-col w-[286px] items-start gap-8 absolute top-[248px] left-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: 0.15,
                              duration: 0.4,
                              ease: "easeOut",
                            }}
                          >
                            <motion.div
                              className="relative w-fit mt-[-1.00px] font-['Inter',Helvetica] font-normal text-transparent text-base tracking-[0] leading-4"
                              initial={{ opacity: 0, x: -15 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: 0.2,
                                duration: 0.3,
                                ease: "easeOut",
                              }}
                              whileHover={{ x: 3 }}
                            >
                              <motion.span
                                className="font-medium text-[#141414] leading-[28.8px] block"
                                whileHover={{ color: "#1890FF" }}
                                transition={{ duration: 0.2 }}
                              >
                                {currentProfile.name}
                              </motion.span>
                              <span className="text-[#595959] text-xs leading-[21.6px]">
                                {currentProfile.title}
                              </span>
                            </motion.div>

                            <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                              <motion.div
                                className="flex gap-3 self-stretch w-full flex-col items-start relative flex-[0_0_auto]"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                  delay: 0.25,
                                  duration: 0.3,
                                  ease: "easeOut",
                                }}
                                whileHover={{ x: 2 }}
                              >
                                <div className="relative self-stretch mt-[-1.00px] bg-[linear-gradient(180deg,rgba(15,115,255,1)_0%,rgba(24,144,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-['Inter',Helvetica] font-medium text-transparent text-base tracking-[0] leading-4">
                                  Backstory
                                </div>
                                <div className="relative w-[278px] font-['Inter',Helvetica] font-normal text-neutral-8 text-xs tracking-[0] leading-[16.8px]">
                                  {currentProfile.backstory}
                                </div>
                              </motion.div>

                              <motion.div
                                className="flex gap-3 self-stretch w-full flex-col items-start relative flex-[0_0_auto]"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                  delay: 0.3,
                                  duration: 0.3,
                                  ease: "easeOut",
                                }}
                                whileHover={{ x: 2 }}
                              >
                                <div className="relative self-stretch mt-[-1.00px] bg-[linear-gradient(180deg,rgba(15,115,255,1)_0%,rgba(24,144,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-['Inter',Helvetica] font-medium text-transparent text-base tracking-[0] leading-4">
                                  Current Struggle / Goal
                                </div>
                                <div className="relative w-[278px] font-['Inter',Helvetica] font-normal text-neutral-8 text-xs tracking-[0] leading-[16.8px]">
                                  {currentProfile.currentStruggle}
                                </div>
                              </motion.div>
                            </div>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </AnimatePresence>

                  {/* Enhanced Challenge Cards */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`challenges-${currentProfile.id}`}
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {currentProfile.challenges.map((card, index) => {
                        const IconComponent = card.icon;
                        return (
                          <motion.div
                            key={`challenge-card-${currentProfile.id}-${index}`}
                            className={`inline-flex flex-col items-start gap-4 absolute ${card.position} cursor-pointer`}
                            custom={index}
                            variants={challengeCardVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                          >
                            <motion.div
                              className={`relative w-12 h-12 ${card.color} rounded-xl overflow-hidden border-2 shadow-md group`}
                              whileHover={{
                                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                                borderColor: card.iconColor.replace(
                                  "bg-",
                                  "border-"
                                ),
                              }}
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                              }}
                            >
                              <motion.div
                                className={`absolute inset-0 ${card.iconColor} rounded-lg m-1 flex items-center justify-center`}
                                variants={challengeIconVariants}
                                initial="initial"
                                whileHover="hover"
                              >
                                <IconComponent className="w-5 h-5 text-white" />
                              </motion.div>
                            </motion.div>

                            <motion.div
                              className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-black text-xl tracking-[0] leading-7"
                              whileHover={{ x: 3, color: "#1890FF" }}
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                              }}
                            >
                              {card.title}
                            </motion.div>

                            <motion.div
                              className="relative w-[280px] [font-family:'Inter',Helvetica] font-normal text-neutral-7 text-base tracking-[0] leading-6"
                              whileHover={{ x: 3 }}
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                              }}
                            >
                              {card.description}
                            </motion.div>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* Tablet and mobile layout - for screens smaller than 1280px */}
              <div className="block xl:hidden">
                {/* Navigation buttons */}
                <div className="flex justify-between items-center mb-6 px-4">
                  <motion.button
                    onClick={handlePrevious}
                    disabled={isLoading}
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full border-2 border-gray-200 shadow-xl group flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] min-w-[44px]"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    aria-label="Previous profile"
                    type="button"
                  >
                    <motion.div variants={iconVariants} whileHover="hover">
                      <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                    </motion.div>

                    {isLoading && (
                      <motion.div
                        className="absolute inset-0 bg-blue-500/20 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    )}
                  </motion.button>

                  <motion.button
                    onClick={handleNext}
                    disabled={isLoading}
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full border-2 border-gray-200 shadow-xl group flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] min-w-[44px]"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    aria-label="Next profile"
                    type="button"
                  >
                    <motion.div variants={iconVariants} whileHover="hover">
                      <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                    </motion.div>

                    {isLoading && (
                      <motion.div
                        className="absolute inset-0 bg-blue-500/20 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    )}
                  </motion.button>
                </div>

                {/* Tablet/Mobile profile card */}
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={`tablet-mobile-${currentProfile.id}`}
                    custom={direction}
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: {
                        type: "spring",
                        stiffness: 140,
                        damping: 25,
                        mass: 0.8,
                      },
                      opacity: {
                        duration: 0.3,
                        ease: "easeInOut",
                      },
                      scale: {
                        duration: 0.3,
                        ease: "easeInOut",
                      },
                    }}
                    className="mx-4 mb-8"
                  >
                    <Card className="w-full bg-white rounded-xl shadow-lg border border-gray-100 max-w-md mx-auto md:max-w-lg">
                      <CardContent className="p-6">
                        {/* Tablet/Mobile profile image */}
                        <motion.div
                          className="w-full h-48 sm:h-56 md:h-64 rounded-xl border-2 border-gray-100 shadow-lg overflow-hidden mb-6"
                          whileHover={{ scale: 1.02, y: -2 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                        >
                          <motion.div
                            className="w-full h-full relative"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                          >
                            {currentProfile.image ? (
                              <div className="relative w-full h-full">
                                <motion.img
                                  src={currentProfile.image}
                                  alt={currentProfile.name}
                                  className="w-full h-full object-cover"
                                  whileHover={{ scale: 1.05 }}
                                  transition={{ duration: 0.3 }}
                                />
                                {/* Tablet/Mobile fallback */}
                                <div
                                  className={`absolute inset-0 bg-gradient-to-br ${currentProfile.color} flex items-center justify-center`}
                                  style={{ display: "none" }}
                                >
                                  <motion.div
                                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 flex items-center justify-center backdrop-blur-sm"
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.8 }}
                                  >
                                    <span className="text-lg sm:text-xl font-bold text-gray-700">
                                      {currentProfile.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                    </span>
                                  </motion.div>
                                </div>
                              </div>
                            ) : (
                              <div
                                className={`w-full h-full bg-gradient-to-br ${currentProfile.color} flex items-center justify-center`}
                              >
                                <motion.div
                                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 flex items-center justify-center backdrop-blur-sm"
                                  whileHover={{ rotate: 360, scale: 1.1 }}
                                  transition={{ duration: 0.8 }}
                                >
                                  <span className="text-lg sm:text-xl font-bold text-gray-700">
                                    {currentProfile.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </span>
                                </motion.div>
                              </div>
                            )}
                          </motion.div>
                        </motion.div>

                        {/* Tablet/Mobile profile content */}
                        <motion.div
                          className="space-y-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.15,
                            duration: 0.4,
                            ease: "easeOut",
                          }}
                        >
                          <motion.div
                            initial={{ opacity: 0, x: -15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 0.2,
                              duration: 0.3,
                              ease: "easeOut",
                            }}
                          >
                            <motion.h3
                              className="font-medium text-[#141414] text-lg sm:text-xl md:text-2xl leading-tight"
                              whileHover={{ color: "#1890FF" }}
                              transition={{ duration: 0.2 }}
                            >
                              {currentProfile.name}
                            </motion.h3>
                            <p className="text-[#595959] text-sm sm:text-base leading-relaxed">
                              {currentProfile.title}
                            </p>
                          </motion.div>

                          <motion.div
                            className="space-y-4 sm:space-y-5"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: 0.25,
                              duration: 0.3,
                              ease: "easeOut",
                            }}
                          >
                            <div>
                              <h4 className="bg-[linear-gradient(180deg,rgba(15,115,255,1)_0%,rgba(24,144,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] font-medium text-sm sm:text-base mb-2">
                                Backstory
                              </h4>
                              <p className="text-neutral-8 text-sm sm:text-base leading-relaxed">
                                {currentProfile.backstory}
                              </p>
                            </div>

                            <div>
                              <h4 className="bg-[linear-gradient(180deg,rgba(15,115,255,1)_0%,rgba(24,144,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] font-medium text-sm sm:text-base mb-2">
                                Current Struggle / Goal
                              </h4>
                              <p className="text-neutral-8 text-sm sm:text-base leading-relaxed">
                                {currentProfile.currentStruggle}
                              </p>
                            </div>
                          </motion.div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatePresence>

                {/* Tablet/Mobile challenge cards */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`tablet-mobile-challenges-${currentProfile.id}`}
                    className="px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
                      {currentProfile.challenges.map((card, index) => {
                        const IconComponent = card.icon;
                        return (
                          <motion.div
                            key={`tablet-mobile-challenge-${currentProfile.id}-${index}`}
                            className="flex flex-col items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-xl border border-gray-100 shadow-md cursor-pointer"
                            custom={index}
                            variants={challengeCardVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                          >
                            <motion.div
                              className={`relative w-10 h-10 sm:w-12 sm:h-12 ${card.color} rounded-xl overflow-hidden border-2 shadow-md group min-h-[44px] min-w-[44px]`}
                              whileHover={{
                                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                                borderColor: card.iconColor.replace(
                                  "bg-",
                                  "border-"
                                ),
                              }}
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                              }}
                            >
                              <motion.div
                                className={`absolute inset-0 ${card.iconColor} rounded-lg m-1 flex items-center justify-center`}
                                variants={challengeIconVariants}
                                initial="initial"
                                whileHover="hover"
                              >
                                <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                              </motion.div>
                            </motion.div>

                            <motion.div
                              className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-black text-base sm:text-lg md:text-xl tracking-[0] leading-6 sm:leading-7"
                              whileHover={{ x: 3, color: "#1890FF" }}
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                              }}
                            >
                              {card.title}
                            </motion.div>

                            <motion.div
                              className="relative w-[240px] [font-family:'Inter',Helvetica] font-normal text-neutral-7 text-base tracking-[0] leading-6"
                              whileHover={{ x: 3 }}
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                              }}
                            >
                              {card.description}
                            </motion.div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
