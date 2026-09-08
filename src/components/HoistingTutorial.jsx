import React from "react";

const HoistingTutorial = () => {
  return (
    <>
      <h1>Hoisting in JavaScript</h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        <strong>Hoisting</strong> is a JavaScript behavior where declarations are processed before the code is executed.
      </p>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        For beginners, you can think of hoisting as JavaScript making certain declarations available before the line where they appear in the code.
      </p>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        However, <strong>the declaration and the value assigned to a variable are not treated the same way</strong>.
      </p>

      <h2>How Hoisting Works</h2>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Consider this example:
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          console.log(x);<br/><br/>
          var x = 10;
        </code>
      </div>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        The result is:
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          undefined
        </code>
      </div>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        JavaScript behaves approximately as if the code were written like this:
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          var x;<br/><br/>
          console.log(x);<br/><br/>
          x = 10;
        </code>
      </div>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        The <strong>declaration</strong> is available before the line where it appears, but the <strong>assignment</strong> happens only when JavaScript reaches that line.
      </p>

      <div className="example-box">
        <h3 style={{ margin: '0 0 0.5rem 0', color: '#4F46E5', fontSize: '1.1rem' }}>Important Rule</h3>
        <p style={{ margin: 0 }}>
          <strong>The declaration may be hoisted, but the initialization or assignment is not.</strong>
        </p>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>Hoisting with <code>var</code></h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        <code>var</code> declarations are hoisted and initialized with <code>undefined</code>.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          console.log(name); // undefined<br/><br/>
          var name = "John";
        </code>
      </div>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        This can be thought of as:
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          var name;<br/><br/>
          console.log(name); // undefined<br/><br/>
          name = "John";
        </code>
      </div>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        The value <code>"John"</code> is not available until JavaScript reaches the assignment.
      </p>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>Hoisting with <code>let</code></h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        <code>let</code> declarations behave differently.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          console.log(age);<br/><br/>
          let age = 25;
        </code>
      </div>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        This produces:
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          ReferenceError
        </code>
      </div>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        A <code>let</code> variable cannot be accessed before its declaration is reached. <code>let</code> is in a <strong>Temporal Dead Zone (TDZ)</strong> from the beginning of its scope until the declaration is processed.
      </p>

      <h3>Example</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;// Temporal Dead Zone starts here<br/><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log(age); // ReferenceError<br/><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;let age = 25;<br/><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;// Temporal Dead Zone ends here<br/>
          {'}'}
        </code>
      </div>

      <h3>What is the Temporal Dead Zone?</h3>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        The <strong>Temporal Dead Zone (TDZ)</strong> is the period between entering a scope and reaching the declaration of a <code>let</code> or <code>const</code> variable. During this period, the variable exists in the scope but cannot be accessed.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          console.log(message); // ReferenceError<br/><br/>
          let message = "Hello";
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>Hoisting with <code>const</code></h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        <code>const</code> behaves similarly to <code>let</code>.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          console.log(age);<br/><br/>
          const age = 25;
        </code>
      </div>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        This produces:
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          ReferenceError
        </code>
      </div>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        A <code>const</code> variable is also in the <strong>Temporal Dead Zone</strong> until its declaration is reached.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;// TDZ starts here<br/><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log(country); // ReferenceError<br/><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;const country = "Pakistan";<br/><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;// TDZ ends here<br/>
          {'}'}
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1><code>var</code> vs <code>let</code> vs <code>const</code></h1>
      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '1.05rem', color: '#374151' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #E5E7EB', backgroundColor: '#F9FAFB' }}>
              <th style={{ padding: '1rem' }}>Keyword</th>
              <th style={{ padding: '1rem' }}>Before Declaration</th>
              <th style={{ padding: '1rem' }}>Hoisting Behavior</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
              <td style={{ padding: '1rem' }}><code>var</code></td>
              <td style={{ padding: '1rem' }}><code>undefined</code></td>
              <td style={{ padding: '1rem' }}>Declaration is hoisted and initialized with <code>undefined</code></td>
            </tr>
            <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
              <td style={{ padding: '1rem' }}><code>let</code></td>
              <td style={{ padding: '1rem' }}><code>ReferenceError</code></td>
              <td style={{ padding: '1rem' }}>Declaration is in the TDZ</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem' }}><code>const</code></td>
              <td style={{ padding: '1rem' }}><code>ReferenceError</code></td>
              <td style={{ padding: '1rem' }}>Declaration is in the TDZ</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="example-box">
        <p style={{ margin: 0 }}>
          <strong>Tip:</strong> In modern JavaScript, prefer <code>const</code> and <code>let</code> instead of <code>var</code>.
        </p>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>Function Hoisting</h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Function declarations are also hoisted. This means you can call a function before its declaration in the code.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          greet();<br/><br/>
          function greet() {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log("Hello!");<br/>
          {'}'}
        </code>
      </div>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Output:
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          Hello!
        </code>
      </div>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        The function declaration is available throughout its scope before the code reaches the function declaration.
      </p>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>Function Expressions and Hoisting</h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Function expressions behave according to the variable used to store the function. For example, with <code>const</code>:
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          greet();<br/><br/>
          const greet = function() {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log("Hello!");<br/>
          {'}'};
        </code>
      </div>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        This produces:
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          ReferenceError
        </code>
      </div>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        The same applies to arrow functions:
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          greet();<br/><br/>
          const greet = () =&gt; {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log("Hello!");<br/>
          {'}'};
        </code>
      </div>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        This also produces:
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          ReferenceError
        </code>
      </div>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        The reason is that <code>greet</code> is declared with <code>const</code>, so it cannot be accessed before its declaration is initialized.
      </p>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>Hoisting Example</h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Let's compare a function declaration with a function expression.
      </p>
      
      <h3>Function Declaration</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          sayHello();<br/><br/>
          function sayHello() {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log("Hello!");<br/>
          {'}'}
        </code>
      </div>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>Output: <code>Hello!</code></p>

      <h3>Function Expression</h3>

      
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          sayHello();<br/><br/>
          const sayHello = function() {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log("Hello!");<br/>
          {'}'};
        </code>
      </div>



      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>Output: <code>ReferenceError</code></p>

      <h3>Arrow Function</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          sayHello();<br/><br/>
          const sayHello = () =&gt; {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log("Hello!");<br/>
          {'}'};
        </code>
      </div>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>Output: <code>ReferenceError</code></p>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>How to Avoid Hoisting Problems</h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        You don't need to use <code>"use strict"</code> to prevent hoisting. <strong>Strict Mode does not disable hoisting.</strong> Instead, the best approach is to write clear and predictable code:
      </p>

      <h3>1. Declare variables before using them</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const name = "John";<br/><br/>
          console.log(name);
        </code>
      </div>

      <h3>2. Prefer <code>const</code> and <code>let</code></h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const name = "John";<br/>
          let age = 25;
        </code>
      </div>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Avoid using <code>var</code> in new code unless you specifically need its behavior.
      </p>

      <h3>3. Define functions before calling them when possible</h3>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Although function declarations are hoisted, placing functions before their use can make your code easier for beginners to read.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          function greet() {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log("Hello!");<br/>
          {'}'}<br/><br/>
          greet();
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>Summary</h1>
      <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.7', fontSize: '1.05rem', color: '#374151' }}>
        <li><strong>Hoisting</strong> means declarations are processed before code execution.</li>
        <li><code>var</code> declarations are hoisted and initialized with <code>undefined</code>.</li>
        <li><code>let</code> and <code>const</code> cannot be accessed before their declaration because of the <strong>Temporal Dead Zone (TDZ)</strong>.</li>
        <li>Function declarations are hoisted and can be called before their declaration.</li>
        <li>Function expressions and arrow functions stored in <code>let</code> or <code>const</code> cannot be called before their initialization.</li>
        <li>Variable <strong>assignments/initializations are not hoisted</strong>.</li>
        <li><code>"use strict"</code> does <strong>not</strong> prevent hoisting.</li>
        <li>In modern JavaScript, prefer <strong><code>const</code> and <code>let</code></strong> over <code>var</code>.</li>
      </ul>

    </>
  );
};

export default HoistingTutorial;
