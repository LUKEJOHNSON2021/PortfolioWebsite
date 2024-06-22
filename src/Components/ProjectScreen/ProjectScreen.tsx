import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./ProjectScreen.css";

export default function ProjectScreen() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  return (
    <div className="gradient_background project_title_box" ref={ref}>
      <motion.h1 initial={{ opacity: 0, y: -100 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }}>
        Projects
      </motion.h1>
    </div>
  );
}
