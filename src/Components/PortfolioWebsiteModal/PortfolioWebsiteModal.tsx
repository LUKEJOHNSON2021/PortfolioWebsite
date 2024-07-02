import { Typography } from "@mui/material";

export default function PortfolioWebsiteModal() {
  return (
    <div style={{ overflow: "auto", display: "flex", flex: 1, flexDirection: "column" }}>
      <div style={{ backgroundColor: "red", flex: 0.7 }}>PortfolioWebsiteModal</div>
      <div style={{ flex: 0.3 }}>
        <Typography variant="body1">
          A portfolio website built to showcase my projects and skills. Developed in React using TypeScript with UI elements from Material-UI.
        </Typography>
      </div>
    </div>
  );
}
