import { useContext, useState } from "react"
import { ThemeContext } from "../../Contexts/ThemeContext"
import { Link } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import rolex from "../../assets/images/rolex.jpg";
import defo from "../../assets/images/default-profile.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
export default function BioModal({setbio_modal}) {
    const {theme,border}=useContext(ThemeContext);
    const [bio,setbio]=useState("");
    const [success,setsuccess]=useState(false);
    const handlesubmit=(e)=>{
        e.preventDefault();
        setbio("");
        setsuccess(true);
    }
  return (
    <div className={`fixed w-full h-screen top-0 left-0 z-10 flex justify-center items-center bg-black/80`}>
        <div className={`${theme} w-full md:w-[60%] xl:w-[40%] mx-auto h-full md:h-[500px] md:border ${border} rounded-lg`}>
            <div className={`flex items-center border-b ${border} p-3`}>
                <AiOutlineClose onClick={()=>setbio_modal(false)} className="w-6 h-6 mr-2"/>
                <p>Bio Settings</p>
            </div>
            <div className="p-4">
                <p className="text-xl font-semibold">Your bio describes who you are</p>
                <p className="text-sm py-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum explicabo animi expedita.</p>
            </div>
            {success && !bio && <div className="flex items-center p-4" >
                    <span><TiTick className="w-5 h-5 text-green-500 mr-1"/></span>
                    <p className="text-sm text-green-500">bio updated successfully</p>
                </div>}
            
            <form action="" className="p-4" onSubmit={handlesubmit}>
                <div className="flex ">
                    <img src={defo} alt="" className="avatar-xxs" />
                    <textarea name="" id="" cols="30" rows="2" className={`${theme} outline-none w-[90%] px-2 text-sm`} placeholder="add biography" autoFocus
                    value={bio} onChange={(e)=>setbio(e.target.value)}>
                    </textarea>
                </div>
                {bio &&
                <button className="bg-blue-500 text-white px-3 py-1 text-sm rounded-full my-2">update</button>
                }
            </form>
        </div>
    </div>
  )
}
