import React from "react";

const DataTypesTutorial = () => {
  return (
    <>
      <h1>JavaScript Data Types</h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Data types tell JavaScript what kind of value a variable contains. JavaScript has several built-in data types that are divided into two main categories:
      </p>
      
      <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.7', fontSize: '1.05rem', color: '#374151' }}>
        <li><strong>Primitive Data Types</strong></li>
        <li><strong>Non-Primitive Data Types</strong></li>
      </ul>

      <h2>Primitive vs Non-Primitive Data Types</h2>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        <strong>Primitive values</strong> are simple, immutable values that represent a single value.
      </p>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        <strong>Non-primitive values</strong> are objects that can contain collections of values and properties.
      </p>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>Primitive Data Types</h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        JavaScript has <strong>7 primitive data types</strong>:
      </p>
      <ol style={{ marginLeft: '2rem', marginBottom: '2rem', lineHeight: '1.7', fontSize: '1.05rem', color: '#374151' }}>
        <li>String</li>
        <li>Number</li>
        <li>Boolean</li>
        <li>Null</li>
        <li>Undefined</li>
        <li>Symbol</li>
        <li>BigInt</li>
      </ol>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2>1. String</h2>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        A <strong>String</strong> is used to represent text. Strings can be written using single quotes, double quotes, or backticks.
      </p>
      
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const firstName = "John";<br/>
          const lastName = 'Doe';<br/><br/>
          console.log(firstName);<br/>
          // "John"<br/><br/>
          console.log(lastName);<br/>
          // "Doe"
        </code>
      </div>

      <h3>Concatenating Strings</h3>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        You can combine two or more strings using the <code>+</code> operator.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          let x = "Hello";<br/>
          let y = " World";<br/><br/>
          let result = x + y;<br/><br/>
          console.log(result);<br/>
          // "Hello World"
        </code>
      </div>

      <h3>Template Literals</h3>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Template literals use backticks (<code>`</code>) and allow you to insert variables directly into a string.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          let name = "John";<br/>
          let age = 25;<br/><br/>
          let result = `My name is ${'{'}name{'}'} and I am ${'{'}age{'}'} years old.`;<br/><br/>
          console.log(result);<br/>
          // "My name is John and I am 25 years old."
        </code>
      </div>

      <h3>String Properties and Methods</h3>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        JavaScript provides many useful properties and methods for working with strings.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          let text = "Hello World";
        </code>
      </div>

      <h4><code>length</code></h4>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>Returns the number of characters in a string.</p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>text.length;<br/>// 11</code>
      </div>

      <h4><code>toUpperCase()</code></h4>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>Converts a string to uppercase.</p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>text.toUpperCase();<br/>// "HELLO WORLD"</code>
      </div>

      <h4><code>toLowerCase()</code></h4>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>Converts a string to lowercase.</p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>text.toLowerCase();<br/>// "hello world"</code>
      </div>

      <h4><code>replace()</code></h4>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>Replaces part of a string.</p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>text.replace("Hello", "Hi");<br/>// "Hi World"</code>
      </div>

      <h4><code>trim()</code></h4>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>Removes whitespace from the beginning and end of a string.</p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>let value = "  Hello  ";<br/><br/>value.trim();<br/>// "Hello"</code>
      </div>

      <h4>Accessing Characters</h4>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>You can access a character using its index or <code>charAt()</code>:</p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>text[0]; // "H"<br/>text[1]; // "e"<br/><br/>text.charAt(1); // "e"</code>
      </div>

      <h4><code>includes()</code></h4>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>Checks whether a string contains a specific value.</p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>text.includes("Hello");<br/>// true</code>
      </div>

      <h4><code>indexOf()</code></h4>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>Returns the index of the first occurrence of a value. If the value is not found, it returns <code>-1</code>.</p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>text.indexOf("World");<br/>// 6</code>
      </div>

      <h4><code>split()</code></h4>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>Splits a string into an array.</p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>text.split("");<br/>// ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]<br/><br/>text.split(" ");<br/>// ["Hello", "World"]</code>
      </div>

      <h4><code>substring()</code></h4>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>Extracts characters between two indexes. If only one argument is provided, it extracts from that index to the end.</p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>text.substring(0, 5);<br/>// "Hello"<br/><br/>text.substring(6);<br/>// "World"</code>
      </div>

      <h4><code>slice()</code></h4>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>Extracts a section of a string. It can also use negative indexes.</p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>text.slice(0, 5);<br/>// "Hello"<br/><br/>text.slice(-5);<br/>// "World"</code>
      </div>

      <h4><code>valueOf()</code></h4>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>Returns the primitive value of a String object.</p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>text.valueOf();<br/>// "Hello World"</code>
      </div>
      <div className="example-box">
        <p style={{ margin: 0 }}><strong>Note:</strong> In normal JavaScript code, you usually do not need to call <code>valueOf()</code> directly.</p>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>2. Number</h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        The <strong>Number</strong> data type is used for both integer and floating-point numbers.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const age = 25;<br/>
          const price = 99.99;<br/>
          const temperature = -5;
        </code>
      </div>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        JavaScript uses the <code>number</code> type for these values.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          typeof 25; // "number"<br/>
          typeof 99.99; // "number"
        </code>
      </div>

      <h3>Number Object</h3>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        You can technically create a Number object using <code>new Number()</code>, but you should normally use a number primitive instead.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const numObj = new Number(5);<br/>
          console.log(typeof numObj); // "object"<br/><br/>
          const num = 5;<br/>
          console.log(typeof num); // "number"
        </code>
      </div>
      <div className="example-box">
        <p style={{ margin: 0 }}><strong>Recommendation:</strong> Avoid <code>new Number()</code> in normal JavaScript code.</p>
      </div>

      <h3>Number Methods</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          let num = 123.456;
        </code>
      </div>

      <h4><code>toString()</code></h4>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>Converts a number to a string.</p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>num.toString();<br/>// "123.456"</code>
      </div>

      <h4><code>toFixed()</code></h4>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>Formats a number with a specific number of decimal places. <strong>Note:</strong> <code>toFixed()</code> returns a string.</p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>num.toFixed(2);<br/>// "123.46"</code>
      </div>

      <h4><code>toPrecision()</code></h4>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>Formats a number to a specified number of significant digits.</p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>num.toPrecision(3);<br/>// "123"</code>
      </div>

      <h4><code>toExponential()</code></h4>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>Returns the number in exponential notation.</p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>num.toExponential(2);<br/>// "1.23e+2"</code>
      </div>

      <h4><code>toLocaleString()</code></h4>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>Formats a number according to a locale.</p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>const price = 1234567.89;<br/>price.toLocaleString("en-US");<br/>// "1,234,567.89"</code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2>Useful Number Properties and Methods</h2>

      <h4><code>Number.MAX_VALUE</code> & <code>Number.MIN_VALUE</code></h4>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        <strong>MAX_VALUE</strong> is the largest positive finite number JavaScript can represent. 
        <strong>MIN_VALUE</strong> is the smallest positive number greater than zero. (Important: MIN_VALUE is not the smallest negative number).
      </p>

      <h4><code>Number.MAX_SAFE_INTEGER</code> & <code>Number.MIN_SAFE_INTEGER</code></h4>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        The largest (<code>9007199254740991</code>) and smallest (<code>-9007199254740991</code>) integers JavaScript can safely represent exactly.
      </p>

      <h4>Verification Methods</h4>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          Number.isInteger(10); // true<br/>
          Number.isInteger(10.5); // false<br/><br/>
          Number.isNaN(NaN); // true<br/><br/>
          Number.isFinite(100); // true<br/>
          Number.isFinite(Infinity); // false<br/><br/>
          Number.isSafeInteger(100); // true
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>The Math Object</h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        The built-in <code>Math</code> object provides properties and methods for performing mathematical operations.
      </p>
      
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          Math.sqrt(9); // 3 (Square root)<br/>
          Math.abs(-5); // 5 (Absolute value)<br/>
          Math.round(4.6); // 5 (Nearest integer)<br/>
          Math.ceil(4.2); // 5 (Round upward)<br/>
          Math.floor(4.9); // 4 (Round downward)<br/>
          Math.pow(2, 3); // 8 (Power, same as 2 ** 3)<br/>
          Math.min(4, 3, 2); // 2 (Smallest number)<br/>
          Math.max(4, 3, 2); // 4 (Largest number)<br/>
          Math.random(); // Random number from 0 to less than 1
        </code>
      </div>

      <h4>Random Number Between 1 and 10</h4>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          Math.floor(Math.random() * 10) + 1;
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>3. Boolean</h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        The <strong>Boolean</strong> data type represents a logical value. It can have only two values: <code>true</code> or <code>false</code>.
      </p>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Booleans are commonly used in conditions and decision-making.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const isLoggedIn = true;<br/><br/>
          if (isLoggedIn) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log("Welcome!");<br/>
          {'}'}<br/><br/>
          const age = 20;<br/>
          console.log(age {'>'}= 18); // true
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>4. Null</h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        <code>null</code> represents the intentional absence of a value. It is commonly used when you intentionally want to indicate that a value is empty or unavailable.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          let selectedUser = null;<br/>
          selectedUser = "John"; // Assign a value later
        </code>
      </div>

      <h3><code>typeof null</code></h3>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        There is a famous JavaScript behavior where <code>typeof null</code> returns <code>"object"</code>. Although <code>null</code> is a primitive value, it returns object because of a historical behavior in JavaScript.
      </p>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        To check specifically for null, use:
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          value === null;
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>5. Undefined</h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        <code>undefined</code> means that a variable has been declared but has not been assigned a value.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          let name;<br/>
          console.log(name); // undefined<br/>
          <br/>
          typeof undefined; // "undefined"
        </code>
      </div>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        You can also explicitly assign <code>undefined</code>, but in most cases, it is better to let JavaScript produce it naturally.
      </p>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>6. Symbol</h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        A <strong>Symbol</strong> is a primitive data type that creates a unique value. Symbols are often used when you need a unique property key in an object.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const id = Symbol("id");<br/>
          console.log(typeof id); // "symbol"<br/><br/>
          // Every Symbol is unique, even when they have the same description:<br/>
          const id1 = Symbol("id");<br/>
          const id2 = Symbol("id");<br/>
          console.log(id1 === id2); // false
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>7. BigInt</h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        <strong>BigInt</strong> is used to represent whole numbers that are larger than the maximum safe integer that the <code>number</code> type can accurately represent.
      </p>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        You can create a BigInt by adding <code>n</code> to the end of an integer.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const bigNumber = 9007199254740993n;<br/>
          console.log(typeof bigNumber); // "bigint"<br/><br/>
          const a = 9007199254740993n;<br/>
          const b = 2n;<br/>
          console.log(a + b); // 9007199254740995n
        </code>
      </div>
      <div className="example-box">
        <p style={{ margin: 0 }}><strong>Note:</strong> You cannot directly mix BigInt and Number in arithmetic operations. (e.g., <code>10n + 5</code> throws a TypeError).</p>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>Non-Primitive Data Types</h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Non-primitive values are generally objects. They can contain multiple values and properties. Common examples include Objects, Arrays, and Functions.
      </p>

      <h2>Objects</h2>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        An object stores data in <strong>key-value pairs</strong>. You can store multiple types of values inside an object.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const person = {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;name: "John",<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;age: 25,<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;isLoggedIn: true<br/>
          {'}'};<br/><br/>
          console.log(person.name); // "John"
        </code>
      </div>

      <h2>Arrays</h2>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        An array is used to store multiple values in an ordered collection.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const data = ["John", 25, true];<br/><br/>
          console.log(data[0]); // "John"<br/><br/>
          typeof data; // "object"<br/>
          Array.isArray(data); // true
        </code>
      </div>

      <h2>Functions</h2>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Functions are reusable blocks of code that perform a task.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          function greet() {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log("Hello!");<br/>
          {'}'}<br/><br/>
          greet();<br/><br/>
          typeof greet; // "function"
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>Primitive vs Non-Primitive: Comparison</h1>
      <div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '1.05rem', color: '#374151' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #E5E7EB', backgroundColor: '#F9FAFB' }}>
              <th style={{ padding: '1rem' }}>Primitive</th>
              <th style={{ padding: '1rem' }}>Non-Primitive</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
              <td style={{ padding: '1rem' }}>String, Number, Boolean, Null, Undefined, Symbol, BigInt</td>
              <td style={{ padding: '1rem' }}>Object, Array, Function, Other object types</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
              <td style={{ padding: '1rem' }}>Represents a single value</td>
              <td style={{ padding: '1rem' }}>Can contain multiple values/properties</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem' }}>Primitive values are immutable</td>
              <td style={{ padding: '1rem' }}>Objects can be mutable</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h1>Checking Data Types with <code>typeof</code></h1>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          console.log(typeof "Hello"); // "string"<br/>
          console.log(typeof 100); // "number"<br/>
          console.log(typeof true); // "boolean"<br/>
          console.log(typeof undefined); // "undefined"<br/>
          console.log(typeof 10n); // "bigint"<br/>
          console.log(typeof Symbol()); // "symbol"<br/>
          console.log(typeof {'{'}{'}'}); // "object"<br/>
          console.log(typeof []); // "object"<br/>
          console.log(typeof function () {'{'}{'}'}); // "function"
        </code>
      </div>
      
      <div className="example-box">
        <p style={{ margin: 0, paddingBottom: '1rem' }}>Remember the two important JavaScript exceptions:</p>
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          console.log(typeof null); // "object"<br/>
          // and<br/>
          console.log(typeof function () {'{'}{'}'}); // "function"<br/><br/>
          // For arrays:<br/>
          console.log(typeof []); // "object"<br/>
          console.log(Array.isArray([])); // true
        </code>
      </div>

    </>
  );
};

export default DataTypesTutorial;
