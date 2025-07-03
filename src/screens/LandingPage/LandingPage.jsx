import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { AdditionalFeaturesSection } from "./sections/AdditionalFeaturesSection";
import { BackgroundSection } from "./sections/BackgroundSection";
import { BenefitsSection } from "./sections/BenefitsSection";
import { CommunitySection } from "./sections/CommunitySection";
import { ContactSection } from "./sections/ContactSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FeaturesWrapperSection } from "./sections/FeaturesWrapperSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { MissionStatementSection } from "./sections/MissionStatementSection";
import { WhyChooseMesdoSection } from "./sections/WhyChooseMesdoSection";
import { Header } from "../../components/Header";

// Timeline Node Connector Component - Exact Design Match
const TimelineNodeConnector = () => {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const secondPathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);
  const [secondPathLength, setSecondPathLength] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.1"],
  });

  // Get path lengths on mount
  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
    }
    if (secondPathRef.current) {
      const length = secondPathRef.current.getTotalLength();
      setSecondPathLength(length);
    }
  }, []);

  // Animate the stroke dash offset based on scroll for both paths
  const strokeDashoffset = useTransform(
    scrollYProgress,
    [0, 1],
    [pathLength, 0]
  );

  const secondStrokeDashoffset = useTransform(
    scrollYProgress,
    [0, 1],
    [secondPathLength, 0]
  );

  // Animate the moving dot position along the path
  const dotProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Timeline paths - main path curves left, second path curves right, connected at ends
  const mainPath =
    "M 300 20 C 300 120, 300 180, 230 240 C 160 300, 160 360, 230 420 C 300 480, 300 580, 300 680";

  // Second path that mirrors the first but curves to the right
  const secondPath =
    "M 300 20 C 300 120, 300 180, 370 240 C 440 300, 440 360, 370 420 C 300 480, 300 580, 300 680";

  // Connecting path that joins both curves at the ends
  const connectingPath = "M 300 20 L 300 680";

  const backgroundPath = "M 300 20 L 300 680";

  return (
    <div
      ref={containerRef}
      className="relative w-full flex justify-center py-6 z-10"
    >
      <div className="relative w-full max-w-4xl h-[700px]">
        {/* Main SVG Timeline */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 600 700"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Gradient for the main line - matching website theme */}
            <linearGradient
              id="timelineGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#1D4ED8" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>

            {/* Gradient for the second line - complementary theme color */}
            <linearGradient
              id="secondTimelineGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="50%" stopColor="#059669" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>

            {/* Gradient for background line */}
            <linearGradient
              id="backgroundGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#E5E7EB" />
              <stop offset="50%" stopColor="#D1D5DB" />
              <stop offset="100%" stopColor="#9CA3AF" />
            </linearGradient>

            {/* Filter for soft shadow */}
            <filter
              id="softShadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feDropShadow
                dx="0"
                dy="2"
                stdDeviation="4"
                floodColor="rgba(0,0,0,0.1)"
              />
            </filter>
          </defs>

          {/* Background straight line */}
          <path
            d={backgroundPath}
            fill="none"
            stroke="url(#backgroundGradient)"
            strokeWidth="3"
            opacity="0.3"
          />

          {/* Main animated curved path (curves left) */}
          <motion.path
            ref={pathRef}
            d={mainPath}
            fill="none"
            stroke="url(#timelineGradient)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={pathLength}
            style={{
              strokeDashoffset: strokeDashoffset,
              filter: "url(#softShadow)",
            }}
          />

          {/* Second animated curved path (curves right) */}
          <motion.path
            ref={secondPathRef}
            d={secondPath}
            fill="none"
            stroke="url(#secondTimelineGradient)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={secondPathLength}
            style={{
              strokeDashoffset: secondStrokeDashoffset,
              filter: "url(#softShadow)",
            }}
          />

          {/* Connecting circles at intersection points */}
          <circle
            cx="300"
            cy="20"
            r="4"
            fill="#3B82F6"
            filter="url(#softShadow)"
          />
          <circle
            cx="300"
            cy="680"
            r="4"
            fill="#3B82F6"
            filter="url(#softShadow)"
          />
        </svg>

        {/* Product Discovery Node - positioned on right side */}
        <motion.div
          className="absolute transform -translate-y-1/2 z-20"
          style={{ right: "10%", top: "40%" }}
          initial={{ scale: 0, opacity: 0, x: 50 }}
          whileInView={{ scale: 1, opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            bounce: 0.3,
            delay: 0.3,
          }}
          viewport={{ once: true }}
        >
          <div className="relative flex items-center">
            {/* Timeline Node Circle */}
            <motion.div
              className="relative mr-4"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              {/* Outer ring */}
              <div className="w-6 h-6 bg-white rounded-full border-4 border-blue-500 shadow-lg relative z-10">
                {/* Inner dot */}
                <div className="absolute inset-1 bg-blue-500 rounded-full"></div>
              </div>

              {/* Subtle pulsing effect */}
              <motion.div
                className="absolute inset-0 bg-blue-500 rounded-full"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Label Bubble */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {/* Main label container */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-full shadow-lg relative">
                <span className="text-sm font-semibold whitespace-nowrap">
                  PRODUCT DISCOVERY
                </span>

                {/* Arrow pointing to the node */}
                <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2">
                  <div className="w-0 h-0 border-r-[8px] border-r-blue-600 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
                </div>
              </div>

              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-lg opacity-20 scale-110"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Solution Development Node - positioned on left side */}
        <motion.div
          className="absolute transform -translate-y-1/2 z-20"
          style={{ left: "10%", top: "70%" }}
          initial={{ scale: 0, opacity: 0, x: -50 }}
          whileInView={{ scale: 1, opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            bounce: 0.3,
            delay: 0.6,
          }}
          viewport={{ once: true }}
        >
          <div className="relative flex items-center">
            {/* Label Bubble */}
            <motion.div
              className="relative mr-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {/* Main label container */}
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-5 py-2.5 rounded-full shadow-lg relative">
                <span className="text-sm font-semibold whitespace-nowrap">
                  SOLUTION DEVELOPMENT
                </span>

                {/* Arrow pointing to the node */}
                <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2">
                  <div className="w-0 h-0 border-l-[8px] border-l-emerald-600 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
                </div>
              </div>

              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-emerald-600 rounded-full blur-lg opacity-20 scale-110"></div>
            </motion.div>

            {/* Timeline Node Circle */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              {/* Outer ring */}
              <div className="w-6 h-6 bg-white rounded-full border-4 border-emerald-500 shadow-lg relative z-10">
                {/* Inner dot */}
                <div className="absolute inset-1 bg-emerald-500 rounded-full"></div>
              </div>

              {/* Subtle pulsing effect */}
              <motion.div
                className="absolute inset-0 bg-emerald-500 rounded-full"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1.5 h-1.5 rounded-full ${
              i % 2 === 0 ? "bg-blue-400/40" : "bg-emerald-400/40"
            }`}
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${20 + i * 8}%`,
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

export const LandingPage = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center w-full">
      <Header />
      <div className="bg-white w-full max-w-[1440px] pt-16">
        <div className="flex flex-col w-full relative">
          <HeroSection />

          {/* Timeline Node Connector */}
          <div className="-mt-8 mb-4">
            <TimelineNodeConnector />
          </div>

          <div className="-mt-16 sm:-mt-12 md:-mt-8">
            <MissionStatementSection />
          </div>
          <BenefitsSection />
          <BackgroundSection />
          <AdditionalFeaturesSection />
          <WhyChooseMesdoSection />
          <CommunitySection />
          <FeaturesSection />
          <FeaturesWrapperSection />
          <ContactSection />
          <FooterSection />
        </div>
      </div>
    </div>
  );
};
