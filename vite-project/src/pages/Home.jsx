import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>Welcome to ScoreQuest 🧠</h1>
      </main>
      <Footer />
    </>
  )
}

export default Home
