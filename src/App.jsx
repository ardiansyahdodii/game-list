import { useState } from "react"
import Header from "./Components/Header"
import Home from "./Pages/Home"

function App() {

  const [theme, setTheme] = useState("light")
  return (
    <div className={` ${theme} ${theme == "dark" ? "bg-[#121212]" : null }`}>
      <Header />
      <Home />
    </div>

  )
}

export default App
