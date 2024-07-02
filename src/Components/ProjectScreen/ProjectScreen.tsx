import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Container, Grid } from "@mui/material";

//components
import ProjectItem from "../ProjectItem/ProjectItem";
import { projects } from "./Projects";
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
  const headerRef = useRef<HTMLHeadingElement>(null);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      // Scroll the header into view when the component is in view
      if (headerRef.current) {
        headerRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [inView]);

  return (
    <div className="project-title-box" ref={ref}>
      <motion.h1
        initial={{ opacity: 0, y: 0 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        ref={headerRef}
      >
        Projects
      </motion.h1>

      <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
        <Container maxWidth="lg" className="projects-container">
          <Grid container spacing={2} justifyContent="center">
            {projects.map((project) => (
              <Grid item key={project.id} xs={12} sm={6} md={4} className="project-grid">
                <ProjectItem
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  img={project.img}
                  chips={project.chips}
                  link={project.link}
                  websiteLink={project.websiteLink}
                  scale={project.scale}
                  modalInfo={project.modalInfo}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </motion.div>
    </div>
  );
}
