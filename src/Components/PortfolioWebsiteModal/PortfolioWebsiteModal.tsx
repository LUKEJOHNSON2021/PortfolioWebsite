import { IconButton, Tooltip, Typography } from "@mui/material";
import { FaGithub } from "react-icons/fa";

const PortfolioWebsiteModal = () => {
  return (
    <div style={{ overflow: "auto", display: "flex", flex: 1, flexDirection: "column" }}>
      <div style={{ flex: 0.4, display: "flex", flexDirection: "column" }}>
        <Typography variant="body1">
          My portfolio website serves as a comprehensive showcase of my diverse projects and skills. Built using React with TypeScript, it leverages
          the robust UI components from Material-UI to ensure an intuitive and engaging user experience. The website is not just a static presentation
          but is dynamically linked to my GitHub repository, enabling seamless Continuous Integration and Continuous Deployment (CI/CD) through
          Vercel. This setup ensures that any updates pushed to GitHub trigger automatic deployments, keeping the site continuously up-to-date.
        </Typography>
        {/* Spacer */}
        <Typography variant="h6" color="inherit" noWrap>
          &nbsp;
        </Typography>
        <Typography variant="body1">
          Designed with responsiveness in mind, the website adapts seamlessly across all devices, including mobile phones, tablets, and desktops.
          Whether accessed on a small screen or a large monitor, users experience consistent performance and accessibility. The responsive design
          ensures that content is optimally displayed and navigable regardless of the device used, enhancing usability and engagement.
        </Typography>
        {/* Spacer */}
        <Typography variant="h6" color="inherit" noWrap>
          &nbsp;
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Typography variant="body1">
            The website also has a publically available github repository, which can be accessed by clicking this button.
          </Typography>
          <Tooltip title="Github">
            <IconButton href={"https://github.com/LUKEJOHNSON2021/PortfolioWebsite"} target="_blank">
              <FaGithub fontSize={30} color={"black"} />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <div style={{ flex: 0.6, padding: "20px" }}></div>
    </div>
  );
};

export default PortfolioWebsiteModal;
