import { Container } from './styles'
import { useState } from 'react'
import logo from '../../assets/logo.png'
import Resume from '../../assets/SumitResume.pdf'

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
        <a href="#home" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Logo" />
          <span>Sumit</span>
          <span className="last-name"> Singh</span>
          <span className="portfolio-text"> | Portfolio</span>
        </a>

        <nav className={isActive ? 'active' : ''}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#about" onClick={closeMenu}>
            About me
          </a>
          <a href="#project" onClick={closeMenu}>
            Project
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
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
    </Container>
  )
}
