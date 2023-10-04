import { createContext,useState } from "react";

export const ThemeContext=createContext();
const ThemeContextProvider = ({ children }) => {
    // localStorage.setItem("dark",JSON.stringify("true"));
    const [isDark,setIsDark]=useState(JSON.parse(localStorage.getItem("dark")));
    const setTheme=(data)=>{
        if(data === "light"){
            setIsDark(false);
            localStorage.removeItem("dark");
        }else{
            setIsDark(true);
            localStorage.setItem("dark","true");
        }
    }
    const theme=isDark ? "bg-black text-gray-200 " : "bg-white text-gray-700 ";
    const border=isDark ? "border-gray-600": "border-gray-300";
    return (
        <ThemeContext.Provider value={{theme,border,isDark,setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}
 
export default ThemeContextProvider;