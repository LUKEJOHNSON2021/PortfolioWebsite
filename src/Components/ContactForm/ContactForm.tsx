import React, { useRef, useState } from "react";
import { Alert, Button, Container, Snackbar, TextField } from "@mui/material";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import "./ContactForm.css";
import Footer from "../Footer/Footer";

const ContactForm = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSnackbarMessage("Email sent successfully!");
          setSnackbarOpen(true);
          setSnackbarSeverity("success");
        },
        () => {
          setSnackbarMessage("Failed to send email. Please try again.");
          setSnackbarOpen(true);
          setSnackbarSeverity("error");
        }
      );

    e.currentTarget.reset();
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className="contact">
      <motion.h1 initial={{ opacity: 0, y: -150 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        Contact Me
      </motion.h1>
      <Container className="contact-form-container">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <TextField label="Name" name="user_name" fullWidth margin="normal" required />
          <TextField label="Email" name="user_email" fullWidth margin="normal" type="email" required />
          <TextField label="Message" name="message" fullWidth margin="normal" multiline rows={4} required />
          <Button variant="contained" color="primary" type="submit">
            Send
          </Button>
        </form>
      </Container>
      <div className="footer-box">
        <Footer />
      </div>
      <Snackbar open={snackbarOpen} autoHideDuration={5000} onClose={handleSnackbarClose} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} variant="filled" sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ContactForm;
