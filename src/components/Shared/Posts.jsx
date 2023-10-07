import {AiOutlineComment,  AiOutlineLike} from 'react-icons/ai';
import { HiDotsVertical } from 'react-icons/hi';
import rolex from '../../assets/images/rolex.jpg'
import { BsDot } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../Contexts/ThemeContext';
export default function Posts() {
    const {theme,border,isDark}=useContext(ThemeContext);
  return (
   <div>
    {
        [...Array(3)].map((n,i)=>(
        <div key={i} className={`${theme} border-b ${border} p-2  w-full`}>
            <div className='w-[90%] sm:w-[70%] 2xl:w-[60%] mx-auto'>
                <div className="flex ">
                    <img src={rolex} alt="" className="avatar-sm mr-2" />
                    <div>
                        <div className='flex items-center'>
                            <Link to="/profile">
                                <p className='font-semibold'>username</p>
                            </Link>
                            <BsDot className='w-4 h-4'/>
                            <p className='text-gray-500 text-sm'>now</p>
                        </div>
                        <p className="text-sm relative bottom-1">@username</p>
                    </div>  
                </div>
                <div className='text-sm'>
                    <p className='pb-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, eius consectetur eaque cumque officia est repellat voluptates reprehenderit aliquid! Eos velit labore dolorem placeat quidem ab, maiores atque aperiam minus?</p>
                    <div className={`max-h-96 mt-1 rounded-lg overflow-hidden ${isDark ? "bg-[#333]" :"bg-[#ddd]"}`}>
                        <img src={rolex} alt="" className="w-full h-full object-cover" />
                    </div>
                    
                    <div className={`my-2 flex items-center ${isDark ? "text-gray-500" : "text-gray-600"}`}>
                        <span className='mr-4 flex items-center'>
                            <AiOutlineLike className= "w-6 h-6"/>1234
                        </span>
                        <span className='mr-4 flex items-center '>
                            <Link to={`/comments/${i}`} className='flex items-center'>
                                <AiOutlineComment className='w-6 h-6'/>1234
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        ))
    }
   </div>
  )
}
