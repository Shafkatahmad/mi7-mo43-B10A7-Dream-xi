import './App.css'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import FooterContainer from './Components/FooterContainer/FooterContainer'
import Banner from './Components/Header/Banner/Banner'
import Navbar from './Components/Header/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <AvailablePlayers></AvailablePlayers>
      <FooterContainer></FooterContainer>
    </>
  )
}

export default App
