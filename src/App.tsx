import React, { useState, useEffect } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { GlobalStyle } from './styles/global'
import { Analytics } from "@vercel/analytics/react"
import { Loader } from './components/Loader/Loader'

import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <GlobalStyle />
      {isLoading ? (
        <Loader onLoaded={() => setIsLoading(false)} />
      ) : (
        <>
          <Header />
          <Main />
          <Analytics />
          <Footer />
        </>
      )}
    </>
  )
}

export default App
