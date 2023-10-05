import { Link } from "react-router-dom"
import rolex from "../../assets/images/rolex.jpg"
import { useContext } from "react"
import { ThemeContext } from "../../Contexts/ThemeContext"
export default function SideNav2() {
  const {theme,border,isDark}=useContext(ThemeContext);
  return (
    <div className={`hidden lg:block border-l ${theme} ${border} sticky top-0 left-0 w-[30%] h-full `}>
        <div className="h-full overflow-y-scroll scrollbar-hide">
          <div className={`p-4 flex justify-between items-center border-b ${theme} ${border} pb-2 sticky top-0 z-10`}>
            <p className="font-semibold">suggestions</p>
            <Link className="text-sm">see all</Link>
          </div>
          <div className="p-4">
          {[...Array(12)].map((n,i)=>(
            <div key={i} className={`flex justify-between ${theme} items-start my-3`}>
              <div className="flex items-start ">
                <img src={rolex} alt="" className="avatar-xs mr-2" />
                <div className="text-sm">
                  <p className="font-semibold">username</p>
                  <p className={`text-xs border-b ${border} pb-2`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quidem quia accusantium.</p>
                </div> 
              </div>
              <Link className={`text-sm ${isDark ? "text-black bg-white font-semibold" : "text-blue-500 border border-blue-500"} px-3 py-1 rounded-full`}>follow</Link>
            </div>
          ))}
          </div>
        </div>
    </div>
  )
}
