import React from "react";

const CoercionTutorial = () => {
  return (
    <>
      <h1>Type Conversion and Coercion</h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        In JavaScript, data types can be converted either explicitly (Type Conversion) or implicitly (Type Coercion).
      </p>

      <h2>Type Conversion (Explicit)</h2>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Converting a value from one type to another manually.
      </p>

      <h3>Convert to Number</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          let x = '100';<br/><br/>
          x = Number(x);<br/>
          x = +x;          // Unary plus operator<br/>
          x = parseInt(x); // Parses an integer
        </code>
      </div>

      <h3>Convert to Float (Decimal) Number</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          let y = '96.4';<br/>
          y = parseFloat(y);
        </code>
      </div>

      <h3>Convert to String</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          let z = 96;<br/><br/>
          z = z.toString();<br/>
          z = String(z);
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2>Type Coercion (Implicit)</h2>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        JavaScript automatically converts types behind the scenes when combining different data types.
      </p>

      <h3>Strings and Numbers</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          // The + operator triggers string concatenation if one value is a string<br/>
          let a = 5 + '5';  // =&gt; '55' (string)<br/><br/>
          
          // Other math operators convert strings to numbers<br/>
          let b = 5 - '5';  // =&gt; 0 (number)
        </code>
      </div>

      <h3>Booleans and Numbers</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          // true is treated as 1, false as 0<br/>
          let c = 5 + true;  // =&gt; 6<br/>
          let d = 5 + false; // =&gt; 5
        </code>
      </div>

      <h3>Undefined</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          // Math with undefined results in NaN (Not a Number)<br/>
          let e = 5 + undefined; // =&gt; NaN (type is still number)
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2>Checking Number Conversions</h2>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Here are common explicit conversions using <code>Number()</code>:
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          console.log(Number(null));  // 0 (number)<br/>
          console.log(Number(true));  // 1 (number)<br/>
          console.log(Number(false)); // 0 (number)
        </code>
      </div>

    </>
  );
};

export default CoercionTutorial;
