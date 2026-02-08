import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'
import DetailsModal from '../components/DetailsModal'
import { useState } from 'react'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const ProductDesignPage = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const paraRef = useRef(null)
    const designRef = useRef(null)

    useGSAP(() => {

        gsap.from(titleRef.current, {
            autoAlpha: 0,
            y: 50,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top 80%",
            }
        })

        gsap.from(paraRef.current, {
            autoAlpha: 0,
            y: 50,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
                trigger: paraRef.current,
                start: "top 80%",
            }
        })

    }, { scope: sectionRef })

    useGSAP(() => {

        // initial fixed state
        gsap.set(designRef.current, {
            autoAlpha: 0,
            position: "fixed",
            bottom: "2.25rem",
            left: 0,
            right: 0,
            margin: "auto",
            zIndex: 50,
        })

        /* Defining tweens */
        const showBounce = gsap.to(designRef.current, {
            autoAlpha: 1,
            scale: 1,
            duration: 0.3,
            ease: "back.out(1.7)",
            paused: true,
        })

        const hideTween = gsap.to(designRef.current, {
            autoAlpha: 0,
            scale: 0.8,
            duration: 0.25,
            paused: true,
        })

        /* ScrollTrigger to handle visibility and opacity of design ref */
        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top 90%",
            end: "bottom top",

            onEnter: () => showBounce.restart(),
            onEnterBack: () => showBounce.restart(),

            onLeave: () => hideTween.restart(),
            onLeaveBack: () => hideTween.restart(),
        })

        /* ScrollTrigger to pin position of learn more button */
        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "bottom bottom-=36",

            onEnter: () => {
                gsap.set(designRef.current, {
                    position: "absolute",
                    bottom: "30px",
                })
            },

            onLeaveBack: () => {
                gsap.set(designRef.current, {
                    position: "fixed",
                    bottom: "30px",
                })
            },
        })

        /* resize handling */
        const handleResize = () => ScrollTrigger.refresh()
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }

    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className='relative min-h-screen overflow-hidden mb-15 pb-30 xl:pb-40'>

            <div className='flex flex-col items-center w-[87.5%] max-w-[1600px] mx-auto'>
                <div ref={titleRef} className='title'>
                    <h1 className='text-[38px] md:text-[73px] lg:text-7xl xl:text-8xl 2xl:text-[111px] font-medium text-black tracking-tighter leading-13 md:leading-21 xl:leading-29 text-center pt-25 lg:pt-35 xl:pt-45'>Everything designed in perfect harmony.
                    </h1>
                </div>
                <div className='mt-10 mb-15'>
                    <picture>
                        <source media="(max-width:480px)" srcSet="/images/design/design_airpod_max_small_2x.png 2x" />
                        <source media="(min-width:481px)" srcSet="/images/design/design_airpod_max_large.png 2x" />
                        <img src="/images/design/design_airpod_max_large.png 2x" className='w-full md:w-auto h-[380px] md:h-[750px] lg:h-[780px] xl:h-[1100px] object-cover scale-110' alt="" />
                    </picture>
                </div>
                <div ref={paraRef} className='mx-auto max-w-[650px] xl:max-w-[720px] 2xl:max-w-[900px]'>
                    <p className='text-[19px] md:text-[21px] xl:text-[25px] font-semibold text-gray-500 text-center'>
                        From cushion to canopy, AirPods Max are designed for an uncompromising fit with unequalled comfort that creates the optimal acoustic seal for many different head shapes — fully immersing you in every sound.
                    </p>
                </div>
            </div>

            <div onClick={() => setIsModalOpen(true)} ref={designRef} className='flex justify-between gap-3 items-center cursor-pointer w-max mx-auto bg-gray-100 backdrop-blur-md rounded-full px-3 py-2 md:py-3'>
                <div className='text-black text-[13.5px] md:text-[15px] lg:text-[16px] ps-2 font-semibold'>
                    Dive deeper into design
                </div>
                <div className='bg-blue-500 p-0.5 rounded-full size-9 flex justify-center items-center cursor-pointer'>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M6 12H18M12 6V18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            </path> </g>
                    </svg>
                </div>
            </div>

            {/* Modal */}
            <DetailsModal open={isModalOpen} close={() => setIsModalOpen(false)} />
        </section>
    )
}

export default ProductDesignPage