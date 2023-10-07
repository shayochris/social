import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import NotFound from "./components/NotFound"
import Signup from "./components/Signup"
import Profile from "./components/Profile"
import ThemeContextProvider from "./Contexts/ThemeContext"
import Comments from "./components/Comments"
import Settings from "./components/Settings"
import { ProfileSettings } from "./components/ProfileSettings"
import PasswordSettings from "./components/PasswordSettings"
import MessageSettings from "./components/MessageSettings"

function App() {
  return (
    <Router>
      <ThemeContextProvider>
        <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/comments/:id" element={<Comments/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/profilesettings" element={<ProfileSettings/>}/>
          <Route path="/passwordsettings" element={<PasswordSettings/>}/>
          <Route path="/messagesettings" element={<MessageSettings/>}/>
          <Route path="*" element={<NotFound/>}/>
          
        </Routes>
      </ThemeContextProvider>
    </Router>
  )
}

export default App
