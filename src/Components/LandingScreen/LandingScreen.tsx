import { motion } from "framer-motion";
import "./LandingScreen.css";

export default function LandingScreen() {
  const titleText = "I'm Luke Johnson".split(" ");
  const subHeadingText =
    "A Graduate from the University of Hull with a First Class Bachelor of Science Degree with Honours in Computer Science (Software Engineering)".split(
      " "
    );

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
