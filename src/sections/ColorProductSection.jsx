import React from 'react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import ColorCardCarousel from '../components/ColorCardCarousel'

gsap.registerPlugin(ScrollTrigger)

const ColorProduct = () => {

    const containerRef = useRef(null)
    const titleRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                end: "bottom 20%",
            }
        })

        tl.from(titleRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.6,
            delay: 0.3,
        })
    },
        { scope: containerRef }
    )

    return (
        <>
            <section className='highlights-section pb-30 overflow-x-clip'>
                <div ref={containerRef} className='w-[87.5%] max-w-[1680px] mx-auto'>
                    <h2
                        ref={titleRef}
                        className="title text-[32px] md:text-[42px] lg:text-[48px] xl:text-[56px] tracking-tight sm:leading-none sm:tracking-tighter font-semibold pb-12 sm:pb-20">
                        Take a closer look.
                    </h2>
                </div>

                <ColorCardCarousel />
            </section >
        </>
    )
}

export default ColorProduct