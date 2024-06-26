import "./ScrollingElements.css";

import LandingScreen from "../LandingScreen/LandingScreen";
import ProjectScreen from "../ProjectScreen/ProjectScreen";
import ContactScreen from "../ContactScreen/ContactScreen";
import { useEffect } from "react";

export default function ScrollingElements() {
  useEffect(() => {
    const container = document.querySelector(".scroll-container") as HTMLElement;
    let isScrolling: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(isScrolling);

      isScrolling = setTimeout(() => {
        // Get the current scroll position
        const scrollPosition = container.scrollTop;
        // Get the height of a single section
        const sectionHeight = window.innerHeight;
        // Calculate the nearest section
        const sectionIndex = Math.round(scrollPosition / sectionHeight);
        const newScrollPosition = sectionIndex * sectionHeight;

        // Scroll to the nearest section
        container.scrollTo({
          top: newScrollPosition,
          behavior: "auto", // no smooth scroll
        });
      }, 5000); // 1-second delay before snapping to the nearest section
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      clearTimeout(isScrolling);
    };
  }, []);
  return (
    <div className="scroll-container">
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
