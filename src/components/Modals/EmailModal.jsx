import { useContext, useState } from 'react'
import { ThemeContext } from '../../Contexts/ThemeContext';
import { AiOutlineClose, AiOutlineInfoCircle } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';
export default function EmailModal({ setemail_modal }) {
    const {theme,border}=useContext(ThemeContext);
    const [email,setemail]=useState("");
    const [emailerror,setemailerror]=useState(false);
    const [emailsuccess,setemailsuccess]=useState(false);
    const [msg,setmsg]=useState();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(email){
            if(email!== "user@gmail.com"){
                setemailerror(true);
                setemailsuccess(false);
                setmsg(`email "${email}" is taken`);
            }else{
                setemailerror(false);
                setemailsuccess(true);
                setmsg("email updated");
            }
        }else{
            setemailsuccess(false);
            setemailerror(false);
        }
    }
  return (
    <div className={`fixed w-full h-screen top-0 left-0 z-10 flex justify-center items-center bg-black/80`}>
    <div className={`${theme} w-full md:w-[60%] xl:w-[40%] mx-auto h-full md:h-[500px] md:border ${border} rounded-lg`}>
        <div className={`flex items-center border-b ${border} p-3`}>
            <AiOutlineClose onClick={()=>setemail_modal(false)}  className="w-6 h-6 mr-2"/>
            <p>Email settings</p>
        </div>
        <form action="" className="p-4 lg:w-[80%] mx-auto" onSubmit={handleSubmit}>
           {emailerror && 
            <div className="relative mb-2 ">
                <input type="email" id="floating_filled" className={`${theme} block rounded-lg px-2.5 pb-2.5 pt-4 w-full text-sm    border border-red-500  focus:outline-none focus:ring-0 focus:border-red-500 peer`} placeholder=" " autoFocus
                value={email } onChange={(e)=>setemail(e.target.value)}
                />
                <label className="absolute text-sm text-red-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-red-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">email</label>
                <div className="flex items-center py-1" >
                    <span><AiOutlineInfoCircle className="w-5 h-5 text-red-500 mr-1"/></span>
                    <p className="text-sm text-red-500">{msg}</p>
                </div>
                
            </div>}
            
            
            {emailsuccess && 
            <div className="relative mb-2 ">
                <input type="email" id="floating_filled" className={`${theme} block rounded-lg px-2.5 pb-2.5 pt-4 w-full text-sm    border border-green-500  focus:outline-none focus:ring-0 focus:border-green-500 peer`} placeholder=" " autoFocus
                value={email } onChange={(e)=>setemail(e.target.value)}
                />
                <label className="absolute text-sm text-green-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-green-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">email</label>
                <div className="flex items-center py-1" >
                    <span><TiTick className="w-5 h-5 text-green-500 mr-1"/></span>
                    <p className="text-sm text-green-500">{msg}</p>
                </div>
            </div>
            }
            {!emailerror && !emailsuccess && 
            <div className="relative mb-2 ">
                <input type="email" id="floating_filled" className={`${theme} block rounded-lg px-2.5 pb-2.5 pt-4 w-full text-sm    border ${border}  focus:outline-none focus:ring-0 focus:border-blue-600 peer`} placeholder=" " autoFocus
                value={email } onChange={(e)=>setemail(e.target.value)}
                />
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">email</label>
            </div>
            }

            {email &&
            <button className="bg-blue-500 text-white px-3 py-1 text-sm rounded-full my-2">update</button>
            }
        </form>
    </div>
</div>
  )
}
