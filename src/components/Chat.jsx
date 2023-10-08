import { useContext, useState } from "react"
import { ThemeContext } from "../Contexts/ThemeContext"
import SideNav1 from "./Shared/SideNav1";
import SideNav2 from "./Shared/SideNav2";
import { BiArrowBack} from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import defo from '../assets/images/default-profile.jpg'
import { BsThreeDotsVertical } from "react-icons/bs";
import MessageModal from "./Modals/MessageModal";
export default function Chat() {
    const {theme,border,isDark}=useContext(ThemeContext);
    const navigate=useNavigate();
    const [messages,setmessages]=useState(true);
    const [message_modal,setmessage_modal]=useState(false);
  return (
    <div className={`${theme} wrapper`}>
        {message_modal && <MessageModal setmessage_modal={setmessage_modal}/>}
        <SideNav1/>
        <div className="main-wrapper">
            <div className={`border-b ${border} ${theme} z-10 p-3 flex justify-between items-center sticky top-0 left-0`}>
                <div className="flex items-center">
                    <BiArrowBack onClick={()=>navigate(-1)} className="w-6 h-6 mr-3"/>
                    <div className="flex items-center">
                        <img src={defo} alt="" className="avatar-xs mr-2" />
                        <div>
                            <p className="text-sm font-semibold">username</p>
                            <p className="text-gray-500 text-xs">@username</p>
                        </div>
                    </div>
                </div>
                <BsThreeDotsVertical className="w-5 h-5"/>
            </div>
            <div className="p-3">
                {[...Array(5)].map((n,i)=>(
                <div key={i} >
                    <div className="w-full flex justify-start mb-3">
                        <div className={`rounded-lg relative max-w-[80%]  `}>
                            <p className={`text-sm ${isDark ? "bg-[#333]" :"bg-[#eee]"} p-3 rounded-lg`}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, nisi laudantium quod nostrum laboriosam repellat labore cum fuga assumenda, illum ad praesentium eligendi repellendus ea iusto rem quas veritatis dicta!
                            </p>
                            <p className="text-sm ml-2 ">5 minutes</p>
                        </div>    
                    </div>
                    <div className="w-full flex justify-end mb-3">
                        <div className={`rounded-lg relative max-w-[80%]  `}>
                            <p className={`text-sm bg-blue-600 text-white p-3 rounded-lg`}> ab saepe quibusdam?</p>
                            <p className="text-sm text-end mr-2 ">now</p>
                        </div>    
                    </div>
                </div>
                ))}
               
            </div>
            <div className={`${theme} sticky bottom-0 left-0 z-10 p-3 border-t ${border}`} >
                <button onClick={()=>setmessage_modal(true)} className={`${border} border text-start rounded-lg text-sm w-full px-4 py-2`}>write a message</button>
            </div>
        </div>
        <SideNav2/>
    </div>
  )
}
