import { ArrowUpRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Section } from "../../../../components/common/Section";

export const AdditionalFeaturesSection = () => {
  // Arrange features exactly as shown in the image - in a grid format
  const featureGrid = [
    ["Peer-to-Peer Messaging", "Community Forums", "Case Discussions"],
    ["Verified Institutions", "Trust Score", "Recruiter Chat"],
    ["Tailored Resume", "Instant Apply", "Custom Notifications"],
    ["AI Role Matching", "AI Interview", "AI Assistant"],
    ["Application Tracker", "Profile Analytics", "Group Creations"],
    ["Top Hospital Listings", "Personalised Job Suggestions", "Learning Hub"],
    ["Live-Profile Building", "Post Creation", "Running Ads"],
  ];

  // Convert grid to columns for animation
  const createColumns = () => {
    const columns = [[], [], []];
    featureGrid.forEach((row) => {
      row.forEach((feature, colIndex) => {
        columns[colIndex].push(feature);
      });
    });
    return columns;
  };

  const featureColumns = createColumns();

  // Create duplicated columns for seamless infinite scroll
  const createInfiniteColumn = (column) => [
    ...column,
    ...column,
    ...column,
    ...column,
  ];

  return (
    <Section padding="lg">
      <div className="flex justify-center w-full px-4 sm:px-6 lg:px-8">
        <Card
          className="flex flex-col lg:flex-row items-start gap-4 sm:gap-6 lg:gap-8 rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] overflow-hidden border-none shadow-xl w-full max-w-[1140px] p-6 sm:p-8 lg:p-16"
          style={{
            height: "auto",
            minHeight: "300px",
            background: "linear-gradient(135deg, #0F73FF 0%, #1890FF 100%)",
          }}
        >
          <CardContent className="flex-1 p-0 h-full w-full lg:w-auto">
            <div className="flex flex-col items-start justify-center gap-6 lg:gap-8 h-full">
              <div className="flex gap-4 sm:gap-5 lg:gap-6 flex-col items-start w-full">
                <h2 className="font-inter font-medium text-white text-xl sm:text-2xl lg:text-[32px] leading-tight sm:leading-[1.3] lg:leading-[40px] max-w-full lg:max-w-[400px]">
                  And That's Just the Beginning...
                </h2>

                <p className="font-inter font-normal text-white/90 text-sm sm:text-base lg:text-[16px] leading-relaxed sm:leading-[1.5] lg:leading-[24px] max-w-full lg:max-w-[400px]">
                  From in-app chat to verified credentials and AI-powered job
                  suggestions, Mesdo is built to do more than just connect you
                  with hospitals
                </p>
              </div>

              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="default"
                  size="lg"
                  className="flex items-center justify-center gap-2 px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 bg-white rounded-[8px] text-[#1890FF] hover:bg-gray-50 font-medium text-sm sm:text-base lg:text-[16px] h-auto transition-all duration-200 w-full sm:w-auto min-h-[44px]"
                >
                  <span className="whitespace-nowrap">Get Early Access</span>
                  <motion.div
                    animate={{
                      x: [0, 3, 0],
                      y: [0, -2, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{
                      x: 5,
                      y: -3,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <ArrowUpRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.div>
                </Button>
              </motion.div>
            </div>
          </CardContent>

          <div
            className="flex-1 flex items-start justify-center h-[200px] sm:h-[250px] lg:h-full overflow-hidden relative w-full mt-4 lg:mt-0"
            style={{ gap: "16px" }}
          >
            {featureColumns.map((column, columnIndex) => {
              const infiniteColumn = createInfiniteColumn(column);
              const isEvenColumn = columnIndex % 2 === 0;

              return (
                <div
                  key={`column-${columnIndex}`}
                  className="flex flex-col items-center h-full overflow-hidden relative"
                  style={{ width: "32%", gap: "12px" }}
                >
                  <motion.div
                    className="flex flex-col items-center absolute"
                    style={{ gap: "16px" }}
                    animate={{
                      y: isEvenColumn
                        ? [0, -(column.length * 60)] // Updated calculation: 44px height + 16px gap
                        : [-(column.length * 60), 0], // Opposite direction
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                      delay: columnIndex * 2,
                    }}
                  >
                    {infiniteColumn.map((feature, featureIndex) => (
                      <motion.div
                        key={`feature-${columnIndex}-${featureIndex}`}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(255, 255, 255, 0.35)",
                        }}
                        transition={{ duration: 0.2 }}
                        className="w-full flex justify-center"
                      >
                        <Badge
                          className="inline-flex items-center justify-center px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 bg-white/20 backdrop-blur-sm rounded-[10px] text-white text-xs sm:text-sm lg:text-[13px] font-normal hover:bg-white/30 transition-all duration-200 border border-white/10 cursor-pointer text-center leading-tight"
                          style={{
                            height: "44px",
                            minHeight: "44px",
                            width: "100%",
                            maxWidth: "160px",
                            minWidth: "140px",
                            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            wordBreak: "break-word",
                            hyphens: "auto",
                            lineHeight: "1.2",
                          }}
                        >
                          <span className="text-center px-1">{feature}</span>
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </Section>
  );
};
