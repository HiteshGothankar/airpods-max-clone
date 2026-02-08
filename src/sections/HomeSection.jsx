import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const HomePage = () => {
    const heroRef = useRef(null)
    const videoRef = useRef(null)
    // const scrollTriggerInstance = useRef(null)

    useEffect(() => {
        gsap.to(heroRef.current, {
            opacity: 1,
            duration: 2.5,
            ease: 'power1.out',
            delay: 0.3
        })

        let isPlaying = false

        const scrollTriggerInstance = ScrollTrigger.create({
            trigger: heroRef.current,
            start: 'top 80%',
            end: 'bottom 20%',

            onEnter: playVideo,
            onEnterBack: playVideo,
            onLeave: pauseVideo,
            onLeaveBack: pauseVideo,
        })

        function playVideo() {
            const video = videoRef.current
            if (!video || isPlaying) return

            video.loop = true
            video.muted = true
            video.playsInline = true

            video.play().catch(() => { })
            isPlaying = true
        }

        function pauseVideo() {
            const video = videoRef.current
            if (!video || !isPlaying) return

            video.pause()
            isPlaying = false
        }


        return () => {
            scrollTriggerInstance.kill();
        };
    }, [])

    return (
        <>
            <section ref={heroRef} className="hero-section opacity-0 relative overflow-x-hidden">
                <div className="h-screen overflow-hidden">
                    <video ref={videoRef} className="w-full h-full object-cover" muted playsInline preload="auto">
                        <source src="/videos/xsmall_2x.mp4" media="(max-width: 768px)" type="video/mp4" />
                        <source src="/videos/hero.mp4" media="(min-width: 769px)" type="video/mp4" />
                    </video>
                </div>

                <div className="absolute bottom-0 w-full">
                    <div className="absolute top-0 w-full h-full bg-white/50 backdrop-blur-[20px] mask-[linear-gradient(180deg,transparent,black_100%)]" />

                    <div className='w-[87.5%] max-w-[1680px] flex flex-col xl:flex-row justify-center xl:justify-between items-center gap-10 lg:gap-10 pb-5 xl:pb-9 mx-auto'>
                        <div className='z-10'>
                            <h1 className="text-[24px] xl:text-3xl text-center xl:text-left font-medium">AirPods Max</h1>
                            <h2 className="tracking-tighter text-[35px] md:text-[40px] xl:text-[69px] text-center xl:text-left font-medium">Symphonic boom.</h2>
                        </div>
                        <div className='z-10 bg-[rgba(232,232,232,.5)] backdrop-blur-lg rounded-full w-full xl:w-auto p-3 xl:mt-15'>
                            <div className="flex justify-between items-center pl-2 lg:pl-3 xl:gap-5">
                                <h1 className="text-[15px] lg:text-[17px] tracking-tight font-medium">₹&nbsp;59900.00*</h1>
                                <button className="bg-blue-600 px-5 py-2 rounded-full text-white text-sm lg:text-base font-medium cursor-pointer">Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage