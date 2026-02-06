import { useState } from 'react'
import './App.css'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import FooterContainer from './Components/FooterContainer/FooterContainer'
import Banner from './Components/Header/Banner/Banner'
import Navbar from './Components/Header/Navbar/Navbar'
import Players from './Components/Players/Players'

function App() {
  const [coin, setCoin] = useState(false);

  const handleCoin = addOrDelete => {
    let newCoin = 0;
    if(addOrDelete){
      newCoin = coin + 2500;
      setCoin(newCoin)
    }
    else if(!addOrDelete){
      newCoin = coin - 2500;
      setCoin(newCoin)
    }
  }
  return (
    <>
      <Navbar
        coin={coin}
      ></Navbar>
      <Banner
        handleCoin={handleCoin}
      ></Banner>
      <Players
        handleCoin={handleCoin}
      ></Players>
      {/* <AvailablePlayers
        handleChoosePlayer={handleChoosePlayer}
      ></AvailablePlayers> */}
      
      <FooterContainer></FooterContainer>
    </>
  )
}

export default App
