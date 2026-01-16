import { useState } from 'react'
import './App.css'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import FooterContainer from './Components/FooterContainer/FooterContainer'
import Banner from './Components/Header/Banner/Banner'
import Navbar from './Components/Header/Navbar/Navbar'
import Players from './Components/Players/Players'

function App() {
  
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Players></Players>
      {/* <AvailablePlayers
        handleChoosePlayer={handleChoosePlayer}
      ></AvailablePlayers> */}
      
      <FooterContainer></FooterContainer>
    </>
  )
}

export default App
