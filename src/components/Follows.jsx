import { useContext, useState } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext'
import SideNav1 from './Shared/SideNav1'
import SideNav2 from './Shared/SideNav2'
import { BiArrowBack } from 'react-icons/bi'
import { Link, useNavigate, useParams } from 'react-router-dom'
import rolex from "../assets/images/rolex.jpg"

export default function Follows() {
    const navigate=useNavigate();
    const {theme,border,isDark}=useContext(ThemeContext);
    const {tab,id}=useParams();
    const [activeTab,setActiveTab]=useState(tab);
  return (
    <div className={`${theme} wrapper`}>
        <SideNav1/>
        <div className="main-wrapper">
            <div  className={`border-b ${border} ${theme} sticky top-0 left-0`} >
                <div className="flex items-center p-2">
                    <BiArrowBack onClick={()=>navigate(-1)} className='w-5 h-5 mr-3'/>
                    <div>
                        <p>username</p>
                    </div>
                </div>
                {activeTab === "followers" ?
                <div className="flex items-center text-sm px-3">
                    <button onClick={()=>setActiveTab("followers")} className='tab-active mr-3'>Followers</button>
                    <button onClick={()=>setActiveTab("following")} className="tab mr-3">Following</button> 
                </div>:
                <div className="flex items-center text-sm px-3">
                    <button onClick={()=>setActiveTab("followers")} className='tab mr-3'>Followers</button>
                    <button onClick={()=>setActiveTab("following")} className="tab-active mr-3">Following</button> 
                </div>
                }
            </div>
            <div className="p-4">
          {[...Array(12)].map((n,i)=>(
            <div key={i} className={`flex justify-between ${theme} items-start my-3`}>
              <div className="flex items-start ">
                <img src={rolex} alt="" className="avatar-xs mr-2" />
                <div className="text-sm">
                  <Link to={`/profile/username/${i}`} className="font-semibold">username</Link>
                  <p className="text-gray-500 text-xs">@username</p>
                  <p className={`text-xs  pb-2`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quidem quia accusantium.</p>
                </div> 
              </div>
              <Link className={`text-sm ${isDark ? "text-black bg-white font-semibold" : "text-blue-500 border border-blue-500"} px-3 py-1 rounded-full`}>follow</Link>
            </div>
          ))}
          </div>
        </div>
        <SideNav2/>
    </div>
  )
}
