import { IconButton, Typography } from "@mui/material";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

import Spacer from "../Spacer/Spacer";
import useWindowWidth from "../../hooks/useWindowWidth";

import { GameHubMobile, GameHubFull, GameHubTablet } from "../../assets";

export default function GameHubModal() {
  const { isSmallScreen } = useWindowWidth();
  return (
    <div className="modal-child-box">
      <Typography variant="body1">
        Game Hub is a project developed while learning React and TypeScript, utilizing Chakra-UI to create intuitive and responsive UI elements. This
        simple web application enables users to search or filter for games and view detailed information and screenshots. It fetches game data from
        the RAWG.io API and presents it in a user-friendly manner. Offering filtering by genre, platform and order by a range of criteria.
      </Typography>
      <Spacer />
      <Typography variant="body1">
        The website also features a darkmode toggle, allowing users to switch between light and dark themes for optimal viewing comfort and resizes to
        fit on all devices. The responsive design ensures that content is optimally displayed and navigable regardless of the device used, enhancing
        usability and engagement.
      </Typography>
      <Spacer />

      <div className="link-bar">
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
      <div className={`container ${isSmallScreen ? "small-screen" : ""}`}>
        <img src={GameHubMobile} alt="Game Hub Mobile" className={`image ${isSmallScreen ? "large" : "phone"}`} />
        <img src={GameHubTablet} alt="Game Hub Tablet" className={`image ${isSmallScreen ? "large" : "tablet"}`} />
        <img src={GameHubFull} alt="Game Hub Desktop" className={`image ${isSmallScreen ? "large" : "wider"}`} />
      </div>
    </div>
  );
}
