import React from "react";
import styles from "./Introduction.module.css";

const Introduction = () => {
  return (
    <>
      <h1>Introduction to JavaScript</h1>
      
      <ul className={styles.styledList}>
        <li>JavaScript is a programming language commonly used to make websites and applications interactive and dynamic.</li>
        <li>It is also widely used as a scripting language, which means it can be used to automate tasks and control the behavior of applications.</li>
        <li>JavaScript can run inside web browsers such as Chrome, Firefox, Safari, and Edge.</li>
        <li>JavaScript can also run outside the browser using environments such as Node.js.</li>
      </ul>

      <h2>What Can We Do with JavaScript?</h2>
      <p>We use JavaScript for many things, including:</p>
      
      <ul className={styles.styledList}>
        <li><strong>DOM Manipulation</strong> — Change HTML elements and content on a webpage.</li>
        <li><strong>Event Handling</strong> — Make things happen when a user clicks, types, scrolls, or interacts with a webpage.</li>
        <li><strong>Animations</strong> — Create moving and interactive effects.</li>
        <li><strong>Variables and Logic</strong> — Store information, perform calculations, make decisions, and repeat tasks using loops.</li>
        <li><strong>Data Manipulation</strong> — Create, read, update, delete, and work with data.</li>
        <li><strong>Form Validation</strong> — Check whether the information entered by a user is correct.</li>
        <li><strong>API Integration</strong> — Get and send data between an application and a server.</li>
        <li><strong>Interactive Websites</strong> — Build websites that respond to user actions.</li>
        <li><strong>Games</strong> — Create simple and advanced browser games.</li>
        <li><strong>Web Applications</strong> — Build applications such as calculators, dashboards, and online stores.</li>
        <li><strong>Backend Development</strong> — Use JavaScript on the server with Node.js.</li>
        <li><strong>Mobile and Desktop Applications</strong> — Build applications using JavaScript-based technologies and frameworks.</li>
      </ul>
    </>
  );
};

export default Introduction;
