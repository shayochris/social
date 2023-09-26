import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import {AiOutlineComment, AiOutlineHome, AiOutlineLike} from 'react-icons/ai';
import { HiDotsVertical } from 'react-icons/hi';
import {BsDot} from 'react-icons/bs'
import Posts from "./Posts";
export default function Home() {
  return (
    <div className="w-full h-screen bg-gray-100 overflow-y-auto">
        <Navbar/>
        <div className="w-full h-full flex overflow-y-scroll mt-2">
            <div className="hidden md:block w-[25%] h-full">
                <div className="bg-white p-2 w-[90%] mx-auto border-[1px] border-gray-300">
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
            <div className="w-full md:w-[75%] lg:w-[50%] max-h-full overflow-y-auto">
                <Posts/>
            </div>
            <div className="hidden lg:block w-[25%] bg-red-500">
            </div>
        </div>
    </div>
  )
}
