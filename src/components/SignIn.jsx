import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Contexts/ThemeContext";
import { AiOutlineInfoCircle } from "react-icons/ai";
export default function Signin() {
    const {theme,border,isDark}=useContext(ThemeContext);
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const [usernameerror,setusernameerror]=useState(false);
    const [passworderror,setpassworderror]=useState(false);
    const [msg,setmsg]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(username!== "chris"){
            setusernameerror(true);
            setpassworderror(false);
            setmsg("invalid username");
        }else{
            console.log(username);
            setusernameerror(false);
            if(password !== "12345678"){
                setpassworderror(true);
                setusernameerror(false);
                setmsg("invalid password");
            }else{
                console.log(password);
                setpassworderror(false);
                setusernameerror(false);
                setusername("");
                setpassword("");
            }
        }
        
    }
  return (
    <div className={`fixed top-0 left-0 w-full h-full ${theme}`}>
        <div className="w-full mt-12">
            <form action="" className="w-[80%] lg:w-[30%] mx-auto p-4 rounded-lg " onSubmit={handleSubmit} >
                <div className="mb-6">
                    <p className="text-2xl font-semibold mb-2">Welcome to <span  className="text-blue-500">Social</span> </p>
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus voluptatibus facilis voluptate?</p>
                </div>
                {usernameerror ?
                <div className="relative mb-2 ">
                    <input type="text" id="floating_filled" className={`${theme} block rounded-lg px-2.5 pb-2.5 pt-4 w-full text-sm    border border-red-500  focus:outline-none focus:ring-0 focus:border-red-500 peer`} placeholder=" " autoFocus
                    value={username } onChange={(e)=>setusername(e.target.value)}
                    />
                    <label className="absolute text-sm text-red-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-red-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">username</label>
                    <div className="flex items-center py-1" >
                        <span><AiOutlineInfoCircle className="w-5 h-5 text-red-500 mr-1"/></span>
                        <p className="text-sm text-red-500">{msg}</p>
                    </div>
                    
                </div> : 
                    <div className="relative mb-2 ">
                        <input type="text" id="floating_filled" className={`${theme} block rounded-lg px-2.5 pb-2.5 pt-4 w-full text-sm    border ${border}  focus:outline-none focus:ring-0 focus:border-blue-600 peer`} placeholder=" " autoFocus
                        value={username } onChange={(e)=>setusername(e.target.value)} autoComplete="off"
                        />
                        <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">username</label>
                    </div>
                }

                
                {passworderror ?
                <div className="relative mb-2 ">
                    <input type="text" id="floating_filled" className={`${theme} block rounded-lg px-2.5 pb-2.5 pt-4 w-full text-sm    border border-red-500  focus:outline-none focus:ring-0 focus:border-red-500 peer`} placeholder=" " 
                    value={password } onChange={(e)=>setpassword(e.target.value)}
                    />
                    <label className="absolute text-sm text-red-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-red-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">password</label>
                    <div className="flex items-center py-1" >
                        <span><AiOutlineInfoCircle className="w-5 h-5 text-red-500 mr-1"/></span>
                        <p className="text-sm text-red-500">{msg}</p>
                    </div>
                    
                </div> : 
                    <div className="relative mb-2 ">
                        <input type="text" id="floating_filled" className={`${theme} block rounded-lg px-2.5 pb-2.5 pt-4 w-full text-sm    border ${border}  focus:outline-none focus:ring-0 focus:border-blue-600 peer`} placeholder=" " 
                        value={password } onChange={(e)=>setpassword(e.target.value)} autoComplete="off"
                        />
                        <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">password</label>
                    </div>
                }

                <div className="my-1">
                    <Link className="text-sm text-blue-600">forgot password?</Link>
                </div>
                {username && password ?
                    <div className="my-3">
                         <button className={`font-semibold rounded-xl p-2 w-full ${isDark ? "bg-white text-black":"bg-blue-500 text-white"}`}>sign in</button>
                     </div> :
                     <div className="my-3">
                        <button className={`p-2 font-semibold w-full rounded-xl ${isDark ? "bg-[#333]/60 text-[#eee]/20" :"bg-blue-500/40 text-white"}`} disabled>sign in</button>
                    </div>
                }
                <div className={` text-sm my-2`}>
                    <p>Dont have an account? <Link to="/signup" className="text-blue-500">Sign up</Link></p>
                </div>
            </form>
        </div>
        
    </div>
  )
}
