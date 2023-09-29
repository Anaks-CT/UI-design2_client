import { useState } from "react"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Section from "./components/section/Section"

function App() {
  const [toggleShow, setToggleShow] = useState(false)

  const openSideBar = () => {setToggleShow(true)}
  const closeSideBar = () => {setToggleShow(false)}


  return (
    <>
      <Header />   
      <SideBar toggleShow={toggleShow} closeSideBar={closeSideBar}/>
      <Section openSideBar={openSideBar} toggleShow={toggleShow}/>     
    </>
  )
}

export default App
