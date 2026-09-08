import React from "react";

const DateAndTimeTutorial = () => {
  return (
    <>
      <h1>Date and Times</h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        In JavaScript, <strong>Date</strong> objects are used to work with dates and times. They are of type <code>object</code>.
      </p>

      <h2>Creating Date Objects</h2>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        You can create a new Date object using the <code>new Date()</code> constructor in several ways.
      </p>
      
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          let d;<br/><br/>
          // 1. Current date and time<br/>
          d = new Date();<br/>
          console.log(d);<br/><br/>
          // 2. Specific date and time: new Date(year, month, day, hours, minutes, seconds)<br/>
          // Note: Months are 0-indexed (0 = January)<br/>
          d = new Date(2021, 0, 17, 12, 30, 0);<br/>
          console.log(d);<br/><br/>
          // 3. Date string<br/>
          d = new Date('07-10-2022');<br/>
          console.log(d);
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2>Date Methods</h2>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Once you have a Date object, you can use various methods to get or format its values.
      </p>

      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          let x;<br/>
          let d = new Date();<br/><br/>
          
          // Converting to strings & timestamps<br/>
          x = d.toString();<br/>
          x = d.valueOf();    // Returns timestamp in milliseconds<br/>
          x = d.getTime();    // Returns timestamp in milliseconds<br/><br/>
          
          x = Date.now();     // Returns current timestamp directly
        </code>
      </div>

      <h3>Getting Specific Date/Time Parts</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          d = new Date();<br/><br/>
          x = d.getFullYear();<br/>
          x = d.getMonth() + 1; // +1 because months are 0-11<br/>
          x = d.getDate();      // Day of the month (1-31)<br/>
          x = d.getDay();       // Day of the week (0-6)<br/>
          x = d.getHours();<br/>
          x = d.getMinutes();<br/>
          x = d.getSeconds();<br/>
          x = d.getMilliseconds();
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h2>Formatting Dates with toLocaleString</h2>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        The <code>toLocaleString()</code> method is a powerful way to format dates based on language and formatting options.
      </p>
      
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          let d = new Date();<br/><br/>
          let x = d.toLocaleString('default', {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;weekday: 'long',<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;year: 'numeric',<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;month: 'long',<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;day: 'numeric',<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;hour: 'numeric',<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;minute: 'numeric',<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;second: 'numeric',<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;timeZone: 'America/New_York'<br/>
          {'}'});<br/><br/>
          console.log(x);
        </code>
      </div>

    </>
  );
};

export default DateAndTimeTutorial;
