import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>Divyanshu </span>
        <span>Tiwari</span>
      </a>
      <div className="copyright">
        <p>© 2026 Divyanshu Tiwari. All rights reserved.</p>
      </div>
      <div>
        <p>
          Built with <img src={reactIcon} alt="React" />
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/divyanshu-tiwari1459/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/divyanshu-tiwari22"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </Container>
  )
}
