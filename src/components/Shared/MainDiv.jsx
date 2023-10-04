import  { useContext } from 'react'
import {MdDarkMode,MdLightMode} from "react-icons/md";
import Posts from './Posts'
import { ThemeContext } from '../../Contexts/ThemeContext'
import MobileNav from './MobileNav';
export default function MainDiv() {
  const {theme,border,isDark,setTheme}=useContext(ThemeContext);
  console.log(isDark);
  return (
    <div className={`lg:w-[50%] md:w-[70%]  mx-auto h-full  overflow-y-auto scrollbar-hide ${theme} `}>
        <div className="relative ">
            <div className={`p-3 ${theme} sticky flex justify-between items-center top-0 mb-2 border-b ${border}`}>
                <p>Home</p>
                {isDark ?
                  <MdLightMode onClick={()=>setTheme("light")} className='w-5 h-5'/>
                :
                  <MdDarkMode onClick={()=>setTheme("dark")} className='w-5 h-5'/>
                }
            </div>   
            <Posts/>
            <MobileNav/>
        </div>
    </div>
  )
}
