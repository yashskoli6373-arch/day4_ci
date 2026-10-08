import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2>🚀 DevOps Learn</h2>
        <div>
          <a href="#home">Home</a>
          <a href="#topics">Topics</a>
          <a href="#pipeline">CI Pipeline</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div>
          <p className="tag">LEARN • BUILD • AUTOMATE</p>
          <h1>Learn DevOps<br />the Practical Way</h1>
          <p className="description">
            Learn Git, GitHub, Docker, CI/CD and deployment
            through simple hands-on projects.
          </p>

          <button onClick={() => alert("Let's start learning DevOps 🚀")}>
            Start Learning
          </button>
        </div>

        <div className="terminal">
          <div className="terminal-top">
            <span>●</span>
            <span>●</span>
            <span>●</span>
          </div>

          <pre>
{`$ git add .
$ git commit -m "Update project"
$ git push origin main

✓ Build successful
✓ Tests passed
✓ CI pipeline completed`}
          </pre>
        </div>
      </section>

      <section className="topics" id="topics">
        <h2>DevOps Learning Path</h2>
        <p>Build your skills step by step.</p>

        <div className="cards">
          <div className="card">
            <div className="icon">🔧</div>
            <h3>Git & GitHub</h3>
            <p>Learn version control, branches, commits and repositories.</p>
            <span>Beginner</span>
          </div>

          <div className="card">
            <div className="icon">🐳</div>
            <h3>Docker</h3>
            <p>Containerize applications and run them anywhere.</p>
            <span>Beginner</span>
          </div>

          <div className="card">
            <div className="icon">⚙️</div>
            <h3>CI/CD</h3>
            <p>Automatically build, test and deploy your applications.</p>
            <span>Intermediate</span>
          </div>

          <div className="card">
            <div className="icon">☁️</div>
            <h3>Cloud</h3>
            <p>Understand deployment and cloud infrastructure basics.</p>
            <span>Intermediate</span>
          </div>
        </div>
      </section>

      <section className="pipeline" id="pipeline">
        <h2>Continuous Integration Pipeline</h2>

        <div className="steps">
          <div className="step">
            <strong>1</strong>
            <h3>Push Code</h3>
            <p>Developer pushes code to GitHub.</p>
          </div>

          <div className="arrow">→</div>

          <div className="step">
            <strong>2</strong>
            <h3>Build</h3>
            <p>CI automatically builds the React project.</p>
          </div>

          <div className="arrow">→</div>

          <div className="step">
            <strong>3</strong>
            <h3>Test</h3>
            <p>Automated tests check the application.</p>
          </div>

          <div className="arrow">→</div>

          <div className="step">
            <strong>4</strong>
            <h3>Deploy</h3>
            <p>Application is ready for deployment.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>🚀 DevOps Learning Project | Built with React</p>
      </footer>
    </div>
  );
}

export default App;