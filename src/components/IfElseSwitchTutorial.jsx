import React from "react";

const IfElseSwitchTutorial = () => {
  return (
    <>
      <h1>If-Else & Switch Statements</h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Conditional statements are used to perform different actions based on different conditions.
      </p>

      <h2><code>if</code> Statements</h2>
      
      <h3>Basic If/Else</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          if (true) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log('this is true');<br/>
          {'}'}<br/><br/>
          let x = 5, y = 10;<br/>
          if (x &lt; y) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log(`${'{'}x{'}'} is less than ${'{'}y{'}'}`);<br/>
          {'}'} else {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log(`${'{'}x{'}'} is not less than ${'{'}y{'}'}`);<br/>
          {'}'}
        </code>
      </div>

      <h3>Shorthand If (No Braces)</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          if (x &lt; y) console.log('less');<br/>
          else console.log('not less');
        </code>
      </div>

      <h3>If-Else & Nesting</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const d = new Date(10, 30, 2022, 8, 0, 0);<br/>
          const hours = d.getHours();<br/><br/>
          if (hours &lt; 10) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log('Morning');<br/>
          {'}'} else if (hours &gt; 10) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log('Afternoon');<br/>
          {'}'} else {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log('Exactly 10');<br/>
          {'}'}
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2>Switch Statement</h2>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Used to perform different actions based on different conditions, often cleaner than many <code>else if</code> blocks.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const date = new Date(10, 30, 2022, 8, 0, 0);<br/>
          const month = date.getMonth(); // Note: Months are 0-indexed<br/><br/>
          switch(month) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;case 1:<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log('February');<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;case 10:<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log('November');<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;default:<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log('Other month');<br/>
          {'}'}
        </code>
      </div>
    </>
  );
};

export default IfElseSwitchTutorial;
