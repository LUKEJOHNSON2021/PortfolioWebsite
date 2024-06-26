import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IconButton, Tooltip } from "@mui/material";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="link-container">
      <Tooltip title="Github">
        <IconButton href="https://github.com/LUKEJOHNSON2021" target="_blank">
          <FaGithub fontSize={40} color={"white"} />
        </IconButton>
      </Tooltip>
      <Tooltip title="LinkedIn">
        <IconButton href="https://www.linkedin.com/in/luke-johnson-b4967426a/" target="_blank">
          <FaLinkedin fontSize={40} color={"white"} />
        </IconButton>
      </Tooltip>
    </div>
  );
}
