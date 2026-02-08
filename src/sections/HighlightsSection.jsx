import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import CardCarousel from "../components/CardCarousel"

gsap.registerPlugin(ScrollTrigger)

const HighlightsPage = () => {
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
      autoAlpha: 0,
      y: 50,
      duration: 0.6,
      delay: 0.3,
    })
  },
    { scope: containerRef }
  )

  return (
    <section className="highlights-section py-24 sm:py-28 overflow-x-clip">
      <div
        ref={containerRef}
        className="w-[87.5%] max-w-[1680px] mx-auto"
      >
        <h2
          ref={titleRef}
          className="text-[32px] md:text-[42px] lg:text-[48px] xl:text-[56px] tracking-tight sm:leading-none sm:tracking-tighter font-semibold pb-12 sm:pb-20"
        >
          Get the highlights.
        </h2>
      </div>

      {/* Sliding Cards */}
      <CardCarousel />
    </section>
  )
}

export default HighlightsPage
