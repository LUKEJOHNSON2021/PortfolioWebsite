import { Typography } from "@mui/material";

import { SyncUpLogo, SyncUpHomePage, SyncUpEventPage, SyncUpOrgPage } from "../../assets";

import useWindowWidth from "../../hooks/useWindowWidth";
import Spacer from "../Spacer/Spacer";

export default function SyncUpModal() {
  const { isSmallScreen } = useWindowWidth();

  return (
    <div className="modal-child-box">
      <Typography variant="body1">
        Sync-Up is a mobile application built and designed by me and a peer from University, for the Warren Project who are a charity based in Hull.
        The app provides information about events in the local area hosted by other organisations linked with the Warren Project, depending on the
        user's interests. I focused on the front-end design and devleopment, first I designed the UI/UX using Adobe Xd while communicating with the
        Warren Project to get feedback and make changes where needed. I then developed the app using React Native with TypeScript implementing the
        API's my peer created.
      </Typography>
      <Spacer />
      <Typography variant="body1">
        Sync-Up is currently in the final stages of development and will be available soon on both the App Store and Google Play Store.
      </Typography>
      <Spacer />
      <div className={`container ${isSmallScreen ? "small-screen" : ""}`}>
        <img src={SyncUpLogo} alt="Sync-Up Logo" className={`image ${isSmallScreen ? "large" : ""}`} />
        <img src={SyncUpHomePage} alt="Sync-Up Home Page" className={`image ${isSmallScreen ? "large" : ""} boarder`} />
        <img src={SyncUpEventPage} alt="Sync-Up Event Page" className={`image ${isSmallScreen ? "large" : ""} boarder`} />
        <img src={SyncUpOrgPage} alt="Sync-Up Organisation Page" className={`image ${isSmallScreen ? "large" : ""} boarder`} />
      </div>
    </div>
  );
}
