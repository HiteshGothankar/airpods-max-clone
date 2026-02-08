import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import WhyAppleModal from '../components/WhyAppleModal';
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

const ModalContent = {
    1: {
        shortTitle: "Engraving",
        title: "Add a message that lasts.",
        desc: ["Choose from new engraving options. It’s the perfect way to personalise your AirPods. Add a special message, name or birthday. Even combine text and numbers with your favourite emoji."],
        linkText: "Learn More"
    },
    2: {
        shortTitle: "Ways to Buy",
        title: "Flexible ways to pay",
        desc: [
            "Payments made easy. No matter how you like to buy, we have an option that works for you. You can pay with credit or debit card, RuPay, UPI, Net Banking, and credit or debit card EMI with most leading banks.# Or cover your interest on eligible products when you choose to pay with No Cost EMI for 3 or 6 months from most leading banks.◊ And, if you’re buying a new iPhone, you can exchange your current smartphone for instant credit.",
            "GST invoicing is available for business customers at checkout.",
            "Speak to a Specialist online or in-store about available options.",
            "#Available payment types may differ between Apple Stores and Apple Store Online."
        ],
        linkText: "Payment Options"
    },
    3: {
        shortTitle: "Delivery and Pickup",
        title: "Flexible delivery and pickup options.",
        desc: ["Get your new Apple products quickly and easily with a handful of delivery and pickup options to choose from."],
        linkText: "Delivery"
    },
    4: {
        shortTitle: "Shop with a Specialist",
        title: "Get help finding what’s right for you.",
        desc: ["Shop one-on-one with a Specialist online. Or reserve a shopping session at an Apple Store."],
        linkText: "Shop with a Specialist"
    },
    5: {
        shortTitle: "Apple Store App",
        title: "Shop in the Apple Store app, tailored specifically for you.",
        desc: ["Get personalised product recommendations, compare models, access your Saved Items and track your orders. And opt in today to get updates on new products, promotions, flexible payment options and store events.",
            "Scan the QR code to get started."],
        img: "/images/why-apple/boc_qr_code_large.jpg",
        linkText: "Apple Store App"
    }
}

