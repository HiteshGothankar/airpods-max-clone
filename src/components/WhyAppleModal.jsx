import gsap from 'gsap';
import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';

const WhyAppleModal = ({ data, onOpen, onClose }) => {

  const WhyAppleModalRef = useRef(null);

  useEffect(() => {
    if (!onOpen || !WhyAppleModalRef.current) return;

    gsap.fromTo(
      WhyAppleModalRef.current,
      {
        autoAlpha: 0,
        // scale: 0.8,
      },
      {
        autoAlpha: 1,
        // scale: 1,
        duration: 0.8,
        ease: "power3.out",
        clearProps: "opacity,visibility,transform", 
      }
    );
  }, [onOpen]);



  useEffect(() => {
    if (onOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [onOpen]);

  if (!onOpen) return null;

  return (
    <div
      className={`fixed block top-0 left-0 w-full h-full bg-black/50 backdrop-blur-lg z-50 overflow-y-scroll ${onOpen ? "block" : "hidden"}`}>
      <div className="flex items-center min-h-full">
        <div className='mx-auto py-15'>

          {/* section */}
          <div ref={WhyAppleModalRef} className='relative will-change-transform w-[92%] md:w-[60%] xl:w-[55%] bg-white flex flex-col items-start mx-auto p-6 lg:p-10 rounded-3xl'>
            {/* Close Button */}
            <div onClick={onClose} className='flex justify-center items-center absolute top-5 right-4 bg-black rounded-full size-9 p-2.5 z-20 cursor-pointer'>
              <button>
                <img src="./white-close.png" alt="" />
              </button>
            </div>
            {/* content */}
            <div className='my-5 flex flex-col gap-3'>
              <h3 className='text-left font-medium'>{data.shortTitle}</h3>
              <h2 className="modal_header z-10 text-[28px] md:text-[31px] lg:text-[38px] xl:text-[41px] leading-[1.15] tracking-tight font-semibold">
                {data.title}
              </h2>

              {data.desc?.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[#252525] mt-3 z-10 text-[15px] md:text-[18px] lg:text-[19px] xl:text-[20px] sm:tracking-tight"
                >
                  {paragraph}
                </p>
              ))}

              {
                data.img && (
                  <div className='mt-5 flex justify-center mx-auto'>
                    <img src={data.img} className='w-[350px] md:w-[370px] lg:w-[440px] xl:w-[600px] h-auto object-contain' alt="" />
                  </div>
                )
              }

              <button className="text-sm lg:text-[15px] text-left text-blue-500 mt-3 flex items-center gap-2 group">
                {data.linkText}
                <span className="text-lg transition-transform group-hover:translate-x-1 duration-200">&gt;</span>
              </button>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default WhyAppleModal