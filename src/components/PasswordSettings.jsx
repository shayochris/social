import { useContext, useState } from "react"
import { ThemeContext } from "../Contexts/ThemeContext"
import SideNav1 from "./Shared/SideNav1";
import SideNav2 from "./Shared/SideNav2";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { TiTick } from "react-icons/ti";

export default function PasswordSettings() {
    const {theme,border}=useContext(ThemeContext);
    const navigate=useNavigate();
    const [currentpassword,setcurrentpassword]=useState("");
    const [currentpassworderror,setcurrentpassworderror]=useState(false);
    const [newpassword,setnewpassword]=useState("");
    const [newpassworderror,setnewpassworderror]=useState(false);
    const [confirmpassword,setconfirmpassword]=useState("");
    const [confirmpassworderror,setconfirmpassworderror]=useState(false);
    const [success,setsuccess]=useState(false);
    const [msg,setmsg]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(currentpassword !== "12345678"){
            setcurrentpassworderror(true);
            setconfirmpassworderror(false);
            setnewpassworderror(false);
            setmsg("invalid password");
        }
        else{
            if(newpassword.length < 8){
                setcurrentpassworderror(false);
                setconfirmpassworderror(false);
                setnewpassworderror(true);
                setmsg("password must contain at least 8 characters");
            }else{
                if(newpassword !== confirmpassword){
                    setcurrentpassworderror(false);
                    setconfirmpassworderror(true);
                    setnewpassworderror(false);
                    setmsg("new and confirm passwords dont match");
                }else{
                    setcurrentpassworderror(false);
                    setconfirmpassworderror(false);
                    setnewpassworderror(false);
                    setsuccess(true);
                    setmsg("password updated ");
                    setconfirmpassword("");
                    setcurrentpassword("");
                    setnewpassword("");
                }
            }
        }
    }
  return (
    <div className={`${theme} wrapper`}>
        <SideNav1/>
        <div className="main-wrapper">
            <div className={`p-3 border-b ${border} flex items-center`}>
                <BiArrowBack onClick={()=>navigate(-1)} className="w-5 h-5 mr-3"/>
                <p className="font-semibold">password settings</p>
            </div>
            <div className="px-6 py-3">
                <form action="" onSubmit={handleSubmit}>
                    {success && <div className="flex items-center mb-3" >
                        <span><TiTick className="w-5 h-5 text-green-500 mr-1"/></span>
                        <p className="text-sm text-green-500">{msg}</p>
                    </div>}
                    {currentpassworderror ?
                    <div className="relative mb-4 ">
                        <input type="password"  className={`${theme} block rounded-lg px-2.5 pb-2.5 pt-4 w-full text-sm    border border-red-500  focus:outline-none focus:ring-0 focus:border-red-500 peer`} placeholder=" " autoFocus
                        value={currentpassword } onChange={(e)=>setcurrentpassword(e.target.value)}
                        />
                        <label className="absolute text-sm text-red-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-80 top-4 z-10 origin-[0] left-2.5 peer-focus:text-red-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">current password</label>
                        <div className="flex items-center py-1" >
                            <span><AiOutlineInfoCircle className="w-5 h-5 text-red-500 mr-1"/></span>
                            <p className="text-sm text-red-500">{msg}</p>
                        </div>
                    </div>
                    :
                    <div className="relative mb-4 ">
                        <input type="password"  className={`${theme} block rounded-lg px-2.5 pb-2.5 pt-4 w-full text-sm    border ${border}  focus:outline-none focus:ring-0 focus:border-blue-600 peer`} placeholder=" " autoFocus
                        value={currentpassword } onChange={(e)=>setcurrentpassword(e.target.value)}
                        />
                        <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-80 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">current password</label>
                    </div>
                    }
                    {newpassworderror ?
                    <div className="relative mb-4 ">
                        <input type="password"  className={`${theme} block rounded-lg px-2.5 pb-3 pt-5 w-full text-sm    border border-red-500  focus:outline-none focus:ring-0 focus:border-red-500 peer`} placeholder=" "
                        value={newpassword } onChange={(e)=>setnewpassword(e.target.value)}
                        />
                        <label className="absolute text-sm text-red-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-85 top-4 z-10 origin-[0] left-2.5 peer-focus:text-red-500  peer-placeholder-shown:scale-90 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">new password</label>
                        <div className="flex items-center py-1" >
                            <span><AiOutlineInfoCircle className="w-5 h-5 text-red-500 mr-1"/></span>
                            <p className="text-sm text-red-500">{msg}</p>
                        </div>
                    </div>
                    : 
                    <div className="relative mb-4 ">
                        <input type="password"  className={`${theme} block rounded-lg px-2.5 pb-3 pt-5 w-full text-sm    border ${border}  focus:outline-none focus:ring-0 focus:border-blue-600 peer`} placeholder=" "
                        value={newpassword } onChange={(e)=>setnewpassword(e.target.value)}
                        />
                        <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-85 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">new password</label>
                    </div>
                    }
                    {confirmpassworderror ?
                    <div className="relative mb-4 ">
                        <input type="password"  className={`${theme} block rounded-lg px-2.5 pb-2.5 pt-4 w-full text-sm    border border-red-500  focus:outline-none focus:ring-0 focus:border-red-500 peer`} placeholder=" "
                        value={confirmpassword } onChange={(e)=>setconfirmpassword(e.target.value)}
                        />
                        <label className="absolute text-sm text-red-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-red-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">confirm password</label>
                        <div className="flex items-center py-1" >
                            <span><AiOutlineInfoCircle className="w-5 h-5 text-red-500 mr-1"/></span>
                            <p className="text-sm text-red-500">{msg}</p>
                        </div>
                    </div>
                    :
                    <div className="relative mb-4 ">
                        <input type="password"  className={`${theme} block rounded-lg px-2.5 pb-2.5 pt-4 w-full text-sm    border ${border}  focus:outline-none focus:ring-0 focus:border-blue-600 peer`} placeholder=" "
                        value={confirmpassword } onChange={(e)=>setconfirmpassword(e.target.value)}
                        />
                        <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">confirm password</label>
                    </div>
                    }

                    {currentpassword && newpassword && confirmpassword ?
                        <button className="bg-blue-500 text-white px-3 py-1 text-sm rounded-full my-2">update</button> :
                        <button className="bg-blue-300 text-white px-3 py-1 text-sm rounded-full my-2" disabled>update</button>
                    }
                </form>
            </div>
        </div>
        <SideNav2/>
    </div>
  )
}
