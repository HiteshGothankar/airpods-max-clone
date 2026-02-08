import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"


const BatteryDetailsPage = () => {

    // sliderRef contains all the slides
    const sliderRef = useRef(null)
    // first slide
    const slideRef = useRef(null)

    const [activeIndex, setActiveIndex] = useState(0)

    // size of each slide
    const [slideSize, setSlideSize] = useState(0)

    // maxIndex how far the slider can move without empty space.
    const [maxIndex, setMaxIndex] = useState(0)

    const ACTUAL_SLIDES = 5

    /* ---------- calculate slide size and max index ---------- */
    useEffect(() => {
        const updateSlideSize = () => {
            if (!slideRef.current || !sliderRef.current) return

            const width = window.innerWidth
            let gapPx = 20

            if (width < 640) gapPx = 20
            else if (width < 1024) gapPx = 24
            else if (width < 1440) gapPx = 20

            const slideWidth = slideRef.current.offsetWidth
            const containerWidth = sliderRef.current.parentElement.offsetWidth

            const visibleSlides = Math.max(
                1,
                Math.floor(containerWidth / (slideWidth + gapPx))
            )

            setSlideSize(slideWidth + gapPx)
            // how many time you can slide the slider
            setMaxIndex(Math.max(0, ACTUAL_SLIDES - visibleSlides))

            // clamp active index if needed
            setActiveIndex(prev => Math.min(prev, Math.max(0, ACTUAL_SLIDES - visibleSlides)))
        }

        updateSlideSize()
        window.addEventListener("resize", updateSlideSize)

        return () => window.removeEventListener("resize", updateSlideSize)
    }, [])


    // translate slider
    const slideTo = index => {
        if (!sliderRef.current) return
        sliderRef.current.style.transform = `translateX(-${index * slideSize}px)`
    }

    // reposition when slideSize or activeIndex changes
    useEffect(() => {
        if (slideSize === 0) return
        slideTo(activeIndex)
    }, [slideSize, activeIndex])


    const handleNext = () => {
        setActiveIndex(prev => {
            const next = Math.min(prev + 1, maxIndex)
            slideTo(next)
            return next
        })
    }

    const handlePrev = () => {
        setActiveIndex(prev => {
            const next = Math.max(prev - 1, 0)
            slideTo(next)
            return next
        })
    }



    return (
        <section className="overflow-hidden relative py-5 xl:py-20">
            <div className="w-[87.5%] max-w-[1680px] mx-auto">
                <h2 className="text-center text-4xl md:text-[57px] xl:text-[72px] tracking-tight sm:leading-none sm:tracking-tighter font-semibold pb-12 sm:pb-20">
                    Effortless. <br />
                    With encore-ready power.
                </h2>

                <div ref={sliderRef} className="flex gap-5 sm:gap-5 transition-transform duration-700 ease-out">
                    {/* slide 1 */}
                    <div ref={slideRef} className="min-w-[280px] md:min-w-[340px] lg:min-w-[350px] xl:min-w-[373px]">
                        <div className="w-[280px] md:w-[340px] lg:min-w-[350px] xl:w-[372px] h-[416px] sm:h-[580px] overflow-hidden rounded-3xl">
                            <picture>
                                <source media="(max-width: 480px)" srcSet="/images/battery-magical/battery_detection_small.jpg" />
                                <source media="(max-width:1068px)" srcSet="/images/battery-magical/battery_detection__dkh147ag158i_medium_2x.jpg 2x" />
                                <source media="(min-width:1069px)" srcSet="/images/battery-magical/battery_detection_large.jpg 2x" />
                                <img src="/images/battery-magical/battery_detection_large.jpg" alt=""
                                    className="w-full h-full object-cover" />
                            </picture>
                        </div>
                        <div className="mt-6 ps-2 pe-5 sm:pe-12">
                            <p
                                className="text-sm sm:text-[17px] font-semibold leading-tight tracking-tight text-[#9a9aa0] text-balance">
                                <span className="text-[#1d1d1f]">Automatic Switching and on-head detection.</span> If you're
                                playing music
                                on
                                your Mac and take a call on
                                your iPhone, AirPods Max automatically switch over. And AirPods Max pause audio when you
                                take them off
                                and resume playback when you put them back on.
                            </p>
                        </div>
                    </div>

                    {/* slide 2 */}
                    <div ref={slideRef} className="min-w-[280px] md:min-w-[340px] lg:min-w-[350px] xl:min-w-[373px]">
                        <div className="w-[280px] md:w-[340px] lg:min-w-[350px] xl:w-[372px] h-[416px] sm:h-[580px] overflow-hidden rounded-3xl">
                            <picture>
                                <source media="(max-width: 480px)" srcSet="/images/battery-magical/battery_listen_small.jpg" />
                                <source media="(max-width:1068px)" srcSet="/images/battery-magical/battery_listen__dn1y8rezfhme_medium_2x.jpg 2x" />
                                <source media="(min-width:1069px)" srcSet="/images/battery-magical/battery_listen_large.jpg 2x" />
                                <img src="/images/battery-magical/battery_detection_large.jpg" alt=""
                                    className="w-full h-full object-cover" />
                            </picture>
                        </div>
                        <div className="mt-6 ps-2 pe-2 md:pe-0 sm:pe-12">
                            <p
                                className="text-sm sm:text-[17px] font-semibold leading-tight tracking-tight text-[#9a9aa0] text-balance">
                                <span className="text-[#1d1d1f]">Audio Sharing.6</span> With just a tap to connect, you can easily share an audio stream between two sets of AirPods on your iPhone, iPad, Mac or Apple TV.
                            </p>
                        </div>
                    </div>

                    {/* slide 3 */}
                    <div className="min-w-[280px] md:min-w-[340px] lg:min-w-[350px] xl:min-w-[373px]">
                        <div className="relative bg-[conic-gradient(from_45deg,#bb64ff,#ff2288,#ff8b00_28%,#f2416b,#e750de_60%,#0096ff,#bb64ff)] flex items-center w-[280px] md:w-[340px] lg:min-w-[350px] xl:w-[372px] h-[416px] sm:h-[580px] overflow-hidden rounded-3xl
                        text-[#1d1d1f] px-10 md:px-5.5 before:content-[''] before:absolute before:block before:inset-[38px] before:bg-white before:shadow-[0_0_32px_40px_#fff] before:rounded-[10px]">
                            <h4 className="text-3xl md:text-4xl xl:text-[42px] font-semibold z-10 text-center">
                                <span className="text-transparent bg-clip-text bg-[linear-gradient(108deg,#0894ff,#c959dd_34%,#ff2e54_68%,#ff9004)]">Hey Siri,<br /></span>
                                what's on my Calendar today?
                            </h4>
                        </div>
                        <div className="mt-6 ps-2 pe-5 sm:pe-12">
                            <p
                                className="text-sm sm:text-[17px] font-semibold leading-tight tracking-tight text-[#86868b] text-balance">
                                <span className="text-[#1d1d1f]">Always-on Siri.</span> With Announce Notifications,7 Siri can automatically read important notifications from Messages, Phone, Calendar, Reminders and more as they arrive.
                            </p>
                        </div>
                    </div>

                    {/* slide 4 */}
                    <div className="min-w-[280px] md:min-w-[340px] lg:min-w-[350px] xl:min-w-[373px]">
                        <div className="w-[280px] md:w-[340px] lg:min-w-[350px] xl:w-[372px] h-[416px] sm:h-[580px] overflow-hidden rounded-3xl">
                            <picture>
                                <source media="(max-width: 480px)" srcSet="/images/battery-magical/battery_usbc_small.jpg" />
                                <source media="(max-width:1068px)" srcSet="/images/battery-magical/battery_usbc__cerb8838rzqq_medium_2x.jpg 2x" />
                                <source media="(min-width:1069px)" srcSet="/images/battery-magical/battery_usbc_large.jpg 2x" />
                                <img src="/images/battery-magical/battery_usbc_large.jpg" alt=""
                                    className="w-full h-full object-cover" />
                            </picture>
                        </div>
                        <div className="mt-6 ps-2 pe-5 sm:pe-12">
                            <p
                                className="text-sm sm:text-[17px] font-semibold leading-tight tracking-tight text-[#86868b] text-balance">
                                <span className="text-[#1d1d1f]">USB‑C charging.</span> The new USB‑C connector lets you charge your AirPods Max with the same cable that charges your iPhone, iPad, Mac or other Apple devices.
                            </p>
                        </div>
                    </div>

                    {/* slide 5 */}
                    <div className="min-w-[280px] md:min-w-[340px] lg:min-w-[350px] xl:min-w-[373px]">
                        <div className="relative w-[280px] md:w-[340px] lg:min-w-[350px] xl:w-[372px] h-[416px] sm:h-[580px] overflow-hidden rounded-3xl">
                            <div className="absolute inset-0 top-[50%]">
                                <h4 className="text-3xl md:text-4xl xl:text-[42px] font-semibold z-10 text-center">
                                    Up to<br /> 40 hrs of<br /> listening
                                </h4>
                            </div>
                            <picture>
                                <source media="(max-width: 480px)" srcSet="/images/battery-magical/battery_long_lasting__caqezpw4kc6a_small.jpg" />
                                <source media="(max-width:1068px)" srcSet="/images/battery-magical/battery_long_lasting__caqezpw4kc6a_medium_2x.jpg 2x" />
                                <source media="(min-width:1069px)" srcSet="/images/battery-magical/battery_long_lasting_large.jpg 2x" />
                                <img src="/images/battery-magical/battery_usbc_large.jpg" alt=""
                                    className="w-full h-full object-cover" />
                            </picture>
                        </div>
                        <div className="mt-6 ps-2 pe-5 sm:pe-12">
                            <p
                                className="text-sm sm:text-[17px] font-semibold leading-tight tracking-tight text-[#86868b] text-balance">
                                <span className="text-[#1d1d1f]">Battery.</span> Up to 20 hours of listening, movie watching or talk time — with pro-level Active Noise Cancellation and Spatial Audio enabled.8 A quick 5‑minute charge delivers around 1.5 hours of listening.9
                            </p>
                        </div>
                    </div>

                </div>

                {/* CONTROLS */}
                <div className="mx-auto flex justify-end lg:justify-end gap-4 mt-8 z-40 lg:z-60 pb-20">
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
                        <img src="./images/icon_chevron_large.svg" className={`w-full h-full ${activeIndex === maxIndex ? "opacity-50" : ""}`} alt="" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default BatteryDetailsPage
