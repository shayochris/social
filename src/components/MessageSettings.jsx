import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../Contexts/ThemeContext"
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import SideNav1 from "./Shared/SideNav1";
import SideNav2 from "./Shared/SideNav2";

export default function MessageSettings() {
    const navigate=useNavigate();
    const {theme,border}=useContext(ThemeContext);
    const [success,setsuccess]=useState(false);
    const [status,setStatus]=useState("everyone");
    const [msg,setmsg]=useState("");
    const handleSubmit=(choice)=>{
        setStatus(choice);
        setsuccess(true);
        setmsg("updated successfully");
    }
  return (
    <div className={`${theme} wrapper`}>
        <SideNav1/>
        <div className="main-wrapper">
            <div className={`border-b ${border} flex items-center p-3`}>
                <BiArrowBack onClick={()=>navigate(-1)} className="w-5 h-5 mr-3"/>
                <p className="font-semibold">Message Settings</p>
            </div>
            <div className="p-3">
                <p className="text-lg font-semibold">Who can send you message?</p>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. In quam odio ducimus.</p>
                    {success && <div className="flex items-center my-2" >
                        <span><TiTick className="w-5 h-5 text-green-500 mr-1"/></span>
                        <p className="text-sm text-green-500">{msg}</p>
                    </div>}
                {status === "everyone" && 
                    <div action="" className="mt-2" >
                        <button onClick={()=>handleSubmit("everyone")} className="flex items-center mb-2">
                            <input checked onChange={()=>handleSubmit("everyone")}  type="radio" value="one"  name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label  className="ml-2 text-sm font-medium  dark:text-gray-300">Everyone</label>
                        </button>
                        <button onClick={()=>handleSubmit("Followers")} className="flex items-center mb-2">
                            <input  type="radio" value="two"  name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label  className="ml-2 text-sm font-medium  dark:text-gray-300">Followers</label>
                        </button>
                        <button onClick={()=>handleSubmit("None")} className="flex items-center mb-2">
                            <input  type="radio" value="two"  name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label  className="ml-2 text-sm font-medium  dark:text-gray-300">No one</label>
                        </button>
                    </div>
                }
                {status === "Followers" && 
                    <div action="" className="mt-2" >
                        <button onClick={()=>handleSubmit("everyone")} className="flex items-center mb-2">
                            <input   type="radio" value="one"  name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label  className="ml-2 text-sm font-medium  dark:text-gray-300">Everyone</label>
                        </button>
                        <button onClick={()=>handleSubmit("Folowers")} className="flex items-center mb-2">
                            <input checked onChange={()=>handleSubmit("Followers")} type="radio" value="two"  name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label  className="ml-2 text-sm font-medium  dark:text-gray-300">Followers</label>
                        </button>
                        <button onClick={()=>handleSubmit("None")} className="flex items-center mb-2">
                            <input  type="radio" value="two"  name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label  className="ml-2 text-sm font-medium  dark:text-gray-300">No one</label>
                        </button>
                    </div>
                }
                {status === "None" && 
                    <div action="" className="mt-2" >
                        <button onClick={()=>handleSubmit("everyone")} className="flex items-center mb-2">
                            <input type="radio" value="one"  name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label  className="ml-2 text-sm font-medium  dark:text-gray-300">Everyone</label>
                        </button>
                        <button onClick={()=>handleSubmit("Followers")} className="flex items-center mb-2">
                            <input  type="radio" value="two"  name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label  className="ml-2 text-sm font-medium  dark:text-gray-300">Followers</label>
                        </button>
                        <button onClick={()=>handleSubmit("None")} className="flex items-center mb-2">
                            <input checked onChange={()=>handleSubmit("None")}  type="radio" value="two"  name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label  className="ml-2 text-sm font-medium  dark:text-gray-300">No one</label>
                        </button>
                    </div>
                }
                
            </div>
        </div>
        <SideNav2/>
    </div>
  )
}
