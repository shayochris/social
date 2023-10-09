import { useState } from 'react'
import rolex from "../assets/images/rolex.jpg"
import sneaker from "../assets/images/sneaker.jpg"
import jordan from "../assets/images/jordan.jpg"
import headset from "../assets/images/headset.jpg"
import { BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs'
export default function Carousel() {
    const images=[rolex,sneaker,jordan,headset];
    const [slide,setSlide]=useState(0);
    const nextSlide=()=>{
       setSlide(prev=>{
            return prev === images.length-1 ? 0 : prev + 1;
       })
        
    }
    const prevSlide=()=>{
       setSlide(prev=>{
            return prev === 0 ? images.length-1 : prev-1
       })
    }
  return (

        <div className="h-full w-full mx-auto flex relative rounded-lg">
            <div className="w-full flex justify-between items-center absolute top-[50%] left-0">
                <BsArrowLeftCircleFill onClick={prevSlide} className='text-white w-6 h-6 ml-2'/>
                <BsArrowRightCircleFill onClick={nextSlide} className='text-white w-6 h-6 mr-2'/> 
            </div>
            <p className="absolute top-2 right-2 py-1 px-2 text-xs bg-black/50 rounded-full text-white">{slide+1}/{images.length}</p>
            {images.map((item,idx)=>(
                <img key={idx} src={item} alt="" className={`w-full h-full object-cover ${idx === slide ?"block":"hidden"}`} />
            ))}
            <div className="absolute bottom-3 w-full flex justify-center p-2" >
                {images.map((_,idx)=>{
                    return <button onClick={()=>setSlide(idx)} key={idx} className={`${idx === slide ? "bg-white" :"bg-gray-400"} w-3 h-3 rounded-full mr-1`}></button>
                })}
            </div>
        </div>
  )
}
