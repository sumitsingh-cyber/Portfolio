import React, { useState, useEffect } from 'react'
import { Container } from './styles'

const colors = [
  { name: 'Red', code: '#ff4d4d' },
  { name: 'Blue', code: '#3399ff' },
  { name: 'Green', code: '#23ce6b' },
  { name: 'Pink', code: '#ff7eb9' },
  { name: 'Purple', code: '#a29bfe' },
  { name: 'Yellow', code: '#f9d423' },
]

export function ColorSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    // 1. Restore saved theme color
    const savedColor = localStorage.getItem('themeColor')
    if (savedColor) {
      document.documentElement.style.setProperty('--green', savedColor)
    }

    // 2. Manage the tooltip (only for first-time visitors)
    const hasSeenTooltip = localStorage.getItem('hasSeenTooltip')
    if (!hasSeenTooltip) {
      // Delay showing tooltip slightly to let page settle
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(true)
      }, 2500)

      // Auto-dismiss tooltip after 10.5 seconds
      const dismissTimer = setTimeout(() => {
        setShowTooltip(false)
        localStorage.setItem('hasSeenTooltip', 'true')
      }, 10500)

      return () => {
        clearTimeout(tooltipTimer)
        clearTimeout(dismissTimer)
      }
    }
  }, [])

  useEffect(() => {
    // 3. Manage the auto-peek drawer animation (once per browser session)
    const hasPeeked = sessionStorage.getItem('hasPeeked')
    if (!hasPeeked) {
      // Wait 1.5 seconds, then open the drawer
      const openTimer = setTimeout(() => {
        setIsOpen(true)
      }, 1500)

      // Wait 1.8 more seconds (3.3 seconds total), then close the drawer
      const closeTimer = setTimeout(() => {
        setIsOpen(false)
        sessionStorage.setItem('hasPeeked', 'true')
      }, 3300)

      return () => {
        clearTimeout(openTimer)
        clearTimeout(closeTimer)
      }
    }
  }, [])

  useEffect(() => {
    // Dismiss tooltip on scroll
    const handleScroll = () => {
      if (showTooltip) {
        setShowTooltip(false)
        localStorage.setItem('hasSeenTooltip', 'true')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showTooltip])

  const handleChangeColor = (color: string) => {
    document.documentElement.style.setProperty('--green', color)
    localStorage.setItem('themeColor', color)
    
    // Selecting a color dismisses the tooltip
    if (showTooltip) {
      setShowTooltip(false)
      localStorage.setItem('hasSeenTooltip', 'true')
    }
  }

  const handleToggleOpen = () => {
    setIsOpen(!isOpen)
    if (showTooltip) {
      setShowTooltip(false)
      localStorage.setItem('hasSeenTooltip', 'true')
    }
  }

  const handleDismissTooltip = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent opening the switcher panel
    setShowTooltip(false)
    localStorage.setItem('hasSeenTooltip', 'true')
  }

  return (
    <Container className={isOpen ? 'open' : ''}>
      <button className="switcher-btn" onClick={handleToggleOpen} title="Theme Customizer">
        {showTooltip && (
          <div className="theme-tooltip" onClick={handleToggleOpen}>
            <span>Try a Vibe! 🎨</span>
            <button className="tooltip-close" onClick={handleDismissTooltip} title="Dismiss">
              &times;
            </button>
          </div>
        )}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="palette-icon">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.35857 19.5 6 20 7.5 20C9 20 8.5 18 10 18C11.5 18 12 22 12 22Z" />
          <circle cx="7.5" cy="10.5" r="1" fill="currentColor" />
          <circle cx="11.5" cy="7.5" r="1" fill="currentColor" />
          <circle cx="16.5" cy="9.5" r="1" fill="currentColor" />
          <circle cx="15.5" cy="14.5" r="1" fill="currentColor" />
        </svg>
      </button>
      <div className="color-palette">
        <h3>Theme Colors</h3>
        <div className="colors">
          {colors.map((color) => (
            <button
              key={color.name}
              className="color-option"
              style={{ backgroundColor: color.code }}
              onClick={() => {
                handleChangeColor(color.code)
              }}
              title={color.name}
            />
          ))}
        </div>
      </div>
    </Container>
  )
}

