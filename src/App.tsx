import React, { useState, useEffect } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { GlobalStyle } from './styles/global'
import { Analytics } from "@vercel/analytics/react"
import { Loader } from './components/Loader/Loader'
import { ColorSwitcher } from './components/ColorSwitcher/ColorSwitcher'

import 'react-toastify/dist/ReactToastify.css'

const GlobalStyleProxy = GlobalStyle as any

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const savedColor = localStorage.getItem('themeColor')
    if (savedColor) {
      document.documentElement.style.setProperty('--green', savedColor)
    }
  }, [])

  return (
    <>
      <GlobalStyleProxy />
      {isLoading ? (
        <Loader onLoaded={() => setIsLoading(false)} />
      ) : (
        <>
          <Header />
          <Main />
          <ColorSwitcher />
          <Analytics />
          <Footer />
        </>
      )}
    </>
  )
}

export default App
