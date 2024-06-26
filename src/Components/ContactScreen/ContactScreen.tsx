import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./ContactScreen.css";
import Footer from "../Footer/Footer";
import ContactForm from "../ContactForm/ContactForm";

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
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <motion.div className="contact-screen" ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
      <ContactForm />
      <footer className="footer">
        <Footer />
      </footer>
    </motion.div>
  );
}
