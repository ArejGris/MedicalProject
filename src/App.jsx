import { BrowserRouter,Routes,Route } from "react-router-dom"
import NavBar from "./components/navbar/NavBar"
import HomePage from "./components/homepage/HomePage"

function App() {

  return (
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
