import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const highlightsData = [
    {
        id: 1,
        mobileImg: "/images/colors_static_xsmall_2x.jpg",
        desktopImg: "/images/colors_static_xlarge.jpg",
        text:
            "The ultimate over-ear personal listening experience — now in fresh new colors.",
        textWrapper:
            "absolute inset-0 flex justify-center",
        textClass:
            "max-w-[640px] h-fit md:text-[25px] lg:text-[26px] xl:text-[28px] font-medium leading-tight text-center m-8 sm:m-12 pr-10 xl:pr-12",
    },
    {
        id: 2,
        mobileImg: "/images/hifi_static_xsmall_2x.jpg",
        desktopImg: "/images/hifi_static_xlarge.jpg",
        text:
            "High-fidelity sound. Exhilarating audio with deep bass, expansive mids, and crisp highs.",
        textWrapper:
            "absolute inset-0 flex justify-start sm:items-center",
        textClass:
            "max-w-[440px] h-fit md:text-[25px] lg:text-[26px] xl:text-[28px] font-medium leading-tight text-center sm:text-left m-8 pr-8 sm:pr-0",
    },
    {
        id: 3,
        mobileImg: "/images/anc_endframe_xsmall_2x.jpg",
        desktopImg: "/images/anc_startframe_xlarge.jpg",
        text:
            "Pro-level Active Noise Cancellation. Removes unwanted noise so you can immerse yourself in the music.",
        textWrapper:
            "absolute inset-0 flex justify-center items-end sm:justify-end sm:items-center",
        textClass:
            "max-w-[550px] h-fit md:text-[25px] lg:text-[26px] xl:text-[28px] font-medium leading-tight text-center sm:text-left m-8 sm:m-12 pr-10",
    },
    {
        id: 4,
        mobileImg: "/images/design_static_xsmall_2x.jpg",
        desktopImg: "/images/design_static_xlarge.jpg",
        text:
            "Over-ear design. From canopy to cushion, built for unequaled fit and comfort.",
        textWrapper:
            "absolute inset-0 flex justify-center sm:justify-end sm:items-center",
        textClass:
            "max-w-[550px] h-fit md:text-[25px] lg:text-[26px] xl:text-[28px] font-medium leading-tight text-center sm:text-left m-8 sm:m-12 pr-10",
    },
    {
        id: 5,
        mobileImg: "/images/usbc_static_xsmall_2x.jpg",
        desktopImg: "/images/usbc_static_xlarge.jpg",
        text:
            "USB-C. Charging is fast and easy with the one-cable convenience of USB-C.",
        textWrapper:
            "absolute inset-0 flex justify-center",
        textClass:
            "max-w-[640px] h-fit md:text-[25px] lg:text-[28px] font-medium leading-tight text-center m-8 sm:m-12 pr-10 xl:pr-12",
    },
]

