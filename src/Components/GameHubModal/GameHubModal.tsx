import { IconButton, Typography } from "@mui/material";

import GameHubMobile from "../../assets/GameHubMobile.png";
import GameHubFull from "../../assets/GameHubFull.png";
import GameHubTablet from "../../assets/GameHubTablet.png";
import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

export default function GameHubModal() {
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
      <div style={{ flex: 0.4, display: "flex", flexDirection: "column" }}>
        <Typography variant="body1">
          Game Hub is a project developed while learning React and TypeScript, utilizing Chakra-UI to create intuitive and responsive UI elements.
          This simple web application enables users to search or filter for games and view detailed information and screenshots. It fetches game data
          from the RAWG.io API and presents it in a user-friendly manner. Offering filtering by genre, platform and order by a range of criteria.
        </Typography>

        <Typography variant="body1">
          The website also features a darkmode toggle, allowing users to switch between light and dark themes for optimal viewing comfort and resizes
          to fit on all devices. The responsive design ensures that content is optimally displayed and navigable regardless of the device used,
          enhancing usability and engagement.
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Typography variant="body1">
            The website also has a publically available github repository and website, which can be accessed by clicking these button.
          </Typography>
          <div>
            <IconButton href={"https://github.com/LUKEJOHNSON2021/Game-hub"} target="_blank">
              <FaGithub fontSize={30} color={"black"} />
            </IconButton>
          </div>
          <div>
            <IconButton href={"https://game-hub-tau-eight.vercel.app/"} target="_blank">
              <FaGlobe fontSize={30} color={"black"} />
            </IconButton>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row", // Change flexDirection based on screen size
            alignItems: "center",
            justifyContent: "space-evenly",
            maxHeight: isSmallScreen ? "80vh" : "unset", // Limit height if small screen
            gap: "10px",
            overflow: "auto",
          }}
        >
          <img
            src={GameHubMobile}
            alt="Game Hub Mobile"
            style={{ width: isSmallScreen ? "80%" : "17.4%", height: "auto", border: "2px solid lightgrey" }}
          />
          <img
            src={GameHubTablet}
            alt="Game Hub Tablet"
            style={{ width: isSmallScreen ? "80%" : "45%", height: "auto", border: "2px solid lightgrey" }}
          />
          <img
            src={GameHubFull}
            alt="Game Hub Desktop"
            style={{ width: isSmallScreen ? "80%" : "75%", height: "auto", border: "2px solid lightgrey" }}
          />
        </div>
      </div>
    </div>
  );
}
