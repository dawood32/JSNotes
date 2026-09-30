import React from "react";

const GitTutorial = () => {
  return (
    <>
      <h1>Git & GitHub</h1>

      <h2>Git</h2>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Version Control System that helps:
      </p>
      <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.7', fontSize: '1.05rem', color: '#374151' }}>
        <li>To track changes</li>
        <li>To track history</li>
        <li>Collaborate</li>
      </ul>

      <h2>GitHub</h2>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Website that allows developers to store and manage their code.
      </p>

      <h2>Repository</h2>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Folder where we put our code.
      </p>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>Step 1: Setup a Repository</h1>
      <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.7', fontSize: '1.05rem', color: '#374151' }}>
        <li>Create new repository</li>
        <li>Name repository / add description</li>
        <li>Check Readme file (in which we add some description about the Project)</li>
      </ul>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>Create Project on Local Machine First</h1>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          mkdir local
        </code>
      </div>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        <strong>init</strong> is used to create a new git repo:
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          git init
        </code>
      </div>

      <h3>To see hidden files (Terminal)</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          ls -a
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>Add & Commit</h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        <strong>add</strong> adds new or changed files in the working directory to the staging area.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          git add .
        </code>
      </div>

      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        <strong>staged:</strong> file ready to be committed.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          git commit -m "initial files"
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>Create Repo on GitHub</h1>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          git remote add origin &lt;link&gt;
        </code>
      </div>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        To verify remote:
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          git remote -v
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>Push</h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        Upload local repo to remote repo.
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          git push origin main<br/>
          <br/>
          git push -u origin main
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>Git Branches</h1>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          git branch      // to check branch<br/>
          git branch -M main  // to rename branch<br/>
          git checkout &lt;name&gt;  // to navigate<br/>
          git checkout -b &lt;newb&gt; // to create newb<br/>
          git branch -d &lt;branch&gt; // to delete branch
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>Workflow</h1>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          Github repo<br/>
          &nbsp;&nbsp;&nbsp;↓<br/>
          Clone<br/>
          &nbsp;&nbsp;&nbsp;↓<br/>
          add<br/>
          &nbsp;&nbsp;&nbsp;↓<br/>
          commit → Push
        </code>
      </div>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>Merging Code</h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        <strong>Way 1: Through VS Code</strong>
      </p>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          git diff &lt;branch name&gt; // to compare commits/branches
        </code>
      </div>

      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '1.25rem' }}>
        <strong>Way 2: Create PR (Pull Request)</strong>
      </p>
      <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem', lineHeight: '1.7', fontSize: '1.05rem', color: '#374151' }}>
        <li>Pull comment</li>
        <li>git pull</li>
      </ul>

      <hr style={{ margin: '2.5rem 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />

      <h1>Undo Change</h1>
      <h3>Case 1: Staged changes</h3>
      <div className="example-box">
        <code style={{ display: 'block', color: '#111827', fontFamily: 'monospace', lineHeight: '1.8' }}>
          git reset &lt;file name&gt;<br/>
          git reset // to reset all
        </code>
      </div>

    </>
  );
};

export default GitTutorial;
