import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import logoImg from '../../assets/logo.png'

interface LoaderProps {
  onLoaded: () => void;
}

export function Loader({ onLoaded }: LoaderProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onLoaded, 500)
          return 100
        }
        return prev + 1
      })
    }, 25)

    return () => clearInterval(timer)
  }, [onLoaded])

  return (
    <Container>
      <div className="loader-content">
        <svg className="progress-ring" width="300" height="300">
          <circle
            className="progress-ring__circle-bg"
            stroke="rgba(255, 255, 255, 0.05)"
            strokeWidth="4"
            fill="transparent"
            r="140"
            cx="150"
            cy="150"
          />
          <circle
            className="progress-ring__circle"
            stroke="var(--green)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="transparent"
            r="140"
            cx="150"
            cy="150"
            style={{
              strokeDasharray: `${2 * Math.PI * 140}`,
              strokeDashoffset: `${2 * Math.PI * 140 - (progress / 100) * 2 * Math.PI * 140}`
            }}
          />
        </svg>
        <div className="logo-container">
          <img src={logoImg} alt="Logo" className="logo-image" />
        </div>
        <div className="percentage">{progress}%</div>
      </div>
    </Container>
  )
}
