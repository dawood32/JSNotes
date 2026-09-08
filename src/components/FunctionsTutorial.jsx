import React from "react";

const FunctionsTutorial = () => {
  return (
    <>
      <h1>JavaScript Functions and Scope</h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Functions are one of the fundamental building blocks in JavaScript. A function is a reusable block of code designed to perform a particular task.
      </p>

      <h2>Function Basics</h2>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          function add(num1, num2) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log(num1 + num2);<br/>
          {'}'}<br/><br/>
          add(5, 10); // Output: 15<br/><br/>
          function subtract(num1, num2) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;return num1 - num2;<br/>
          {'}'}<br/><br/>
          const result = subtract(10, 2);<br/>
          console.log(result, subtract(20, 5)); // Output: 8 15
        </code>
      </div>

      <h3>Parameters and Arguments</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          // Default parameters (ES6)<br/>
          function registerUser(user = 'Bot') {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;return user + ' registered';<br/>
          {'}'}<br/><br/>
          console.log(registerUser()); // Output: Bot registered
        </code>
      </div>

      <h3>Rest Parameters</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          function sum(...numbers) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;return numbers; // Returns an array of the arguments<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;// (You can use a for...of loop to sum them up)<br/>
          {'}'}<br/><br/>
          console.log(sum(1, 2, 3, 4)); // Output: [1, 2, 3, 4]
        </code>
      </div>

      <h3>Arrays as Parameters</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          // Get a random number from an array<br/>
          function getRandom(arr) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;const randomIndex = Math.floor(Math.random() * arr.length);<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;const item = arr[randomIndex];<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log(item);<br/>
          {'}'}<br/><br/>
          getRandom([1, 2, 5, 6, 9, 10]);
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2>Function Declarations vs Expressions</h2>
      
      <h3>Function Declaration</h3>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Function declarations are hoisted, meaning you can call them before they are defined in the code.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          console.log(addDollarSign(100)); // Output: $100<br/><br/>
          function addDollarSign(value) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;return '$' + value;<br/>
          {'}'}
        </code>
      </div>

      <h3>Function Expression</h3>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Function expressions are not hoisted. They must be defined before they are called.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const addPlusSign = function(value) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;return '+' + value;<br/>
          {'}'};
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2>Arrow Functions</h2>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Introduced in ES6, arrow functions provide a more concise syntax.
      </p>

      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const add = (a, b) =&gt; {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;return a + b;<br/>
          {'}'};<br/><br/>
          // Single line / Implicit Return<br/>
          const subtract = (a, b) =&gt; a - b;<br/><br/>
          // Returning an object (wrap in parentheses)<br/>
          const createObj = () =&gt; ({'{'} name: 'kk' {'}'});<br/>
          console.log(createObj()); // Output: {'{'} name: 'kk' {'}'}
        </code>
      </div>

      <h3>Callbacks</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const numbers = [1, 2, 3, 5];<br/>
          numbers.forEach((e) =&gt; console.log(e));
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2>IIFE (Immediately Invoked Function Expression)</h2>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        An IIFE is a function that runs as soon as it is defined. It is often used to avoid polluting the global scope.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          (function() {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;const user = 'john';<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log(user);<br/>
          {'}'})();
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2>Scope</h2>
      
      <h3>Global & Function Scope</h3>
      <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.7', fontSize: '1.05rem', color: '#374151' }}>
        <li>Variables declared outside a function (using <code>let</code>, <code>const</code>, or <code>var</code>) can be accessed everywhere (Global Scope).</li>
        <li>Variables declared within a function can only be accessed within that function (Function Scope).</li>
      </ul>

      <h3>Block Scope</h3>
      <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.7', fontSize: '1.05rem', color: '#374151' }}>
        <li><code>let</code> and <code>const</code> have block scope (e.g., inside an <code>if</code> statement or loop).</li>
        <li><code>var</code> does not have block scope, but it does have function scope (you cannot access a <code>var</code> outside of the function it was created in).</li>
      </ul>

      <h3>Nested Scope & Closures</h3>
      <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.7', fontSize: '1.05rem', color: '#374151' }}>
        <li>An inner function can access variables from an outer function (Closure), but an outer function cannot access variables from an inner function.</li>
        <li>An inner block statement can access variables from an outer block statement.</li>
      </ul>

    </>
  );
};

export default FunctionsTutorial;
