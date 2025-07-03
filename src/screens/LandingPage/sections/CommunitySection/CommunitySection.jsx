import { Card, CardContent } from "../../../../components/ui/card";
import { motion } from "framer-motion";

export const CommunitySection = () => {
  // Data for the feature cards with exact positioning
  const featureCards = [
    {
      title: "Get Visible. Get Trusted.",
      description:
        "Without Mesdo, your profile gets lost. With it, you're verified, visible, and finally get replies that matter.",
      position: { top: 397, left: 112 },
      dotPosition: { top: 0, left: 0 },
      fontFamily: "font-manrope font-extrabold",
    },
    {
      title: "Get Connected.",
      description:
        "Instead of relying on random groups, you join trusted circles with mentors, peers, and real conversations",
      position: { top: 232, left: 527 },
      dotPosition: { top: 0, left: 0 },
      fontFamily: "font-manrope font-extrabold",
    },
    {
      title: "Start Growing — Even When You're Not Looking",
      description:
        "Your career won't wait. With Mesdo, your visibility keeps growing — even while you're busy saving lives.",
      position: { top: 39, left: 868 },
      dotPosition: { top: 0, left: 0 },
      fontFamily: "font-manrope font-extrabold",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: custom * 0.15,
      },
    }),
  };

  const dotVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: (custom) => ({
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: custom * 0.15,
      },
    }),
  };

  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        delay: 0.5,
      },
    },
  };

  return (
    <motion.section
      className="flex flex-col items-start gap-2 pt-[40px] sm:pt-[60px] lg:pt-[100px] pb-[80px] sm:pb-[120px] lg:pb-[200px] px-4 sm:px-6 md:px-8 lg:px-[150px] relative self-stretch w-full flex-[0_0_auto] bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Desktop Layout (lg and above) - Original exact styling */}
      <div className="hidden lg:block relative w-full max-w-[1140px] h-[698px]">
        <div className="relative h-[698px]">
          {/* Header content */}
          <motion.div
            className="inline-flex flex-col items-start gap-8 absolute top-0 left-0"
            variants={cardVariants}
          >
            <div className="inline-flex flex-col items-start gap-3.5 relative flex-[0_0_auto]">
              <motion.p
                className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-6 text-sm tracking-[-0.18px] leading-6 whitespace-nowrap"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Reach The Top
              </motion.p>

              <motion.h2
                className="relative w-[588px] h-[116px] [font-family:'Inter',Helvetica] font-normal text-[#060b13] text-[44.2px] tracking-[-1.25px] leading-[57.6px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Elevate Your Healthcare Career with Mesdo
              </motion.h2>
            </div>

            <motion.p
              className="relative w-[559px] [font-family:'Inter',Helvetica] font-normal text-neutral-9 text-xl tracking-[-0.24px] leading-[35px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              From stagnant applications to verified recognition and stronger
              peer networks — here&apos;s what your journey looks like with
              Mesdo by your side.
            </motion.p>
          </motion.div>

          {/* Diagram and feature cards */}
          <div className="absolute w-full max-w-[1140px] h-[599px] top-[99px] left-0">
            <div className="h-[599px]">
              <div className="relative w-[1166px] h-[617px] top-[-18px] left-[-26px]">
                {/* Animated Career Path Line */}
                <motion.svg
                  className="absolute w-[1069px] h-[470px] top-0 left-0"
                  viewBox="0 0 1069 470"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Main curved path with smooth S-curve - extended further before start and after end */}
                  <motion.path
                    d="M 50 450 C 90 450 120 445 144 429 C 250 429 300 350 350 320 C 400 290 450 280 559 264 C 650 250 720 200 780 150 C 820 120 860 90 900 71 C 930 55 970 40 1020 30"
                    stroke="url(#gradient)"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={pathVariants}
                    style={{
                      filter: "drop-shadow(0 4px 12px rgba(24, 144, 255, 0.3))",
                    }}
                  />

                  {/* Animated flowing particle along the path */}
                  <motion.circle
                    r="6"
                    fill="url(#glowGradient)"
                    style={{
                      filter: "drop-shadow(0 0 8px rgba(24, 144, 255, 0.8))",
                    }}
                  >
                    <animateMotion dur="4s" repeatCount="indefinite" begin="3s">
                      <mpath href="#careerPath" />
                    </animateMotion>
                  </motion.circle>

                  {/* Hidden path for animation reference - extended further */}
                  <path
                    id="careerPath"
                    d="M 50 450 C 90 450 120 445 144 429 C 250 429 300 350 350 320 C 400 290 450 280 559 264 C 650 250 720 200 780 150 C 820 120 860 90 900 71 C 930 55 970 40 1020 30"
                    fill="none"
                    stroke="none"
                  />

                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#0F73FF" />
                      <stop offset="50%" stopColor="#1890FF" />
                      <stop offset="100%" stopColor="#40A9FF" />
                    </linearGradient>

                    <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="50%" stopColor="#1890FF" />
                      <stop offset="100%" stopColor="#0F73FF" />
                    </radialGradient>
                  </defs>

                  {/* Animated dots along the path - positioned to match card dots exactly */}
                  <motion.circle
                    cx="144"
                    cy="429"
                    r="10"
                    fill="#1890FF"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 1.3, 1],
                      opacity: [0, 1, 1],
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                      ease: "easeOut",
                    }}
                    style={{
                      filter: "drop-shadow(0 0 15px rgba(24, 144, 255, 0.6))",
                    }}
                  />
                  <motion.circle
                    cx="559"
                    cy="264"
                    r="10"
                    fill="#1890FF"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 1.3, 1],
                      opacity: [0, 1, 1],
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.65,
                      ease: "easeOut",
                    }}
                    style={{
                      filter: "drop-shadow(0 0 15px rgba(24, 144, 255, 0.6))",
                    }}
                  />
                  <motion.circle
                    cx="900"
                    cy="71"
                    r="10"
                    fill="#1890FF"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 1.3, 1],
                      opacity: [0, 1, 1],
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.8,
                      ease: "easeOut",
                    }}
                    style={{
                      filter: "drop-shadow(0 0 15px rgba(24, 144, 255, 0.6))",
                    }}
                  />

                  {/* Continuous pulsing ring effects around dots */}
                  <motion.circle
                    cx="144"
                    cy="429"
                    r="20"
                    fill="none"
                    stroke="rgba(24, 144, 255, 0.4)"
                    strokeWidth="2"
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.6, 0, 0.6],
                    }}
                    transition={{
                      duration: 3,
                      delay: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.circle
                    cx="559"
                    cy="264"
                    r="20"
                    fill="none"
                    stroke="rgba(24, 144, 255, 0.4)"
                    strokeWidth="2"
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.6, 0, 0.6],
                    }}
                    transition={{
                      duration: 3,
                      delay: 1.15,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.circle
                    cx="900"
                    cy="71"
                    r="20"
                    fill="none"
                    stroke="rgba(24, 144, 255, 0.4)"
                    strokeWidth="2"
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.6, 0, 0.6],
                    }}
                    transition={{
                      duration: 3,
                      delay: 1.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Additional sparkle effects along the path */}
                  {[...Array(8)].map((_, i) => {
                    const positions = [
                      { x: 180, y: 420 },
                      { x: 250, y: 390 },
                      { x: 320, y: 340 },
                      { x: 420, y: 300 },
                      { x: 600, y: 250 },
                      { x: 720, y: 190 },
                      { x: 820, y: 130 },
                      { x: 880, y: 90 },
                    ];
                    return (
                      <motion.circle
                        key={`sparkle-${i}`}
                        cx={positions[i].x}
                        cy={positions[i].y}
                        r="3"
                        fill="rgba(24, 144, 255, 0.6)"
                        animate={{
                          scale: [0, 1.5, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          delay: 4 + i * 0.3,
                          repeat: Infinity,
                          repeatDelay: 4,
                          ease: "easeInOut",
                        }}
                      />
                    );
                  })}
                </motion.svg>

                {/* Feature cards */}
                {featureCards.map((card, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-[299px] h-[220px]"
                    style={{
                      top: `${card.position.top}px`,
                      left: `${card.position.left}px`,
                    }}
                    variants={cardVariants}
                    custom={index}
                  >
                    <motion.div>
                      <Card className="flex flex-col w-[279px] items-start gap-3 absolute top-[88px] left-5 border-none bg-white/95 backdrop-blur-sm rounded-xl p-4">
                        <CardContent className="p-0">
                          <motion.div
                            className={`relative self-stretch mt-[-1.00px] [font-family:${
                              card.fontFamily === "font-inter"
                                ? "'Inter'"
                                : "'Manrope'"
                            },Helvetica] ${
                              card.fontFamily === "font-inter"
                                ? "font-normal"
                                : card.fontFamily.includes("extrabold")
                                ? "font-extrabold"
                                : "font-semibold"
                            } text-black text-base tracking-[0] leading-[30px]`}
                            style={{
                              fontWeight:
                                card.fontFamily === "font-semibold"
                                  ? 600
                                  : undefined,
                            }}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.15 + 0.2,
                            }}
                          >
                            {card.title}
                          </motion.div>

                          <motion.div
                            className={`relative self-stretch [font-family:${
                              card.fontFamily === "font-inter"
                                ? "'Inter'"
                                : "'Manrope'"
                            },Helvetica] font-medium text-[#64607d] text-base tracking-[-0.32px] leading-[30px] mt-3`}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.15 + 0.4,
                            }}
                          >
                            {card.description}
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>

                    <motion.div
                      className="absolute w-16 h-16 top-0 left-0 bg-white rounded-[60px] border border-solid border-[#e9ebf1]"
                      variants={dotVariants}
                      custom={index}
                    >
                      <motion.div
                        className="relative w-[23px] h-[23px] top-[19px] left-[19px] rounded-[10px] bg-[linear-gradient(180deg,rgba(15,115,255,1)_0%,rgba(24,144,255,1)_100%)]"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                      />
                    </motion.div>
                  </motion.div>
                ))}

                {/* Floating particles for extra visual appeal */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    className="absolute w-2 h-2 bg-blue-200 rounded-full opacity-60"
                    style={{
                      left: `${200 + i * 150}px`,
                      top: `${100 + (i % 2) * 200}px`,
                    }}
                    animate={{
                      y: [-10, 10, -10],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile and Tablet Layout (below lg) - Optimized for small devices */}
      <div className="block lg:hidden w-full">
        {/* Header content - Responsive and Mobile-Optimized */}
        <motion.div
          className="flex flex-col items-center gap-4 sm:gap-6 mb-8 sm:mb-12 px-2"
          variants={cardVariants}
        >
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-full text-center">
            <motion.p
              className="[font-family:'Inter',Helvetica] font-medium text-primary-6 text-sm tracking-[-0.18px] leading-6"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Reach The Top
            </motion.p>

            <motion.h2
              className="[font-family:'Inter',Helvetica] font-normal text-[#060b13] text-xl sm:text-2xl md:text-3xl tracking-[-0.6px] sm:tracking-[-0.8px] md:tracking-[-1px] leading-tight max-w-[90%] sm:max-w-[85%]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Elevate Your Healthcare Career with Mesdo
            </motion.h2>
          </div>

          <motion.p
            className="[font-family:'Inter',Helvetica] font-normal text-neutral-9 text-sm sm:text-base leading-relaxed text-center max-w-[95%] sm:max-w-[85%]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            From stagnant applications to verified recognition and stronger peer
            networks — here&apos;s what your journey looks like with Mesdo by
            your side.
          </motion.p>
        </motion.div>

        {/* Mobile Journey Path - Simplified and Responsive */}
        <div className="relative w-full">
          {/* Compact animated path for mobile */}
          <motion.svg
            className="absolute w-full top-0 left-0 z-0"
            style={{ height: `${featureCards.length * 200 + 100}px` }}
            viewBox={`0 0 100 ${featureCards.length * 200 + 100}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Simple vertical path for mobile */}
            <motion.path
              d={`M 50 20 ${featureCards
                .map((_, i) => `L 50 ${80 + i * 200}`)
                .join(" ")}`}
              stroke="url(#mobileGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={pathVariants}
              style={{
                filter: "drop-shadow(0 2px 6px rgba(24, 144, 255, 0.3))",
              }}
            />

            {/* Animated flowing particle */}
            <motion.circle
              r="3"
              fill="url(#mobileGlowGradient)"
              style={{
                filter: "drop-shadow(0 0 4px rgba(24, 144, 255, 0.8))",
              }}
            >
              <animateMotion dur="4s" repeatCount="indefinite" begin="1.5s">
                <mpath href="#mobilePath" />
              </animateMotion>
            </motion.circle>

            {/* Hidden path for animation */}
            <path
              id="mobilePath"
              d={`M 50 20 ${featureCards
                .map((_, i) => `L 50 ${80 + i * 200}`)
                .join(" ")}`}
              fill="none"
              stroke="none"
            />

            <defs>
              <linearGradient
                id="mobileGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#0F73FF" />
                <stop offset="50%" stopColor="#1890FF" />
                <stop offset="100%" stopColor="#40A9FF" />
              </linearGradient>

              <radialGradient id="mobileGlowGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#1890FF" />
                <stop offset="100%" stopColor="#0F73FF" />
              </radialGradient>
            </defs>

            {/* Mobile step dots */}
            {featureCards.map((_, index) => (
              <motion.circle
                key={index}
                cx="50"
                cy={80 + index * 200}
                r="6"
                fill="#1890FF"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1.2, 1],
                  opacity: [0, 1, 1],
                }}
                transition={{
                  duration: 0.5,
                  delay: 1 + index * 0.3,
                  ease: "easeOut",
                }}
                style={{
                  filter: "drop-shadow(0 0 8px rgba(24, 144, 255, 0.6))",
                }}
              />
            ))}
          </motion.svg>

          {/* Mobile Feature Cards - Compact and Touch-Friendly */}
          <div className="relative z-10 space-y-8 sm:space-y-12">
            {featureCards.map((card, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-4 px-3 sm:px-4"
                variants={cardVariants}
                custom={index}
                style={{ paddingTop: index === 0 ? "40px" : "0" }}
              >
                {/* Mobile card dot */}
                <motion.div
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full border border-solid border-[#e9ebf1] flex items-center justify-center shadow-sm"
                  variants={dotVariants}
                  custom={index}
                >
                  <motion.div
                    className="w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-[linear-gradient(180deg,rgba(15,115,255,1)_0%,rgba(24,144,255,1)_100%)]"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />
                </motion.div>

                {/* Mobile card content - Compact */}
                <motion.div className="w-full max-w-xs sm:max-w-sm bg-white/95 backdrop-blur-sm rounded-lg p-4 sm:p-5 border-none text-center shadow-sm">
                  <motion.div
                    className="font-bold text-black text-base sm:text-lg leading-tight mb-2 sm:mb-3"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.15 + 0.2,
                    }}
                  >
                    {card.title}
                  </motion.div>

                  <motion.div
                    className="font-medium text-[#64607d] text-sm sm:text-base leading-relaxed"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.15 + 0.35,
                    }}
                  >
                    {card.description}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Subtle mobile particles - Reduced for performance */}
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={`mobile-particle-${i}`}
              className="absolute w-1 h-1 bg-blue-300 rounded-full opacity-50"
              style={{
                left: `${30 + i * 40}%`,
                top: `${100 + i * 150}px`,
              }}
              animate={{
                y: [-5, 5, -5],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 1,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};
