import { useContext, useState } from "react"
import { ThemeContext } from "../Contexts/ThemeContext"
import SideNav1 from "./Shared/SideNav1";
import SideNav2 from "./Shared/SideNav2";
import { BiArrowBack} from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import defo from '../assets/images/default-profile.jpg'
export default function Messages() {
    const {theme,border}=useContext(ThemeContext);
    const navigate=useNavigate();
    const [messages,setmessages]=useState(true);
  return (
    <div className={`${theme} wrapper`}>
        <SideNav1/>
        <div className="main-wrapper">
            <div className={`border-b ${border} p-3 flex items-center`}>
                <BiArrowBack onClick={()=>navigate(-1)} className="w-6 h-6"/>
                <p className="text-lg font-semibold ml-3">Messages</p>
            </div>
            <div className="">
                {messages ? [...Array(5)].map((n,i)=>(
                    <Link to="/chat" key={i} className={`flex items-start border-b ${border} p-3 block w-full`}>
                        <img src={defo} alt="" className="avatar-sm mr-3" />
                        <div className="w-full">
                            <div className="flex justify-between items-center">
                                <p className="text-sm font-semibold">username</p>
                                <p className="text-sm text-blue-500">12:00</p>
                            </div>
                            
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </Link >
                )):
                    <div className="p-3">
                        <p className="text-2xl font-semibold mb-2">No Messages</p>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa possimus maiores enim dolores at optio magnam officia, suscipit et vero fugiat molestias eveniet facere laborum nobis id. Voluptatibus, maxime eos!</p>
                    </div>
                }
                
            </div>
        </div>
        <SideNav2/>
    </div>
  )
}
