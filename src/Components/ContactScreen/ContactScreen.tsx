import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./ContactScreen.css";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";

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
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  return (
    <motion.div className="contact-screen" ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
      <div className="contact">
        <motion.h1 initial={{ opacity: 0, y: -150 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          Contact Me
        </motion.h1>
        <ContactForm setSnackbarMessage={setSnackbarMessage} setSnackbarOpen={setSnackbarOpen} setSnackbarSeverity={setSnackbarSeverity} />
        <div className="footer-box">
          <Footer />
        </div>
        <Snackbar open={snackbarOpen} autoHideDuration={5000} onClose={handleSnackbarClose} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
          <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} variant="filled" sx={{ width: "100%" }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </div>
    </motion.div>
  );
}
