export default function Home() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "48px 20px", fontFamily: "system-ui" }}>
      <header style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 42, margin: 0 }}>Lucy Thall</h1>
        <p style={{ margin: "8px 0 0", fontSize: 16, opacity: 0.8 }}>
          DevOps / Automation • Atlanta, GA • email@example.com • LinkedIn • GitHub
        </p>
      </header>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, marginBottom: 8 }}>Summary</h2>
        <p style={{ lineHeight: 1.6, marginTop: 0 }}>
          DevOps-focused engineer building CI/CD pipelines, infrastructure as code, and cloud-native deployments.
          Comfortable with Docker, Kubernetes, Jenkins/GitHub Actions, Terraform, and automation scripting.
        </p>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, marginBottom: 8 }}>Skills</h2>
        <ul style={{ lineHeight: 1.8, marginTop: 0 }}>
          <li>CI/CD: GitHub Actions, Jenkins (Groovy)</li>
          <li>Containers: Docker, Kubernetes, Helm</li>
          <li>IaC: Terraform</li>
          <li>Scripting: Bash/Shell, Groovy</li>
          <li>Quality/Security: linting, unit tests, Trivy image scanning</li>
        </ul>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2 style={{ fontSize: 22, marginBottom: 8 }}>Projects</h2>

        <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 16, marginBottom: 12 }}>
          <h3 style={{ margin: "0 0 8px" }}>Resume DevOps Pipeline (This Site)</h3>
          <p style={{ margin: 0, lineHeight: 1.6 }}>
            Production-style CI/CD for a resume website: automated build/test, containerization, security scanning,
            image publishing, and Kubernetes deployments (dev + prod).
          </p>
        </div>

        <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 16 }}>
          <h3 style={{ margin: "0 0 8px" }}>Add another project</h3>
          <p style={{ margin: 0, lineHeight: 1.6 }}>
            Add your CRM work, lab automation, or anything that demonstrates engineering impact.
          </p>
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: 22, marginBottom: 8 }}>Contact</h2>
        <p style={{ lineHeight: 1.6, marginTop: 0 }}>
          Email: email@example.com <br />
          GitHub: github.com/yourname <br />
          LinkedIn: linkedin.com/in/yourname
        </p>
      </section>
    </main>
  );
}