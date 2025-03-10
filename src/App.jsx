import React from 'react'
import Header from './components/header/Header'
import "./App.css"
import Home from './components/home/Home'

const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
      </main>
    </>
  )
}

export default App
