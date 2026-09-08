import React from "react";

const LogicAndControlFlowTutorial = () => {
  return (
    <>
      <h1>Logic & Control Flow</h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Control flow dictates how your code executes under different conditions.
      </p>



      <h2>Truthy & Falsy Values</h2>
      
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        <strong>Falsy values:</strong> <code>false</code>, <code>0</code>, <code>""</code> (empty string), <code>null</code>, <code>undefined</code>, <code>NaN</code>.
      </p>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        <strong>Truthy values:</strong> Anything else, including <code>true</code>, <code>'0'</code>, <code>' '</code>, <code>'false'</code>, <code>[]</code>, <code>{'{'}{'}'}</code>, <code>function(){'{'}{'}'}</code>.
      </p>

      <h3>Truthy/Falsy Caveats</h3>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Sometimes checking for truthiness isn't enough, especially with numbers like <code>0</code>.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const children = 0;<br/>
          // 0 is falsy, so checking `if (children)` would fail.<br/>
          // Instead, check explicitly against undefined:<br/>
          if (children !== undefined) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log('You have children (or 0 children)');<br/>
          {'}'} else {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log('not defined');<br/>
          {'}'}<br/><br/>
          
          // Arrays: Empty arrays [] are truthy. Check length instead:<br/>
          if (arr.length &gt; 0) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log('List post');<br/>
          {'}'} else {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log('not');<br/>
          {'}'}<br/><br/>
          
          // Objects: Empty objects {'{}'} are truthy. Check keys length:<br/>
          if (Object.keys(obj).length &gt; 0) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log('List obj');<br/>
          {'}'} else {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log('not');<br/>
          {'}'}
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2>Logical Operators</h2>
      
      <h3>AND Operator (<code>&&</code>)</h3>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Returns the <strong>first falsy</strong> value or the <strong>last value</strong>.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          let a;<br/>
          a = 10 &amp;&amp; 20;               // =&gt; 20<br/>
          a = 10 &amp;&amp; 20 &amp;&amp; 30;         // =&gt; 30<br/>
          a = 10 &amp;&amp; 0 &amp;&amp; 30;          // =&gt; 0 (First falsy)<br/>
          a = 10 &amp;&amp; '' &amp;&amp; 0 &amp;&amp; 30;    // =&gt; '' (First falsy)<br/><br/>
          
          // Practical usage for short-circuiting:<br/>
          const post = [];<br/>
          post.length &gt; 0 &amp;&amp; console.log(post[0]); // Only runs console.log if true
        </code>
      </div>

      <h3>OR Operator (<code>||</code>)</h3>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Returns the <strong>first truthy</strong> value or the <strong>last value</strong>.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          let b;<br/>
          b = 10 || 20;               // =&gt; 10<br/>
          b = 0 || 20;                // =&gt; 20 (First truthy)<br/>
          b = 0 || null || '' || undefined; // =&gt; undefined (All falsy, returns last)<br/><br/>
          console.log(b);
        </code>
      </div>

    </>
  );
};

export default LogicAndControlFlowTutorial;
