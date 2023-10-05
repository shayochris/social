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
        <div key={i} className={`${theme} ${border} p-2 border-b w-full`}>
            <div className="flex text-sm sm:w-[80%] 2xl:w-[70%] mx-auto">
                <img src={rolex} alt="" className="avatar-sm mr-2" />
                <div>
                    <div className='flex items-center'>
                        <Link to="/profile">
                            <p className='font-semibold'>username</p>
                        </Link>
                        
                        <BsDot/>
                        <p className='text-gray-500 text-xs'>now</p>
                    </div>
                    <p className='pb-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, eius consectetur eaque cumque officia est repellat voluptates reprehenderit aliquid! Eos velit labore dolorem placeat quidem ab, maiores atque aperiam minus?</p>
                    <div className={`max-h-96 rounded-lg overflow-hidden ${isDark ? "bg-[#333]" :"bg-[#ddd]"}`}>
                        <img src={rolex} alt="" className="w-full h-full object-cover" />
                    </div>
                    
                    <div className={`my-2 flex items-center ${isDark ? "text-gray-500" : "text-gray-600"}`}>
                        <span className='mr-4 flex items-center'>
                            <AiOutlineLike className= "w-6 h-6"/>1234
                        </span>
                        <span className='mr-4 flex items-center '>
                            <AiOutlineComment className='w-6 h-6'/>1234
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
