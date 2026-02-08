import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const ProductFeaturePage = () => {

  const sectionRef = useRef(null)
  const partOneRef = useRef(null)
  const partTwoRef = useRef(null)

  useGSAP(() => {
    const tlone = gsap.timeline({
      scrollTrigger: {
        trigger: partOneRef.current,
        start: "top 80%",
        end: "bottom 20%",
      }
    })

    tlone.from(".title", {
      autoAlpha: 0,
      y: 50,
      duration: 0.6,
      ease: "power2.out",
    })
      .from(".img", {
        autoAlpha: 0,
        y: 50,
        duration: 0.6,
        ease: "power2.out",
      })

      .from(".para1", {
        autoAlpha: 0,
        y: 50,
        duration: 0.6,
        ease: "power2.out",
      })

    const tltwo = gsap.timeline({
      scrollTrigger: {
        trigger: partTwoRef.current,
        start: "top 60%",
        end: "bottom 20%",
      }
    })

    tltwo.from(".para2", {
      autoAlpha: 0,
      y: 50,
      duration: 0.6,
      ease: "power2.out"
    })

  }, { scope: sectionRef })

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Desktop: draw left to right
    mm.add("(min-width: 768px)", () => {
      gsap.from(".line-horizontal", {
        scaleX: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".line-horizontal",
          start: "top 75%",
          once: true,
          // markers: true,
        }
      });
    });

    // Mobile: draw top to bottom
    mm.add("(max-width: 767px)", () => {
      gsap.from(".line-vertical", {
        scaleY: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".line-vertical",
          start: "top 85%",
          once: true,
          // markers: true,
        }
      })

      gsap.from(".line-horizontal span", {
        autoAlpha: 0,
        // scale: 0,
        duration: 0.5,
        delay: 0.7,
      });

      gsap.from(".line-vertical span", {
        autoAlpha: 0,
        // scale: 0,
        duration: 0.5,
        delay: 0.7,
      });

    });

    return () => mm.revert();
  });


  return (
    <div ref={sectionRef} className='bg-gray-100 overflow-hidden'>
      <h1 className='title text-[38px] md:text-6xl lg:text-7xl xl:text-8xl font-medium text-black tracking-tighter text-center pt-25 lg:pt-35 xl:pt-45'>Unheard-of sound.</h1>
      <div ref={partOneRef} className='w-[87.5%] 2xl:w-[75%] max-w-[1600px] mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 mx-auto gap-10 md:gap-0 xl:gap-0 mt-10 md:mt-15 lg:mt-20'>
          <div className='img overflow-clip'>
            <picture>
              <source media="(max-width:480px)" srcSet="/images/anc/anc_airpod_max_lifestyle_small_2x.jpg 2x" />
              <source media="(min-width:481px)" srcSet="/images/anc/anc_airpod_max_lifestyle_large.jpg 2x" />
              <img src="/images/anc/anc_airpod_max_lifestyle_large.jpg 2x" className='w-full sm:w-[734px] h-[400px] md:h-[550px] lg:h-[520px] xl:h-[850px] object-cover scale-110' alt="" />
            </picture>
          </div>
          <div className='para1 flex flex-col justify-start md:justify-center md:ms-[50px] xl:ms-[70px]'>
            <div className="h-11 xl:h-[60px] mb-3 sm:mb-[18px]">
              <svg className="anc-detail-icon-anc max-h-full fill-current" viewBox="0 0 31 39"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m26.06 22.7c1.78-2.5 2.71-5.52 2.71-8.74.01-7.7-5.95-13.96-13.28-13.96-3.42 0-6.67 1.38-9.17 3.88-2.66 2.67-4.12 6.26-4.1 10.11 0 3.18.96 6.2 2.78 8.72.32.45.95.55 1.4.23s.55-.95.23-1.4c-1.57-2.17-2.4-4.78-2.4-7.55-.01-3.31 1.23-6.4 3.52-8.69 2.11-2.12 4.87-3.29 7.75-3.29 6.23 0 11.29 5.37 11.29 11.96 0 2.8-.81 5.43-2.34 7.58-.32.45-.21 1.07.23 1.39.18.12.38.19.58.19.31 0 .62-.15.82-.42zm.61 16.3h-22.34c-2.87 0-4.33-1.08-4.33-3.21 0-5.36 6.23-11.1 15.5-11.1s15.5 5.74 15.5 11.1c0 2.13-1.46 3.21-4.33 3.21zm-11.17-17.44c-4.2 0-7.49-3.56-7.49-8.09s3.36-7.9 7.49-7.9 7.49 3.54 7.49 7.9-3.29 8.09-7.49 8.09z">
                </path>
              </svg>
            </div>
            <p className='text-gray-500 font-semibold text-[15.5px] md:text-[17px] lg:text-[19px]'><span className='font-medium text-black'>Pro‑level Active Noise Cancellation. </span>With up to 2x more noise cancelled,1 pro‑level Active Noise Cancellation counters external sound with equal anti‑noise. With control over what you hear — and don’t hear — you can immerse yourself in music and podcasts, or simply stay focused, like never before.</p>
          </div>
        </div>
      </div>

      <div ref={partTwoRef} className='pt-15 lg:pt-10 w-full flex flex-col md:flex-row'>
        {/* CONTENT WRAPPER (centered) */}
        <div className="relative mx-auto md:mx-0 w-[87.5%] md:max-w-[38.5%] 2xl:max-w-[26.5%] md:ms-auto">
          {/* <div className="flex flex-col md:flex-row gap-15"> */}
          <div className="para2 flex flex-col justify-start lg:justify-center md:mt-[65%] lg:mt-[50%] 2xl:mt-[45%]">
            <div className="h-11 mb-3 sm:mb-[18px]">
              <svg className="anc-detail-icon-transparency max-h-full fill-current" viewBox="0 0 31 39.61"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m26.33 23.73c.07-.07.13-.15.19-.23.05-.08.1-.17.14-.26.03-.09.06-.18.08-.28s.03-.2.03-.29c0-.4-.16-.78-.44-1.06-.56-.56-1.56-.56-2.12 0-.28.28-.44.66-.44 1.06 0 .09 0 .19.03.29.02.1.05.19.09.28.03.09.08.18.14.26.05.08.11.16.18.23.28.28.67.44 1.06.44s.78-.16 1.06-.44zm1.39-6.19c.76 0 1.41-.57 1.49-1.34.09-.83-.51-1.56-1.34-1.65-.82-.08-1.56.52-1.64 1.34-.09.83.51 1.56 1.34 1.65zm-24.45 0s.1-.01.16-.01c.82-.09 1.42-.83 1.33-1.65-.08-.82-.82-1.42-1.65-1.34-.82.09-1.42.83-1.33 1.66.08.76.73 1.34 1.49 1.34zm23.4-6.98c.2 0 .41-.04.6-.13.76-.33 1.11-1.22.77-1.97-.33-.76-1.21-1.11-1.97-.78-.76.34-1.11 1.22-.77 1.98.24.56.79.9 1.37.9zm-22.37-.01c.58 0 1.13-.33 1.38-.9.33-.76 0-1.64-.77-1.97-.76-.34-1.64 0-1.98.77-.33.75 0 1.64.77 1.97.2.09.4.13.6.13zm17.9-5.44c.48 0 .95-.23 1.24-.65.47-.68.29-1.62-.39-2.09s-1.61-.29-2.08.39c-.48.68-.3 1.62.38 2.09.26.17.56.26.85.26zm-13.41 0c.29 0 .59-.09.85-.27.68-.47.85-1.4.38-2.1-.47-.68-1.4-.85-2.09-.38-.68.47-.85 1.41-.38 2.09.29.42.76.65 1.24.65zm6.71-2.1c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.49.67 1.51 1.5 1.51zm-9.42 21.13c.1-.02.19-.05.28-.09.09-.03.18-.08.26-.14.08-.05.16-.11.23-.18s.13-.15.18-.23c.06-.08.1-.17.14-.26s.07-.18.09-.28.03-.19.03-.29c0-.4-.16-.78-.44-1.06-.56-.56-1.57-.56-2.12 0-.28.28-.44.66-.44 1.06 0 .1 0 .19.03.29 0 .1.04.19.08.28s.09.18.14.26.12.16.19.23c.28.28.66.44 1.06.44.1 0 .19-.01.29-.03zm20.59 15.47h-22.34c-2.87 0-4.33-1.08-4.33-3.21 0-5.36 6.23-11.1 15.5-11.1s15.5 5.74 15.5 11.1c0 2.13-1.46 3.21-4.33 3.21zm-11.17-17.44c-4.2 0-7.49-3.56-7.49-8.09s3.36-7.9 7.49-7.9 7.49 3.54 7.49 7.9-3.29 8.09-7.49 8.09z">
                </path>
              </svg>
            </div>
            <p className='text-gray-500 font-semibold text-[15.5px] lg:text-[19px]'><span className='font-medium text-black'>Transparency mode.</span> Press the noise control button to switch to Transparency mode, which lets outside sound in so you can interact naturally with your surroundings.</p>
          </div>
          {/* </div> */}

          {/* Desktop line */}
          <div className="line line-horizontal hidden md:block absolute top-[31.5%] xl:top-[29%] 2xl:top-[28%] h-[0.2px] md:w-[calc(83vw-38.5%)] lg:w-[calc(76vw-38.5%)] xl:w-[calc(80vw-38.5%)] 2xl:w-[calc(50vw-26.5%)] bg-gray-500 origin-left">
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-500" />
          </div>

          {/* Mobile line */}
          <div className="line line-vertical md:hidden z-40 absolute left-[60%] top-full -translate-x-1/2 w-[0.2px] h-42 bg-gray-500 origin-top">
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-500 rounded-full" />
          </div>
        </div>

        {/* IMAGE WRAPPER */}
        <div className="ms-auto md:ms-0 w-[89%] md:w-[55%] 2xl:w-[55%] overflow-clip pt-15">
          <picture>
            <source
              media="(max-width:480px)"
              srcSet="/images/anc/anc_airpod_max_close_up_small_2x.png 2x"
            />
            <source
              media="(min-width:481px)"
              srcSet="/images/anc/anc_airpod_max_close_up_large.png 2x"
            />
            <img
              src="/images/anc/anc_airpod_max_close_up_large.png"
              className="w-full object-cover object-left h-[440px] md:h-[500px] lg:h-[500px] xl:h-[800px] 2xl:h-[900px]"
              alt=""
            />
          </picture>
        </div>

      </div>

    </div>
  )
}

export default ProductFeaturePage

