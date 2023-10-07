import { useContext, useState } from "react"
import { ThemeContext } from "../Contexts/ThemeContext"
import { BiArrowBack } from "react-icons/bi";
import SideNav1 from "./Shared/SideNav1";
import SideNav2 from "./Shared/SideNav2";
import { AiOutlineComment, AiOutlineLike } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import rolex from "../assets/images/rolex.jpg";
import CommentModal from "./Modals/CommentModal";
export default function Comments() {
    const {theme,border,isDark}=useContext(ThemeContext);
    const navigate=useNavigate();
    const [comment_modal,setcomment_modal]=useState(false);
    const [comments,setComments]=useState(true);
  return (
    <div className={`${theme} wrapper`}>
        {comment_modal && <CommentModal setcomment_modal={setcomment_modal}/>}
        <SideNav1/>
        <div className={`main-wrapper `}>
            <div className={`border-b ${border} ${theme} p-2 flex items-center justify-between sticky top-0 left-0`}>
                <div className="flex items-center">
                    <BiArrowBack onClick={()=>navigate(-1)} className='w-5 h-5 mr-3'/>
                    <p className='text-lg font-semibold'>username post</p>
                </div>
                <button  onClick={()=>setcomment_modal(true)} className={`px-3 py-1 text-sm rounded-full ${isDark ? "bg-white text-black" :" bg-blue-500 text-white"}`}>
                 comment</button>
            </div>
            {comments ? [...Array(10)].map((n,i)=>(
            <div key={i} className={`${theme} w-full`}>
                <div className="flex text-sm sm:w-[80%] 2xl:w-[70%] mx-auto p-3">
                    <img src={rolex} alt="" className="avatar-sm mr-2" />
                    <div>
                        <div className='flex items-center'>
                            <Link to={`/profile/username/${i}`}>
                                <p className='font-semibold'>username</p>
                            </Link>
                            
                            <BsDot/>
                            <p className='text-gray-500 text-xs'>now</p>
                        </div>
                        <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dolorem perspiciatis ducimus!</p>
                        <div className={`my-2 flex items-center ${isDark ? "text-gray-500" : "text-gray-600"}`}>
                            <span className='mr-4 flex items-center'>
                                <AiOutlineLike className= "w-6 h-6"/>1234
                            </span>
                            <span className='mr-4 flex items-center '>
                                <AiOutlineComment className='w-6 h-6'/>1234
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            )):
            
            <div className="p-4">
                <p className="text-xl font-semibold mb-2">No comments yet</p>
                <p className="text-sm text-gray-500 mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam veritatis repellendus accusamus dignissimos iusto non ea modi sint excepturi. Earum voluptatem quae ratione voluptate veniam delectus? Facilis dignissimos obcaecati consequatur.</p>
                <button  onClick={()=>setComments(true)} className={`px-3 py-1 text-sm rounded-full ${isDark ? "bg-white text-black" :" bg-blue-500 text-white"}`}>
                show comments</button>
            </div>}
            
            
        </div>
        <SideNav2/>
    </div>
  )
}
