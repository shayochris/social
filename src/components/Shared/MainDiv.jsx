import  { useContext, useState } from 'react'
import Posts from './Posts'
import { MdAddCircle, } from "react-icons/md";
import { AiOutlineSearch,} from "react-icons/ai";
import { ThemeContext } from "../../Contexts/ThemeContext";
import MobileNav from './MobileNav';
import {BiUserCircle} from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';

import CreatePost from '../Modals/CreatePost';

export default function MainDiv() {
  const {theme,border}=useContext(ThemeContext);
  const navigate=useNavigate();
  const [createpost_modal,setcreatepost_modal]=useState(false);
  return (
    <div className="main-wrapper relative">
      {createpost_modal && <CreatePost setcreatepost_modal={setcreatepost_modal}/>}
       <div className={`p-3  ${theme} sticky top-0 z-10 left-0 border-b ${border}`}>
          <div className="flex justify-between items-center">
              <div className={`text-blue-500 `}>
                <div  className="hidden md:flex items-center">
                  <MdAddCircle onClick={()=>setcreatepost_modal(true)} className=" w-6 h-6 mr-1"/>
                  <p>create post</p>
                </div>
                <p className="md:hidden text-lg font-semibold">Social</p>
              </div>  
              <div className="flex items-center">
                  <AiOutlineSearch onClick={()=>navigate("/search")} className="w-6 h-6 mr-1 hidden md:block"/>
                  <MdAddCircle onClick={()=>setcreatepost_modal(true)} className=" w-6 h-6 mr-2 md:hidden text-blue-500"/>
                  <Link to="/profile/myprofile/*"><BiUserCircle className="w-6 h-6"/></Link>
                  
              </div>
          </div>
        </div>
        <div style={{paddingBottom: "40px"}}>
          <Posts/>
        </div> 
        
        <MobileNav/>
    </div>
  )
}
