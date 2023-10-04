import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import NotFound from "./components/NotFound"
import Signup from "./components/Signup"
import Profile from "./components/Profile"
import ThemeContextProvider from "./Contexts/ThemeContext"

function App() {
  return (
    <Router>
      <ThemeContextProvider>
        <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="*" element={<NotFound/>}/>
          
        </Routes>
      </ThemeContextProvider>
    </Router>
  )
}

export default App
