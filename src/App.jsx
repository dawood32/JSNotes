import React, { useState, useEffect } from "react";
import "./index.css";
import Home from "./components/Home";
import Introduction from "./components/Introduction";
import ConsoleTutorial from "./components/ConsoleTutorial";
import VariablesTutorial from "./components/VariablesTutorial";
import HoistingTutorial from "./components/HoistingTutorial";
import DataTypesTutorial from "./components/DataTypesTutorial";
import CoercionTutorial from "./components/CoercionTutorial";
import OperatorsTutorial from "./components/OperatorsTutorial";
import LogicAndControlFlowTutorial from "./components/LogicAndControlFlowTutorial";
import IfElseSwitchTutorial from "./components/IfElseSwitchTutorial";
import DateAndTimeTutorial from "./components/DateAndTimeTutorial";
import FunctionsTutorial from "./components/FunctionsTutorial";
import ArraysTutorial from "./components/ArraysTutorial";
import LoopsTutorial from "./components/LoopsTutorial";
import ObjectsTutorial from "./components/ObjectsTutorial";
import PracticeChallenges from "./components/PracticeChallenges";
import GitTutorial from "./components/GitTutorial";
import AsyncAwaitTutorial from "./components/AsyncAwaitTutorial";

const App = () => {
  const [activeSection, setActiveSection] = useState(
    window.location.hash.replace('#', '') || "home"
  );

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash.replace('#', '') || "home");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <>
      <nav className="top-nav">
        <a href="#home" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1>DevNotes</h1>
        </a>
        {activeSection !== "home" && (
          <div className="nav-links">
            <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
            <a href="#intro" className={!['home', 'challenges', 'git'].includes(activeSection) ? 'active' : ''}>JavaScript Notes</a>
            <a href="#git" className={activeSection === 'git' ? 'active' : ''}>Git & GitHub</a>
            <a href="#challenges" className={activeSection === 'challenges' ? 'active' : ''}>Coding Problems</a>
          </div>
        )}
      </nav>

      {activeSection === "home" ? (
        <Home />
      ) : activeSection === "challenges" ? (
        <div className="container" style={{ justifyContent: 'center' }}>
          <main className="main-content" style={{ margin: '2rem auto' }}>
            <PracticeChallenges />
          </main>
        </div>
      ) : activeSection === "git" ? (
        <div className="container" style={{ justifyContent: 'center' }}>
          <main className="main-content" style={{ margin: '2rem auto' }}>
            <GitTutorial />
          </main>
        </div>
      ) : (
          <div className="container">
          <aside className="sidebar">
            <h3>JavaScript Notes</h3>
            <a href="#intro" className={activeSection === "intro" ? "active" : ""}>Introduction</a>
            <a href="#console" className={activeSection === "console" ? "active" : ""}>Console</a>
            <a href="#variables" className={activeSection === "variables" ? "active" : ""}>Variables</a>
            <a href="#hoisting" className={activeSection === "hoisting" ? "active" : ""}>Hoisting</a>
            <a href="#datatypes" className={activeSection === "datatypes" ? "active" : ""}>Data Types</a>
            <a href="#coercion" className={activeSection === "coercion" ? "active" : ""}>Type Conversion</a>
            <a href="#operators" className={activeSection === "operators" ? "active" : ""}>Operators</a>
            <a href="#logic" className={activeSection === "logic" ? "active" : ""}>Logic & Control Flow</a>
            <a href="#ifelse" className={activeSection === "ifelse" ? "active" : ""}>If Else & Switch</a>
            <a href="#dates" className={activeSection === "dates" ? "active" : ""}>Date & Time</a>
            <a href="#functions" className={activeSection === "functions" ? "active" : ""}>Functions</a>
            <a href="#arrays" className={activeSection === "arrays" ? "active" : ""}>Arrays</a>
            <a href="#loops" className={activeSection === "loops" ? "active" : ""}>Loops</a>
            <a href="#objects" className={activeSection === "objects" ? "active" : ""}>Objects</a>
            
            <h3>JavaScript Advanced</h3>
            <a href="#async-await" className={activeSection === "async-await" ? "active" : ""}>Async / Await</a>
            <a href="#classes">Classes</a>
            <a href="#modules">Modules</a>
            <a href="#json">JSON</a>
            <a href="#api">Web APIs</a>
          </aside>

          <main className="main-content">
            {activeSection === "intro" && <Introduction />}
            {activeSection === "console" && <ConsoleTutorial />}
            {activeSection === "variables" && <VariablesTutorial />}
            {activeSection === "hoisting" && <HoistingTutorial />}
            {activeSection === "datatypes" && <DataTypesTutorial />}
            {activeSection === "coercion" && <CoercionTutorial />}
            {activeSection === "operators" && <OperatorsTutorial />}
            {activeSection === "logic" && <LogicAndControlFlowTutorial />}
            {activeSection === "ifelse" && <IfElseSwitchTutorial />}
            {activeSection === "dates" && <DateAndTimeTutorial />}
            {activeSection === "functions" && <FunctionsTutorial />}
            {activeSection === "arrays" && <ArraysTutorial />}
            {activeSection === "loops" && <LoopsTutorial />}
            {activeSection === "objects" && <ObjectsTutorial />}
            {activeSection === "async-await" && <AsyncAwaitTutorial />}
          </main>
        </div>
      )}
    </>
  );
};

export default App;
