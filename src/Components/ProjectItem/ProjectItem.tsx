import { Button, Card, CardContent, CardMedia, Chip, IconButton, Link, Tooltip, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import "./ProjectItem.css";
import { useState } from "react";
import ProjectModal from "../ProjectModal/ProjectModal";
import { IProjectItem } from "../../Interfaces/IProjectItem";

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

export default function ProjectItem({ title, description, img, imgAlt, chips, link, websiteLink, scale, modalInfo }: IProjectItem) {
  const [modal, setModal] = useState(false);

  //opening the modal
  const handleClick = () => {
    setModal(true);
  };

  return (
    <motion.div variants={containerVariants} style={{ padding: 5, height: "100%", display: "flex", flexDirection: "column" }}>
      <Button
        style={{
          height: "100%",
          width: "100%",
          textAlign: "left",
        }}
        onClick={handleClick}
      >
        <Card
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderWidth: 0,
            boxShadow: "5px 15px 15px rgba(0, 0, 0, 0.3)",
            width: "100%",
          }}
        >
          <CardMedia
            component="img"
            image={img}
            alt={imgAlt ? imgAlt : "Project Image"}
            style={{ height: 150, width: 250, objectFit: "contain", transform: `scale(${scale ? scale : 1})`, margin: "auto" }}
          />
          <CardContent style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
            <div className="project-item-text-box">
              <div className="project-item-container">
                <Typography variant="h5" color="textSecondary">
                  {title}
                </Typography>
                {link && (
                  <Tooltip title="Github">
                    <IconButton href={link} target="_blank">
                      <FaGithub fontSize={30} color={"black"} />
                    </IconButton>
                  </Tooltip>
                )}
              </div>
              <div>
                <Typography variant="caption" color="textSecondary" component="p">
                  {description}
                </Typography>
                {websiteLink && (
                  <Link href={websiteLink} target="_blank" color="primary" variant="subtitle2">
                    {websiteLink}
                  </Link>
                )}
              </div>
            </div>
            <div className="chips-contianer">
              {chips && (
                <div className="chips-box">
                  {chips.map((chip) => (
                    <Chip key={chip.name} label={chip.name} style={{ margin: 2, background: chip.color }} />
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </Button>
      <ProjectModal open={modal} setModal={setModal} children={modalInfo} title={title} />
    </motion.div>
  );
}
