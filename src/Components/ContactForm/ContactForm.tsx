import React, { useRef } from "react";
import { Button, Container, TextField } from "@mui/material";
import emailjs from "@emailjs/browser";

import "./ContactForm.css";

interface ContactFormProps {
  setSnackbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSnackbarMessage: React.Dispatch<React.SetStateAction<string>>;
  setSnackbarSeverity: React.Dispatch<React.SetStateAction<"success" | "error">>;
}

const ContactForm = ({ setSnackbarMessage, setSnackbarOpen, setSnackbarSeverity }: ContactFormProps) => {
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

  return (
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
  );
};

export default ContactForm;
