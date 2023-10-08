import { useContext, useState } from "react"
import { ThemeContext } from "../Contexts/ThemeContext"
import SideNav1 from "./Shared/SideNav1";
import SideNav2 from "./Shared/SideNav2";
import { BiArrowBack, BiExit, BiKey, BiUserCircle } from "react-icons/bi";
import { MdDarkMode, MdLightMode, MdOutlineColorLens, MdOutlineMessage, MdOutlineNotifications } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import defo from '../assets/images/default-profile.jpg'
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
export default function Search() {
    const {theme,border,isDark,}=useContext(ThemeContext);
    const navigate=useNavigate();
    const [term,setterm]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <div className={`${theme} wrapper`}>
        <SideNav1/>
        <div className="main-wrapper">
            <div className={`border-b ${border} p-3 flex items-center`}>
                <BiArrowBack onClick={()=>navigate(-1)} className="w-6 h-6 mr-3"/>
                <form action="" className="w-full flex justify-between items-center" onSubmit={handleSubmit}>
                    <div className={`flex ${border} border p-2 rounded-lg justify-between items-center w-full`}>
                        <input type="text" className={`${theme}  outline-none w-full`} placeholder="search"
                        value={term} onChange={(e)=>setterm(e.target.value)}
                        />
                        {term &&
                        <AiOutlineClose onClick={()=>setterm("")} className="w-5 h-5"/>
                        }
                    </div>
                   
                    
                    {term ? 
                    <button className="text-blue-500 text-sm ml-2">
                        <AiOutlineSearch className="w-5 h-5"/>
                    </button> :
                     <button className="text-gray-500 text-sm ml-2">
                        <AiOutlineSearch className="w-5 h-5"/>
                    </button> 
                    }
                </form>
            </div>
            <div className="p-3">
                    {!term && 
                    <div>
                        <p className="text-lg font-semibold text-blue-500">Recent</p>
                        <div  className={`flex justify-between ${theme} items-start my-3`}>
                            <div className="flex items-start ">
                            <img src={defo} alt="" className="avatar-xs mr-2" />
                            <div className="text-sm">
                                <p className="font-semibold">username</p>
                                <p className="text-xs text-gray-500">@username</p>
                            </div> 
                            </div>
                            <Link className={`text-sm ${isDark ? "text-black bg-white font-semibold" : "text-blue-500 border border-blue-500"} px-3 py-1 rounded-full`}>follow</Link>
                        </div>
                  </div>
                }
                {term && [...Array(5)].map((n,i)=>(
                    <div key={i} className={`flex justify-between ${theme} items-start my-3`}>
                    <div className="flex items-start ">
                      <img src={defo} alt="" className="avatar-xs mr-2" />
                      <div className="text-sm">
                        <p className="font-semibold">username</p>
                        <p className="text-xs text-gray-500">@username</p>
                        <p className={`text-xs pb-2`}>Pariatur quidem quia accusantium.</p>
                      </div> 
                    </div>
                    <Link className={`text-sm ${isDark ? "text-black bg-white font-semibold" : "text-blue-500 border border-blue-500"} px-3 py-1 rounded-full`}>follow</Link>
                  </div>
                ))}
                
            </div>
        </div>
        <SideNav2/>
    </div>
  )
}

