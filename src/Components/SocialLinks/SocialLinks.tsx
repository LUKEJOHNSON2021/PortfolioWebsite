import { FaLinkedin, FaGithub } from "react-icons/fa";

import "./SocialLinks.css";
import { IconButton, Tooltip } from "@mui/material";

export default function SocialLinks() {
  return (
    <div className="link_container">
      <Tooltip title="Github">
        <IconButton>
          <FaGithub fontSize={40} color={"white"} />
        </IconButton>
      </Tooltip>
      <FaLinkedin fontSize={40} color={"white"} />
    </div>
  );
}
