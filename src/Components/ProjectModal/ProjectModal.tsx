import { Box, Fade, Modal, Typography, styled, IconButton } from "@mui/material";
import React from "react";
import { IoMdClose } from "react-icons/io";

interface ProjectModalProps {
  open: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  title: string;
}

const ModalBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[5],
  padding: theme.spacing(3, 3),
  width: "70%",
  height: "80%",
  borderRadius: 15,
  outline: "none",
}));

export default function ProjectModal({ open, setModal, children, title }: ProjectModalProps) {
  const handleClose = () => {
    setModal(false);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Fade in={open}>
        <ModalBox style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",

              alignContent: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h3" id="transition-modal-title" color="#000">
              {title}
            </Typography>
            <div
              style={{
                alignContent: "center",
              }}
            >
              <IconButton onClick={handleClose}>
                <IoMdClose />
              </IconButton>
            </div>
          </div>
          <div style={{ display: "flex", flex: 1, color: "#000", backgroundColor: "green", overflow: "auto" }}>{children}</div>
        </ModalBox>
      </Fade>
    </Modal>
  );
}
