import MovingBackground from "./Components/MovingBackground/MovingBackground";
import ScrollingElements from "./Components/ScrollingElement/ScrollingElements";

function App() {
  return (
    <>
      <div className="non-scrollable-background">
        <MovingBackground />
        <div className=".scrollable-content">
          <ScrollingElements />
        </div>
      </div>
    </>
  );
}

export default App;
