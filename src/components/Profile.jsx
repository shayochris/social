import SideNav1 from "./Shared/SideNav1";
import SideNav2 from "./Shared/SideNav2";
import {BiArrowBack} from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import rolex from "../assets/images/rolex.jpg"
import { Link, useNavigate, useParams } from "react-router-dom";
import Posts from "./Shared/Posts";
import { useContext, useState } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import MobileNav from "./Shared/MobileNav";
export default function Profile() {
    const navigate=useNavigate();
    const {user}=useParams();
    const myprofile=user;
    const [empty,setempty]=useState(false)
    const {theme,border,isDark}=useContext(ThemeContext);
    const [activeTab,setActiveTab]=useState("posts");
  return (
    <div className={`${theme} wrapper`}>
        <SideNav1/>
        <div className="main-wrapper" >
            <div className={`p-2 sticky ${border} ${theme} top-0 left-0 flex items-center  z-10 border-b`}>
                <BiArrowBack onClick={()=>navigate(-1)} className="w-5 h-5 mr-3"/>
                <p>username</p>
            </div>
            <div style={{paddingBottom: "40px"}}>
                <div className="w-full h-52 relative">
                    <div className={`w-full h-36 ${border} ${isDark ? "bg-[#333]":"bg-[#ddd]"}`}>
                        <img src={rolex} alt="" className="w-full h-full object-cover" />
                    </div>
                    <img src={rolex} alt="" className={`avatar-2xl ring-4 ${isDark ? "ring-black" : "ring-white"} absolute bottom-4 left-4`} />
                    
                    {myprofile !== "myprofile" ?
                    <div className="p-2 absolute right-2 bottom-5 flex items-center ">
                        <div className={`border-2 ${border} w-6 h-6 rounded-full mr-3 flex items-center justify-center`}>
                            <BsThreeDots/>
                        </div>
                        <button className={`border-2 ${border} px-4 text-sm py-1 rounded-full`}>follow</button> 
                        
                    </div> :
                    <div className="p-2 absolute right-2 bottom-5 flex items-center ">
                        <button onClick={()=>navigate("/profilesettings")} className={`border-2 ${border} px-4 text-sm py-1 rounded-full`}>Edit Profile</button>
                    </div>

                    }


                </div>
                    
                <div className="px-4">
                    <p className="font-semibold text-lg">username</p>
                    <p className=" text-sm relative bottom-1">@nickname</p>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis nostrum, distinctio expedita perspiciatis nihil alias, praesentium delectus mollitia possimus tempore dolorum quaerat. Dolorem eius voluptas quas id placeat vero molestias.</p>
                    <div className="my-2 flex items-center">
                        <Link to="/follows/followers/1" className="text-sm mr-3"><span className="font-bold ">1234</span> followers</Link>
                        <Link to="/follows/following/1" className="text-sm"><span className="font-bold ">1234</span> following</Link>
                    </div>
                    <div className="flex items-center">
                        <div className="flex -space-x-4">
                            <img src={rolex} alt="" className="avatar-xs stacked" />
                            <img src={rolex} alt="" className="avatar-xs stacked" />
                            <img src={rolex} alt="" className="avatar-xs stacked" />
                            <img src={rolex} alt="" className="avatar-xs stacked" />
                            <img src={rolex} alt="" className="avatar-xs stacked" />
                        </div>
                        <p className="ml-3 text-xs">followed by John,and 4 others</p>
                    </div>
                </div>
                
                    {activeTab === "posts" &&
                    <div className={`border-b text-sm ${border} mt-2 flex  items-center px-4`}>
                    <Link onClick={()=>setActiveTab("posts")} className="tab-active mr-8">Posts</Link>
                    <Link onClick={()=>setActiveTab("media")} className="tab mr-8">Media</Link>
                    <Link onClick={()=>setActiveTab("links")} className="tab mr-8">Links</Link>
                    </div>
                    }
                     {activeTab === "media" &&
                    <div className={`border-b text-sm ${border} mt-2 flex  items-center px-4`}>
                    <Link onClick={()=>setActiveTab("posts")} className="tab mr-8">Posts</Link>
                    <Link onClick={()=>setActiveTab("media")} className="tab-active mr-8">Media</Link>
                    <Link onClick={()=>setActiveTab("links")} className="tab mr-8">Links</Link>
                    </div>
                    }
                     {activeTab === "links" &&
                    <div className={`border-b text-sm ${border} mt-2 flex  items-center px-4`}>
                    <Link onClick={()=>setActiveTab("posts")} className="tab mr-8">Posts</Link>
                    <Link onClick={()=>setActiveTab("media")} className="tab mr-8">Media</Link>
                    <Link onClick={()=>setActiveTab("links")} className="tab-active mr-8">Links</Link>
                    </div>
                    }
                
                {activeTab === "posts" &&
                <div className="mt-2">
                    {empty ? 
                    <div className={`p-4 text-sm ${theme}`}>
                        <p className="text-2xl font-bold pb-2">No Posts Yet</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolor a dolores placeat consequuntur voluptatum ullam minima porro eius, debitis sit! Fugit minima nobis quos adipisci porro eum necessitatibus enim?</p>
                        <button onClick={()=>setempty(!empty)} className="my-2 px-4 py-2 bg-blue-500 rounded-full text-white">
                            create posts
                        </button>
                    </div> :
                    <Posts/> 
                    }
                </div>
                }
                {activeTab === "media" &&
                <div className="mt-4 grid grid-cols-3 gap-2 p-2">
                    {[...Array(15)].map((n,i)=>(
                        <div key={i} className={`md:h-56 h-40 rounded-lg overflow-hidden ${isDark ?"bg-[#333]":"bg-[#ddd]"}`}>
                            <img src={rolex} alt="" className="w-full h-full object-cover"/>
                        </div>
                    ))}
                    
                </div>
                }
                {activeTab === "videos" && 
                <div className="mt-4 p-2">
                    <p className="text-2xl font-semibold">No Videos yet</p>
                    <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic repudiandae quisquam amet in praesentium, corporis odio quidem minima doloribus error, natus distinctio impedit expedita quod? Delectus, totam animi! A, alias!</p>
                </div>
                }
                 {activeTab === "links" && 
                <div className="mt-4 p-4">
                    <p className="text-2xl font-semibold mb-2">No Links added</p>
                    <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic repudiandae quisquam amet in praesentium, corporis odio quidem minima doloribus error, natus distinctio impedit expedita quod? Delectus, totam animi! A, alias!</p>
                </div>
                }
            </div>
        </div>
        <SideNav2/>
        <MobileNav/>
    </div>
  )
}
