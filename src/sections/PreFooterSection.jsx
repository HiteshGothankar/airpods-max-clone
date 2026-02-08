import { useGSAP } from '@gsap/react'
import gsap, { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const PreFooterSection = () => {

  const preFooterRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: preFooterRef.current,
        start: "top 80%",
      }
    })

    tl.from(".column", {
      autoAlpha: 0,
      y: 40,
      duration: 1,
      stagger: 0.3,
    })
  }, { scope: preFooterRef })

  return (
    <div ref={preFooterRef} className='w-[87.5%] mx-auto max-w-[1680px] overflow-hidden py-20 xl:py-20'>
      <div className='w-full lg:w-[70%]'>
        <h1 className='font-semibold text-3xl md:text-5xl tracking-tighter mb-3'>AirPods</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-0'>
          <div className='column'>
            <h3 className='text-sm md:text-[16px] text-gray-500 my-3'>Explore AirPods</h3>
            <ul className='space-y-1 text-[20px] font-medium'>
              <li>Explore All AirPods</li>
              <li>AirPods 4</li>
              <li>AirPods Pro 3</li>
              <li>AirPods Max</li>
              <li className='text-sm md:text-[16px] text-gray-500 md:text-gray-700 mt-4'>Compare AirPods</li>
            </ul>
          </div>

          <div className='column'>
            <h3 className='text-sm md:text-[16px] text-gray-500 my-2'>Shop AirPods</h3>
            <ul className='text-sm md:text-[16px] text-gray-800 space-y-1.5 font-medium'>
              <li>Shop AirPods</li>
              <li>AirPods Accessories</li>
            </ul>
          </div>

          <div className='column'>
            <h3 className='text-sm md:text-[16px] text-gray-500 my-2'>More from AirPods</h3>
            <ul className='text-sm md:text-[16px] text-gray-800 space-y-1.5 font-medium'>
              <li>AirPods Support</li>
              <li>AppleCare</li>
              <li>Apple Music</li>
              <li>Apple Fitness+</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PreFooterSection