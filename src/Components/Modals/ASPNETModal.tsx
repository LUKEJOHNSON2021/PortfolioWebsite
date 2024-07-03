import { Typography } from "@mui/material";

import useWindowWidth from "../../hooks/useWindowWidth";

import { ASPNETPostMan, ASPNETFile, ASPNETProtectedCode } from "../../assets";

import Spacer from "../Spacer/Spacer";

export default function ASPNETModal() {
  const { isSmallScreen } = useWindowWidth();
  return (
    <div className="modal-child-box">
      <Typography variant="body1">
        This project was developed for a university assignemnt, and was my first time using ASP.NET Core Web API and Entity Framework Core. The
        project was a simple server and console based client application that allowed users to create, read, update and delete data from a database.
        The project also utilized middleware for authorization and authentication, ensuring that routes are protected from unauthorized access.
        Additionally, logging was implemented on protected routes to track requests made to the server. Along with this, various forms of encryption
        and hashing were explored to ensure data security during transmission over the network.
      </Typography>
      <Spacer />
      <Typography variant="body1">This Project also introduced external applications like PostMan for testing the API's created. </Typography>
      <Spacer />
      <div className={`container ${isSmallScreen ? "small-screen" : ""}`}>
        <img src={ASPNETPostMan} alt="ASP.NET PostMan" className={`image ${isSmallScreen ? "large" : "wider"}`} />
        <img src={ASPNETFile} alt="ASP.NET File" className={`image ${isSmallScreen ? "large" : "wider"}`} />
        <img src={ASPNETProtectedCode} alt="ASP.NET Protected Code" className={`image ${isSmallScreen ? "large" : "wider"}`} />
      </div>
    </div>
  );
}
