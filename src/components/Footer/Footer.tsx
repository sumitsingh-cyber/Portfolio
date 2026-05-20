import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import emailIcon from '../../assets/email-icon.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>Sumit </span>
        <span>Singh</span>
      </a>
      <div className="copyright">
        <p>© 2026 Sumit Singh. All rights reserved.</p>
      </div>
      <div>
        <p>
          Built with <img src={reactIcon} alt="React" />
        </p>
      </div>
      <div className="social-media">
        <a
          href="mailto:sumitsinghpatel2027@gmail.com"
          aria-label="Email Sumit Singh"
        >
          <img src={emailIcon} alt="Email" />
        </a>
        <a
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
    </Container>
  )
}
