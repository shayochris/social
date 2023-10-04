import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import rolex from "../../assets/images/rolex.jpg"
import { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";
export default function SideNav1() {
  const {theme,border}=useContext(ThemeContext);
  return (
    <div className={`hidden md:block border-r ${theme} ${border} sticky top-0 left-0 w-[30%] h-full`}>
        <div className={` h-full py-2 px-6`}>
          <p className="pb-2 text-blue-500">Logo</p>
          <div className="p-2 ">
            <img src={rolex} alt="" className="avatar-md" />
            <p>username</p>
            <p className="text-sm">@username</p>
          </div>
          
          <ul>
            <li className="">
                <Link to="/" className="hover:text-blue-600 p-2 block">
                  <span className="mr-2">icon</span>
                  <span className="font-semibold">Home</span>
                </Link>
            </li>
            <li className="">
                <Link to="/profile" className="hover:text-blue-600 p-2 block">
                  <span className="mr-2">icon</span>
                  <span className="font-semibold">Profile</span>
                </Link>
            </li>
            <li className="">
                <Link className="hover:text-blue-600 p-2 block">
                  <span className="mr-2">icon</span>
                  <span className="font-semibold">Home</span>
                </Link>
            </li>
            <li className="">
                <Link className="hover:text-blue-600 p-2 block">
                  <span className="mr-2">icon</span>
                  <span className="font-semibold">Home</span>
                </Link>
            </li>
            <li className="">
                <Link className="hover:text-blue-600 p-2 block">
                  <span className="mr-2">icon</span>
                  <span className="font-semibold">Home</span>
                </Link>
            </li>
          </ul>
        </div>
    </div>
  )
}
