import React, { useEffect, useState } from "react";
import {
  About,
  Contact,
  Education,
  Expertise,
  Footer,
  Main,
  Navigation,
  Project,
  TechStack,
  Timeline,
} from "./components";
import FadeIn from "./components/FadeIn";
import useScrollReveal from "./hooks/useScrollReveal";
import "./index.scss";

type ThemeMode = "dark" | "light";

function getInitialMode(): ThemeMode {
  const savedMode = window.localStorage.getItem("leticia-portfolio-theme");
  if (savedMode === "dark" || savedMode === "light") return savedMode;
  if (typeof window.matchMedia !== "function") return "dark";
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function App() {
  const [mode, setMode] = useState<ThemeMode>(getInitialMode);
  useScrollReveal();

  const handleModeChange = () => {
    setMode((current) => (current === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    window.localStorage.setItem("leticia-portfolio-theme", mode);
    document.documentElement.style.colorScheme = mode;
  }, [mode]);

  return (
    <div className={`main-container ${mode}-mode`}>
      <Navigation mode={mode} modeChange={handleModeChange} />
      <main>
        <FadeIn transitionDuration={650}>
          <Main />
          <About />
          <Expertise />
          <TechStack />
          <Timeline />
          <Project />
          <Education />
          <Contact />
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}

export default App;
