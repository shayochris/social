
import SideNav1 from "./Shared/SideNav1";
import SideNav2 from "./Shared/SideNav2";
import MainDiv from "./Shared/MainDiv";
import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import MobileNav from "./Shared/MobileNav";
export default function Home() {
    const {theme}=useContext(ThemeContext)
  return (

    <div className={`fixed top-0 left-0  h-screen w-full ${theme}`}>
        <div className="w-full h-full flex ">
            <SideNav1/>
            <MainDiv/>
            <SideNav2/>
        </div>
    </div>
  )
}
