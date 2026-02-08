import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'
import Modal from '../components/Modal'
import { useState } from 'react'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const HifiSoundPage = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const sectionRef = useRef(null)
    const learnMoreRef = useRef(null)
    const gridEndRef = useRef(null)

    // entrance animation
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "bottom 20%",
            }
        })

        tl.from(".title", {
            autoAlpha: 0,
            y: 50,
            duration: 0.6,
            ease: "power2.out",
        })
            .from(".content", {
                autoAlpha: 0,
                y: 50,
                duration: 0.6,
                ease: "power2.out"
            })

        const gridtl = gsap.timeline({
            scrollTrigger: {
                trigger: gridEndRef.current,
                start: "top 45%",
            }
        })

        gridtl.from(".gridcol", {
            autoAlpha: 0,
            y: 30,
            stagger: 0.3,
            duration: 1,
            ease: "power2.out"
        })

    }, { scope: sectionRef })

    useGSAP(() => {

        // initial fixed state
        gsap.set(learnMoreRef.current, {
            autoAlpha: 0,
            position: "fixed",
            bottom: "2.25rem",
            left: 0,
            right: 0,
            margin: "auto",
            zIndex: 50,
        })

        /* Defining tweens */
        const showBounce = gsap.to(learnMoreRef.current, {
            autoAlpha: 1,
            scale: 1,
            duration: 0.3,
            ease: "back.out(1.7)",
            paused: true,
        })

        const hideTween = gsap.to(learnMoreRef.current, {
            autoAlpha: 0,
            scale: 0.8,
            duration: 0.25,
            paused: true,
        })

        /* ScrollTrigger to handle visibility and opacity of learn more button */
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
            trigger: gridEndRef.current,
            start: "bottom bottom-=36",

            onEnter: () => {
                gsap.set(learnMoreRef.current, {
                    position: "absolute",
                    bottom: "2.25rem",
                })
            },

            onLeaveBack: () => {
                gsap.set(learnMoreRef.current, {
                    position: "fixed",
                    bottom: "2.25rem",
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
        <section ref={sectionRef} className="relative min-h-[240vh] md:min-h-[2320px] 2xl:min-h-[2400px] overflow-hidden pb-30">
            <div className="absolute inset-0 -z-20">
                <picture className="block w-full mx-auto h-full">
                    <source media="(max-width: 480px)" srcSet="/images/hifi-sound/audio_airpod_max_xsmall_2x.jpg 2x" />
                    <source media="(max-width: 1440px)" srcSet="/images/hifi-sound/audio_airpod_max__filcqiddcmye_medium_2x.jpg 2x" />
                    <img src="/images/hifi-sound/audio_airpod_max_large.jpg" alt="" className="w-full h-full object-cover" />
                </picture>
            </div>

            <div className="flex flex-col justify-between items-center absolute leading-tight min-h-[240vh] md:min-h-[2320px] 2xl:min-h-[2400px]">
                <div className="flex flex-col justify-start items-center gap-6 w-full max-w-5xl mx-auto pt-25 md:pt-30 xl:pt-25 2xl:pt-32 px-5 md:px-10 lg:px-15 xl:px-20 2xl:px-0">
                    <h2 className="title text-[36px] md:text-[70px] xl:text-[92px] text-white text-center font-semibold md:tracking-tight">
                        All the <br className="block md:hidden" /> vivid details.
                    </h2>

                    <p className="content text-[20px] md:text-[22px] xl:text-[26px] text-white text-center font-semibold tracking-tight">
                        AirPods Max deliver stunningly detailed, high-fidelity audio for an unparalleled listening experience.
                        Each part of the custom-built driver works to produce sound with ultra-low distortion across the audible range —
                        so you'll hear every note with a new sense of clarity.
                    </p>
                </div>

                <div ref={gridEndRef} className='grid grid-cols-1 xl:grid-cols-3 gap-10 md:gap-14 w-[87.5%] md:w-[75%] lg:w-[70%] xl:w-[87.5%] 2xl:w-[83.5%] mx-auto text-white pb-40 xl:pb-50 2xl:pb-65 items-start'>
                    <div className='gridcol'>
                        <div className='h-12 md:h-[50px] flex items-center mb-3 sm:mb-[18px]'>
                            <svg className="hifi_sound_detail_icon_spatial_audio max-h-full fill-current" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24.44 26.77">
                                <path className="cls-1"
                                    d="M17.2,1.38a.37.37,0,0,0-.14.5h0A1,1,0,0,1,17,3.12,3,3,0,0,1,15.68,4a10.21,10.21,0,0,1-3.46.56A10.11,10.11,0,0,1,8.77,4a3,3,0,0,1-1.32-.84,1,1,0,0,1-.08-1.23h0a.36.36,0,0,0-.06-.44.37.37,0,0,0-.52,0A1.87,1.87,0,0,0,6.25,2.5a2.11,2.11,0,0,0,.28,1.24A4.09,4.09,0,0,0,8.22,5.17a9.23,9.23,0,0,0,4,.85,9.2,9.2,0,0,0,4-.85,4.17,4.17,0,0,0,1.69-1.43,2,2,0,0,0,.27-1.24,1.8,1.8,0,0,0-.54-1.06.35.35,0,0,0-.44-.06ZM15.2,0a.31.31,0,0,0-.15.41v0a.48.48,0,0,1-.08.62,2.15,2.15,0,0,1-.75.43,6.35,6.35,0,0,1-2,.3,6.09,6.09,0,0,1-2-.31,1.77,1.77,0,0,1-.74-.43A.47.47,0,0,1,9.38.46v0A.31.31,0,0,0,9.34.1a.32.32,0,0,0-.44,0,1.16,1.16,0,0,0-.37.69,1.37,1.37,0,0,0,.17.82,2.52,2.52,0,0,0,1.06.93,5.5,5.5,0,0,0,2.46.54,5.5,5.5,0,0,0,2.46-.54,2.46,2.46,0,0,0,1.06-.93,1.45,1.45,0,0,0,.17-.82,1.16,1.16,0,0,0-.37-.69.3.3,0,0,0-.34,0Zm7.86,17.22a.35.35,0,0,0-.5-.13h0A1,1,0,0,1,21.32,17a3,3,0,0,1-.84-1.31,10.21,10.21,0,0,1-.56-3.46,10.19,10.19,0,0,1,.56-3.45,3,3,0,0,1,.84-1.32,1,1,0,0,1,1.23-.07h0A.36.36,0,0,0,23,7.37a.36.36,0,0,0,0-.52,1.8,1.8,0,0,0-1.06-.54,2,2,0,0,0-1.24.27,4.13,4.13,0,0,0-1.43,1.7,9.16,9.16,0,0,0-.85,4,9.2,9.2,0,0,0,.85,4A4.17,4.17,0,0,0,20.7,18a2.13,2.13,0,0,0,1.24.28A1.87,1.87,0,0,0,23,17.69.35.35,0,0,0,23.06,17.25Zm1.35-2a.3.3,0,0,0-.4-.15l0,0a.47.47,0,0,1-.61-.09,1.75,1.75,0,0,1-.43-.75,6,6,0,0,1-.31-2,6.09,6.09,0,0,1,.31-2,1.77,1.77,0,0,1,.43-.74A.47.47,0,0,1,24,9.43h0a.31.31,0,0,0,.33,0,.31.31,0,0,0,0-.44,1.16,1.16,0,0,0-.69-.37,1.45,1.45,0,0,0-.82.17,2.52,2.52,0,0,0-.93,1.06,5.5,5.5,0,0,0-.54,2.46,5.47,5.47,0,0,0,.54,2.46,2.54,2.54,0,0,0,.93,1.07,1.37,1.37,0,0,0,.82.16,1.16,1.16,0,0,0,.69-.37.3.3,0,0,0,.05-.34ZM1.88,17.12a.35.35,0,0,0-.44.05.36.36,0,0,0,0,.52,1.87,1.87,0,0,0,1.06.55A2.11,2.11,0,0,0,3.74,18a4.17,4.17,0,0,0,1.43-1.69,9.2,9.2,0,0,0,.85-4,9.16,9.16,0,0,0-.85-4,4.13,4.13,0,0,0-1.43-1.7A2,2,0,0,0,2.5,6.31a1.8,1.8,0,0,0-1.06.54.37.37,0,0,0,.44.58h0a1,1,0,0,1,1.23.07A3,3,0,0,1,4,8.82a10.19,10.19,0,0,1,.56,3.45A10.21,10.21,0,0,1,4,15.73,3,3,0,0,1,3.12,17a1,1,0,0,1-1.23.08Zm-1.45-2a.29.29,0,0,0-.33.06.3.3,0,0,0,0,.43A1.16,1.16,0,0,0,.77,16a1.37,1.37,0,0,0,.82-.16,2.54,2.54,0,0,0,.93-1.07,5.47,5.47,0,0,0,.54-2.46,5.5,5.5,0,0,0-.54-2.46,2.52,2.52,0,0,0-.93-1.06,1.45,1.45,0,0,0-.82-.17A1.16,1.16,0,0,0,.08,9a.32.32,0,0,0,0,.34.3.3,0,0,0,.4.15h0a.47.47,0,0,1,.61.09,1.89,1.89,0,0,1,.44.74,6.35,6.35,0,0,1,.3,2,6.27,6.27,0,0,1-.3,2,2,2,0,0,1-.43.75.47.47,0,0,1-.62.08h0Zm15.73-2.83a4.1,4.1,0,0,1-3.94,4.25,4.1,4.1,0,0,1-3.94-4.25A4.1,4.1,0,0,1,12.22,8,4.1,4.1,0,0,1,16.16,12.27Zm-3.94,6C7.13,18.28,4,21.78,4,24.92c0,1.23.78,1.85,2.31,1.85H18.16c1.53,0,2.31-.62,2.31-1.85,0-3.14-3.16-6.64-8.25-6.64Z">
                                </path>
                            </svg>
                        </div>
                        <p className="text-[16px] md:text-[20px] font-semibold md:leading-7 tracking-tight text-[#adb2b8]"><span
                            className="text-white">Personalized
                            Spatial Audio</span> with dynamic head tracking gives you a theater‑like experience with
                            sound that surrounds you for movies, TV shows, and games. Using built-in gyroscopes and accelerometers,
                            AirPods Max and your iPhone, iPad, Mac, or Apple TV track the subtle motion of your head, anchoring sounds
                            to your device.</p>
                    </div>

                    <div className='gridcol'>
                        <div className='h-12 md:h-[50px] flex items-center mb-3 sm:mb-[18px]'>
                            <svg className="hifi_sound_detail_icon_adaptive_eq max-h-full fill-current" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 21.1 25.1">
                                <path className="cls-1"
                                    d="M20.55,16.59A.55.55,0,0,1,20,16V9a.55.55,0,0,1,1.1,0v7A.55.55,0,0,1,20.55,16.59ZM17.1,21.67V3.42a.55.55,0,0,0-1.1,0V21.67a.55.55,0,0,0,1.1,0Zm-3.89-3.12v-12A.55.55,0,0,0,12.66,6a.55.55,0,0,0-.55.55v12a.55.55,0,0,0,.55.55A.55.55,0,0,0,13.21,18.55Zm-4.11,6V.55A.55.55,0,0,0,8.55,0,.55.55,0,0,0,8,.55v24a.55.55,0,0,0,.55.55A.55.55,0,0,0,9.1,24.55Zm-4-5v-14a.55.55,0,0,0-1.1,0v14a.55.55,0,1,0,1.1,0Zm-4-4.75V10.3a.55.55,0,0,0-.55-.55A.55.55,0,0,0,0,10.3v4.5a.55.55,0,0,0,.55.55A.55.55,0,0,0,1.1,14.8Z">
                                </path>
                            </svg>
                        </div>
                        <p className="text-[16px] md:text-[20px] font-semibold md:leading-7 tracking-tight text-[#adb2b8]"><span
                            className="text-white">Adaptive
                            EQ</span> tailors sound to the bespoke fit and seal created by the ear cushions. Inward-facing
                            microphones measure what you're hearing, then adjust the frequencies of your music to deliver a rich,
                            consistent experience that faithfully reproduces every note.</p>
                    </div>

                    <div className='gridcol'>
                        <div className='h-7 md:h-[30px] lg:h-[45px] flex items-center mb-3 sm:mb-[18px]'>
                            <svg className="hifi-sound-detail-icon-lossless-audio max-h-full fill-current"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0.5 27.28 97 51.33">
                                <path className="cls-1"
                                    d="m44.4949 78.6097c3.174 0 5.5032-1.5604 7.3034-3.4843l-2.2234-3.2231c-1.2034 1.2034-2.5199 1.8657-3.9139 1.8657-10.1436 0-11.6476-46.4883-29.1627-46.4883-10.0389 0-14.5364 14.9005-15.9701 28.6264-.1776 1.5408.4919 2.3796 1.8013 2.3796 1.011 0 1.6077-.5807 1.7314-1.745.9365-8.6436 4.2786-24.3414 10.9048-24.3414 3.7144 0 5.8514 4.3295 7.1027 8.8099-1.2217 3.9773-2.2766 8.3447-2.9815 14.8968-.1587 1.5408.4866 2.3796 1.8012 2.3796 1.0217 0 1.6131-.5807 1.761-1.745.2558-2.4584.9507-7.117 1.6321-9.477 3.7263 12.3941 9.1326 31.5459 20.2138 31.5459zm18.6017 0c2.7994 0 5.2015-1.2585 6.9773-3.1391l-2.334-3.1693c-.9121.8044-2.102 1.4667-3.4717 1.4667-10.0169 0-11.5992-46.4883-29.1627-46.4883-3.344 0-5.7757 1.5604-7.5758 3.4842l2.272 3.3202c1.2465-1.2224 2.5145-1.8848 3.9086-1.8848 9.7345 0 11.743 46.4103 29.3863 46.4103zm18.3888 0c10.0145 0 14.5364-14.9005 15.9997-28.6265.1236-1.5408-.5214-2.3743-1.8551-2.3743-.9868 0-1.5834.5754-1.7315 1.764-.9068 8.6246-4.2437 24.2929-10.8806 24.2929-3.7143 0-5.8756-4.3053-7.0974-8.8099 1.2165-3.953 2.2525-8.3203 2.9817-14.8727.1291-1.5408-.4919-2.3743-1.8066-2.3743-1.0406 0-1.6372.5754-1.761 1.764-.2799 2.4342-.9506 7.0685-1.6562 9.4528-3.7021-12.3941-9.1083-31.5459-20.1895-31.5459-3.174 0-5.5032 1.5604-7.2791 3.5084l2.2044 3.2231c1.1981-1.2277 2.5146-1.8901 3.9086-1.8901 10.1435 0 11.6529 46.4884 29.1627 46.4884z">
                                </path>
                            </svg>
                        </div>
                        <p className="text-[16px] md:text-[20px] font-semibold md:leading-7 tracking-tight text-[#adb2b8]"><span
                            className="text-white">Lossless Audio</span> preserves every detail of the original recording, whether you’re
                            enjoying a movie or music. Simply connect AirPods Max to your device by USB‑C to enable Lossless Audio
                            content. If you create your own audio in apps like Logic Pro and GarageBand, you’ll also get ultra-low
                            latency on par with the built-in speakers on Mac, iPad, and iPhone.</p>
                    </div>
                </div>

            </div>


            <div onClick={() => setIsModalOpen(true)} ref={learnMoreRef} className='flex justify-between gap-3 items-center cursor-pointer w-max mx-auto bg-white/15 backdrop-blur-md rounded-full px-3 py-2 md:py-3'>
                <div className='text-white text-[13.5px] md:text-[15px] lg:text-[16px] ps-2 font-medium'>
                    Learn more about high-fidelity audio
                </div>
                <div className='bg-blue-500 p-0.5 rounded-full size-9 flex justify-center items-center'>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M6 12H18M12 6V18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            </path> </g>
                    </svg>
                </div>
            </div>

            {/* Modal */}
            <Modal open={isModalOpen} close={() => setIsModalOpen(false)} />

        </section >

    )
}

export default HifiSoundPage