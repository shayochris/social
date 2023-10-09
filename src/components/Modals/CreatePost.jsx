import { useContext, useState,useRef } from "react"
import { ThemeContext } from "../../Contexts/ThemeContext"
import { BsCameraVideo} from "react-icons/bs";
import defo from "../../assets/images/default-profile.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { CiImageOn } from "react-icons/Ci";
export default function CreatePost({setcreatepost_modal}) {
    const {theme,border}=useContext(ThemeContext);
    const [caption,setCaption]=useState("");
    // const [file, setFile] = useState(null);
    const inputRef = useRef();
    const handlesubmit=(e)=>{
        e.preventDefault();
        setCaption("");
        setcreatepost_modal(false);
    }
  return (
    <div className={`fixed w-full h-screen top-0 left-0 z-20 flex justify-center items-center bg-black/80`}>
        <div className={`${theme} w-full md:w-[60%] xl:w-[40%] mx-auto h-full md:h-[500px] md:border ${border} rounded-lg`}>
            <div className={`flex justify-between items-center border-b ${border} p-2`}>
                <div className="flex items-center">
                    <AiOutlineClose onClick={()=>setcreatepost_modal(false)} className="w-6 h-6 mr-2"/>
                    <p>create post</p>
                </div>
                {caption &&
                <button onClick={handlesubmit} className="bg-blue-500 text-white px-3 py-1 text-sm rounded-full my-2">create</button>
                }
            </div>
            
            <form action="" className="p-4">
                <div className="flex ">
                    <img src={defo} alt="" className="avatar-xxs" />
                    <textarea name="" id="" cols="30" rows="4" className={`${theme} outline-none w-[90%] px-2 text-sm`} placeholder="what is on your mind?" autoFocus
                    value={caption} onChange={(e)=>setCaption(e.target.value)}>
                    </textarea>
                </div>
                <input
                    type="file"
                    ref={inputRef}
                    className="hidden"
                    accept=".jpg,.png"
                    // onChange={handleFileUpload}
                />
                <div className="mt-2 ml-6 flex items-center">
                    <CiImageOn onClick={() => inputRef.current.click()} className="w-6 h-6 text-blue-500 mr-3"/>
                    <BsCameraVideo onClick={() => inputRef.current.click()} className="w-6 h-6 text-blue-500" disabled/>
                </div>
                
            </form>
        </div>
    </div>
  )
}
