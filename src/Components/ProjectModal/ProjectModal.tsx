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
  borderRadius: 15,
  outline: "none",
  width: "70%",
  height: "80%",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    height: "100%",
  },
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
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h3" id="transition-modal-title" color="#000">
              {title}
            </Typography>
            <div>
              <IconButton onClick={handleClose}>
                <IoMdClose />
              </IconButton>
            </div>
          </div>
          <div style={{ flex: 1, color: "#000", overflow: "auto" }}>{children}</div>
        </ModalBox>
      </Fade>
    </Modal>
  );
}
