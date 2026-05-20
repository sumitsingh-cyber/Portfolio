import { Container } from "./styles";
import ScrollAnimationImport from "react-animate-on-scroll";

const ScrollAnimation = ScrollAnimationImport as any;

const projects = [
  {
    name: "Rverse AI",
    visual: "rverse",
    eyebrow: "AI-Powered Learning Platform",
    tagline: "Generate. Learn. Master.",
    link: "https://rverse-ai-course-generator.vercel.app",
    description:
      "Built an AI-first learning platform that generates complete courses from one topic prompt, including structured modules, lesson notes, flashcards, MCQs, and relevant video lessons.",
    highlights: [
      "Integrated Google Gemini API to generate course outlines, module objectives, and lesson content.",
      "Connected YouTube Data API to attach relevant educational videos automatically.",
      "Modeled type-safe relational data with PostgreSQL and Drizzle ORM, deployed on Vercel.",
    ],
    tech: ["Next.js 15", "TypeScript", "Gemini API", "PostgreSQL", "Drizzle ORM", "Vercel"],
  },
  {
    name: "SkillBridge",
    visual: "skillbridge",
    eyebrow: "Full-Stack Ed-Tech Marketplace",
    tagline: "Empower Your Future With Coding Skills",
    link: "https://skill-bridge-ruddy-beta.vercel.app",
    description:
      "Designed and developed a full-stack Ed-Tech marketplace for coding courses with separate instructor and student experiences, secure enrollment, payments, and media delivery.",
    highlights: [
      "Built role-based dashboards for course creation, enrollment, progress tracking, ratings, and analytics.",
      "Secured authentication with JWT, OTP verification, and Bcrypt password hashing.",
      "Integrated Razorpay checkout and Cloudinary CDN for production-ready payments and course media.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Razorpay", "Cloudinary", "JWT"],
  },
];

function ExternalLinkIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fill="currentColor" d="M 300 75 C 291.71875 75 285 81.71875 285 90 C 285 98.28125 291.71875 105 300 105 L 353.789062 105 L 229.394531 229.394531 C 223.535156 235.253906 223.535156 244.746094 229.394531 250.605469 C 232.328125 253.539062 236.160156 255 240 255 C 243.839844 255 247.671875 253.539062 250.605469 250.605469 L 375 126.210938 L 375 180 C 375 188.28125 381.71875 195 390 195 C 398.28125 195 405 188.28125 405 180 L 405 90 C 405 81.71875 398.28125 75 390 75 Z M 135 90 C 110.183594 90 90 110.183594 90 135 L 90 345 C 90 369.816406 110.183594 390 135 390 L 345 390 C 369.816406 390 390 369.816406 390 345 L 390 255 C 390 246.71875 383.28125 240 375 240 C 366.71875 240 360 246.71875 360 255 L 360 345 C 360 353.273438 353.273438 360 345 360 L 135 360 C 126.726562 360 120 353.273438 120 345 L 120 135 C 120 126.726562 126.726562 120 135 120 L 225 120 C 233.28125 120 240 113.28125 240 105 C 240 96.71875 233.28125 90 225 90 Z M 135 90 " />
    </svg>
  );
}

function ProjectPreview({ project }: { project: typeof projects[number] }) {
  if (project.visual === "rverse") {
    return (
      <a className="project-preview rverse-preview" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
        <span className="preview-pill">
          <span className="preview-dot"></span>
          AI-Powered Learning Platform
        </span>
        <strong>Rverse AI</strong>
        <span className="preview-tagline">Generate. Learn. Master.</span>
        <p>Build complete AI courses from a single prompt: video lessons, notes, flashcards and MCQs.</p>
        <div className="preview-actions">
          <span>Get Started Free</span>
          <span>Watch Demo</span>
        </div>
      </a>
    );
  }

  return (
    <a className="project-preview skillbridge-preview" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
      <div className="skillbridge-nav">
        <strong>Skill<span>Bridge</span></strong>
        <ul>
          <li>Home</li>
          <li>Catalog</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <span className="instructor-pill">Become an Instructor</span>
      <strong className="skillbridge-title">Empower Your Future With <span>Coding Skills</span></strong>
      <p>Learn at your own pace with hands-on projects, quizzes, and instructor feedback.</p>
      <div className="skillbridge-actions">
        <span>Learn More</span>
        <span>Book a Demo</span>
      </div>
      <div className="code-preview">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </a>
  );
}

export function Project() {
  return (
    <Container id="project">
      <h2>Featured Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <ScrollAnimation animateIn="fadeInUp" delay={index * 120} key={project.name}>
            <article className="project">
              <ProjectPreview project={project} />

              <div className="project-content">
                <header>
                  <div>
                    <p className="project-kicker">{project.eyebrow}</p>
                    <h3>{project.name}</h3>
                  </div>
                  <a className="project-open" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
                    <ExternalLinkIcon />
                  </a>
                </header>

                <p>{project.description}</p>

                <ul className="highlights">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <footer>
                  <ul className="tech-list">
                    {project.tech.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </footer>
              </div>
            </article>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
