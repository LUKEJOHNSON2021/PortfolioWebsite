import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./ContactScreen.css";
import Footer from "../Footer/Footer";
import { Tooltip, IconButton } from "@mui/material";
import { FaGlobe } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export default function ContactScreen() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <motion.div className="contact-screen" ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
      <div className="contact">
        <div>
          <motion.h1 initial={{ opacity: 0, y: -150 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            Contact Me on my new Site or via LinkedIn
          </motion.h1>
          {/* Link to https://www.lukejohnsondev.com/ */}
          <motion.div initial={{ opacity: 0, y: -150 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="contact-link">
            <Tooltip title="Website">
              <IconButton href="https://www.lukejohnsondev.com/" target="_blank">
                <FaGlobe fontSize={40} color={"white"} />
              </IconButton>
            </Tooltip>
          </motion.div>
        </div>
      </div>
      <div className="footer-box">
        <Footer />
      </div>
    </motion.div>
  );
}
