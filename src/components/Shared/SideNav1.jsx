import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import rolex from "../../assets/images/rolex.jpg"
import { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineMessage, MdOutlineNotifications } from "react-icons/md";
export default function SideNav1() {
  const {theme,border}=useContext(ThemeContext);
  return (
    <div className={`hidden md:block border-r ${theme} ${border} sticky top-0 left-0 w-[30%] h-full`}>
        <div className={` h-full py-2 px-6`}>
          <p className=" text-blue-500 p-2 font-semibold text-xl">Social</p>
          <ul>
            <li className="">
                <Link to="/" className="hover:text-blue-500 p-2 my-2 flex items-center">
                  <span className="mr-2"><AiOutlineHome className="w-6 h-6"/></span>
                  <span className="font-semibold">Home</span>
                </Link>
            </li>
            <li className="">
                <Link to="/profile/myprofile/*" className="hover:text-blue-500 p-2 my-2 flex items-center">
                  <span className="mr-2"><BiUserCircle className="w-6 h-6"/></span>
                  <span className="font-semibold">Profile</span>
                </Link>
            </li>
            <li className="">
                <Link to="/settings" className="hover:text-blue-500 p-2 my-2 flex items-center">
                  <span className="mr-2"><AiOutlineSetting className="w-6 h-6"/></span>
                  <span className="font-semibold">Settings</span>
                </Link>
            </li>
            <li className="">
                <Link to="/notifications" className="hover:text-blue-500 p-2 my-2 flex items-center">
                  <span className="mr-2"><MdOutlineNotifications className="w-6 h-6"/></span>
                  <span className="font-semibold">Notifications</span>
                </Link>
            </li>
            <li className="">
                <Link to="/messages" className="hover:text-blue-500 p-2 my-2 flex items-center">
                  <span className="mr-2"><MdOutlineMessage className="w-6 h-6"/></span>
                  <span className="font-semibold">Messages</span>
                </Link>
            </li>
          </ul>
        </div>
    </div>
  )
}
