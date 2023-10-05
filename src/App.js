import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AnimatedCursor from "react-animated-cursor";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="">
      <AnimatedCursor
        innerSize={10}
        outerSize={11}
        color="255,255,255"
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work /> 
      <Contact/>
    </div>
  );
}

export default App;
