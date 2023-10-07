import { useState, useEffect, useContext } from "react";
import { useRef } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import SideNav1 from "./Shared/SideNav1";
import SideNav2 from "./Shared/SideNav2";
import { BiArrowBack } from "react-icons/bi";
import defo from "../assets/images/default-profile.jpg"
import { AiOutlineCamera} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import UsernameModal from "./Modals/UsernameModal";
import EmailModal from "./Modals/EmailModal";
import BioModal from "./Modals/BioModal";
export const ProfileSettings = () => {
    const [username_modal,setusername_modal]=useState(false);
    const [email_modal,setemail_modal]=useState(false);
    const [bio_modal,setbio_modal]=useState(false);
    const {theme,border}=useContext(ThemeContext);
    const navigate=useNavigate();
    const [file, setFile] = useState(null);
    const inputRef = useRef();
    

  useEffect(() => {
    if (file) {
      // Upload the file to your server here
    }
  }, [file]);

  const handleFileUpload = () => {
    const selectedFile = inputRef.current.files[0];
    setFile(selectedFile);
  };
    
  return (
    <div className={`${theme} wrapper`}>
        {username_modal && <UsernameModal setusername_modal={setusername_modal} />}
        {email_modal && <EmailModal setemail_modal={setemail_modal} />}
        {bio_modal && <BioModal setbio_modal={setbio_modal}/>}
        <SideNav1/>
        <div className={`main-wrapper `}>
            <div className={`border-b ${theme} ${border} flex items-center p-2`}>
                <BiArrowBack onClick={()=>navigate(-1)} className="w-5 h-5 mr-2 "/>
                <p className="text-lg font-semibold">Profile Settings</p>
            </div>
            <div className={`p-3 border-b ${border}`}>
                <div className="flex items-center">
                    <div className="avatar-lg bg-gray-500 relative mr-6">
                        <img src={defo} alt="" className="avatar-lg" />
                        <input
                            type="file"
                            ref={inputRef}
                            className="hidden"
                            onChange={handleFileUpload}
                        />
                        <button  onClick={() => inputRef.current.click()} className="absolute bottom-0 left-10 w-8 h-8 bg-blue-500 rounded-full flex justify-center items-center text-white">
                            <AiOutlineCamera className="w-5 h-5"/>
                        </button>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">username</p>
                        <p className=" text-gray-500 text-sm">@nickname</p>
                    </div>
                    
                </div>
                <button onClick={() => inputRef.current.click()} className="text-blue-500 py-2 text-sm">upload cover photo</button>
            </div>
            <div className={`border ${border} rounded-lg m-2`}>
                <div className={`border-b ${border} p-3`}>
                    <p className="text-lg font-semibold">username</p>
                    <div className="flex justify-between items-center">
                    <p className="text-sm">username</p>
                    <button onClick={()=>setusername_modal(true)} className="text-sm text-blue-500">tap to change</button>
                    </div>
                </div>
                <div className={`border-b ${border} p-3`}>
                    <p className="text-lg font-semibold">email</p>
                    <div className="flex justify-between items-center">
                    <p className="text-sm">user@gmail.com</p>
                    <button onClick={()=>setemail_modal(true)} className="text-sm text-blue-500">tap to change</button>
                    </div>
                </div>
                <div className={` p-3`}>
                    <p className="text-lg font-semibold">bio</p>
                    <div className="flex justify-between items-center">
                    <p className="text-sm">Not set</p>
                    <button onClick={()=>setbio_modal(true)} className="text-sm text-blue-500">tap to change</button>
                    </div>
                </div>
            </div>
            
        </div>
     
      <SideNav2/>
    </div>
  );
};



