import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Container, Grid } from "@mui/material";
import ProjectItem from "../ProjectItem/ProjectItem";

import "./ProjectScreen.css";
import portfolioWebsiteImg from "../../assets/PortfolioWebsite.png";
import syncupmobileappImg from "../../assets/SyncUpMobileApp.png";
import gameHubImg from "../../assets/Game-hubWebsite.png";
import organizeTimeImg from "../../assets/OrganizeTimeLogo.png";
import aspNetCoreImg from "../../assets/asp-net-core-web-api.png";

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

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A portfolio website built to showcase my projects and skills. Developed in React using TypeScript with UI elements from Material-UI.",
    img: portfolioWebsiteImg,
    imgAlt: "Portfolio Website",
    chips: [
      { name: "React", color: "#58C4DC" },
      { name: "TypeScript", color: "#2661B9" },
      { name: "Material-UI", color: "#1976D2" },
    ],
    link: "https://github.com/LUKEJOHNSON2021/PortfolioWebsite",
    scale: 1.1,
  },
  {
    id: 2,
    title: "Sync Up",
    description:
      "Sync Up is a mobile app designed and programmed for the Warren Project, a charity in Hull, that provides information about events in the local area depending on the user's interests.",
    img: syncupmobileappImg,
    imgAlt: "Sync Up Mobile App",
    chips: [
      { name: "React-Native", color: "#58C4DC" },
      { name: "TypeScript", color: "#2661B9" },
      { name: "UI-Design", color: "#8c19ff" },
    ],
    scale: 1.1,
  },
  {
    id: 3,
    title: "Game Hub",
    description:
      "Game Hub is a project built while learning React and TypeScript. It showcases a variety of games and uses the rawg.io API to fetch game data.",
    img: gameHubImg,
    imgAlt: "Game Hub Website",
    chips: [
      { name: "React", color: "#58C4DC" },
      { name: "TypeScript", color: "#2661B9" },
      { name: "Chakra-UI", color: "#298683" },
    ],
    link: "https://github.com/LUKEJOHNSON2021/Game-hub",
    websiteLink: "https://game-hub-tau-eight.vercel.app/",
    scale: 1.1,
  },
  {
    id: 4,
    title: "Organize Time",
    description:
      "My dissertation project, Organize Time, included a suite of mobile, desktop, and backend applications. These applications were designed to determine the best time to schedule a task based on the user's existing Google Calendar.",
    img: organizeTimeImg,
    chips: [
      { name: "React", color: "#58C4DC" },
      { name: "React-Native", color: "#58C4DC" },
      { name: "TypeScript", color: "#2661B9" },
      { name: "NestJS", color: "#E10A44" },
      { name: "Google-API", color: "#4285F4" },
    ],
    scale: 0.8,
  },
  {
    id: 5,
    title: "ASP.NET Client / Server Application",
    description:
      "A client/server application built using ASP.NET and C# using Entity Framework. The application allows users to send messages between a client and the server, logging in and out of the server, and storing logs of messages in a database.",
    img: aspNetCoreImg,
    chips: [
      { name: "C#", color: "#3F06CA" },
      { name: "ASP.NET Core", color: "#B358CE" },
      { name: "Entity Framework", color: "#511063" },
      { name: "Encryption", color: "#c91400" },
    ],
    scale: 0.9,
  },
];

export default function ProjectScreen() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      <Container
        maxWidth="lg"
        style={{
          paddingTop: "10px",
          overflow: "auto",
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          {projects.map((project) => (
            <Grid item key={project.id} xs={12} sm={6} md={5} lg={4} style={{ display: "flex", justifyContent: "center" }}>
              <ProjectItem
                title={project.title}
                description={project.description}
                img={project.img}
                chips={project.chips}
                link={project.link}
                websiteLink={project.websiteLink}
                scale={project.scale}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
}
