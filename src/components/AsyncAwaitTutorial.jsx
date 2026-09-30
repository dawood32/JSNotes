import React from "react";

const AsyncAwaitTutorial = () => {
  return (
    <>
      <h1>Promises & Async/Await</h1>
      
      <h2>HTTP Status Codes</h2>
      <div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '1.05rem', color: '#374151' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #E5E7EB', backgroundColor: '#F9FAFB' }}>
              <th style={{ padding: '1rem' }}>2xx Success</th>
              <th style={{ padding: '1rem' }}>4xx Client Error</th>
              <th style={{ padding: '1rem' }}>5xx Server Error</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
              <td style={{ padding: '1rem' }}><strong>201</strong> Created</td>
              <td style={{ padding: '1rem' }}><strong>400</strong> Bad Request</td>
              <td style={{ padding: '1rem' }}><strong>500</strong> Internal Server Error (ISE)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
              <td style={{ padding: '1rem' }}><strong>204</strong> No Content</td>
              <td style={{ padding: '1rem' }}><strong>401</strong> Unauthorized</td>
              <td style={{ padding: '1rem' }}></td>
            </tr>
            <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
              <td style={{ padding: '1rem' }}></td>
              <td style={{ padding: '1rem' }}><strong>403</strong> Forbidden</td>
              <td style={{ padding: '1rem' }}></td>
            </tr>
            <tr>
              <td style={{ padding: '1rem' }}></td>
              <td style={{ padding: '1rem' }}><strong>404</strong> Not Found</td>
              <td style={{ padding: '1rem' }}></td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>Promises</h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation.
        It is non-blocking. A Promise is either <strong>fulfilled</strong> or <strong>rejected</strong>, and it prevents "callback hell".
      </p>

      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const promise = new Promise((resolve, reject) =&gt; {'{'}<br/>
          &nbsp;&nbsp;setTimeout(() =&gt; {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;console.log('...');<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;resolve();<br/>
          &nbsp;&nbsp;{'}'}, 1000);<br/>
          {'}'});<br/><br/>
          promise.then(() =&gt; {'{'}<br/>
          &nbsp;&nbsp;console.log('Promise Consumed');<br/>
          {'}'});
        </code>
      </div>

      <h3>Resolve, Reject, and Then/Catch</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          const getUser = new Promise((resolve, reject) =&gt; {'{'}<br/>
          &nbsp;&nbsp;setTimeout(() =&gt; {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;let error = false;<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;if (!error) {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resolve({'{'} name: 'kk' {'}'});<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{'}'} else {'{'}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reject('Error occurred');<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br/>
          &nbsp;&nbsp;{'}'}, 1000);<br/>
          {'}'});<br/><br/>
          getUser<br/>
          &nbsp;&nbsp;.then((user) =&gt; console.log(user))<br/>
          &nbsp;&nbsp;.catch((error) =&gt; console.log(error))<br/>
          &nbsp;&nbsp;.finally(() =&gt; console.log('...'));<br/><br/>
          console.log('Hello from Global scope'); // This runs first
        </code>
      </div>

      <h3>Promise Chaining</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          getUser.then((user) =&gt; console.log(user)).then(() =&gt; ...);
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>Fetch API</h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        The <code>fetch()</code> API returns a Promise.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          fetch('url')<br/>
          &nbsp;&nbsp;.then((res) =&gt; res.json())<br/>
          &nbsp;&nbsp;.then((data) =&gt; console.log(data));
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>Async / Await</h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        <code>async / await</code> is used in place of <code>then</code> and <code>catch</code> to make asynchronous code look synchronous and easier to read.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          async function getUsers() {'{'}<br/>
          &nbsp;&nbsp;const res = await fetch('...');<br/>
          &nbsp;&nbsp;const data = await res.json();<br/>
          {'}'}
        </code>
      </div>

      <h3>Try / Catch</h3>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        When using async/await, we use <code>try/catch</code> blocks for error handling instead of <code>.catch()</code>.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          try {'{'}<br/>
          &nbsp;&nbsp;// Put your code here<br/>
          {'}'} catch (error) {'{'}<br/>
          &nbsp;&nbsp;console.log(error);<br/>
          {'}'}
        </code>
      </div>
    </>
  );
};

export default AsyncAwaitTutorial;
