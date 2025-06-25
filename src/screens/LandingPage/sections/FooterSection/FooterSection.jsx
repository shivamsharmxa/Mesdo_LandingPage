import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import { motion } from "framer-motion";

import { Separator } from "../../../../components/ui/separator";

export const FooterSection = () => {
  // Navigation links data
  const footerLinks = [
    {
      title: "Stellar Page",
      links: [
        { name: "Home", href: "#" },
        { name: "About", href: "#" },
        { name: "Pricing", href: "#" },
      ],
    },
    {
      title: "Product",
      links: [
        { name: "Contact", href: "#", underline: true },
        { name: "Blog", href: "#" },
        { name: "Product", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Integration", href: "#" },
        { name: "Integration Detail", href: "#" },
        { name: "Sign Up", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "Login", href: "#" },
        { name: "404", href: "#" },
        { name: "More Templates", href: "#" },
      ],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const bottomVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.8,
      },
    },
  };

  const watermarkVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative w-full">
      {/* Main Footer Content */}
      <motion.footer
        className="relative w-full bg-[linear-gradient(180deg,rgba(24,144,255,1)_0%,rgba(15,115,255,1)_100%)] overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {/* Main Content */}
        <div className="relative z-10 w-full max-w-[1140px] mx-auto px-6 lg:px-0 py-16 lg:py-24">
          {/* Logo */}
          <motion.div className="mb-16 lg:mb-20" variants={logoVariants}>
            <motion.div
              className="font-medium text-white text-2xl lg:text-3xl [font-family:'Inter',Helvetica]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Mesdo
            </motion.div>
          </motion.div>

          {/* Footer Navigation Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-16"
            variants={containerVariants}
          >
            {footerLinks.map((column, columnIndex) => (
              <motion.div
                key={`column-${columnIndex}`}
                className="flex flex-col space-y-6"
                variants={columnVariants}
              >
                {/* Column Title */}
                <motion.h3
                  className="[font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[-0.18px] leading-[23.8px] mb-2"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {column.title}
                </motion.h3>

                {/* Column Links */}
                <div className="flex flex-col space-y-4">
                  {column.links.map((link, linkIndex) => (
                    <motion.div
                      key={`link-${columnIndex}-${linkIndex}`}
                      whileHover={{ x: 3, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.a
                        href={link.href}
                        className={`[font-family:'Inter',Helvetica] font-normal text-white/90 text-sm tracking-[-0.09px] leading-6 hover:text-white transition-colors duration-200 cursor-pointer block ${
                          link.underline ? "underline" : ""
                        }`}
                        whileHover={{ color: "rgba(255, 255, 255, 1)" }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {link.name}
                      </motion.a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer Bottom Section */}
          <motion.div variants={bottomVariants}>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Separator className="bg-white/30 h-[1px]" />
            </motion.div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-8 gap-6">
              {/* Copyright */}
              <motion.div
                className="flex items-center text-white/80"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="[font-family:'Inter',Helvetica] font-normal text-xs tracking-[0.01px] leading-[20.4px]">
                  Copyright ©2023 Flowbase.co
                </span>
              </motion.div>

              {/* Social Icons */}
              <motion.div
                className="flex space-x-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {[FacebookIcon, TwitterIcon, InstagramIcon].map(
                  (Icon, index) => (
                    <motion.div
                      key={`social-${index}`}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer group"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                      <Icon className="w-5 h-5 text-[#1890FF] group-hover:scale-110 transition-transform duration-200" />
                    </motion.div>
                  )
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.footer>

      {/* Separate Large "Mesdo" Text Section at Bottom - Seamless Connection */}
      <motion.div
        className="relative w-full overflow-hidden -mt-1"
        style={{
          height: "620px",
          background:
            "linear-gradient(180deg, rgba(15,115,255,1) 0%, rgba(24,144,255,1) 100%)",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={watermarkVariants}
      >
        <motion.div
          className="text-[600px] sm:text-[300px] md:text-[500px] lg:text-[500px] xl:text-[400px] font-black leading-none tracking-wider whitespace-nowrap absolute bottom-0 left-0"
          style={{
            color: "rgba(173, 216, 255, 0.9)",
            fontFamily: "Inter, Helvetica",
            transform: "translateY(50%)",
          }}
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 1.2 }}
          viewport={{ once: true }}
        >
          Mesdo
        </motion.div>
      </motion.div>
    </div>
  );
};