const WhyAppleSection = () => {

    // states for modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeCardId, setActiveCardId] = useState(null)

    const whyAppleRef = useRef(null)

    // sliderRef contains all the slides
    const sliderRef = useRef(null)
    // first slide
    const slideRef = useRef(null)

    const [activeIndex, setActiveIndex] = useState(0)

    // size of each slide
    const [slideSize, setSlideSize] = useState(0)

    // maxIndex how far the slider can move without empty space.
    const [maxIndex, setMaxIndex] = useState(0)

    useGSAP(() => {
        gsap.from(".slide", {
            scrollTrigger: {
                trigger: sliderRef.current,
                start: "top 80%",
            },
            autoAlpha: 0,
            y: 50,
            duration: 1.5,
            ease: "power4.out",
            stagger: 0.3,
        })
    }, { scope: whyAppleRef })

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

    const openModal = (cardId) => {
        setActiveCardId(cardId)
        setIsModalOpen(true)
    }


    return (
        <div ref={whyAppleRef} className='bg-gray-100 overflow-hidden py-20 md:py-25'>
            <div className='w-[87.5%] max-w-[1680px] mx-auto'>
                <div className='flex flex-col md:flex-row justify-between items-start md:items-end'>
                    <h1 className='text-[27px] md:text-[45px] xl:text-[50px] font-semibold tracking-tight'>Why Apple is the best<br /> place to buy AirPods.</h1>
                    <button className="text-left text-blue-500 mt-3 flex items-center gap-2 group">
                        Shop Airpods
                        <span className="text-lg transition-transform group-hover:translate-x-1 duration-200">&gt;</span>
                    </button>
                </div>

                <div ref={sliderRef} className="flex gap-5 sm:gap-5 transition-transform duration-700 ease-out">
                    {/* slide 1 */}
                    <div ref={slideRef} onClick={() => openModal(1)} className="slide relative p-5 md:p-7 bg-white overflow-hidden min-w-[260px] md:min-w-[340px] lg:min-w-[350px] xl:min-w-[372px] h-[340px] md:h-[300px] rounded-3xl mt-12">
                        <div className="flex flex-col gap-3">
                            <div className='size-15'>
                                <img src="./images/why-apple/icon_emoji_face_grinning_large.png" className='w-full' alt="" />
                            </div>
                            <h3 className='font-semibold text-[19px] md:text-[23px] md:leading-7.5 tracking-tight'>Personalise your Airpods for free.</h3>
                            <p className='text-[13px] md:text-[15px] text-[#363636]'>Engrave your Airpods with your initials of favourite emoji - free. <br /> Only at Apple.</p>
                            <div className='absolute right-6 bottom-4'>
                                <button className='bg-black w-9 h-9 p-2.5 rounded-full'>
                                    <img src="/Plus.png" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* slide 2 */}
                    <div ref={slideRef} onClick={() => openModal(2)} className="slide relative p-5 md:p-7 bg-white overflow-hidden min-w-[260px] md:min-w-[340px] lg:min-w-[350px] xl:min-w-[372px] h-[340px] md:h-[300px] rounded-3xl mt-12">
                        <div className="flex flex-col gap-3">
                            <div className='size-15'>
                                <img src="./images/why-apple/icon_applecard_large_2x.png" className='w-full' alt="" />
                            </div>
                            <h3 className='font-semibold text-[19px] md:text-[23px] md:leading-7.5 tracking-tight'>Monthly payment options are available.</h3>
                            <p className='text-[13px] md:text-[15px] text-[#363636]'>Choose the easy way to finance with conveninent monthly payment options.</p>
                            <div className='absolute right-6 bottom-4'>
                                <button className='bg-black w-9 h-9 p-2.5 rounded-full'>
                                    <img src="/Plus.png" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* slide 3 */}
                    <div ref={slideRef} onClick={() => openModal(3)} className="slide relative p-5 md:p-7 bg-white overflow-hidden min-w-[260px] md:min-w-[340px] lg:min-w-[350px] xl:min-w-[372px] h-[340px] md:h-[300px] rounded-3xl mt-12">
                        <div className="flex flex-col gap-3">
                            <div className='size-15'>
                                <img src="./images/why-apple/icon_truck_box_large.png" className='w-full' alt="" />
                            </div>
                            <h3 className='font-semibold text-[19px] md:text-[23px] md:leading-7.5 tracking-tight'>Get flexible delivery and easy pickup.</h3>
                            <p className='text-[13px] md:text-[15px] text-[#363636]'>Get free delivery or pickup at your Apple Store.</p>
                            <div className='absolute right-6 bottom-4'>
                                <button className='bg-black w-9 h-9 p-2.5 rounded-full'>
                                    <img src="/Plus.png" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* slide 4 */}
                    <div ref={slideRef} onClick={() => openModal(4)} className="slide relative p-5 md:p-7 bg-white overflow-hidden min-w-[260px] md:min-w-[340px] lg:min-w-[350px] xl:min-w-[372px] h-[340px] md:h-[300px] rounded-3xl mt-12">
                        <div className="flex flex-col gap-3">
                            <div className='size-15'>
                                <img src="./images/why-apple/icon_message_and_message_large.png" className='w-full' alt="" />
                            </div>
                            <h3 className='font-semibold text-[19px] md:text-[23px] md:leading-7.5 tracking-tight'>Shop with a Specialist.</h3>
                            <p className='text-[13px] md:text-[15px] text-[#363636]'>Whether you shop in a store or online, our Specialist can help you pick something perfect.</p>
                            <div className='absolute right-6 bottom-4'>
                                <button className='bg-black w-9 h-9 p-2.5 rounded-full'>
                                    <img src="/Plus.png" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* slide 5 */}
                    <div ref={slideRef} onClick={() => openModal(5)} className="slide relative p-5 md:p-7 bg-white overflow-hidden min-w-[260px] md:min-w-[340px] lg:min-w-[350px] xl:min-w-[372px] h-[340px] md:h-[300px] rounded-3xl mt-12">
                        <div className="flex flex-col gap-3">
                            <div className='size-9 mb-5'>
                                <img src="./images/why-apple/icon_app_applestore_large.png" className='w-full' alt="" />
                            </div>
                            <h3 className='font-semibold text-[19px] md:text-[23px] md:leading-7.5 tracking-tight'>Explore a shopping experience designed around you.</h3>
                            <p className='text-[13px] md:text-[15px] text-[#363636]'>Use the Apple Store app to get a more personal way to shop.</p>
                            <div className='absolute right-6 bottom-4'>
                                <button className='bg-black w-9 h-9 p-2.5 rounded-full'>
                                    <img src="/Plus.png" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                {/* CONTROLS */}
                <div className="flex justify-end lg:justify-end gap-4 mt-12">
                    <button
                        onClick={handlePrev}
                        className="cursor-pointer bg-gray-200 p-3 size-9 rounded-full"
                    >
                        <img src="./images/icon_chevron_large.svg" className={`w-full h-full -scale-x-100 ${activeIndex === 0 ? "opacity-50" : ""}`} alt="" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="cursor-pointer bg-gray-200 p-3 size-9 rounded-full"
                    >
                        <img src="./images/icon_chevron_large.svg" className={`w-full h-full ${activeIndex === maxIndex ? "opacity-50" : ""}`} alt="" />
                    </button>
                </div>
            </div>

            {isModalOpen && activeCardId && (
                <WhyAppleModal data={ModalContent[activeCardId]} onOpen={() => setIsModalOpen(true)} onClose={() => setIsModalOpen(false)} />
            )}
        </div>
    )
}

export default WhyAppleSection