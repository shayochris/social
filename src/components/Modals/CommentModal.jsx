import { useContext, useState } from "react"
import { ThemeContext } from "../../Contexts/ThemeContext"
import { Link } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import rolex from "../../assets/images/rolex.jpg";
import defo from "../../assets/images/default-profile.jpg";
import { AiOutlineClose } from "react-icons/ai";
export default function CommentModal({setcomment_modal}) {
    const {theme,border,isDark}=useContext(ThemeContext);
    const [comment,setComment]=useState("");
    const handlesubmit=(e)=>{
        e.preventDefault();
        setComment("");
        setcomment_modal(false);
    }
  return (
    <div className={`fixed w-full h-screen top-0 left-0 z-10 flex justify-center items-center bg-black/80`}>
        <div className={`${theme} w-full md:w-[60%] xl:w-[40%] mx-auto h-full md:h-[500px] md:border ${border} rounded-lg`}>
            <div className={`flex items-center border-b ${border} p-3`}>
                <AiOutlineClose onClick={()=>setcomment_modal(false)} className="w-6 h-6 mr-2"/>
                <p>username's post</p>
            </div>
            
            <div className="flex text-sm  p-3">
                <img src={rolex} alt="" className="avatar-sm mr-2" />
                <div>
                    <div className='flex items-center'>
                        <Link to="/profile">
                            <p className='font-semibold'>username</p>
                        </Link>
                        
                        <BsDot/>
                        <p className='text-gray-500 text-xs'>now</p>
                    </div>
                    <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nihil dolore consequatur odio, maiores optio et nostrum animi hic iste est commodi nemo assumenda totam reiciendis quis tempore delectus minus!</p>
                    
                </div>    
            </div>
            
            <form action="" className="p-4" onSubmit={handlesubmit}>
                <div className="flex ">
                    <img src={defo} alt="" className="avatar-xxs" />
                    <textarea name="" id="" cols="30" rows="2" className={`${theme} outline-none w-[90%] px-2 text-sm`} placeholder="add comment" autoFocus
                    value={comment} onChange={(e)=>setComment(e.target.value)}>
                    </textarea>
                </div>
                {comment &&
                <button className="bg-blue-500 text-white px-3 py-1 text-sm rounded-full my-2">add comment</button>
                }
            </form>
        </div>
    </div>
  )
}
