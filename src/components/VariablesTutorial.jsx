import React from "react";

const VariablesTutorial = () => {
  return (
    <>
      <h1>JavaScript Variables</h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Variables are containers used to store data values. In JavaScript, there are three keywords used to declare variables:
      </p>
      
      <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.7', fontSize: '1.05rem', color: '#374151' }}>
        <li><code>var</code></li>
        <li><code>let</code></li>
        <li><code>const</code></li>
      </ul>

      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          let name = "John";<br/>
          const age = 25;
        </code>
      </div>

      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        JavaScript is dynamically typed, which means a variable can hold a value of one type and later be assigned a value of another type.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          let value = 10;<br/>
          value = "Hello";
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2>Variable Naming Rules</h2>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        When naming variables, follow these rules:
      </p>
      <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.7', fontSize: '1.05rem', color: '#374151' }}>
        <li>Names can contain letters, numbers, underscores (<code>_</code>), and dollar signs (<code>$</code>).</li>
        <li>Names cannot start with a number.</li>
        <li>Names are case-sensitive.</li>
        <li>Variable names cannot be JavaScript reserved words.</li>
        <li>Use meaningful names that describe the stored value.</li>
      </ul>

      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          let firstName = "John";<br/>
          let age = 25;<br/>
          let $price = 100;<br/>
          let _count = 5;
        </code>
      </div>

      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        This is not valid:
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          let 123name = "John"; // Error
        </code>
      </div>

      <h3>Common Naming Conventions</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          firstName   // camelCase - Recommended<br/>
          FirstName   // PascalCase<br/>
          first_name  // snake_case<br/>
          firstname   // lowercase
        </code>
      </div>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        For JavaScript variables, <strong>camelCase</strong> is commonly recommended.
      </p>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>1. Declaring Variables with <code>var</code></h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        <code>var</code> is the older way of declaring variables in JavaScript.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          var name = "John";
        </code>
      </div>

      <h3>Scope</h3>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        <code>var</code> is <strong>function-scoped</strong>, not block-scoped.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          if (true) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;var message = "Hello";<br/>
          {'}'}<br/><br/>
          console.log(message); // Hello
        </code>
      </div>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        The variable is accessible outside the <code>if</code> block because <code>var</code> does not create block scope. However, if <code>var</code> is declared inside a function, it is only available inside that function.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          function greet() {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;var message = "Hello";<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log(message);<br/>
          {'}'}<br/><br/>
          greet();<br/><br/>
          console.log(message); // Error
        </code>
      </div>

      <h3>Redeclare and Reassign</h3>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        A <code>var</code> variable can be both redeclared and reassigned.
      </p> 
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          var age = 20;<br/><br/>
          var age = 25; // Redeclare<br/>
          age = 30;     // Reassign<br/><br/>
          console.log(age); // 30
        </code>
      </div>

      <h3>Hoisting</h3>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        <code>var</code> declarations are hoisted to the top of their scope.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          console.log(name); // undefined<br/><br/>
          var name = "John";
        </code>
      </div>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        JavaScript behaves approximately like this:
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          var name;<br/><br/>
          console.log(name); // undefined<br/><br/>
          name = "John";
        </code>
      </div>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Only the declaration is hoisted, not the value.
      </p>
      <div className="example-box">
        <p style={{ margin: 0 }}>
          <strong>Note:</strong> <code>var</code> is generally avoided in modern JavaScript. <code>let</code> and <code>const</code> are preferred because they provide block scope and make code easier to understand.
        </p>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>2. Declaring Variables with <code>let</code></h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        <code>let</code> is used when you need to declare a variable whose value may change.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          let age = 20;<br/><br/>
          age = 25;<br/><br/>
          console.log(age); // 25
        </code>
      </div>

      <h3>Scope</h3>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        <code>let</code> is <strong>block-scoped</strong>. A block is code surrounded by curly braces <code>{'{'} {'}'}</code>, such as an <code>if</code> statement or a loop.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          if (true) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;let message = "Hello";<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log(message); // Hello<br/>
          {'}'}<br/><br/>
          console.log(message); // Error
        </code>
      </div>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        The <code>message</code> variable only exists inside the <code>if</code> block.
      </p>

      <h3>Redeclare and Reassign</h3>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        A <code>let</code> variable cannot be redeclared in the same scope.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          let age = 20;<br/><br/>
          let age = 25; // Error
        </code>
      </div>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        But it can be reassigned:
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          let age = 20;<br/><br/>
          age = 25;<br/><br/>
          console.log(age); // 25
        </code>
      </div>

      <h3>Hoisting</h3>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        <code>let</code> declarations are not accessible before their declaration.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          console.log(age); // ReferenceError<br/><br/>
          let age = 20;
        </code>
      </div>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        This happens because <code>let</code> variables are in the <strong>Temporal Dead Zone (TDZ)</strong> from the beginning of their scope until the declaration is reached.
      </p>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>3. Declaring Variables with <code>const</code></h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        <code>const</code> is used when a variable should not be reassigned.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const country = "Pakistan";<br/><br/>
          console.log(country);
        </code>
      </div>

      <h3>Scope</h3>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Like <code>let</code>, <code>const</code> is <strong>block-scoped</strong>.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          if (true) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;const message = "Hello";<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log(message); // Hello<br/>
          {'}'}<br/><br/>
          console.log(message); // Error
        </code>
      </div>

      <h3>Redeclare and Reassign</h3>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        A <code>const</code> variable cannot be redeclared or reassigned.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const age = 25;<br/><br/>
          age = 30; // Error
        </code>
      </div>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        This is also not allowed:
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const age = 25;<br/><br/>
          const age = 30; // Error
        </code>
      </div>

      <h3><code>const</code> Must Be Initialized</h3>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        A <code>const</code> variable must have a value when it is declared.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const age = 25; // Correct
        </code>
      </div>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        This is invalid:
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const age; // Error
        </code>
      </div>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        <code>let</code>, however, can be declared without an initial value:
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          let age;<br/><br/>
          console.log(age); // undefined
        </code>
      </div>

      <h3>Important: <code>const</code> Does Not Make Objects Immutable</h3>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        <code>const</code> prevents reassignment of the variable, but it does not prevent changing the contents of an object or array.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const person = {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;name: "John"<br/>
          {'}'};<br/><br/>
          person.name = "David";<br/><br/>
          console.log(person.name); // David
        </code>
      </div>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        The variable still refers to the same object.
      </p>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1><code>var</code> vs <code>let</code> vs <code>const</code></h1>
      <div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '1.05rem', color: '#374151' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #E5E7EB', backgroundColor: '#F9FAFB' }}>
              <th style={{ padding: '1rem' }}>Feature</th>
              <th style={{ padding: '1rem' }}><code>var</code></th>
              <th style={{ padding: '1rem' }}><code>let</code></th>
              <th style={{ padding: '1rem' }}><code>const</code></th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
              <td style={{ padding: '1rem' }}>Function scoped</td>
              <td style={{ padding: '1rem' }}>Yes</td>
              <td style={{ padding: '1rem' }}>No</td>
              <td style={{ padding: '1rem' }}>No</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
              <td style={{ padding: '1rem' }}>Block scoped</td>
              <td style={{ padding: '1rem' }}>No</td>
              <td style={{ padding: '1rem' }}>Yes</td>
              <td style={{ padding: '1rem' }}>Yes</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
              <td style={{ padding: '1rem' }}>Can redeclare</td>
              <td style={{ padding: '1rem' }}>Yes</td>
              <td style={{ padding: '1rem' }}>No</td>
              <td style={{ padding: '1rem' }}>No</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
              <td style={{ padding: '1rem' }}>Can reassign</td>
              <td style={{ padding: '1rem' }}>Yes</td>
              <td style={{ padding: '1rem' }}>Yes</td>
              <td style={{ padding: '1rem' }}>No</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
              <td style={{ padding: '1rem' }}>Must initialize</td>
              <td style={{ padding: '1rem' }}>No</td>
              <td style={{ padding: '1rem' }}>No</td>
              <td style={{ padding: '1rem' }}>Yes</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
              <td style={{ padding: '1rem' }}>Before declaration</td>
              <td style={{ padding: '1rem' }}><code>undefined</code></td>
              <td style={{ padding: '1rem' }}>ReferenceError</td>
              <td style={{ padding: '1rem' }}>ReferenceError</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem' }}>Recommended today</td>
              <td style={{ padding: '1rem' }}>No</td>
              <td style={{ padding: '1rem' }}>Yes</td>
              <td style={{ padding: '1rem' }}>Yes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>Which One Should You Use?</h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        In modern JavaScript:
      </p>

      <h3>Use <code>const</code> by default</h3>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Use <code>const</code> when you do not need to reassign the variable.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const name = "John";<br/>
          const age = 25;
        </code>
      </div>

      <h3>Use <code>let</code> when the value will change</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          let score = 0;<br/><br/>
          score = 10;<br/>
          score = 20;
        </code>
      </div>

      <h3>Avoid <code>var</code> in modern JavaScript</h3>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        <code>var</code> is still valid JavaScript and is important to understand because you will see it in older code, but for new code, <code>let</code> and <code>const</code> are generally preferred.
      </p>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>Summary</h1>
      <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.7', fontSize: '1.05rem', color: '#374151' }}>
        <li><strong><code>var</code></strong> → older, function-scoped, can be redeclared and reassigned.</li>
        <li><strong><code>let</code></strong> → block-scoped, can be reassigned but not redeclared in the same scope.</li>
        <li><strong><code>const</code></strong> → block-scoped, cannot be reassigned or redeclared.</li>
        <li>Prefer <strong><code>const</code></strong> when the variable will not be reassigned.</li>
        <li>Use <strong><code>let</code></strong> when the variable needs to be reassigned.</li>
        <li>Avoid <strong><code>var</code></strong> when writing modern JavaScript.</li>
      </ul>

    </>
  );
};

export default VariablesTutorial;
