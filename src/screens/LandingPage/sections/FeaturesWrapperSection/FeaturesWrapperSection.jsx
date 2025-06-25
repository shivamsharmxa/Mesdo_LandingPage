import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturesWrapperSection = () => {
  const [imageErrors, setImageErrors] = useState({});

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
      className="flex flex-col items-center px-[150px] py-[200px] bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="flex flex-col items-center gap-20 w-full max-w-[1140px]">
        <div className="flex flex-col items-start gap-20 w-full">
          {/* Section Header */}
          <motion.div
            className="flex flex-col items-center justify-center gap-6 w-full"
            variants={headerVariants}
          >
            <div className="flex flex-col items-center justify-center gap-3.5">
              <motion.span
                className="[font-family:'Inter',Helvetica] font-medium text-primary-6 text-sm tracking-[-0.18px] leading-[23.8px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                Our Blog
              </motion.span>

              <motion.h2
                className="[font-family:'Inter',Helvetica] font-medium text-[#060b13] text-[43.5px] tracking-[-1.25px] leading-[57.6px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Blog &amp; Articles
              </motion.h2>
            </div>

            <motion.p
              className="w-full max-w-[918px] [font-family:'Inter',Helvetica] font-normal text-[#363d4f] text-base text-center leading-8"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Unlock the power of data analytics and gain actionable insights to
              make informed business decisions. Enhance your website&#39;s
              visibility
            </motion.p>
          </motion.div>

          {/* Blog Articles */}
          <motion.div
            className="flex items-center gap-9 w-full"
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
                  <CardContent className="flex flex-col items-start gap-7 p-0">
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
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
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
                          <motion.div
                            key={tagIndex}
                            whileHover={{ scale: 1.1, y: -2 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Badge
                              variant="secondary"
                              className="bg-[#f7f8fa] text-[#060b13] rounded-[40px] px-3 py-1 h-[24.4px] font-normal text-xs tracking-[0.01px] hover:bg-[#e9ebf1] transition-colors duration-200"
                            >
                              {tag}
                            </Badge>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>

                    {/* Article Title and Description */}
                    <motion.div
                      className="flex flex-col w-full items-start gap-[11px]"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                    >
                      <motion.h3
                        className="[font-family:'Inter',Helvetica] font-medium text-[#060b13] text-[22.1px] tracking-[-0.47px] leading-[28.8px] group-hover:text-[#1890FF] transition-colors duration-300"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {article.title}
                      </motion.h3>

                      <p className="[font-family:'Inter',Helvetica] font-normal text-[#363d4f] text-sm tracking-[-0.09px] leading-[23.8px]">
                        {article.description}
                      </p>
                    </motion.div>

                    {/* Read More Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.8 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="outline"
                        className="h-10 rounded-[999px] shadow-[0px_0.5px_1px_#666d8033,0px_3px_4px_-2px_#80889729,0px_0px_0px_1.5px_#e9ebf1] bg-[linear-gradient(180deg,rgba(236,239,243,0)_0%,rgba(236,239,243,0.04)_100%)] [font-family:'Inter',Helvetica] font-medium text-[#060b13] text-sm tracking-[-0.18px] px-4 hover:shadow-lg hover:bg-[#f7f8fa] transition-all duration-300 group"
                      >
                        Read More
                        <motion.div
                          className="w-6 h-6 ml-2 bg-[url(/zp0uupinr8caqcycnp5eyjyyzgk-svg.svg)] bg-[100%_100%]"
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Explore All Button */}
        <motion.div
          variants={buttonVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(24, 144, 255, 0.3)",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Button className="px-6 py-3 rounded-lg bg-[linear-gradient(180deg,rgba(15,115,255,1)_0%,rgba(24,144,255,1)_100%)] [font-family:'Inter',Helvetica] font-medium text-white text-base h-[52px] w-auto hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
            <span>Explore All</span>
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
              <ArrowRightIcon className="w-5 h-5" />
            </motion.div>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};
