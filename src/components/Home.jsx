import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import {AiOutlineComment, AiOutlineHome, AiOutlineLike} from 'react-icons/ai';
import { HiDotsVertical } from 'react-icons/hi';
import {BsDot} from 'react-icons/bs'
import Posts from "./Posts";
export default function Home() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-gray-100 ">
        <Navbar/>
        <div className="w-full h-full flex  mt-2">
            <div className="hidden md:block w-[25%] h-full">
                <div className="bg-white p-2 w-[90%] mx-auto border-[1px] border-gray-300 rounded-lg">
                    <div className="">
                        <ul className="my-2">
                            <li className="flex items-center navlink-active">
                                <AiOutlineHome className="mr-1"/>
                                <Link className="">Home</Link>
                            </li>
                            <li className="flex items-center navlink">
                                <AiOutlineHome className="mr-1"/>
                                <Link className="">Home</Link>
                            </li>
                            <li className="flex items-center navlink">
                                <AiOutlineHome className="mr-1"/>
                                <Link className="">Home</Link>
                            </li>
                            <li className="flex items-center navlink">
                                <AiOutlineHome className="mr-1"/>
                                <Link className="">Home</Link>
                            </li>
                            <li className="flex items-center navlink">
                                <AiOutlineHome className="mr-1"/>
                                <Link className="">Home</Link>
                            </li>
                        </ul>
                        <hr />
                        <ul className="my-2">
                            <li className="flex items-center navlink">
                                <AiOutlineHome className="mr-1"/>
                                <Link className="">Home</Link>
                            </li>
                            <li className="flex items-center navlink">
                                <AiOutlineHome className="mr-1"/>
                                <Link className="">Home</Link>
                            </li>
                            <li className="flex items-center navlink">
                                <AiOutlineHome className="mr-1"/>
                                <Link className="">Home</Link>
                            </li>
                            <li className="flex items-center navlink">
                                <AiOutlineHome className="mr-1"/>
                                <Link className="">Home</Link>
                            </li>
                            <li className="flex items-center navlink">
                                <AiOutlineHome className="mr-1"/>
                                <Link className="">Home</Link>
                            </li>
                        </ul>
                    </div>
                   

                </div>
            </div>
            <div className="w-full md:w-[75%] lg:w-[50%] max-h-full overflow-y-auto mb-16">
                <Posts/>
            </div>
            <div className="hidden lg:block w-[25%]">
                <div className="w-[90%] mx-auto bg-white p-2 border-[1px] border-gray-300 rounded-lg">
                    <div className="flex justify-between items-center p-2">
                        <p className="text-gray-700 font-semibold">Suggestions</p>
                        <Link>see all</Link>
                    </div>
                    <div className=" p-2">
                        <hr/>
                        {[1,2,3,4,5].map((n)=>(
                            <div key={n} className="flex justify-between items-center my-3">
                                <div className="flex items-center text-gray-700">
                                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                                    <p className="ml-2">username</p>
                                </div>
                                <Link className="text-sm text-blue-600">follow</Link>
                            </div>
                        ))}
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
