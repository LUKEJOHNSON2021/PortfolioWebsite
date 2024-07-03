import { Typography } from "@mui/material";
import useWindowWidth from "../../hooks/useWindowWidth";

import { OrganizeTimeMobile, OrganizeTimeDesktop1, OrganizeTimeDesktop2, OrganizeTimeTesting } from "../../assets";

import Spacer from "../Spacer/Spacer";

export default function OrganizeTimeModal() {
  const { isSmallScreen } = useWindowWidth();

  return (
    <div className="modal-child-box">
      <Typography variant="body1">
        My dissertation project, Organize Time, comprised a suite of mobile, desktop, and backend applications designed to assist users in managing
        their time. It allowed users to create tasks, which were then automatically scheduled on their Google Calendar based on their availability and
        task context. The project was developed using React Native for mobile, React with Electron for the desktop application, and NestJS for the
        backend.
      </Typography>
      <Spacer />
      <Typography variant="body1">
        The application fully utilizes the Google Sign In API to authenticate users and access their Google Calendar. The backend server was built
        using NestJS, which provided a RESTful API for the frontend applications to interact with. The backend also utilized the Google Calendar API
        to create and manage events on the user's calendar. The desktop application was built using React with Electron while the mobile application
        uses React Native, allowing for a seamless user experience across all platforms. Unit testing was also setup using Jest to validate the
        functionality of the application after each save.
      </Typography>
      <div className={`container ${isSmallScreen ? "small-screen" : ""}`}>
        <img src={OrganizeTimeMobile} alt="Organize Time Mobile" className={`image ${isSmallScreen ? "large" : "wider"}`} />
        <img src={OrganizeTimeDesktop1} alt="Organize Time Desktop Login Page" className={`image ${isSmallScreen ? "large" : "wider"}`} />
        <img src={OrganizeTimeDesktop2} alt="Organize Time Desktop Home Page" className={`image ${isSmallScreen ? "large" : "wider"}`} />
        <img src={OrganizeTimeTesting} alt="Organize Time Testing" className={`image ${isSmallScreen ? "large" : "wider"}`} />
      </div>
    </div>
  );
}
