import React from "react";

const ObjectsTutorial = () => {
  return (
    <>
      <h1>JavaScript Objects</h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Objects in JavaScript are used to store keyed collections of various data and more complex entities.
      </p>

      <h2>Basic Object Syntax</h2>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const person = {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;name: 'John',<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;age: 30<br/>
          {'}'};<br/><br/>
          let x;<br/>
          x = person.age; // Accessing property<br/>
          x = person['name']; // Bracket notation
        </code>
      </div>

      <h3>Adding, Modifying, and Deleting Properties</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          person.company = 'Digital'; // Adding property<br/>
          person.age = 40;            // Modifying property<br/>
          delete person.age;          // Deleting property
        </code>
      </div>

      <h3>Object Methods and <code>this</code></h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          person.greet = function() {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;return `name is ${'{'}this.name{'}'}`;<br/>
          {'}'}<br/><br/>
          x = person.greet();
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2>Nested Objects & Spread Operator</h2>
      
      <h3>Creating Objects with <code>new Object()</code></h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const todos = new Object();<br/>
          todos.id = 1;<br/>
          todos.name = 'kkk';
        </code>
      </div>

      <h3>Combining Objects</h3>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        You can combine objects using the <strong>spread operator</strong> (<code>...</code>) or <code>Object.assign()</code>.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const obj1 = {'{'} a: 1, b: 2 {'}'};<br/>
          const obj2 = {'{'} c: 3, d: 4 {'}'};<br/><br/>
          // Using Spread Operator (Modern way)<br/>
          const obj3 = {'{'} ...obj1, ...obj2 {'}'};<br/><br/>
          // Using Object.assign<br/>
          const obj4 = Object.assign({'{'}{'}'}, obj1, obj2);
        </code>
      </div>

      <h3>Object Keys, Values, and Entries</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          let keys = Object.keys(todos);   // Gives array of property names: ['id', 'name']<br/>
          let length = Object.keys(todos).length; // 2<br/><br/>
          
          let values = Object.values(todos); // Gives array of values: [1, 'kkk']<br/><br/>
          
          let entries = Object.entries(todos);<br/>
          // Gives array of key-value pairs:<br/>
          // [['id', 1], ['name', 'kkk']]
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2>Object Destructuring</h2>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Destructuring makes it easy to extract values from objects or arrays into distinct variables.
      </p>
      
      <h3>Shorthand Syntax</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const firstName = 'John';<br/>
          const age = 30;<br/>
          const person = {'{'} firstName, age {'}'}; // Property value shorthand
        </code>
      </div>

      <h3>Extracting Variables</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const person2 = {'{'} name: 'kk', age: 30 {'}'};<br/><br/>
          // Extract matching property names<br/>
          const {'{'} name, age {'}'} = person2;<br/><br/>
          // Rename variables during destructuring<br/>
          const {'{'} name: newName, age: newAge {'}'} = person2;
        </code>
      </div>

      <h3>Nested Destructuring</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const appState = {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;user: {'{'} age: 30 {'}'}<br/>
          {'}'};<br/><br/>
          const {'{'} user: {'{'} age {'}'} {'}'} = appState;
        </code>
      </div>

      <h3>Array Destructuring</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const arr = [1, 2, 3, 4];<br/>
          const [first, second] = arr; // first is 1, second is 2<br/><br/>
          // Array spread<br/>
          const arr1 = [1, 2];<br/>
          const arr2 = [3, 4];<br/>
          const arrs = [...arr1, ...arr2];<br/><br/>
          arrs.splice(4, 1);
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2>JSON (JavaScript Object Notation)</h2>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        JSON is a lightweight data interchange format used heavily for fetching data (e.g., from an API like <code>api.github.com/users/dawood</code>).
      </p>

      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const obj = {'{'} name: 'kk', age: 30 {'}'};<br/><br/>
          // Convert Object to JSON String<br/>
          const str = JSON.stringify(obj);<br/>
          // Now we cannot access properties like str.name because it's a string.<br/><br/>
          // Convert JSON String back to Object<br/>
          const parsedObj = JSON.parse(str);<br/>
          // Now it's a regular JavaScript object again.
        </code>
      </div>
    </>
  );
};

export default ObjectsTutorial;
