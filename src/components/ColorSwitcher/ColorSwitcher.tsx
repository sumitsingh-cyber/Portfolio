import React from 'react'
import { Container } from './styles'

const colors = [
  { name: 'Red', code: '#ff4d4d' },
  { name: 'Blue', code: '#3399ff' }, // Brighter blue
  { name: 'Green', code: '#23ce6b' },
  { name: 'Pink', code: '#ff7eb9' },
  { name: 'Purple', code: '#a29bfe' },
  { name: 'Yellow', code: '#f9d423' },
]

export function ColorSwitcher() {
  const handleChangeColor = (color: string) => {
    document.documentElement.style.setProperty('--green', color)
  }

  return (
    <Container>
      <div className="colors">
        {colors.map((color) => (
          <button
            key={color.name}
            className="color-option"
            style={{ backgroundColor: color.code }}
            onClick={() => handleChangeColor(color.code)}
            title={color.name}
          />
        ))}
      </div>
    </Container>
  )
}
