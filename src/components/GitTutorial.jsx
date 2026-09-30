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
};

const Paragraph = ({ children }) => (
  <p style={styles.paragraph}>{children}</p>
);

const CodeBlock = ({ children, language = "bash" }) => (
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

const GitTutorial = () => {
  return (
    <article style={styles.article}>
      <h1>Git &amp; GitHub</h1>
      <Paragraph>
        Learn to track changes, save your work, and collaborate on code. Run the
        commands in a terminal, from your project folder unless instructed
        otherwise. Examples use Bash on macOS, Linux, or Git Bash on Windows.
        Replace example names, email addresses, and repository URLs with your own.
      </Paragraph>

      <h2>Understand the basics</h2>
      <ul style={styles.list}>
        <li><strong>Git:</strong> A distributed version control system that records
          changes, keeps project history, and supports collaboration. It works locally.</li>
        <li><strong>GitHub:</strong> An online platform that hosts Git repositories
          and provides tools such as pull requests, code reviews, and issues.</li>
        <li><strong>Repository (repo):</strong> A project tracked by Git, including
          its files, commits, and branches. In a typical local repository, Git
          stores its data in the hidden <code>.git</code> directory.</li>
        <li><strong>Working directory:</strong> The project files you are editing.</li>
        <li><strong>Staging area:</strong> The changes selected for your next commit.</li>
        <li><strong>Commit:</strong> A saved snapshot in your local Git history.</li>
        <li><strong>Remote:</strong> A named connection to another repository,
          often hosted on GitHub. The usual name is <code>origin</code>.</li>
      </ul>

      <Section id="setup" title="1. Set up Git">
        <Paragraph>
          Install Git from <a href="https://git-scm.com/downloads">git-scm.com</a>,
          then check your installation and set your commit identity:
        </Paragraph>
        <CodeBlock>{`git --version
git config --global user.name "Your Name"
git config --global user.email "you@example.com"`}</CodeBlock>
        <Paragraph>
          <code>--global</code> applies these settings to repositories for your
          computer user account. Your name and email identify commits; they do
          not sign you in to GitHub. Use an email associated with your GitHub
          account, or your GitHub-provided no-reply email.
        </Paragraph>
        <Paragraph>
          The examples use <code>git init -b</code>, <code>git switch</code>, and{" "}
          <code>git restore</code>; install Git 2.28 or newer to follow all of them.
        </Paragraph>
      </Section>

      <Section id="create-local" title="2. Create a local repository">
        <Paragraph>
          Follow steps 2–4 when starting on your computer. If the project already
          exists on GitHub, use the clone option in step 5 instead.
        </Paragraph>
        <CodeBlock>{`mkdir my-project
cd my-project
git init -b main
echo "# My Project" > README.md`}</CodeBlock>
        <Paragraph>
          <code>cd</code> enters the folder. <code>git init -b main</code> starts
          a repository with an initial branch named <code>main</code>. The final
          command creates a README for this new project. For an existing project,
          enter its folder, initialize Git only if needed, and keep its existing files.
        </Paragraph>
        <Paragraph>
          To list hidden files in Bash, including the new <code>.git</code> directory:
        </Paragraph>
        <CodeBlock>{`ls -a`}</CodeBlock>

        <h3>Add a .gitignore file</h3>
        <Paragraph>
          Create a file named <code>.gitignore</code> in the project root. For a
          JavaScript project, you can start with these entries:
        </Paragraph>
        <CodeBlock language="text">{`node_modules/
.env
.env.*
!.env.example
dist/
build/
.next/`}</CodeBlock>
        <Paragraph>
          These patterns exclude matching untracked files from normal staging.
          They do not stop tracking files already committed. Keep passwords and
          API keys out of commits; an <code>.env.example</code> should contain
          placeholders only.
        </Paragraph>
      </Section>

      <Section id="commit" title="3. Stage and commit changes">
        <Paragraph>
          Check your changes, select what to include, and save a commit:
        </Paragraph>
        <CodeBlock>{`git status
git diff
git add .
git diff --staged
git commit -m "Add project files"
git status`}</CodeBlock>
        <ul style={styles.list}>
          <li><code>git status</code> lists staged, unstaged, and untracked files.</li>
          <li><code>git diff</code> shows unstaged changes to tracked files.
            It does not display the contents of untracked files.</li>
          <li><code>git add .</code> stages changes under the current directory,
            including additions, modifications, and deletions. Run it at the
            project root to cover the whole project.</li>
          <li><code>git diff --staged</code> shows what the next commit will contain.</li>
          <li><code>git commit</code> saves the staged snapshot locally.</li>
        </ul>
        <Paragraph>
          To select one file, use <code>git add README.md</code>. If you edit a
          file again after staging it, run <code>git add</code> again to include
          those newer edits. A commit does not upload anything to GitHub.
        </Paragraph>
      </Section>

      <Section id="push" title="4. Connect to GitHub and push">
        <ol style={styles.list}>
          <li>Create a new repository on GitHub.</li>
          <li>Choose its name, optional description, and visibility.</li>
          <li>For this local-first workflow, leave the GitHub README, license,
            and .gitignore initialization options unchecked. Start with an empty remote.</li>
          <li>Copy the repository URL and run the following in your local project.</li>
        </ol>
        <CodeBlock>{`git remote add origin https://github.com/YOUR-USERNAME/my-project.git
git remote -v
git push -u origin main`}</CodeBlock>
        <Paragraph>
          <code>git remote add</code> saves the remote URL; it does not create a
          repository on GitHub. <code>git remote -v</code> shows your remote URLs.
          A push sends committed history to the remote.
        </Paragraph>
        <Paragraph>
          <code>-u</code> sets <code>origin/main</code> as the upstream for your
          local <code>main</code> branch. With the usual Git configuration,
          later pushes from that branch can use:
        </Paragraph>
        <CodeBlock>{`git push`}</CodeBlock>
        <Paragraph>
          GitHub authentication is separate from your commit identity. For HTTPS,
          use a credential manager or a personal access token when prompted for
          a password. Your GitHub account password does not authenticate Git
          operations. SSH is another option after setting up an SSH key.
        </Paragraph>
      </Section>

      <Section id="clone" title="5. Alternative: Start with a GitHub repository">
        <Paragraph>
          Use this option instead of steps 2–4 when a repository already exists
          on GitHub. If you create the project on GitHub first, you may initialize
          it with a README, then clone it. Run this from the parent folder where
          you want the project to live:
        </Paragraph>
        <CodeBlock>{`git clone https://github.com/YOUR-USERNAME/my-project.git
cd my-project
git status`}</CodeBlock>
        <Paragraph>
          Cloning creates a local repository, downloads its history, and normally
          sets up <code>origin</code> and the checked-out branch's upstream.
          You do not need to run <code>git init</code> or add <code>origin</code> again.
        </Paragraph>
      </Section>

      <Section id="branches" title="6. Work with branches">
        <Paragraph>
          A branch is a separate line of development. Keep your working directory
          clean before switching branches. These examples assume the main branch
          is named <code>main</code>; adjust it if your project uses another name.
        </Paragraph>
        <CodeBlock>{`# List local branches; * marks the current branch
git branch

# Switch to an existing branch
git switch main

# Create a feature branch and switch to it
git switch -c feature/add-notes`}</CodeBlock>
        <Paragraph>
          <code>git checkout main</code> and{" "}
          <code>git checkout -b feature/add-notes</code> are also valid.{" "}
          <code>git switch</code> makes the branch-switching purpose clearer.
          To rename the current branch, use <code>git branch -m new-name</code>;
          uppercase <code>-M</code> permits replacing an existing branch name.
        </Paragraph>
      </Section>

      <Section id="workflow" title="7. Follow a daily workflow">
        <Paragraph>
          Start from a clean <code>main</code> branch, update it, then create a
          new branch for your task. Use a new branch name if it already exists.
        </Paragraph>
        <CodeBlock>{`git switch main
git pull --ff-only origin main
git switch -c feature/update-readme`}</CodeBlock>
        <Paragraph>
          Edit and save <code>README.md</code> in your editor, then review,
          commit, and push your change:
        </Paragraph>
        <CodeBlock>{`git status
git diff
git add README.md
git diff --staged
git commit -m "Improve README setup instructions"
git push -u origin feature/update-readme`}</CodeBlock>
        <Paragraph>
          <code>git fetch origin</code> downloads remote history and updates
          remote-tracking references without integrating it into your current
          branch. <code>git pull</code> fetches and then integrates changes.
          Here, <code>--ff-only</code> updates the branch only when it can move
          forward without combining divergent histories. If it fails because
          both sides have new commits, inspect the history and agree on a merge
          or rebase with your team.
        </Paragraph>
        <Paragraph>To inspect recent history:</Paragraph>
        <CodeBlock>{`git log --oneline --graph --all`}</CodeBlock>
      </Section>

      <Section id="merge" title="8. Compare and merge changes">
        <Paragraph>Compare the committed contents at the tips of two branches:</Paragraph>
        <CodeBlock>{`git diff main feature/update-readme`}</CodeBlock>
        <Paragraph>
          <code>git diff</code> displays differences. To integrate the feature,
          choose one of the following merge workflows.
        </Paragraph>

        <h3>Option A: Open a pull request on GitHub</h3>
        <ol style={styles.list}>
          <li>Push your feature branch, as shown in step 7.</li>
          <li>Open a pull request in the GitHub repository.</li>
          <li>Choose <code>main</code> as the base branch and{" "}
            <code>feature/update-readme</code> as the compare branch.</li>
          <li>Add a title and description, review the changes, and request review.</li>
          <li>After required checks and approvals pass, merge the pull request
            if you have permission.</li>
          <li>Update your local main branch after the GitHub merge:</li>
        </ol>
        <CodeBlock>{`git switch main
git pull --ff-only origin main`}</CodeBlock>
        <Paragraph>
          A pull request proposes changes for review. <code>git pull</code>{" "}
          updates your local branch; it does not create or approve a pull request.
        </Paragraph>

        <h3>Option B: Merge locally</h3>
        <Paragraph>
          Use this for a practice repository or when your team permits direct
          changes to main. Switch to the destination branch before merging:
        </Paragraph>
        <CodeBlock>{`git switch main
git pull --ff-only origin main
git merge feature/update-readme`}</CodeBlock>
        <Paragraph>After the merge succeeds and you check the result, push it:</Paragraph>
        <CodeBlock>{`git push origin main`}</CodeBlock>

        <h3>Resolve a merge conflict</h3>
        <Paragraph>
          If a local merge stops with conflicts, run <code>git status</code>,
          open each conflicted file in VS Code or another editor, choose the
          correct final content, and remove the conflict markers. Stage each
          resolved file, check the result, then finish the merge. For example,
          if the conflict is in <code>README.md</code>:
        </Paragraph>
        <CodeBlock>{`git add README.md
git status
git diff --staged
git commit -m "Resolve merge conflicts"
git push origin main`}</CodeBlock>
        <Paragraph>
          Alternatively, to cancel an unfinished local merge, run{" "}
          <code>git merge --abort</code>. Start merges with a clean working
          directory so Git can restore the earlier state reliably.
        </Paragraph>

        <h3>Delete a finished local branch</h3>
        <Paragraph>
          Once its work is integrated, switch away from the feature branch and
          delete it locally. This does not delete the branch on GitHub.
        </Paragraph>
        <CodeBlock>{`git switch main
git branch -d feature/update-readme`}</CodeBlock>
        <Paragraph>
          <code>-d</code> checks whether the branch is merged into its upstream,
          or into your current branch when no upstream is configured. A squash
          merge may not satisfy that check. If deletion is refused, verify that
          the work was integrated before considering force deletion.
        </Paragraph>
      </Section>

      <Section id="undo" title="9. Undo changes carefully">
        <Paragraph>
          These are separate examples. Choose the command for your situation;
          do not run this section as one continuous workflow.
        </Paragraph>
        <h3>Unstage changes and keep your edits</h3>
        <Paragraph>After the repository has at least one commit:</Paragraph>
        <CodeBlock>{`# Unstage one file
git restore --staged README.md

# Or unstage everything under the current directory
git restore --staged .`}</CodeBlock>
        <Paragraph>
          Your file edits remain in the working directory. Before the very first
          commit, use <code>git rm --cached README.md</code> to unstage a newly
          added file while keeping the local file.
        </Paragraph>

        <h3>Discard unstaged edits to a tracked file</h3>
        <Paragraph>
          <strong>This discards the file's unstaged edits.</strong> It restores
          the working file from the staging area, so staged changes remain.
          Review the diff before using it.
        </Paragraph>
        <CodeBlock>{`git diff -- README.md
git restore -- README.md`}</CodeBlock>

        <h3>Undo a commit with a new commit</h3>
        <Paragraph>
          With a clean working directory, find the commit ID and replace{" "}
          <code>COMMIT_HASH</code> below with it. For a regular, non-merge commit:
        </Paragraph>
        <CodeBlock>{`git log --oneline
git revert COMMIT_HASH`}</CodeBlock>
        <Paragraph>
          A successful revert adds a new commit that reverses the selected
          change, preserving existing history. Review and push it through your
          normal workflow. If it conflicts, resolve and stage the affected files,
          then run <code>git revert --continue</code>, or cancel with{" "}
          <code>git revert --abort</code>.
        </Paragraph>
      </Section>

      <Section id="references" title="Official references">
        <ul style={styles.list}>
          <li><a href="https://git-scm.com/docs">Git command reference</a></li>
          <li><a href="https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github">Add a local project to GitHub</a></li>
          <li><a href="https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request">Create a pull request</a></li>
          <li><a href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github">Authenticate to GitHub</a></li>
        </ul>
      </Section>
    </article>
  );
};

export default GitTutorial;
