import {AiOutlineComment,AiOutlineLike} from 'react-icons/ai';
import { HiDotsVertical } from 'react-icons/hi';
import {BsDot} from 'react-icons/bs'
import sausage from '../assets/images/sausage.jpg'
export default function Posts() {
  return (
    <div className='w-full'>
        <div className="bg-white lg:w-[70%] p-2 mx-auto md:border-[1px] border-gray-300 mb-2">
            <div className="flex justify-between items-center py-2">
                <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div className="flex items-center ml-2">
                        <p className='text-md'>username</p>
                        <BsDot/>
                        <p className='text-gray-500 text-sm'>2 min</p>
                    </div>
                </div>
                <HiDotsVertical className="w-5 h-5"/>
            </div>
            <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
                <img src={sausage} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center py-2 text-gray-600 text-sm">
                <div className="flex items-center">
                    <AiOutlineLike className="w-6 h-6"/>
                    <p>123 likes</p>
                </div>
                <BsDot/>
                <div className="flex items-center">
                    <AiOutlineComment className="w-6 h-6"/>
                    <p className="">123 comments</p>
                </div>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos accusantium officia obcaecati.</p>
            </div>
        </div>
    </div>
  )
}
