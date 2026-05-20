import { Container } from "./styles"
import ScrollAnimationImport from "react-animate-on-scroll"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import Hello from '../../assets/Hello.gif'
import sideImage from '../../assets/sideImage.png'

const ScrollAnimation = ScrollAnimationImport as any
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1 className="textcolor">Sumit Singh</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Full Stack Developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">Full Stack Developer and B.Tech CS & IT undergraduate specializing in MERN stack, Next.js 15, TypeScript, and AI-driven product development.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <a href="#contact" className="button">Contact</a>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
      <div className="social-media"><a
        href="https://www.linkedin.com/in/sumit-singh-2285b228b/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>
        <a
          href="https://github.com/sumitsingh-cyber"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image ">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={sideImage} alt="Portfolio visual" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
