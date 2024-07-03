import "./ScrollingElements.css";

import LandingScreen from "../LandingScreen/LandingScreen";
import ProjectScreen from "../ProjectScreen/ProjectScreen";
import ContactScreen from "../ContactScreen/ContactScreen";
import { useRef } from "react";

export default function ScrollingElements() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="scroll-container" ref={containerRef}>
      <div className="section">
        <LandingScreen />
      </div>
      <div className="section">
        <ProjectScreen />
      </div>
      <div className="section">
        <ContactScreen />
      </div>
    </div>
  );
}
