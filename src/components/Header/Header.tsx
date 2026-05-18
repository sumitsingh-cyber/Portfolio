import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import logo from '../../assets/logo.png'
import Resume from '../../assets/DivyanshuResumev2.pdf'

export function Header() {
  const [isActive, setActive] = useState(false)
  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }
  function closeMenu() {
    setActive(false)
  }
  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <img src={logo} alt="Logo" />
          <span>Divyanshu</span>
          <span className="last-name"> Tiwari</span>
          <span className="portfolio-text"> | Portfolio</span>
        </HashLink>

        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            About me
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            Project
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            Contact
          </NavHashLink>
          <a href={Resume} download className="button">
            CV
          </a>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <input
            onChange={toggleTheme}
            className="container_toggle"
            type="checkbox"
            id="switch"
            name="mode"
          />
          <label htmlFor="switch">Toggle</label>

          <div
            aria-expanded={isActive ? 'true' : 'false'}
            aria-haspopup="true"
            aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
            className={isActive ? 'menu active' : 'menu'}
            onClick={() => {
              setActive(!isActive)
            }}
          ></div>
        </div>
      </Router>
    </Container>
  )
}
