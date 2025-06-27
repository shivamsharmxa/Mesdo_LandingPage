import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturesWrapperSection = () => {
  const [imageErrors, setImageErrors] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);

  // Blog article data
  const blogArticles = [
    {
      id: 1,
      image: "/Blogs.png",
      tags: ["Slate", "Contrux"],
      title: "The Art of Designing Timeless Masterpieces",
      description:
        "Dive into the realm of limitless creativity as we explore the techniques and inspirations behind crafting visually stunning and timeless designs that captivate hearts and minds.",
    },
    {
      id: 2,
      image: "/Blogs.png",
      tags: ["Slate", "Contrux"],
      title: "The Art of Designing Timeless Masterpieces",
      description:
        "Dive into the realm of limitless creativity as we explore the techniques and inspirations behind crafting visually stunning and timeless designs that captivate hearts and minds.",
    },
    {
      id: 3,
      image: "/Blogs.png",
      tags: ["Slate", "Contrux"],
      title: "The Art of Designing Timeless Masterpieces",
      description:
        "Dive into the realm of limitless creativity as we explore the techniques and inspirations behind crafting visually stunning and timeless designs that captivate hearts and minds.",
    },
  ];

  const handleImageError = (articleId) => {
    console.log(`Image failed to load for article ${articleId}`);
    setImageErrors((prev) => ({ ...prev, [articleId]: true }));
  };

  const handleImageLoad = (articleId) => {
    console.log(`Image loaded successfully for article ${articleId}`);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % blogArticles.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + blogArticles.length) % blogArticles.length
    );
  };

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

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const slideVariants = {
    enter: {
      x: 300,
      opacity: 0,
      scale: 0.9,
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: {
      x: -300,
      opacity: 0,
      scale: 0.9,
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: 0.8,
      },
    },
  };

  return (
    <motion.section
      className="flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-[150px] py-12 sm:py-16 md:py-24 lg:py-[200px] bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="flex flex-col items-center gap-12 sm:gap-16 md:gap-20 w-full max-w-[1140px]">
        <div className="flex flex-col items-start gap-12 sm:gap-16 md:gap-20 w-full">
          {/* Section Header - Responsive */}
          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:gap-6 w-full"
            variants={headerVariants}
          >
            <div className="flex flex-col items-center justify-center gap-3 sm:gap-3.5">
              <motion.span
                className="[font-family:'Inter',Helvetica] font-medium text-primary-6 text-sm tracking-[-0.18px] leading-[23.8px] text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                Our Blog
              </motion.span>

              <motion.h2
                className="[font-family:'Inter',Helvetica] font-medium text-[#060b13] text-2xl sm:text-3xl md:text-4xl lg:text-[43.5px] tracking-[-0.8px] sm:tracking-[-1px] md:tracking-[-1.25px] leading-tight sm:leading-[1.3] md:leading-[57.6px] text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Blog &amp; Articles
              </motion.h2>
            </div>

            <motion.p
              className="w-full max-w-[918px] [font-family:'Inter',Helvetica] font-normal text-[#363d4f] text-sm sm:text-base leading-relaxed sm:leading-8 text-center px-4 sm:px-0"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Unlock the power of data analytics and gain actionable insights to
              make informed business decisions. Enhance your website&#39;s
              visibility
            </motion.p>
          </motion.div>

          {/* Desktop Layout - Original 3 cards side by side (lg and above) */}
          <motion.div
            className="hidden lg:flex items-center gap-9 w-full"
            variants={containerVariants}
          >
            {blogArticles.map((article, index) => (
              <motion.div
                key={article.id}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="w-[356px]"
              >
                <Card className="border-0 shadow-none overflow-hidden group cursor-pointer">
                  <CardContent className="flex flex-col items-start gap-7 p-0 h-full">
                    {/* Article Image and Tags */}
                    <div className="flex flex-col w-full items-start gap-8">
                      <motion.div
                        className="w-full h-[296px] rounded-xl overflow-hidden shadow-[0px_0px_0px_1px_#e9ebf1] relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        {imageErrors[article.id] ? (
                          // Fallback content when image fails to load
                          <div className="h-[296px] rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 border-4 border-solid border-white relative overflow-hidden flex items-center justify-center">
                            <div className="text-center">
                              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                  className="w-8 h-8 text-white"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z"
                                  />
                                </svg>
                              </div>
                              <p className="text-blue-600 font-medium">
                                Blog Image
                              </p>
                              <p className="text-blue-500 text-sm">
                                Loading...
                              </p>
                            </div>
                          </div>
                        ) : (
                          <motion.div
                            className="h-[296px] rounded-xl border-4 border-solid border-white relative overflow-hidden"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                          >
                            <img
                              src={article.image}
                              alt={article.title}
                              className="w-full h-full object-cover"
                              onError={() => handleImageError(article.id)}
                              onLoad={() => handleImageLoad(article.id)}
                              loading="lazy"
                            />
                            {/* Overlay effect on hover */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100"
                              transition={{ duration: 0.3 }}
                            />
                          </motion.div>
                        )}
                      </motion.div>

                      <motion.div
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                      >
                        {article.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            className="px-3 py-1.5 bg-[#f8fafc] text-[#64607d] text-sm font-medium border-0 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </motion.div>
                    </div>

                    {/* Article Content - Flex grow to push button to bottom */}
                    <motion.div
                      className="flex flex-col items-start gap-4 w-full flex-grow"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                    >
                      <motion.h3
                        className="[font-family:'Inter',Helvetica] font-semibold text-[#060b13] text-xl leading-8 group-hover:text-blue-600 transition-colors duration-300"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        {article.title}
                      </motion.h3>

                      <motion.p
                        className="[font-family:'Inter',Helvetica] font-normal text-[#64607d] text-base leading-7 flex-grow"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        {article.description}
                      </motion.p>
                    </motion.div>

                    {/* Read More Button - Desktop - Fixed at bottom */}
                    <motion.div
                      className="w-full mt-auto"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.8 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="outline"
                        className="w-full h-12 rounded-lg shadow-[0px_0.5px_1px_#666d8033,0px_3px_4px_-2px_#80889729,0px_0px_0px_1.5px_#e9ebf1] bg-[linear-gradient(180deg,rgba(236,239,243,0)_0%,rgba(236,239,243,0.04)_100%)] [font-family:'Inter',Helvetica] font-medium text-[#060b13] text-sm tracking-[-0.18px] hover:shadow-lg hover:bg-[#f7f8fa] transition-all duration-300 group flex items-center justify-center"
                      >
                        Read More
                        <motion.div
                          className="w-5 h-5 ml-2"
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRightIcon className="w-5 h-5" />
                        </motion.div>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile/Tablet Layout - Single card carousel (below lg) */}
          <div className="block lg:hidden w-full">
            <div className="relative w-full max-w-md mx-auto sm:max-w-lg md:max-w-xl">
              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mb-6">
                <motion.button
                  onClick={prevSlide}
                  className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 min-h-[44px] min-w-[44px]"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                </motion.button>

                {/* Slide Indicators */}
                <div className="flex items-center gap-2">
                  {blogArticles.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-blue-500 scale-125"
                          : "bg-gray-300"
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>

                <motion.button
                  onClick={nextSlide}
                  className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 min-h-[44px] min-w-[44px]"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                </motion.button>
              </div>

              {/* Single Card Carousel */}
              <div className="relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      duration: 0.5,
                    }}
                    className="w-full"
                  >
                    <Card className="border-0 shadow-lg overflow-hidden group cursor-pointer bg-white">
                      <CardContent className="flex flex-col items-start gap-6 sm:gap-7 p-4 sm:p-6 h-full">
                        {/* Mobile Article Image */}
                        <div className="flex flex-col w-full items-start gap-6 sm:gap-8">
                          <motion.div
                            className="w-full h-48 sm:h-56 md:h-64 rounded-xl overflow-hidden shadow-[0px_0px_0px_1px_#e9ebf1] relative"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                          >
                            {imageErrors[blogArticles[currentSlide].id] ? (
                              <div className="h-full rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 border-4 border-solid border-white relative overflow-hidden flex items-center justify-center">
                                <div className="text-center">
                                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                    <svg
                                      className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z"
                                      />
                                    </svg>
                                  </div>
                                  <p className="text-blue-600 font-medium text-sm sm:text-base">
                                    Blog Image
                                  </p>
                                  <p className="text-blue-500 text-xs sm:text-sm">
                                    Loading...
                                  </p>
                                </div>
                              </div>
                            ) : (
                              <motion.div
                                className="h-full rounded-xl border-4 border-solid border-white relative overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                              >
                                <img
                                  src={blogArticles[currentSlide].image}
                                  alt={blogArticles[currentSlide].title}
                                  className="w-full h-full object-cover"
                                  onError={() =>
                                    handleImageError(
                                      blogArticles[currentSlide].id
                                    )
                                  }
                                  onLoad={() =>
                                    handleImageLoad(
                                      blogArticles[currentSlide].id
                                    )
                                  }
                                  loading="lazy"
                                />
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100"
                                  transition={{ duration: 0.3 }}
                                />
                              </motion.div>
                            )}
                          </motion.div>

                          {/* Mobile Tags */}
                          <motion.div
                            className="flex items-center gap-2 sm:gap-3 flex-wrap"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                          >
                            {blogArticles[currentSlide].tags.map(
                              (tag, tagIndex) => (
                                <Badge
                                  key={tagIndex}
                                  className="px-2 py-1 sm:px-3 sm:py-1.5 bg-[#f8fafc] text-[#64607d] text-xs sm:text-sm font-medium border-0 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300"
                                >
                                  {tag}
                                </Badge>
                              )
                            )}
                          </motion.div>
                        </div>

                        {/* Mobile Article Content - Flex grow to push button to bottom */}
                        <motion.div
                          className="flex flex-col items-start gap-3 sm:gap-4 w-full flex-grow"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <motion.h3
                            className="[font-family:'Inter',Helvetica] font-semibold text-[#060b13] text-lg sm:text-xl leading-relaxed sm:leading-8 group-hover:text-blue-600 transition-colors duration-300"
                            whileHover={{ x: 2 }}
                            transition={{ duration: 0.2 }}
                          >
                            {blogArticles[currentSlide].title}
                          </motion.h3>

                          <motion.p
                            className="[font-family:'Inter',Helvetica] font-normal text-[#64607d] text-sm sm:text-base leading-relaxed sm:leading-7 flex-grow"
                            whileHover={{ x: 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            {blogArticles[currentSlide].description}
                          </motion.p>
                        </motion.div>

                        {/* Read More Button - Mobile - Fixed at bottom */}
                        <motion.div
                          className="w-full mt-auto pt-2"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.4 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            variant="outline"
                            className="w-full h-12 sm:h-14 rounded-lg shadow-[0px_0.5px_1px_#666d8033,0px_3px_4px_-2px_#80889729,0px_0px_0px_1.5px_#e9ebf1] bg-[linear-gradient(180deg,rgba(236,239,243,0)_0%,rgba(236,239,243,0.04)_100%)] [font-family:'Inter',Helvetica] font-medium text-[#060b13] text-sm sm:text-base tracking-[-0.18px] hover:shadow-lg hover:bg-[#f7f8fa] transition-all duration-300 group flex items-center justify-center min-h-[44px]"
                          >
                            Read More
                            <motion.div
                              className="w-5 h-5 sm:w-6 sm:h-6 ml-2"
                              whileHover={{ x: 3 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                            </motion.div>
                          </Button>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button - Responsive */}
        <motion.div
          className="flex items-center justify-center w-full"
          variants={buttonVariants}
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white border-2 border-[#1890FF] text-[#1890FF] hover:bg-[#1890FF] hover:text-white font-medium transition-all duration-200 shadow-lg min-h-[44px] min-w-[44px]"
              style={{
                width: "clamp(140px, 40vw, 180px)",
                height: "clamp(44px, 12vw, 52px)",
                borderRadius: "8px",
                fontSize: "clamp(14px, 4vw, 16px)",
              }}
            >
              <span className="whitespace-nowrap font-inter">
                View All Blogs
              </span>
              <motion.div
                animate={{
                  x: [0, 3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  x: 5,
                  transition: { duration: 0.2 },
                }}
              >
                <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
