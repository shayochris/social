import { useContext } from "react"
import { ThemeContext } from "../../Contexts/ThemeContext"
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineSearch} from "react-icons/ai";
import { MdOutlineNotifications, MdOutlineMessage } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";


export default function MobileNav() {
  const {theme,border}=useContext(ThemeContext);
  return (
    <div className={`fixed bottom-0 left-0 w-full ${theme} md:hidden`}>
        <div className={`w-full flex justify-between items-center py-2 px-4 border-t ${border}`}>
          <Link to="/"><AiOutlineHome className="w-6 h-6"/></Link>
          <Link><MdOutlineNotifications className="w-6 h-6"/></Link>
          <Link><AiOutlineSearch className="w-6 h-6"/></Link>
          <Link><MdOutlineMessage className="w-6 h-6"/></Link>
          <Link to="/profile"><BiUserCircle className="w-6 h-6"/></Link>
        </div>
    </div>
  )
}
