import React from "react";

const OperatorsTutorial = () => {
  return (
    <>
      <h1>JavaScript Operators</h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Operators are used to assign values, compare values, perform arithmetic operations, and more.
      </p>

      <h2>1. Arithmetic Operators</h2>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Arithmetic operators are used to perform mathematical calculations between variables and/or values.
      </p>
      <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.7', fontSize: '1.05rem', color: '#374151' }}>
        <li><code>+</code> : Addition</li>
        <li><code>-</code> : Subtraction</li>
        <li><code>*</code> : Multiplication</li>
        <li><code>/</code> : Division</li>
        <li><code>%</code> : Modulus (Division Remainder)</li>
        <li><code>**</code> : Exponentiation</li>
        <li><code>++</code> : Increment</li>
        <li><code>--</code> : Decrement</li>
      </ul>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          let a = 10;<br/>
          let b = 5;<br/><br/>
          console.log(a + b); // 15<br/>
          console.log(a - b); // 5<br/>
          console.log(a * b); // 50<br/>
          console.log(a / b); // 2<br/>
          console.log(a % 3); // 1 (remainder of 10 / 3)<br/>
          console.log(a ** 2); // 100 (10 to the power of 2)
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2>2. Assignment Operators</h2>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Assignment operators assign values to JavaScript variables.
      </p>
      <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.7', fontSize: '1.05rem', color: '#374151' }}>
        <li><code>=</code> : Assign</li>
        <li><code>+=</code> : Add and assign</li>
        <li><code>-=</code> : Subtract and assign</li>
        <li><code>*=</code> : Multiply and assign</li>
        <li><code>/=</code> : Divide and assign</li>
      </ul>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          let x = 10; // Assigns 10 to x<br/>
          x += 5;     // Equivalent to x = x + 5 (x is now 15)<br/>
          x -= 2;     // Equivalent to x = x - 2 (x is now 13)<br/>
          x *= 2;     // Equivalent to x = x * 2 (x is now 26)<br/>
          x /= 2;     // Equivalent to x = x / 2 (x is now 13)
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2>3. Comparison Operators</h2>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Comparison operators are used in logical statements to determine equality or difference between variables or values. They return a boolean (<code>true</code> or <code>false</code>).
      </p>
      <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.7', fontSize: '1.05rem', color: '#374151' }}>
        <li><code>==</code> : Equal to (checks value only)</li>
        <li><code>===</code> : Equal value and equal type (Strict equality)</li>
        <li><code>!=</code> : Not equal</li>
        <li><code>!==</code> : Not equal value or not equal type (Strict inequality)</li>
        <li><code>&gt;</code> : Greater than</li>
        <li><code>&lt;</code> : Less than</li>
        <li><code>&gt;=</code> : Greater than or equal to</li>
        <li><code>&lt;=</code> : Less than or equal to</li>
      </ul>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          console.log(5 == "5");  // true (values are equal)<br/>
          console.log(5 === "5"); // false (types are different: number vs string)<br/>
          console.log(10 != 8);   // true<br/>
          console.log(10 &gt; 5);    // true<br/>
          console.log(5 &lt;= 5);   // true
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2>4. Type Conversion & Coercion</h2>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        JavaScript can convert types automatically (<strong>Type Coercion</strong>) or you can do it manually (<strong>Type Conversion</strong>).
      </p>

      <h3>Explicit Conversion (Manual)</h3>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        You can use built-in functions like <code>Boolean()</code>, <code>Number()</code>, or <code>String()</code> to explicitly convert a value.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          // Convert number to Boolean<br/>
          let num = 1;<br/>
          num = Boolean(num);<br/>
          console.log(num); // true (1 is truthy, 0 is falsy)
        </code>
      </div>

      <h3>Implicit Coercion (Automatic)</h3>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        When you combine different data types (like numbers and strings) with operators, JavaScript will automatically convert one type into another behind the scenes.
      </p>
      
      <div className="example-box">
        <h4 style={{ margin: '0 0 1rem 0', color: '#111827' }}>String Concatenation with <code>+</code></h4>
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          let x = 5 + "5";<br/>
          console.log(x); // "55" (Number 5 is coerced into a String)
        </code>
      </div>

      <div className="example-box">
        <h4 style={{ margin: '0 0 1rem 0', color: '#111827' }}>Numeric Coercion with <code>-</code>, <code>*</code>, <code>/</code></h4>
        <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1rem', marginTop: 0 }}>
          Unlike the <code>+</code> operator (which prefers strings), other math operators will convert strings to numbers.
        </p>
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          let y = 5 - "5";<br/>
          console.log(y); // 0 (String "5" is coerced into a Number)<br/><br/>
          
          let z = "10" / "2";<br/>
          console.log(z); // 5
        </code>
      </div>

    </>
  );
};

export default OperatorsTutorial;