const CardCarousel = () => {

    const carouselRef = useRef(null)
    const paginationRef = useRef(null)

    const [activeIndex, setActiveIndex] = useState(0)
    const sliderRef = useRef(null)
    const textRefs = useRef([])
    const isAnimating = useRef(false)
    const [showReturnIcon, setShowReturnIcon] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const HOLD_TIME = 4000
    const ANIM_TIME = 2

    // Carousel entrance animation
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: carouselRef.current,
                start: "top 80%",
                end: "bottom 10%",
            }
        })

        tl.from(sliderRef.current, {
            autoAlpha: 0,
            y: 50,
            duration: 0.6,
            delay: 0.4,
        })
    }, { scope: carouselRef })


    useEffect(() => {

        if (isAnimating.current || isPaused) return

        const width = window.innerWidth

        let GAP = 4
        if (width < 640) GAP = 6
        else if (width < 1024) GAP = 6
        else if (width < 1440) GAP = 5

        const SLIDE = 100

        isAnimating.current = true

        gsap.to(sliderRef.current, {
            xPercent: -(activeIndex * (SLIDE + GAP)),
            duration: ANIM_TIME,
            ease: "power2.inOut",
            overwrite: true,
            onComplete: () => {
                isAnimating.current = false

                // Only continue if we haven't reached index 4
                if (activeIndex < 4 && !isPaused) {
                    setTimeout(() => {
                        setActiveIndex((prev) =>
                            prev === highlightsData.length - 1 ? 0 : prev + 1
                        )
                    }, HOLD_TIME)
                }
            },
        })

        gsap.from(textRefs.current, {
            xPercent: 5,
            duration: 2000,
            ease: "power2.inOut",
        })
    }, [activeIndex, isPaused])


    const trackRef = useRef(null)
    const cardsRef = useRef([])
    // const bulletsRef = useRef()

    const centerCard = (index = 0) => {
        const track = trackRef.current
        const card = cardsRef.current[index]
        if (!track || !card) return

        const viewport = window.innerWidth
        const cardRect = card.getBoundingClientRect()
        const trackRect = track.getBoundingClientRect()

        const x =
            viewport / 2 -
            (cardRect.left - trackRect.left) -
            cardRect.width / 2

        gsap.to(track, {
            x,
            duration: 0.8,
            ease: "expo.out",
        })
    }

    useEffect(() => {
        if (activeIndex === 4 && !isPaused) {
            const timer = setTimeout(() => {
                setShowReturnIcon(true);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [activeIndex, isPaused]);

    const handleButtonClick = () => {
        if (showReturnIcon) {
            // Restart from beginning
            setActiveIndex(0);
            setShowReturnIcon(false);
            setIsPaused(false);
        } else {
            // Toggle pause/play
            setIsPaused(!isPaused);
        }
    };

    useEffect(() => {
        centerCard(0)
        window.addEventListener("resize", () => centerCard(0))

        return () => window.removeEventListener("resize", () => centerCard(0))
    }, [])


    // Pagination Animation
    useGSAP(() => {
        /* Intial State */
        gsap.set(paginationRef.current, {
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
        const showBounce = gsap.to(paginationRef.current, {
            autoAlpha: 1,
            scale: 1,
            duration: 0.3,
            ease: "back.out(1.7)",
            paused: true,
        })

        const hideTween = gsap.to(paginationRef.current, {
            autoAlpha: 0,
            scale: 0.8,
            duration: 0.25,
            paused: true,
        })

        /* Handling tweens */
        ScrollTrigger.create({
            trigger: carouselRef.current,
            start: "top 90%",
            end: "bottom top",

            onEnter: () => showBounce.restart(),
            onEnterBack: () => showBounce.restart(),

            onLeave: () => hideTween.restart(),
            onLeaveBack: () => hideTween.restart(),
        })

        /* Change Positioning */
        ScrollTrigger.create({
            trigger: carouselRef.current,
            start: "bottom bottom-=36",

            onEnter: () => {
                gsap.set(paginationRef.current, {
                    position: "absolute",
                    bottom: "20px",
                })
            },

            onLeaveBack: () => {
                gsap.set(paginationRef.current, {
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
    }, { scope: carouselRef })


    return (
        <>
            <div ref={carouselRef} className="highlights_swiper overflow-x-hidden relative pb-30 lg:pb-30">
                <div className="w-[87.5%] max-w-[1680px] mx-auto">
                    <div ref={sliderRef} className="airpods-swiper flex gap-5 sm:gap-10">
                        {highlightsData.map((item, index) => (
                            <div
                                key={item.id}
                                className="w-[87.5vw] max-w-[1680px] shrink-0 transform"
                            >
                                <div className="relative overflow-hidden min-h-[480px] sm:min-h-[740px] bg-[rgb(232,232,237)] rounded-[28px]">
                                    {/* images */}
                                    <div className="absolute inset-0">
                                        <img
                                            className="w-full h-full object-cover md:hidden"
                                            src={item.mobileImg}
                                            alt=""
                                        />
                                        <img
                                            className="hidden md:block w-full h-full object-cover"
                                            src={item.desktopImg}
                                            alt=""
                                        />
                                    </div>

                                    {/* text */}
                                    <div ref={(el) => (textRefs.current[index] = el)} className={item.textWrapper}>
                                        <p className={item.textClass}>{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                <div ref={paginationRef} className="flex justify-center items-center mt-20 gap-3">
                    <button onClick={handleButtonClick} className="border border-[#e7e7e7] bg-gray-100 h-13 w-13 rounded-full p-2 cursor-pointer transition-all duration-1000 ease-in-out">
                        {
                            showReturnIcon ? (
                                <img src="./return.png" className="w-full h-auto" alt="" />
                            ) : isPaused ? (
                                <img src="./play.png" className="p-2 w-full h-auto" alt="" />
                            ) : (
                                <img src="./pause.png" className="w-full h-auto" alt="" />
                            )
                        }
                    </button>

                    {/* pagination */}
                    <div className="border border-[#e7e7e7] relative flex justify-center items-center gap-5 py-6 px-7 bg-gray-100 backdrop-blur rounded-full">
                        {
                            highlightsData.map((_, i) => (
                                <span
                                    key={i}
                                    className={`h-2 bg-gray-500 rounded-full relative cursor-pointer transition-all duration-1000 ease-in-out ${i === activeIndex ? 'w-11 bg-gray-700' : 'w-2'
                                        }`}
                                />
                            ))
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default CardCarousel