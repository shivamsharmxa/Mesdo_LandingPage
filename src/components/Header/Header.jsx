import { motion } from "framer-motion";
import { useState } from "react";

export const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const navigationItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Blogs", href: "#blogs" },
    { name: "Contact Us", href: "#contact" },
  ];

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center space-x-2">
              <img
                src="/mesdologo1.png"
                alt="Mesdo Logo"
                className="h-10 w-auto object-contain mt-[-6px]"
                onLoad={() => {
                  console.log("Mesdo logo loaded successfully");
                }}
                onError={(e) => {
                  console.error("Logo failed to load:", e.target.src);
                  // Show fallback logo
                  e.target.style.display = "none";
                  const fallback = document.getElementById("fallback-logo");
                  if (fallback) {
                    fallback.style.display = "flex";
                  }
                }}
              />
              <span className="text-xl font-bold text-[#060b13] font-inter">
                Mesdo
              </span>
              {/* Fallback text logo (hidden by default) */}
              <div className="hidden items-center space-x-2" id="fallback-logo">
                <div className="w-8 h-8 bg-gradient-to-br from-[#0F73FF] to-[#1890FF] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="text-[18px]  font-semibold text-[#060b13] font-inter">
                  Mesdo
                </span>
              </div>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.nav
            className="hidden md:flex items-center space-x-8"
            variants={itemVariants}
          >
            {navigationItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeTab === item.name
                    ? "text-[#1890FF]"
                    : "text-[#64607d] hover:text-[#1890FF]"
                }`}
                onClick={() => setActiveTab(item.name)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}

                {/* Active indicator */}
                {activeTab === item.name && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0F73FF] to-[#1890FF] rounded-full"
                    layoutId="activeIndicator"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}

                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-[#1890FF]/5 rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </motion.nav>

          {/* CTA Button */}
          <motion.div
            className="hidden md:flex items-center"
            variants={itemVariants}
          >
            <motion.button
              className="px-6 py-2.5 bg-gradient-to-r from-[#0F73FF] to-[#1890FF] text-white font-medium text-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(24, 144, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div className="md:hidden" variants={itemVariants}>
            <motion.button
              className="p-2 rounded-lg text-[#64607d] hover:text-[#1890FF] hover:bg-gray-50 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Subtle glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#0F73FF]/5 via-transparent to-[#1890FF]/5 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </motion.header>
  );
};
