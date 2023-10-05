
import SideNav1 from "./Shared/SideNav1";
import SideNav2 from "./Shared/SideNav2";
import MainDiv from "./Shared/MainDiv";


import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";

import MobileNav from "./Shared/MobileNav";

export default function Home() {
    const {theme,border,isDark,setTheme}=useContext(ThemeContext)
  return (
    <div className={`${theme} wrapper`}>
        <SideNav1/>
        <MainDiv/>
        <SideNav2/>
        <MobileNav/>
    </div>
  )
}
