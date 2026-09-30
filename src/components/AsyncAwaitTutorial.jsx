import React from "react";

const styles = {
  article: { lineHeight: 1.7, fontSize: "1.05rem", color: "#374151", minWidth: 0 },
  paragraph: { margin: "0 0 1.25rem" },
  list: { paddingLeft: "1.5rem", margin: "0 0 1.5rem" },
  section: {
    marginTop: "2.5rem",
    paddingTop: "1.5rem",
    borderTop: "1px solid #E5E7EB",
  },
  codeBlock: {
    margin: "0 0 1.5rem",
    padding: "1rem",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    backgroundColor: "#F9FAFB",
    overflowX: "auto",
    whiteSpace: "pre",
    fontSize: "0.95rem",
    lineHeight: 1.8,
    color: "#111827",
  },
  table: { width: "100%", borderCollapse: "collapse", textAlign: "left" },
  cell: { padding: "0.85rem", borderBottom: "1px solid #E5E7EB", verticalAlign: "top" },
};

const statusCodes = [
  [200, "OK", "The request succeeded."],
  [201, "Created", "The request succeeded and created a resource."],
  [204, "No Content", "The request succeeded; there is no response body."],
  [400, "Bad Request", "The server cannot process the request because of a client error."],
  [401, "Unauthorized", "Authentication credentials are missing or invalid."],
  [403, "Forbidden", "The server refuses access, often because permission is missing."],
  [404, "Not Found", "The requested resource was not found."],
  [429, "Too Many Requests", "The client has exceeded a request rate limit."],
  [500, "Internal Server Error", "An unexpected server error prevented completion."],
  [502, "Bad Gateway", "A gateway received an invalid response from an upstream server."],
  [503, "Service Unavailable", "The server is temporarily unable to handle the request."],
];

const Paragraph = ({ children }) => (
  <p style={styles.paragraph}>{children}</p>
);

const CodeBlock = ({ children, language = "javascript" }) => (
  <pre className="example-box" style={styles.codeBlock}>
    <code className={`language-${language}`} style={{ fontFamily: "monospace" }}>
      {children}
    </code>
  </pre>
);

const Section = ({ id, title, children }) => (
  <section id={id} aria-labelledby={`${id}-title`} style={styles.section}>
    <h2 id={`${id}-title`}>{title}</h2>
    {children}
  </section>
);

