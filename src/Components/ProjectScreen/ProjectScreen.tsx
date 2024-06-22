import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Container, Grid } from "@mui/material";
import ProjectItem from "../ProjectItem/ProjectItem";

import "./ProjectScreen.css";

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

export default function ProjectScreen() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A portfolio website built to showcase my projects and skills.",
      img: "https://via.placeholder.com/300",
      chips: [
        { name: "React", color: "#58C4DC" },
        { name: "TypeScript", color: "#2661B9" },
        { name: "Material-UI", color: "#1976D2" },
      ],
      link: "https://github.com/LUKEJOHNSON2021/PortfolioWebsite",
    },
    {
      id: 2,
      title: "Sync Up",
      description:
        "Sync Up is a mobile app created for the Warren Project, a charity in Hull, that provides information about events in the local area depending on the user's interests.",
      img: "https://via.placeholder.com/300",
      chips: [
        { name: "React-Native", color: "#58C4DC" },
        { name: "TypeScript", color: "#2661B9" },
      ],
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description of Project 3",
      img: "https://via.placeholder.com/300",
      chips: [
        { name: "React", color: "#58C4DC" },
        { name: "TypeScript", color: "#2661B9" },
        { name: "Material-UI", color: "#1976D2" },
      ],
    },
    {
      id: 4,
      title: "Project 4",
      description: "Description of Project 4",
      img: "https://via.placeholder.com/300",
      chips: [
        { name: "React", color: "#58C4DC" },
        { name: "TypeScript", color: "#2661B9" },
        { name: "Material-UI", color: "#1976D2" },
      ],
    },
    {
      id: 5,
      title: "Project 5",
      description: "Description of Project 5",
      img: "https://via.placeholder.com/300",
      chips: [
        { name: "React", color: "#58C4DC" },
        { name: "TypeScript", color: "#2661B9" },
        { name: "Material-UI", color: "#1976D2" },
      ],
    },
    {
      id: 6,
      title: "Project 6",
      description: "Description of Project 6",
      img: "https://via.placeholder.com/300",
      chips: [
        { name: "React", color: "#58C4DC" },
        { name: "TypeScript", color: "#2661B9" },
        { name: "Material-UI", color: "#1976D2" },
      ],
    },
  ];

  return (
    <motion.div
      className="gradient-background project-title-box"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.h1 initial={{ opacity: 0, y: -150 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }}>
        Projects
      </motion.h1>

      <Container maxWidth="lg" style={{ height: "100vh", overflowY: "auto", paddingTop: "20px" }}>
        <Grid container spacing={3} justifyContent="center">
          {projects.map((project) => (
            <Grid item key={project.id} xs={12} sm={6} md={5} lg={4} style={{ display: "flex", justifyContent: "center" }}>
              <ProjectItem title={project.title} description={project.description} img={project.img} chips={project.chips} link={project.link} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
}
