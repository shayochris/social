import  { useContext } from 'react'
import Posts from './Posts'
import { MdAddCircle, } from "react-icons/md";
import {MdDarkMode,MdLightMode} from "react-icons/md";
import { AiOutlineSearch} from "react-icons/ai";
import { ThemeContext } from "../../Contexts/ThemeContext";
import MobileNav from './MobileNav';

export default function MainDiv() {
  const {theme,border,isDark,setTheme}=useContext(ThemeContext)
  return (
    <div className="main-wrapper">
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
                  <AiOutlineSearch className="w-6 h-6 mr-1 hidden md:block"/>
                  <MdAddCircle className=" w-6 h-6 mr-2 md:hidden text-blue-500"/>
                  {isDark ?
                    <MdLightMode onClick={()=>setTheme("light")} className='w-6 h-6'/>
                  :
                    <MdDarkMode onClick={()=>setTheme("dark")} className='w-6 h-6'/>
                  }
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
