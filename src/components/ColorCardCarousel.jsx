import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import React, { useEffect, useRef, useState } from "react"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const colorData = [{
    colorName: 'midnight',
    upperColor: "#22252a",
    bottomColor: "#2b3139"
}, {
    colorName: 'starlight',
    upperColor: "#e9e1d5",
    bottomColor: "#ccbeb1"
}, {
    colorName: 'blue',
    upperColor: "#64727d",
    bottomColor: "#91aab5"
}, {
    colorName: 'purple',
    upperColor: "#d9d7df",
    bottomColor: "#afa5bb"
}, {
    colorName: 'orange',
    upperColor: "#ffc19d",
    bottomColor: "#e1a48c"
}]

const ColorCardCarousel = () => {
    const sliderRef = useRef(null)
    const colorbtnRef = useRef(null)
    const sectionRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const [slideSize, setSlideSize] = useState(0)
    const [selectColor, setSelectColor] = useState("midnight")

    const TOTAL_SLIDES = 3

    // slider entrance animation
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "bottom 10%",
            }
        })

        tl.from(sliderRef.current, {
            y: 50,
            opacity: 0,
            duration: 0.6,
            delay: 0.4,
        })
    }, { scope: sectionRef })


    // color buttons timeline animation
    useGSAP(() => {
        gsap.from(".color", {
            scale: 0.6,
            autoAlpha: 0,
            y: 10,
            stagger: 0.08,
            duration: 0.5,
            delay: 0.5,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom-=40",
            }
        });
    }, { scope: sectionRef });




    useEffect(() => {
        const updateSlideSize = () => {
            if (!sliderRef.current) return

            const width = window.innerWidth
            let gapPx = 16 // default gap-4

            if (width < 640) gapPx = 20       // gap-5
            else if (width < 1024) gapPx = 24 // gap-6
            else if (width < 1440) gapPx = 20 // gap-5

            const containerWidth =
                sliderRef.current.parentElement.offsetWidth

            setSlideSize(containerWidth + gapPx)
        }

        updateSlideSize()
        window.addEventListener("resize", updateSlideSize)

        return () => window.removeEventListener("resize", updateSlideSize)
    }, [])

    const slideTo = (index) => {
        if (!sliderRef.current) return
        sliderRef.current.style.transform = `translateX(-${index * slideSize}px)`
    }

    useEffect(() => {
        if (slideSize === 0) return
        slideTo(activeIndex)
    }, [slideSize])


    const handleNext = () => {
        setActiveIndex((prev) => {
            const next = Math.min(prev + 1, TOTAL_SLIDES - 1)
            slideTo(next)
            return next
        })
    }

    const handlePrev = () => {
        setActiveIndex((prev) => {
            const next = Math.max(prev - 1, 0)
            slideTo(next)
            return next
        })
    }

    const changeColor = (colorName) => {
        setSelectColor(colorName)
    }


    // color button Animation
    useGSAP(() => {
        /* Intial State */
        gsap.set(colorbtnRef.current, {
            autoAlpha: 0,
            position: "fixed",
            bottom: "20px",
            left: 0,
            right: 0,
            margin: "auto",
            zIndex: 50,
            scale: 0.8,
        })

        /* Defining tweens */
        const showBounce = gsap.to(colorbtnRef.current, {
            autoAlpha: 1,
            scale: 1,
            duration: 0.3,
            ease: "back.out(1.7)",
            paused: true,
        })

        const hideTween = gsap.to(colorbtnRef.current, {
            autoAlpha: 0,
            scale: 0.8,
            duration: 0.25,
            paused: true,
        })

        /* Handling tweens */
        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top 90%",
            end: "bottom top",

            onEnter: () => showBounce.restart(),
            onEnterBack: () => showBounce.restart(),

            onLeave: () => hideTween.restart(),
            onLeaveBack: () => hideTween.restart(),
        })

        /* Change Positioning */
        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "bottom bottom-=36",

            onEnter: () => {
                gsap.set(colorbtnRef.current, {
                    position: "absolute",
                    bottom: "20px",
                })
            },

            onLeaveBack: () => {
                gsap.set(colorbtnRef.current, {
                    position: "fixed",
                    bottom: "20px",
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
        <div ref={sectionRef} className="colorproduct_swiper overflow-hidden relative pb-30 lg:pb-20">

            <div className="w-[87.5%] max-w-[1680px] mx-auto">
                <div
                    ref={sliderRef}
                    className="airpods-swiper flex gap-5 sm:gap-5 transition-transform duration-1200 ease-out"
                >
                    {/* SLIDE 1 */}
                    <div className="w-full shrink-0">
                        <div className="relative overflow-hidden h-[480px] sm:h-[740px] bg-[rgb(232,232,237)] rounded-[28px]">
                            <img
                                className="absolute inset-0 w-full h-full object-cover md:hidden"
                                src={`./images/colors/bento_1_airpod_max_${selectColor}_xsmall.jpg`}
                                alt=""
                            />
                            <img
                                className="absolute inset-0 hidden md:block w-full h-full object-cover"
                                src={`./images/colors/bento_1_airpod_max_${selectColor}_xlarge.jpg`}
                                alt=""
                            />
                        </div>
                    </div>


                    {/* SLIDE 2 */}
                    <div className="w-full shrink-0 flex flex-col md:flex-row gap-5">
                        {[2, 3].map((n) => (
                            <div
                                key={n}
                                className="relative w-full md:w-1/2 h-[230px] md:h-[740px] bg-[rgb(232,232,237)] rounded-[28px] overflow-hidden"
                            >
                                <img
                                    className="absolute inset-0 w-full h-full object-cover md:hidden"
                                    src={`./images/colors/bento_${n}_airpod_max_${selectColor}_xsmall.jpg`}
                                    alt=""
                                />
                                <img
                                    className="absolute inset-0 hidden md:block w-full h-full object-cover"
                                    src={`./images/colors/bento_${n}_airpod_max_${selectColor}_xlarge.jpg`}
                                    alt=""
                                />
                            </div>
                        ))}
                    </div>

                    {/* SLIDE 3 */}
                    <div className="w-full shrink-0 flex flex-col md:flex-row gap-5">
                        {[4, 5].map((n) => (
                            <div
                                key={n}
                                className="relative w-full md:w-1/2 min-h-[230px] md:min-h-[740px] bg-[rgb(232,232,237)] rounded-[28px] overflow-hidden"
                            >
                                <img
                                    className="absolute inset-0 w-full h-full object-cover md:hidden"
                                    src={`./images/colors/bento_${n}_airpod_max_${selectColor}_xsmall.jpg`}
                                    alt=""
                                />
                                <img
                                    className="absolute inset-0 hidden md:block w-full h-full object-cover"
                                    src={`./images/colors/bento_${n}_airpod_max_${selectColor}_xlarge.jpg`}
                                    alt=""
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* BUTTONS (outside cards) */}
            <div className="w-[87.5%] max-w-[1680px] mx-auto flex justify-center lg:justify-end gap-4 mt-8 z-40 lg:z-60">
                <button
                    onClick={handlePrev}
                    className="cursor-pointer z-40 lg:z-60 bg-gray-200 p-3 size-9 rounded-full"
                >
                    <img src="./images/icon_chevron_large.svg" className={`w-full h-full -scale-x-100 ${activeIndex === 0 ? "opacity-50" : ""}`} alt="" />
                </button>

                <button
                    onClick={handleNext}
                    className="cursor-pointer z-40 lg:z-60 bg-gray-200 p-3 size-9 rounded-full"
                >
                    <img src="./images/icon_chevron_large.svg" className={`w-full h-full ${activeIndex === 2 ? "opacity-50" : ""}`} alt="" />
                </button>
            </div>


            <div ref={colorbtnRef} className="flex flex-col justify-center items-center mt-7 md:mt-7 lg:mt-0">
                <div className="text-[13px] mb-2 capitalize tracking-tight">{selectColor}</div>
                <div className="border border-[#e7e7e7] relative flex justify-center items-center gap-1.5 py-3 px-4 bg-gray-100 backdrop-blur rounded-full">
                    {
                        colorData.map((color) => (
                            <div key={color.colorName} className={`color w-[34px] h-[34px] rounded-full p-[3px] flex flex-col cursor-pointer 
                                        ${selectColor === color.colorName ? "ring-2 ring-[#2b3139]" : ""}`} onClick={() => changeColor(color.colorName)}>
                                <span className="w-full h-1/2 bg-[${color.upperColor}] rounded-t-full border-t border-gray-600" style={{ backgroundColor: color.upperColor }} />
                                <span className="w-full h-1/2 bg-[${color.bottomColor}] rounded-b-full" style={{ backgroundColor: color.bottomColor }} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ColorCardCarousel
