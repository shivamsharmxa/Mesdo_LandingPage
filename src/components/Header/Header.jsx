import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const mobileItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      x: -20,
      opacity: 0,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  const handleMobileNavClick = (itemName) => {
    setActiveTab(itemName);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
        style={{ minHeight: "64px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-16 min-h-[64px]">
            {/* Logo - Responsive sizing */}
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
                  className="h-8 sm:h-10 w-auto object-contain mt-[-6px]"
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
                <span className="text-lg sm:text-xl font-bold text-[#060b13] font-inter">
                  Mesdo
                </span>
                {/* Fallback text logo (hidden by default) */}
                <div
                  className="hidden items-center space-x-2"
                  id="fallback-logo"
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-[#0F73FF] to-[#1890FF] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs sm:text-sm">
                      M
                    </span>
                  </div>
                  <span className="text-base sm:text-lg font-semibold text-[#060b13] font-inter">
                    Mesdo
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation Links */}
            <motion.nav
              className="hidden lg:flex items-center space-x-6 xl:space-x-8"
              variants={itemVariants}
            >
              {navigationItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center ${
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

            {/* Desktop CTA Button */}
            <motion.div
              className="hidden md:flex items-center"
              variants={itemVariants}
            >
              <motion.button
                className="px-4 py-2 sm:px-6 sm:py-2.5 bg-gradient-to-r from-[#0F73FF] to-[#1890FF] text-white font-medium text-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 min-h-[44px] min-w-[44px]"
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
            <motion.div
              className="lg:hidden flex items-center"
              variants={itemVariants}
            >
              <motion.button
                onClick={toggleMobileMenu}
                className="relative p-2 rounded-lg text-[#64607d] hover:text-[#1890FF] hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center border border-gray-200 hover:border-[#1890FF]/30"
                style={{
                  minHeight: "40px",
                  minWidth: "40px",
                  height: "40px",
                  width: "40px",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle mobile menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center justify-center"
                    >
                      <X className="w-5 h-5 stroke-2" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center justify-center"
                    >
                      <Menu className="w-5 h-5 stroke-2" />
                    </motion.div>
                  )}
                </AnimatePresence>
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              className="absolute top-16 left-4 right-4 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="py-4">
                {/* Mobile Navigation Links */}
                <nav className="px-2">
                  {navigationItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className={`relative flex items-center px-4 py-3 text-base font-medium transition-colors duration-200 rounded-xl mx-2 mb-1 min-h-[44px] ${
                        activeTab === item.name
                          ? "text-[#1890FF] bg-[#1890FF]/5"
                          : "text-[#64607d] hover:text-[#1890FF] hover:bg-gray-50"
                      }`}
                      onClick={() => handleMobileNavClick(item.name)}
                      variants={mobileItemVariants}
                      custom={index}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.name}

                      {/* Active indicator for mobile */}
                      {activeTab === item.name && (
                        <motion.div
                          className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0F73FF] to-[#1890FF] rounded-r-full"
                          layoutId="mobileActiveIndicator"
                          initial={{ opacity: 0, scaleY: 0 }}
                          animate={{ opacity: 1, scaleY: 1 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                      )}
                    </motion.a>
                  ))}
                </nav>

                {/* Mobile CTA Button */}
                <motion.div
                  className="px-6 pt-4 border-t border-gray-100"
                  variants={mobileItemVariants}
                  custom={navigationItems.length}
                >
                  <motion.button
                    className="w-full px-6 py-3 bg-gradient-to-r from-[#0F73FF] to-[#1890FF] text-white font-medium text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 min-h-[44px]"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 25px rgba(24, 144, 255, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