const AsyncAwaitTutorial = () => {
  return (
    <article style={styles.article}>
      <h1>Promises &amp; Async/Await</h1>
      <Paragraph>
        Learn how JavaScript handles asynchronous results, fetches data, and
        deals with errors. Run each example separately in a browser console or
        JavaScript playground. The Fetch examples use a public practice API
        and require a network connection.
      </Paragraph>

      <Section id="promise-basics" title="1. Understand Promises">
        <Paragraph>
          A Promise represents the result of an operation that may finish later.
          It lets you handle a successful value or a failure reason. Promises
          help organize asynchronous work and reduce deeply nested callbacks
          when you chain them correctly.
        </Paragraph>
        <ul style={styles.list}>
          <li><strong>Pending:</strong> The result is not yet available.</li>
          <li><strong>Fulfilled:</strong> The operation completed successfully with a value.</li>
          <li><strong>Rejected:</strong> The operation failed with a reason.</li>
        </ul>
        <Paragraph>
          A Promise is <strong>settled</strong> when it is fulfilled or rejected.
          Once settled, its state cannot change.
        </Paragraph>

        <h3>What runs immediately?</h3>
        <Paragraph>
          The function passed to <code>new Promise()</code>, called the executor,
          runs immediately. Promise handlers such as <code>.then()</code> run
          asynchronously, after the current synchronous code finishes. Wrapping
          a slow calculation in a Promise does not move it to a background thread.
        </Paragraph>
        <CodeBlock>{`console.log("1. Before creating the Promise");

const promise = new Promise((resolve) => {
  console.log("2. The executor runs immediately");

  setTimeout(() => {
    resolve("Task completed");
  }, 1000);
});

promise.then((message) => {
  console.log("4. " + message);
});

console.log("3. Synchronous code continues");`}</CodeBlock>
        <Paragraph>The output appears in this order:</Paragraph>
        <CodeBlock language="text">{`1. Before creating the Promise
2. The executor runs immediately
3. Synchronous code continues
4. Task completed`}</CodeBlock>
        <Paragraph>
          The timer simulates a delayed operation. Its callback becomes eligible
          after the delay; busy code or browser scheduling can make it run later.
        </Paragraph>
      </Section>

      <Section id="promise-handlers" title="2. Resolve, reject, then, catch, and finally">
        <Paragraph>
          This mock function returns a new Promise on each call. Set the argument
          to <code>true</code> to try the failure path.
        </Paragraph>
        <CodeBlock>{`function getUser(shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Unable to load the user"));
        return;
      }

      resolve({ id: 1, name: "Dawood" });
    }, 1000);
  });
}

getUser(false)
  .then((user) => {
    console.log("User:", user.name);
  })
  .catch((error) => {
    console.error("Failed:", error.message);
  })
  .finally(() => {
    console.log("Request finished");
  });

console.log("This runs before the user result");`}</CodeBlock>
        <ul style={styles.list}>
          <li><code>resolve(value)</code> supplies the result. With the plain
            object above, it fulfills the Promise; if given another Promise,
            it adopts that Promise's eventual outcome.</li>
          <li><code>reject(reason)</code> rejects the Promise. Prefer an{" "}
            <code>Error</code> object over a string for useful debugging information.</li>
          <li><code>.then(onFulfilled)</code> receives a successful value.</li>
          <li><code>.catch(onRejected)</code> handles a rejection from earlier
            in its chain, including errors thrown inside preceding handlers.</li>
          <li><code>.finally(callback)</code> runs after settlement and is useful
            for cleanup. It receives no result or error argument, and does not
            handle a rejection by itself.</li>
        </ul>
        <Paragraph>
          A catch handler that returns normally recovers the chain. Rethrow the
          error when a later caller also needs to handle the failure. If a finally
          callback throws or returns a rejected Promise, the resulting chain rejects.
        </Paragraph>
      </Section>

      <Section id="promise-chaining" title="3. Pass results through a Promise chain">
        <Paragraph>
          Each <code>.then()</code> returns a new Promise. Return a value to pass
          it to the next handler, or return a Promise to make the chain wait for
          that operation. This example delays the uppercase conversion:
        </Paragraph>
        <CodeBlock>{`Promise.resolve({ name: "Dawood" })
  .then((user) => {
    return user.name;
  })
  .then((name) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(name.toUpperCase()), 300);
    });
  })
  .then((name) => {
    console.log(name); // DAWOOD
  })
  .catch((error) => {
    console.error(error);
  });`}</CodeBlock>
        <Paragraph>
          <code>console.log()</code> returns <code>undefined</code>. If a handler
          only logs a value, it does not pass that value to the next handler.
          Use an explicit <code>return</code> when the next step needs the result.
        </Paragraph>
      </Section>

      <Section id="http-status-codes" title="4. Understand HTTP status codes">
        <Paragraph>
          A server's HTTP response includes a status code. The classes are:
          1xx informational, 2xx success, 3xx redirection, 4xx client errors, and
          5xx server errors.
        </Paragraph>
        <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
          <table style={styles.table}>
            <caption style={{ textAlign: "left", paddingBottom: "0.75rem" }}>
              Common HTTP responses
            </caption>
            <thead style={{ backgroundColor: "#F9FAFB" }}>
              <tr>
                <th scope="col" style={styles.cell}>Code</th>
                <th scope="col" style={styles.cell}>Status</th>
                <th scope="col" style={styles.cell}>Meaning</th>
              </tr>
            </thead>
            <tbody>
              {statusCodes.map(([code, status, meaning]) => (
                <tr key={code}>
                  <th scope="row" style={styles.cell}>{code}</th>
                  <td style={styles.cell}>{status}</td>
                  <td style={styles.cell}>{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Paragraph>
          <strong>204 has no response body.</strong> Do not try to parse it as JSON.
          Also distinguish <strong>401</strong> (authentication is needed) from{" "}
          <strong>403</strong> (access is refused).
        </Paragraph>
      </Section>

      <Section id="fetch-promises" title="5. Use the Fetch API with Promises">
        <Paragraph>
          <code>fetch()</code> returns a Promise that fulfills with a{" "}
          <code>Response</code> when the response headers are available. The body
          may still be arriving. Check <code>response.ok</code> before reading it;
          this property is true for status codes from 200 through 299.
        </Paragraph>
        <Paragraph>
          HTTP errors such as 404 or 500 do not automatically reject the Fetch
          Promise. A network failure, an aborted request, or a browser CORS
          failure can reject it. Throw an error yourself for an unsuccessful
          HTTP status if your application treats it as a failure.
        </Paragraph>
        <CodeBlock>{`fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error("HTTP " + response.status);
    }

    if (response.status === 204) {
      return null;
    }

    return response.json();
  })
  .then((user) => {
    console.log("User:", user);
  })
  .catch((error) => {
    console.error("Request failed:", error.message);
  });`}</CodeBlock>
        <Paragraph>
          <code>response.json()</code> also returns a Promise. It reads the body
          and parses JSON into a JavaScript value. Returning it connects that
          operation to the chain, so parsing errors reach the catch handler too.
          An empty or malformed JSON body causes parsing to fail.
        </Paragraph>
        <Paragraph>
          These examples expect a JSON API, with <code>null</code> representing
          a 204 response. Other bodyless responses, such as responses to HEAD
          requests, also need appropriate handling. Use the body-reading method
          that matches your API, such as <code>response.text()</code> for text.
        </Paragraph>
      </Section>

      <Section id="async-await" title="6. Use async/await and try/catch">
        <Paragraph>
          <code>async/await</code> is syntax for working with Promises. An async
          function always returns a Promise: a returned value becomes its
          successful result, while an uncaught error rejects it.
        </Paragraph>
        <CodeBlock>{`async function getGreeting() {
  return "Hello, Dawood!";
}

getGreeting().then((message) => {
  console.log(message);
});`}</CodeBlock>
        <Paragraph>
          <code>await</code> pauses the surrounding async function until the
          awaited value settles. It gives you the fulfilled value or throws the
          rejection reason. Other JavaScript can run while the function is
          suspended; CPU-heavy synchronous code still blocks the current thread.
        </Paragraph>
        <Paragraph>
          Here is the Fetch example using async/await. The request function
          returns data, and the caller handles success, failure, and cleanup:
        </Paragraph>
        <CodeBlock>{`async function fetchUser() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  if (!response.ok) {
    throw new Error("HTTP " + response.status);
  }

  if (response.status === 204) {
    return null;
  }

  const user = await response.json();
  return user;
}

async function showUser() {
  try {
    const user = await fetchUser();
    console.log("User:", user);
  } catch (error) {
    console.error("Request failed:", error.message);
  } finally {
    console.log("Request finished");
  }
}

showUser();`}</CodeBlock>
        <ul style={styles.list}>
          <li>Put the <code>await</code> inside <code>try</code> when its rejection
            should be handled by that catch block. Starting a Promise without
            awaiting it does not make its later rejection reach that block.</li>
          <li>You can still use <code>.then()</code> or <code>.catch()</code> on
            the Promise returned by an async function. Both styles are valid.</li>
          <li><code>await</code> is valid inside async functions and at the top
            level of JavaScript modules. It is not valid at the top level of
            an ordinary script.</li>
        </ul>
      </Section>

      <Section id="promise-concurrency" title="7. Wait for independent tasks with Promise.all">
        <Paragraph>
          When tasks do not depend on each other's results, start them together
          and await <code>Promise.all()</code>. This allows their waiting periods
          to overlap. The following example uses timers instead of real requests:
        </Paragraph>
        <CodeBlock>{`function delayResult(value, milliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), milliseconds);
  });
}

async function loadDashboard() {
  try {
    const [profile, notifications] = await Promise.all([
      delayResult({ name: "Dawood" }, 300),
      delayResult(["Welcome!"], 500),
    ]);

    console.log(profile, notifications);
  } catch (error) {
    console.error("Dashboard failed:", error.message);
  }
}

loadDashboard();`}</CodeBlock>
        <Paragraph>
          Calling the functions starts the tasks; <code>Promise.all()</code>
          {" "}collects their results in input order, even if they finish in a
          different order. It rejects when any input rejects and does not cancel
          the other operations. Use <code>Promise.allSettled()</code> when you
          need to wait for and inspect every outcome.
        </Paragraph>
      </Section>

      <Section id="async-references" title="References">
        <ul style={styles.list}>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">MDN: Promise states and behavior</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then">MDN: Promise chaining</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch">MDN: Using Fetch</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function">MDN: Async functions</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status">MDN: HTTP status codes</a></li>
          <li><a href="https://jsonplaceholder.typicode.com/">JSONPlaceholder practice API</a></li>
        </ul>
      </Section>
    </article>
  );
};

export default AsyncAwaitTutorial;
