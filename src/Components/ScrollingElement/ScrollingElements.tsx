import "./ScrollingElements.css";

import LandingScreen from "../LandingScreen/LandingScreen";
import ProjectScreen from "../ProjectScreen/ProjectScreen";
import ContactScreen from "../ContactScreen/ContactScreen";
import { useRef } from "react";

export default function ScrollingElements() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="scroll-container" ref={containerRef}>
      <div className="section section1">
        <LandingScreen />
      </div>
      <div className="section section2">
        <ProjectScreen />
      </div>
      <div className="section section3">
        <ContactScreen />
      </div>
    </div>
  );
}
