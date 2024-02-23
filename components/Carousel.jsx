
"use client"
import { faAngleLeft ,faAngleRight , faFolder , faFileCirclePlus , faTrash , faImage} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useState } from "react";
import Image from "next/image";
const Carousel = ({slides}) => {
    let [current, setCurrent] = useState(0);
  
    let previousSlide = () => {
      if (current === 0) setCurrent(slides.length - 1);
      else setCurrent(current - 1);
    };
  
    let nextSlide = () => {
      if (current === slides.length - 1) setCurrent(0);
      else setCurrent(current + 1);
    };
  
    return (
      <div className="overflow-hidden relative w-full h-full">
        <div className={`flex transition ease-out duration-40`}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides?.length > 0 && slides.map((image,index) => (
                <Image  key={index} src={image.link} width={300} height={300} alt="..."/>
           ))}
        </div>
  
        <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
          <button onClick={previousSlide} className='absolute left-0'>
            <FontAwesomeIcon className='text-slate-300'  icon={faAngleLeft} />

          </button>
          <button onClick={nextSlide} className='absolute right-[-10px] z-[999]'>
            <FontAwesomeIcon className='text-slate-500' icon={faAngleRight} />
          </button>
        </div>
  
        <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
          {slides.map((s, i) => {
            return (
              <div
                onClick={() => {
                  setCurrent(i);
                }}
                key={"circle" + i}
                className={`rounded-full w-2 h-2 cursor-pointer  ${
                  i == current ? "bg-slate-500" : "bg-slate-200"
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    );
  }

export default Carousel;
