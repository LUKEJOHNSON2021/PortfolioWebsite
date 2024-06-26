import { useRef } from "react";
import "./ScrollingElements.css";

import LandingScreen from "../LandingScreen/LandingScreen";
import ProjectScreen from "../ProjectScreen/ProjectScreen";
import ContactScreen from "../ContactScreen/ContactScreen";

export default function ScrollingElements() {
  const projectScreenRef = useRef<HTMLDivElement>(null);

  const scrollToProjectScreen = () => {
    if (projectScreenRef.current) {
      projectScreenRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="app">
      <div className="scroll-container">
        <div className="section section1">
          <LandingScreen scrollToNext={scrollToProjectScreen} />
        </div>
        <div className="section section2" ref={projectScreenRef}>
          <ProjectScreen />
        </div>
        <div className="section section3">
          <ContactScreen />
        </div>
      </div>
    </div>
  );
}
