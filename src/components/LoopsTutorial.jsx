import React from "react";

const LoopsTutorial = () => {
  return (
    <>
      <h1>Loops & Iteration</h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Loops are used to execute a block of code multiple times, which is especially useful when working with arrays, objects, or strings.
      </p>

      <h2>The <code>for</code> Loop</h2>
      
      <h3>Basic For Loop</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          for (let i = 0; i &lt;= 10; i++) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log(i);<br/>
          {'}'}
        </code>
      </div>

      <h3>Nested For Loop</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          for (let i = 1; i &lt;= 10; i++) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;for (let j = 1; j &lt;= 10; j++) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(`${'{'}i{'}'} * ${'{'}j{'}'} is ${'{'}i * j{'}'}`);<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br/>
          {'}'}
        </code>
      </div>

      <h3>Looping Over an Array</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const arr = [1, 2, 3, 5];<br/>
          for (let i = 0; i &lt; arr.length; i++) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log(arr[i]);<br/>
          {'}'}
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2>Break & Continue</h2>
      
      <h3><code>break</code></h3>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        The <code>break</code> statement stops the loop entirely.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          for (let i = 0; i &lt;= 20; i++) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;if (i === 7) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log(i); // Stops at 6<br/>
          {'}'}
        </code>
      </div>

      <h3><code>continue</code></h3>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        The <code>continue</code> statement skips the current iteration and moves to the next one.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          for (let i = 0; i &lt;= 20; i++) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;if (i === 7) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;continue;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log(i); // Skips 7<br/>
          {'}'}
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2><code>while</code> & <code>do...while</code> Loops</h2>
      
      <h3>While Loop</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          let i = 0;<br/>
          while (i &lt;= 20) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log(i);<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;i++;<br/>
          {'}'}
        </code>
      </div>

      <h3>Do...While Loop</h3>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        The <code>do...while</code> loop always runs at least once before checking the condition.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          let j = 0;<br/>
          do {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log(j);<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;j++;<br/>
          {'}'} while (j &lt;= 20);
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2><code>for...of</code> Loop</h2>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Used to loop over iterable objects (like arrays, strings, or Maps).
      </p>

      <h3>Loop Through Array</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const items = ["book", "table", "kite"];<br/>
          for (let item of items) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log(item);<br/>
          {'}'}
        </code>
      </div>

      <h3>Loop Through String</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const str = 'Hello world';<br/>
          for (let st of str) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log(st);<br/>
          {'}'}
        </code>
      </div>

      <h3>Loop Over Maps</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const map = new Map();<br/>
          map.set('name', 'john');<br/>
          map.set('age', 30);<br/><br/>
          for (let [key, value] of map) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log(key, value);<br/>
          {'}'}
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2><code>for...in</code> Loop</h2>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Used to loop through the properties (keys) of an object.
      </p>

      <h3>Loop Through Object</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const colors = {'{'} color1: 'red', color2: 'green' {'}'};<br/>
          for (let key in colors) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log(key, colors[key]);<br/>
          {'}'}
        </code>
      </div>

      <h3>Loop Through Array (Not Recommended)</h3>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        While possible, it's generally better to use <code>for...of</code> for arrays.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const arrColors = ['red', 'green', 'blue'];<br/>
          for (let key in arrColors) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log(arrColors[key]);<br/>
          {'}'}
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2><code>forEach</code> Method</h2>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        A built-in array method to iterate over elements.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const socials = ['facebook', 'twitter', 'LinkedIn'];<br/><br/>
          socials.forEach(item =&gt; console.log(item));<br/><br/>
          // Passing item, index, and the original array<br/>
          socials.forEach((item, index, arr) =&gt; console.log(item, index, arr));
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2>Challenge: FizzBuzz</h2>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          for (let i = 1; i &lt;= 100; i++) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;if (i % 15 === 0) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log("FizzBuzz");<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{'}'} else if (i % 3 === 0) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log("Fizz");<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{'}'} else if (i % 5 === 0) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log("Buzz");<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{'}'} else {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(i);<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br/>
          {'}'}
        </code>
      </div>

    </>
  );
};

export default LoopsTutorial;
