import  { useContext } from 'react'
import Posts from './Posts'
import { MdAddCircle, } from "react-icons/md";
import {MdDarkMode,MdLightMode} from "react-icons/md";
import { AiOutlineComment, AiOutlineLike, AiOutlineSearch, AiOutlineSetting} from "react-icons/ai";
import { ThemeContext } from "../../Contexts/ThemeContext";
import MobileNav from './MobileNav';
import {BiArrowBack} from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import { BsDot } from 'react-icons/bs';
import rolex from '../../assets/images/rolex.jpg';

export default function MainDiv() {
  const {theme,border,isDark,setTheme}=useContext(ThemeContext);
  const navigate=useNavigate();
  return (
    <div className="main-wrapper relative">
       <div className={`p-3  ${theme} sticky top-0 left-0 border-b ${border}`}>
          <div className="flex justify-between items-center">
              <div className={`text-blue-500 `}>
                <div className="hidden md:flex items-center">
                  <MdAddCircle className=" w-6 h-6 mr-1"/>
                  <p>create post</p>
                </div>
                <p className="md:hidden text-lg font-semibold">Social</p>
              </div>  
              <div className="flex items-center">
                  <AiOutlineSearch onClick={()=>navigate("/search")} className="w-6 h-6 mr-1 hidden md:block"/>
                  <MdAddCircle className=" w-6 h-6 mr-2 md:hidden text-blue-500"/>
                  <Link to="/settings" className='md:hidden'><AiOutlineSetting className='w-6 h-6'/></Link>
                  
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
