import { motion } from "framer-motion";
import "./LandingScreen.css";
import { useEffect } from "react";

interface LandingScreenProps {
  scrollToNext: () => void;
}

export default function LandingScreen({ scrollToNext }: LandingScreenProps) {
  const titleText = "I'm Luke Johnson".split(" ");
  const subHeadingText = "A Graduate from the University of Hull with a First Class Degree in Computer Science (Software Engineering)".split(" ");

  const scrollThreshold = 100; // Adjust this value as needed to determine when to scroll

  //Used for snapping to project screen when scrolling for cleaner look
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        scrollToNext();
        window.removeEventListener("scroll", handleScroll); // Remove event listener after scrolling once
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup: remove event listener on component unmount
    };
  }, [scrollToNext]);

  return (
    <div className="gradient-background">
      <div className="title-bar">
        <div>
          {titleText.map((el, i) => (
            <motion.span
              className="top-bar-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 10,
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
        </div>
        <div>
          {subHeadingText.map((el, i) => (
            <motion.span
              className="top-bar-secondary-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 10,
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}
