import { useContext } from "react"
import { ThemeContext } from "../../Contexts/ThemeContext"
import { Link } from "react-router-dom";
import { AiFillHome} from "react-icons/ai";
import { MdAddCircle, MdNotifications, MdOutlineMessage } from "react-icons/md";
import rolex from "../../assets/images/rolex.jpg";

export default function MobileNav() {
    const {theme,border}=useContext(ThemeContext);
  return (
    <div className={`md:hidden sticky w-full p-3 bottom-0 left-0 border-t ${theme} ${border}`}>
        <div className="flex justify-between items-center">
            <Link to="/"><AiFillHome className="w-6 h-6"/></Link>
            <Link><MdNotifications className="w-6 h-6 "/></Link>
            <Link><MdAddCircle className="w-6 h-6"/></Link>
            <Link><MdOutlineMessage className="w-6 h-6"/></Link>
            <Link to="/profile">
                <img src={rolex} alt="" className="avatar-xxs" />
            </Link>
        </div>
    </div>
  )
}
