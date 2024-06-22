import { Box, Card, CardContent, CardMedia, Chip, IconButton, Tooltip, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { IChips } from "../../Interfaces/IChips";
import { FaGithub } from "react-icons/fa";

import "./ProjectItem.css";

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

interface ProjectItemProps {
  title: string;
  description: string;
  img?: string;
  chips: IChips[];
}

export default function ProjectItem({ title, description, img, chips }: ProjectItemProps) {
  return (
    <motion.div variants={itemVariants} style={{ padding: 10, height: "100%", display: "flex", flexDirection: "column" }}>
      <Card
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderWidth: 0,
          boxShadow: "5px 15px 15px rgba(0, 0, 0, 0.3)",
          width: "100%", // Ensures the card takes full width of its container
        }}
      >
        <CardMedia component="img" image="https://via.placeholder.com/300" alt="Project Image" style={{ height: 200, width: 350 }} />
        <CardContent>
          <div className="project-item-container">
            <Typography variant="h5" color="textSecondary">
              {title}
            </Typography>
            <Tooltip title="Github">
              <IconButton href="https://github.com/LUKEJOHNSON2021" target="_blank">
                <FaGithub fontSize={30} color={"black"} />
              </IconButton>
            </Tooltip>
          </div>
          <div>
            <Typography variant="caption" color="textSecondary" component="p">
              {description}
            </Typography>
          </div>
          <div className="chips-box">
            {chips.map((chip) => (
              <Chip key={chip.name} label={chip.name} style={{ margin: 2, background: chip.color }} />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
