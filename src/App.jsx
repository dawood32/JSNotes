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
      {activeSection === "home" ? (
        <Home />
      ) : (
        <>
          <nav className="top-nav">
            <h1>DevNotes</h1>
          </nav>
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
          </main>
        </div>
        </>
      )}
    </>
  );
};

export default App;
