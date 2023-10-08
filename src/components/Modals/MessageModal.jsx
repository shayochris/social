import { useContext, useState } from "react"
import { ThemeContext } from "../../Contexts/ThemeContext"
import { Link } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import rolex from "../../assets/images/rolex.jpg";
import defo from "../../assets/images/default-profile.jpg";
import { AiOutlineClose } from "react-icons/ai";
export default function MessageModal({setmessage_modal}) {
    const {theme,border,isDark}=useContext(ThemeContext);
    const [text,settext]=useState("");
    const handlesubmit=(e)=>{
        e.preventDefault();
        settext("");
        setmessage_modal(false);
    }
  return (
    <div className={`fixed w-full h-screen top-0 left-0 z-20 flex justify-center items-center bg-black/80`}>
        <div className={`${theme} w-full md:w-[60%] xl:w-[40%] mx-auto h-full md:h-[500px] md:border ${border} rounded-lg`}>
            <div className={`flex items-center border-b ${border} p-3`}>
                <AiOutlineClose onClick={()=>setmessage_modal(false)} className="w-6 h-6 mr-2"/>
                <p>writting to username </p>
            </div>
            
           
            
            <form action="" className="p-4" onSubmit={handlesubmit}>
                <div className="flex ">
                    <img src={defo} alt="" className="avatar-xxs mr-2" />
                    <textarea name="" id="" cols="30" rows="5" className={`${theme} border ${border} rounded-lg outline-none w-[90%] p-2 text-sm`} placeholder="write your message" autoFocus
                    value={text} onChange={(e)=>settext(e.target.value)}>
                    </textarea>
                </div>
                {text &&
                <button className="bg-blue-500 text-white px-3 py-1 text-sm rounded-lg my-2 ml-8">send</button>
                }
            </form>
        </div>
    </div>
  )
}
