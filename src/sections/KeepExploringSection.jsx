import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const KeepExploringSection = () => {

    const keepExploringRef = useRef(null)
    const gridRef = useRef(null)
    const gridColRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: gridRef.current,
                start: "top 80%",
            }
        })

        tl.from(".gridImage", {
            autoAlpha: 0,
            y: 50,
            duration: 0.8,
            ease: "power2.out"
        })
            .from(".gridContent", {
                autoAlpha: 0,
                y: 40,
                duration: 0.8,
                ease: "power2.out"
            })
    }, { scope: keepExploringRef })


    useGSAP(() => {
        gsap.from(gridColRef.current, {
            autoAlpha: 0,
            y: 50,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: gridColRef.current,
                start: "top 80%",
            }
        })
    }, { scope: keepExploringRef })

    return (
        <div ref={keepExploringRef} className='bg-gray-100 overflow-hidden py-10 xl:py-20'>

            <div className='w-[87.5%] mx-auto max-w-[1680px] flex flex-col lg:flex-row justify-between items-start lg:items-center xl:mb-10'>
                <h1 className='text-[27px] md:text-[45px] xl:text-[50px] font-semibold tracking-tight'>Keep exploring AirPods.</h1>
                <button className="text-left text-blue-500 mt-3 flex items-center gap-2 group">
                    Explore all AirPods
                    <span className="text-lg transition-transform group-hover:translate-x-1 duration-200">&gt;</span>
                </button>
            </div>

            <div className='w-[87.5%] max-w-[1680px] mx-auto xl:bg-white rounded-3xl'>

                <div ref={gridRef} className='w-full lg:w-[85%] xl:w-[55%] mx-auto py-10'>
                    {/* grid for image */}
                    <div className='gridImage w-full grid grid-cols-2 gap-8 xl:pt-10'>
                        {/* image of 1st*/}
                        <div className='p-1'>
                            <picture className="block w-full mx-auto">
                                <source media="(max-width: 480px)" srcSet="/images/keep-exploring/airpods_max_midnight_small_2x.png 2x" />
                                <source media="(min-width: 481px)" srcSet="/images/keep-exploring/airpods_max_midnight_large_2x.png 2x" />
                                <img src="/images/keep-exploring/airpods_max_midnight_large_2x.png 2x" alt="" className="w-full h-auto object-contain" />
                            </picture>
                        </div>

                        {/* image of 2nd */}
                        <div className='p-1 md:p-7'>
                            <picture className="block w-full mx-auto">
                                <source media="(max-width: 480px)" srcSet="/images/keep-exploring/explore_airpods_pro_3_open_small_2x.jpg 2x" />
                                <source media="(max-width: 1068px)" srcSet="/images/keep-exploring/explore_airpods_pro_3_open_medium_2x.jpg 2x" />
                                <source media="(min-width: 1069px)" srcSet="/images/keep-exploring/explore_airpods_pro_3_open_large_2x.jpg 2x" />
                                <img src="/images/keep-exploring/explore_airpods_pro_3_open_large_2x.jpg 2x" alt="" className="w-full h-auto object-contain" />
                            </picture>
                        </div>
                    </div>


                    {/* grid for content */}
                    <div className='gridContent grid grid-cols-2 gap-8 py-5'>
                        {/* content of 1st */}
                        <div>
                            <div className='flex gap-1.5'>
                                <span className='size-3 border-t border-gray-700 rounded-full bg-[#2a3139]'></span>
                                <span className='size-3 border-t border-gray-700 rounded-full bg-[#ccbeb1]'></span>
                                <span className='size-3 border-t border-gray-700 rounded-full bg-[#92a9b5]'></span>
                                <span className='size-3 border-t border-gray-700 rounded-full bg-[#afa6bb]'></span>
                                <span className='size-3 border-t border-gray-700 rounded-full bg-[#e2a48e]'></span>
                            </div>

                            <div className='mt-12'>
                                <h3 className='font-semibold text-[19px] md:text-[24px] xl:text-[25px]'>AirPods Max</h3>
                                <p className='text-[13px] md:text-[16px] mt-3 h-[100px] md:h-[75px]'>The ultimate over-ear listening experience.</p>
                                <h4 className='mt-2 font-semibold text-sm md:text-[16px]'>₹59900.00*</h4>
                                <h4 className='mt-10 text-gray-600 text-sm py-2 md:text-[16px]'>Currently viewing</h4>
                                <button className="text-sm md:text-[16px] text-left text-blue-500 mt-5 flex items-center gap-2 group">
                                    Buy
                                    <span className="text-sm transition-transform group-hover:translate-x-1 duration-200">&gt;</span>
                                </button>
                            </div>
                        </div>

                        {/* content of 2nd */}
                        <div>
                            <div className='flex gap-1.5'>
                                <span className='size-3 border-t border-gray-700 rounded-full bg-[#2a3139]'></span>
                                <span className='size-3 border-t border-gray-700 rounded-full bg-[#ccbeb1]'></span>
                                <span className='size-3 border-t border-gray-700 rounded-full bg-[#92a9b5]'></span>
                                <span className='size-3 border-t border-gray-700 rounded-full bg-[#afa6bb]'></span>
                                <span className='size-3 border-t border-gray-700 rounded-full bg-[#e2a48e]'></span>
                            </div>

                            <div className='mt-12'>
                                <h3 className='font-semibold text-[19px] md:text-[24px] xl:text-[25px]'>AirPods Pro 3</h3>
                                <p className='text-[13px] md:text-[16px] mt-3 h-[100px] md:h-[75px]'>The world’s best in-ear Active Noise Cancellation, with heart rate sensing during workouts.</p>
                                <h4 className='mt-2 font-semibold text-sm md:text-[16px]'>₹25900.00*</h4>
                                <button className='cursor-pointer hover:bg-blue-600 transition-all duration-300 mt-10 bg-blue-500 rounded-4xl py-2 px-5 md:px-6 text-white text-sm md:text-[16px]'>Learn More</button>
                                <button className="text-sm md:text-[16px] text-left text-blue-500 mt-6 flex items-center gap-2 group">
                                    Buy
                                    <span className="text-sm transition-transform group-hover:translate-x-1 duration-200">&gt;</span>
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

                {/* horizontal line */}
                <div className='w-full xl:w-[80%] h-px bg-gray-300 mx-auto' />

                <div className='w-full lg:w-[85%] xl:w-[55%] mx-auto pt-10 md:pt-15 pb-20'>
                    <div ref={gridColRef} className='grid grid-cols-2 gap-5 md:gap-8'>
                        {/* 1st Column*/}
                        <div className='p-1'>
                            <div className='flex flex-col gap-12 md:gap-10'>
                                {/* first */}
                                <div className='first'>
                                    <picture className='block w-8'>
                                        <source srcSet="/images/keep-exploring/icon_active_noise_cancellation_large_2x.png 2x" />
                                        <img
                                            src="/images/keep-exploring/icon_active_noise_cancellation_large_2x.png 2x"
                                            alt=""
                                            className="w-full h-auto object-contain"
                                        />
                                    </picture>

                                    <p className='text-xs md:text-sm xl:text-[15px] h-[70px] text-gray-800 mt-2'>Pro-level Active Noise Cancellation</p>
                                </div>

                                {/* second */}
                                <div className='second'>
                                    <picture className='block w-8'>
                                        <source media='(min-width: 0px)' srcSet="/images/keep-exploring/icon_transparency_mode_large_2x.png 2x" />
                                        <img src="/images/keep-exploring/icon_transparency_mode_large_2x.png 2x" alt="" className="w-full h-auto object-contain" />
                                    </picture>

                                    <p className='text-xs md:text-sm xl:text-[15px] h-[20px] text-gray-800 mt-2'>Transparency mode</p>
                                </div>

                                {/* third */}
                                <div className='third'>
                                    <picture className='block w-9'>
                                        <source media='(min-width: 0px)' srcSet="/images/keep-exploring/icon_person_spatialaudio_large_2x.png 2x" />
                                        <img src="/images/keep-exploring/icon_person_spatialaudio_large_2x.png 2x" alt="" className="w-full h-auto object-contain" />
                                    </picture>

                                    <p className='text-xs md:text-sm xl:text-[15px] h-[25px] text-gray-800 mt-2'>Personalised Spatial Audio
                                        with dynamic head tracking</p>
                                </div>

                                {/* fourth */}
                                <div className='fourth'>
                                    <picture className='block w-13'>
                                        <source media='(min-width: 0px)' srcSet="/images/keep-exploring/icon_lossless_large_2x.png 2x" />
                                        <img src="/images/keep-exploring/icon_lossless_large_2x.png 2x" alt="" className="w-full h-auto object-contain" />
                                    </picture>

                                    <p className='text-xs md:text-sm xl:text-[15px] h-[25px] text-gray-800 mt-2'>Lossless Audio via USB‑C4</p>
                                </div>

                                {/* fifth */}
                                <div className='fifth'>
                                    <picture className='block w-8'>
                                        <source media='(min-width: 0px)' srcSet="/images/keep-exploring/icon_badge_waveform_large_2x.png 2x" />
                                        <img src="/images/keep-exploring/icon_badge_waveform_large_2x.png 2x" alt="" className="w-full h-auto object-contain" />
                                    </picture>

                                    <p className='text-xs md:text-sm xl:text-[15px] h-[45px] text-gray-800 mt-2'>Loud Sound Reduction, Conversation Boost, Background Sounds</p>
                                </div>

                                {/* sixth */}
                                <div className='sixth'>
                                    <h2 className='text-xl font-semibold'>20 hrs</h2>

                                    <p className='text-xs md:text-sm xl:text-[15px] h-[55px] text-gray-800 mt-2'>Up to 20 hours of total listening time on a single charge
                                        with Active Noise Cancellation</p>
                                </div>

                                {/* seventh */}
                                <div className='seventh'>
                                    <picture className='block w-8'>
                                        <source media='(min-width: 0px)' srcSet="/images/keep-exploring/icon_chip_h1_large_2x.png 2x" />
                                        <img src="/images/keep-exploring/icon_chip_h1_large_2x.png 2x" alt="" className="w-full h-auto object-contain" />
                                    </picture>

                                    <p className='text-xs md:text-sm xl:text-[15px] h-[25px] text-gray-800 mt-2'>Hey Siri</p>
                                </div>

                                {/* eighth */}
                                <div className='eighth'>
                                    <picture className='block w-8'>
                                        <source media='(min-width: 0px)' srcSet="/images/keep-exploring/icon_battery_100percent_large_2x.png 2x" />
                                        <img src="/images/keep-exploring/icon_battery_100percent_large_2x.png 2x" alt="" className="w-full h-auto object-contain" />
                                    </picture>

                                    <p className='text-xs md:text-sm xl:text-[15px] h-[55px] text-gray-800 mt-2'>Up to 24 hours of listening time with
                                        Active Noise Cancellation,17 using the charging case</p>
                                </div>

                                {/* nineth */}
                                <div className='nineth'>
                                    <picture className='block w-9'>
                                        <source media='(min-width: 0px)' srcSet="/images/keep-exploring/icon_airpodspro_chargingcase_wireless_large_2x.png 2x" />
                                        <img src="/images/keep-exploring/icon_airpodspro_chargingcase_wireless_large_2x.png 2x" alt="" className="w-full h-auto object-contain" />
                                    </picture>

                                    <p className='text-xs md:text-sm xl:text-[15px] h-[45px] text-gray-800 mt-2'>MagSafe Charging Case (USB‑C)
                                        works with Apple Watch charger and Qi-certified chargers;18 includes lanyard loop and speaker</p>
                                </div>

                            </div>
                        </div>

                        {/* 2nd Column*/}
                        <div className='p-1'>
                            <div className='flex flex-col gap-12 md:gap-10'>
                                {/* first */}
                                <div className='first'>
                                    <picture className='block w-8'>
                                        <source media='(min-width: 0px)' srcSet="/images/keep-exploring/icon_active_noise_cancellation_large_2x.png 2x" />
                                        <img src="/images/keep-exploring/icon_active_noise_cancellation_large_2x.png 2x" alt="" className="w-full h-auto object-contain" />
                                    </picture>

                                    <p className='text-xs md:text-sm xl:text-[15px] h-[70px] text-gray-800 mt-2'>Up to 4x more Active Noise Cancellation
                                        than original AirPods Pro and AirPods 4
                                        with Active Noise Cancellation</p>
                                </div>

                                {/* second */}
                                <div className='second'>
                                    <picture className='block w-21'>
                                        <source media='(min-width: 0px)' srcSet="/images/keep-exploring/icon_group_2_large_2x.png 2x" />
                                        <img src="/images/keep-exploring/iicon_group_2_large_2x.png 2x" alt="" className="w-full h-auto object-contain" />
                                    </picture>

                                    <p className='text-xs md:text-sm xl:text-[15px] h-[20px] text-gray-800 mt-2'>Adaptive Audio and Transparency mode</p>
                                </div>

                                {/* third */}
                                <div className='third'>
                                    <picture className='block w-9'>
                                        <source media='(min-width: 0px)' srcSet="/images/keep-exploring/icon_person_spatialaudio_large_2x.png 2x" />
                                        <img src="/images/keep-exploring/icon_person_spatialaudio_large_2x.png 2x" alt="" className="w-full h-auto object-contain" />
                                    </picture>

                                    <p className='text-xs md:text-sm xl:text-[15px] h-[25px] text-gray-800 mt-2'>Personalised Spatial Audio
                                        with dynamic head tracking</p>
                                </div>

                                {/* fourth */}
                                <div className='fourth'>
                                    <picture className='block w-11'>
                                        <source media='(min-width: 0px)' srcSet="/images/keep-exploring/icon_heart_rate_large_2x.png 2x" />
                                        <img src="/images/keep-exploring/icon_heart_rate_large_2x.png 2x" alt="" className="w-full h-auto object-contain" />
                                    </picture>

                                    <p className='text-xs md:text-sm xl:text-[15px] h-[25px] text-gray-800 mt-2'>Heart rate sensing during workouts</p>
                                </div>

                                {/* fifth */}
                                <div className='fifth'>
                                    <picture className='block w-15'>
                                        <source media='(min-width: 0px)' srcSet="/images/keep-exploring/icon_live_translation_large_2x.png 2x" />
                                        <img src="/images/keep-exploring/icon_live_translation_large_2x.png 2x" alt="" className="w-full h-auto object-contain" />
                                    </picture>

                                    <p className='text-xs md:text-sm xl:text-[15px] h-[45px] text-gray-800 mt-2'>Live Translation</p>
                                </div>

                                {/* sixth */}
                                <div className='sixth'>
                                    <h2 className='text-xl font-semibold'>8 hrs</h2>

                                    <p className='text-xs h-[55px] text-gray-800 mt-2'>Up to 8 hours of listening time on a single charge with Active Noise Cancellation</p>
                                </div>

                                {/* seventh */}
                                <div className='seventh'>
                                    <picture className='block w-8'>
                                        <source media='(min-width: 0px)' srcSet="/images/keep-exploring/icon_chip_h2_large_2x.png 2x" />
                                        <img src="/images/keep-exploring/icon_chip_h2_large_2x.png 2x" alt="" className="w-full h-auto object-contain" />
                                    </picture>

                                    <p className='text-xs md:text-sm xl:text-[15px] h-[25px] text-gray-800 mt-2'>Voice Isolation, Hey Siri,
                                        and Siri Interactions</p>
                                </div>

                                {/* eighth */}
                                <div className='eighth'>
                                    <picture className='block w-8'>
                                        <source media='(min-width: 0px)' srcSet="/images/keep-exploring/icon_airpodsmax_case_large_2x.png 2x" />
                                        <img src="/images/keep-exploring/icon_airpodsmax_case_large_2x.png 2x" alt="" className="w-full h-auto object-contain" />
                                    </picture>

                                    <p className='text-xs md:text-sm xl:text-[15px] h-[55px] text-gray-800 mt-2'>Smart Case</p>
                                </div>

                                {/* nineth */}
                                <div className='nineth'>
                                    <picture className='block w-6'>
                                        <source media='(min-width: 0px)' srcSet="/images/keep-exploring/icon_drop_large_2x.png 2x" />
                                        <img src="/images/keep-exploring/icon_drop_large_2x.png 2x" alt="" className="w-full h-auto object-contain" />
                                    </picture>

                                    <p className='text-xs md:text-sm xl:text-[15px] h-[45px] text-gray-800 mt-2'>Dust, sweat and water resistant (IP57)</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default KeepExploringSection