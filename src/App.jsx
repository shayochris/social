import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import NotFound from "./components/NotFound"
import Signup from "./components/Signup"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="*" element={<NotFound/>}  />
      </Routes>
    </Router>
  )
}

export default App
