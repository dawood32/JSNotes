import React from "react";

const ArraysTutorial = () => {
  return (
    <>

      <h1>Arrays in JavaScript</h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Arrays are special variables that can hold more than one value at a time.
      </p>

      <h2>Creating Arrays</h2>
      
      <h3>Array Literal</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const numbers = [12, 45, 29, 11];<br/>
          const mixed = [12, 'Hello', true, null];
        </code>
      </div>

      <h3>Array Constructor</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const fruits = new Array('Apple', 'Banana', 'Orange');
        </code>
      </div>

      <h2>Accessing & Modifying Arrays</h2>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          let x;<br/><br/>
          x = numbers[0]; // Access by index<br/>
          x = `My favorite fruit is ${'{'}fruits[0]{'}'}`;<br/>
          x = numbers.length; // Get length<br/><br/>
          
          fruits[2] = 'pear'; // Modify element<br/>
          fruits[3] = 'orang'; // Add element at specific index<br/>
          fruits[fruits.length] = 'strawberry'; // Add element to the end
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2>Array Methods</h2>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const arr = [34, 55, 95, 15];<br/><br/>
          arr.push(30);    // Add to the end<br/>
          arr.pop();       // Remove from the end<br/>
          arr.unshift(30); // Add to the beginning<br/>
          arr.shift();     // Remove from the beginning<br/>
          arr.reverse();   // Reverse the array<br/><br/>
          
          x = arr.includes(200); // Check if exists (true/false)<br/>
          x = arr.indexOf(340);  // Get index (or -1 if not found)<br/><br/>
          
          // Slice (Does NOT change original array)<br/>
          x = arr.slice(1, 4);<br/><br/>
          
          // Splice (CHANGES original array)<br/>
          x = arr.splice(1, 4);<br/><br/>
          
          // Chaining methods<br/>
          x = arr.splice(1, 4).reverse().toString().charAt(0);
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2>Nesting, Concat & Spread</h2>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const fruit = ["apple", "banana", "orange"];<br/>
          const berries = ["strawberry", "blueberry", "rasberry"];<br/><br/>
          
          // Nesting (puts an array inside an array)<br/>
          fruit.push(berries);<br/><br/>
          
          // Concat (combines arrays into a new array)<br/>
          x = fruit.concat(berries);<br/><br/>
          
          // Spread Operator (combines elements smoothly)<br/>
          x = [...fruit, ...berries];
        </code>
      </div>

      <h3>Flatten Array</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const arr2 = [1, 2, [3, 4], 5, [6, 7], 8];<br/>
          x = arr2.flat(); // Result: [1, 2, 3, 4, 5, 6, 7, 8]
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2>Static Methods on Array Object</h2>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          x = Array.isArray(fruit); // true<br/>
          x = Array.from('1234');   // ['1', '2', '3', '4']<br/><br/>
          
          const a = 1, b = 2, c = 3;<br/>
          x = Array.of(a, b, c);    // [1, 2, 3]
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2>High Order Array Methods</h2>

      <h3><code>filter</code></h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];<br/>
          const evenNumber = arr.filter(item =&gt; item % 2 === 0);
        </code>
      </div>

      <h3><code>map</code></h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];<br/>
          const Narr = arr.map(num =&gt; num * 2);
        </code>
      </div>

      <h3>Chain <code>map</code> method</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const dnum = arr.map(num =&gt; num * 2).map(sqr =&gt; Math.sqrt(sqr));
        </code>
      </div>

      <h3>Chain different methods</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const evenN = arr.filter(item =&gt; item % 2 === 0).map(item =&gt; item * 2);
        </code>
      </div>

      <h3><code>reduce</code> method</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];<br/>
          const sum = arr.reduce((accu, curr) =&gt; accu + curr);
        </code>
      </div>

      <h4>Reduce with Initial Value</h4>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const arr = [{'{'}name: 'k', price: 450{'}'}, {'{'}name: 'g', price: 300{'}'}];<br/>
          const sum1 = arr.reduce((accu, curr) =&gt; accu + curr.price, 0); // 0 is initial value
        </code>
      </div>

    </>





  );
};

export default ArraysTutorial;
