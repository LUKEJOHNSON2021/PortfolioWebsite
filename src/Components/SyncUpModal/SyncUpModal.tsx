import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

import SyncUpLogo from "../../assets/Sync-Up-Logo.png";
import SyncUphomePage from "../../assets/SyncUpHomePage.png";
import SyncUpEventPage from "../../assets/SyncUpEventPage.png";
import SyncUpOrgPage from "../../assets/SyncUpOrgPage.png";

export default function SyncUpModal() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const isSmallScreen = windowWidth < 960; // 960px is the default breakpoint for "lg"

  return (
    <div style={{ overflow: "auto", display: "flex", flex: 1, flexDirection: "column" }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Typography variant="body1">
          Sync-Up is a mobile application built and designed by me and a peer from University, for the Warren Project who are a charity based in Hull.
          The app provides information about events in the local area hosted by other organisations linked with the Warren Project, depending on the
          user's interests. I focused on the front-end design and devleopment, first I designed the UI/UX using Adobe Xd while communicating with the
          Warren Project to get feedback and make changes where needed. I then developed the app using React Native with TypeScript implementing the
          API's my peer created.
        </Typography>
        {/* Spacer */}
        <Typography variant="h6" color="inherit" noWrap>
          &nbsp;
        </Typography>
        <Typography variant="body1">
          Sync-Up is currently in the final stages of development and will be available soon on both the App Store and Google Play Store.
        </Typography>
        {/* Spacer */}
        <Typography variant="h6" color="inherit" noWrap>
          &nbsp;
        </Typography>
        <div
          style={{
            justifyContent: "space-between",
            flexDirection: isSmallScreen ? "column" : "row", // Change flexDirection based on screen size
            overflowY: isSmallScreen ? "auto" : "unset", // Enable vertical scroll if small screen
            flex: 1,
            display: "flex",
            gap: isSmallScreen ? "10px" : "0", // Add gap between items if small screen
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={SyncUpLogo} alt="Sync-Up Logo" style={{ width: "70%", height: "auto" }} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: isSmallScreen ? "column" : "row", // Change flexDirection based on screen size
              alignItems: "center",
              justifyContent: "space-evenly",
              maxHeight: isSmallScreen ? "80vh" : "unset", // Limit height if small screen
              gap: isSmallScreen ? "10px" : "0", // Add gap between items if small screen
            }}
          >
            <img
              src={SyncUphomePage}
              alt="Sync-Up Home Page"
              style={{ width: isSmallScreen ? "80%" : "20%", height: "auto", border: "2px solid lightgrey" }}
            />
            <img
              src={SyncUpEventPage}
              alt="Sync-Up Event Page"
              style={{ width: isSmallScreen ? "80%" : "20%", height: "auto", border: "2px solid lightgrey" }}
            />
            <img
              src={SyncUpOrgPage}
              alt="Sync-Up Organisation Page"
              style={{ width: isSmallScreen ? "80%" : "20%", height: "auto", border: "2px solid lightgrey" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
