import React from "react";
import chromeConsoleImg from "../assets/chrome_console.jpg";

const ConsoleTutorial = () => {
  return (
    <>
      <h1>Working with the Browser Console</h1>
      <p>
        The browser console is an essential tool for JavaScript developers. It allows you to test code, debug problems, and execute simple JavaScript commands directly in the browser.
      </p>

      <h2>How to Open the Google Chrome Console</h2>
      <p>To open the developer console in Google Chrome, you can use any of the following methods:</p>
      <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.7', fontSize: '1.05rem', color: '#374151' }}>
        <li><strong>Keyboard Shortcut (Windows/Linux):</strong> Press <code style={{backgroundColor: '#F3F4F6', padding: '0.2rem 0.4rem', borderRadius: '4px'}}>Ctrl + Shift + J</code></li>
        <li><strong>Keyboard Shortcut (Mac):</strong> Press <code style={{backgroundColor: '#F3F4F6', padding: '0.2rem 0.4rem', borderRadius: '4px'}}>Cmd + Option + J</code></li>
        <li><strong>Right-click:</strong> Right-click anywhere on the webpage and select <strong>"Inspect"</strong>, then click on the <strong>"Console"</strong> tab.</li>
      </ul>

      <h2>Different Types of Console Messages</h2>
      <p>JavaScript provides several ways to print messages to the console, depending on the severity or type of information.</p>
      
      <div style={{ backgroundColor: '#fefeff', padding: '1.25rem', border: '1px solid #E5E7EB', marginBottom: '1.5rem', borderRadius: '8px' }}>
        <h3 style={{ margin: '0 0 0.5rem 0', color: '#4F46E5', fontSize: '1.1rem' }}>1. console.log()</h3>
        <p style={{ margin: 0, marginBottom: '1rem' }}>Used for standard output and general debugging. It prints text or variables to the console.</p>
        <code style={{ display: 'block', color: '#111827', padding: '1rem 0', fontFamily: 'monospace' }}>
          console.log("Hello, World!");
        </code>
      </div>

      <div style={{ backgroundColor: '#fefeff', padding: '1.25rem', border: '1px solid #E5E7EB', marginBottom: '1.5rem', borderRadius: '8px' }}>
        <h3 style={{ margin: '0 0 0.5rem 0', color: '#4F46E5', fontSize: '1.1rem' }}>2. console.warn()</h3>
        <p style={{ margin: 0, marginBottom: '1rem' }}>Outputs a warning message. It usually appears with a yellow background or a warning icon, highlighting potential issues that aren't critical errors.</p>
        <code style={{ display: 'block', color: '#111827', padding: '1rem 0', fontFamily: 'monospace' }}>
          console.warn("This feature is deprecated.");
        </code>
      </div>

      <div style={{ backgroundColor: '#fefeff', padding: '1.25rem', border: '1px solid #E5E7EB', marginBottom: '1.5rem', borderRadius: '8px' }}>
        <h3 style={{ margin: '0 0 0.5rem 0', color: '#4F46E5', fontSize: '1.1rem' }}>3. console.error()</h3>
        <p style={{ margin: 0, marginBottom: '1rem' }}>Outputs an error message. It appears with a red background or an error icon. Use this when something goes wrong or fails in your code.</p>
        <code style={{ display: 'block', color: '#111827', padding: '1rem 0', fontFamily: 'monospace' }}>
          console.error("Failed to load user profile data!");
        </code>
      </div>

      <h2>Console Output Example</h2>
      <p>Here is a screenshot of what these different messages look like inside the Google Chrome Developer Tools console:</p>
      <div style={{ marginTop: '1.5rem', marginBottom: '2.5rem', border: '1px solid #E5E7EB', padding: '0.5rem', backgroundColor: '#ffffff', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
        <img 
          src={chromeConsoleImg} 
          alt="Screenshot of Google Chrome Developer Tools Console showing log, warn, and error messages" 
          style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }} 
        />
      </div>
    </>
  );
};

export default ConsoleTutorial;
