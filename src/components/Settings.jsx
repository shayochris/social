import { useContext } from "react"
import { ThemeContext } from "../Contexts/ThemeContext"
import SideNav1 from "./Shared/SideNav1";
import SideNav2 from "./Shared/SideNav2";
import { BiArrowBack, BiExit, BiKey, BiUserCircle } from "react-icons/bi";
import { MdDarkMode, MdLightMode, MdOutlineColorLens, MdOutlineMessage, MdOutlineNotifications } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Settings() {
    const {theme,border,isDark,setTheme}=useContext(ThemeContext);
    const navigate=useNavigate();
  return (
    <div className={`${theme} wrapper`}>
        <SideNav1/>
        <div className="main-wrapper">
            <div className={`border-b ${border} p-3 flex items-center`}>
                <BiArrowBack onClick={()=>navigate(-1)} className="w-6 h-6"/>
                <p className="text-lg font-semibold ml-3">Settings</p>
            </div>
            <div className="p-3">
                <ul>
                    <li className={`p-2`}>
                        <div className="flex items-center">
                            <BiUserCircle className="w-5 h-5 mr-2"/>
                            <p className="font-semibold">Profile settings</p>
                        </div>
                        <p className="text-sm text-gray-600">username,email,profile and cover photo</p>
                    </li>
                    <li className={`p-2`}>
                        <div className="flex items-center">
                            <BiKey className="w-5 h-5 mr-2"/>
                            <p className="font-semibold">Password settings</p>
                        </div>
                        <p className="text-sm text-gray-600">change password,save login info</p>
                    </li>
                    <li className={`p-2`}>
                        <div className="flex items-center">
                            <MdOutlineNotifications className="w-5 h-5 mr-2"/>
                            <p className="font-semibold">Notifications</p>
                        </div>
                        <p className="text-sm text-gray-600">set your notifications preferences</p>
                    </li>
                    <li className={`p-2`}>
                        <div className="flex items-center">
                            <MdOutlineMessage className="w-5 h-5 mr-2"/>
                            <p className="font-semibold">Message settings</p>
                        </div>
                        <p className="text-sm text-gray-600">who can send you message</p>
                    </li>
                    <li className={`p-2 flex justify-between items-center`}>
                        <div>
                        <div className="flex items-center">
                            <MdOutlineColorLens className="w-5 h-5 mr-2"/>
                            <p className="font-semibold">Theme Mode</p>
                        </div>
                        <p className="text-sm text-gray-600">currently set to {isDark ? "dark" : "light"}</p>
                        </div>
                        {isDark ? 
                        <MdLightMode onClick={()=>setTheme("light")} className="w-6 h-6"/> :
                        <MdDarkMode onClick={()=>setTheme("dark")} className="w-6 h-6"/>}
                    </li>
                    <li className={`p-2`}>
                        <div className="flex items-center">
                            <BiExit className="w-5 h-5 mr-2"/>
                            <button className="font-semibold">Logout</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <SideNav2/>
    </div>
  )
}
