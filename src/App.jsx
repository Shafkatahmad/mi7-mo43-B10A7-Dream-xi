import './App.css'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import Banner from './Components/Header/Banner/Banner'
import Navbar from './Components/Header/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <AvailablePlayers></AvailablePlayers>
    </>
  )
}

export default App
