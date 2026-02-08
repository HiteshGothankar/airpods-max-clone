import gsap from 'gsap';
import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';

const DetailsModal = ({ open, close }) => {

  const DetailsModalRef = useRef(null)

  useEffect(() => {
    if (!open || !DetailsModalRef.current) return;

    gsap.from(DetailsModalRef.current, {
      autoAlpha: 0,
      y: 300,
      duration: 1.2,
      ease: "power3.out",
    })
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 z-60 bg-black/50 py-6 md:py-10 px-2 lg:px-4 2xl:px-10 overflow-y-scroll ${open ? "block" : "hidden"}`}>
      <div ref={DetailsModalRef} className="rounded-3xl overflow-hidden bg-white shadow-md">

        <div className='relative flex flex-col'>

          {/* Close Button */}
          <div className='flex justify-center items-center absolute top-4 right-4 bg-black rounded-full size-10 p-2.5 z-20 cursor-pointer'>
            <button onClick={close}>
              <img src="./white-close.png" alt="" />
            </button>
          </div>

          {/* section 1 */}
          <div className='relative w-full sm:min-h-[870px] xl:min-h-[910px] 2xl:min-h-[1100px] flex flex-col items-center justify-between bg-gray-100'>
            {/* content */}
            <h2 className="text-center modal_header z-10 max-w-[296px] sm:max-w-[756px] text-[40px] sm:text-[56px] leading-[1.15] tracking-tight font-semibold mt-20 sm:mt-32">
              A radically original composition.
            </h2>

            <p className="text-center box-content z-10 max-w-[320px] sm:max-w-[580px] text-[16px] sm:text-[21px] text-[#504e4e] font-semibold leading-tight sm:tracking-tight p-5 mt-55 sm:mt-0 mb-12 sm:mb-16">
              <span className="text-[#1d1d1f]">Digital Crown.</span> Press the Digital Crown
              to play and pause music or mute and unmute yourself on calls, and press twice
              to skip between tracks or end calls. Turn it to precisely control volume.
            </p>

            {/* image */}
            <div className='absolute inset-0 bottom-0 flex justify-center overflow-hidden'>
              <picture>
                <source media="(max-width:734px)" srcSet="/images/design/modal/design_bc_digital_crown_xsmall_2x.jpg 2x" />
                <source media="(max-width:1068px)" srcSet="/images/design/modal/design_bc_digital_crown__hz082ipmu72a_medium_2x.jpg 2x" />
                <source media="(max-width:1440px)" srcSet="/images/design/modal/design_bc_digital_crown__hz082ipmu72a_large_2x.jpg 2x" />
                <source media="(min-width:1441px)" srcSet="/images/design/modal/design_bc_digital_crown_xlarge.jpg 2x" />
                <img
                  src="/images/design/modal/design_bc_digital_crown_xlarge.jpg"
                  alt=""
                  className="block w-[450px] md:w-[1000px] xl:w-[1500px] 2xl:w-[2050px] max-w-none h-auto object-cover" />
              </picture>
            </div>
          </div>

          {/* section 2 */}
          <div className='px-3 pt-6 pb-2'>
            <div className='relative bg-gray-100 min-h-[450px] md:min-h-screen 2xl:min-h-[980px] rounded-3xl flex flex-col items-center justify-start md:justify-end xl:justify-center md:pb-30 lg:pb-25 xl:pb-0 xl:pt-60 2xl:pt-70 overflow-hidden'>
              {/* content */}
              <p className="text-center box-content z-10 max-w-[320px] md:max-w-[350px] xl:max-w-[450px] text-[16px] md:text-[19px] lg:text-[19px] text-[#807f7f] font-semibold sm:tracking-tight p-5 mt-10">
                <span className="text-[#1d1d1f]">Canopy.</span> The canopy spanning the headband is made from a breathable knit mesh, distributing weight to reduce on‑head pressure.
              </p>
              {/* image */}
              <div className='absolute bottom-0 z-0 flex justify-center'>
                <picture>
                  <source media="(max-width:480px)" srcSet="/images/design/modal/design_bc_canopy_xsmall_2x.jpg 2x" />
                  <source media="(max-width:1068px)" srcSet="/images/design/modal/design_bc_canopy__b7w4pmsxfehe_medium_2x.jpg 2x" />
                  <source media="(min-width:1069px)" srcSet="/images/design/modal/design_bc_canopy_large.jpg 2x" />
                  <img
                    src="/images/design/modal/design_bc_canopy_large.jpg"
                    alt=""
                    className="w-[440px] md:w-[1028px] xl:w-[1900px] h-[590px] md:h-[760px] xl:h-[980px] object-cover" />
                </picture>
              </div>
            </div>
          </div>

          {/* section 3 */}
          <div className='px-3 py-2'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

              {/* 1st part */}
              <div className='relative bg-gray-100 min-h-[550px] md:min-h-[113vh] lg:min-h-[105vh] 2xl:min-h-[1020px] rounded-3xl overflow-hidden'>
                {/* content */}
                <div className="relative z-10 w-full flex justify-center pt-[355px] md:pt-[480px] lg:pt-[500px] xl:pt-[770px] 2xl:pt-[850px]">
                  <p className="text-center max-w-[320px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[550px]
                    text-[16px] md:text-[19px] text-[#807f7f] font-semibold">
                    <span className="text-[#1d1d1f]">Cushions.</span> Crafted with acoustically engineered memory foam and a custom-designed mesh textile, the pillow-like softness of the ear cushions gently creates an immersive seal that is the foundation of incredible sound.
                  </p>
                </div>
                {/* image */}
                <div className='absolute inset-x-0 top-0 z-0 flex justify-center'>
                  <picture>
                    <source media="(max-width:480px)" srcSet="/images/design/modal/design_bc_cushions_xsmall_2x.jpg 2x" />
                    <source media="(max-width:1068px)" srcSet="/images/design/modal/design_bc_cushions__bfc2id1lrj5u_medium_2x.jpg 2x" />
                    <source media="(min-width:1069px)" srcSet="/images/design/modal/design_bc_cushions_large.jpg 2x" />
                    <img
                      src="/images/design/modal/design_bc_cushions_large.jpg"
                      alt=""
                      className="w-[440px] md:w-[1028px] xl:w-[2000px] 2xl:w-[900px] h-[590px] md:h-[760px] xl:h-[1080px] 2xl:h-[1200px] object-cover" />
                  </picture>
                </div>
              </div>

              {/* 2nd Part */}
              <div className='relative bg-gray-100 min-h-[550px] md:min-h-[113vh] lg:min-h-[105vh] 2xl:min-h-[1020px] rounded-3xl overflow-hidden'>
                {/* content */}
                <div className="relative z-10 w-full flex justify-center pt-[355px] md:pt-[480px] lg:pt-[500px] xl:pt-[770px] 2xl:pt-[850px]">
                  <p className="text-center max-w-[320px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[550px]
                  text-[16px] md:text-[19px] text-[#807f7f] font-semibold">
                    <span className="text-[#1d1d1f]">Cups.</span> The beautifully anodised aluminium cups feature a revolutionary mechanism that allows each cup to rotate independently and balance pressure.
                  </p>
                </div>
                {/* image */}
                <div className='absolute inset-x-0 top-0 z-0 flex justify-center'>
                  <picture>
                    <source media="(max-width:480px)" srcSet="/images/design/modal/design_bc_cups_xsmall_2x.jpg 2x" />
                    <source media="(max-width:1068px)" srcSet="/images/design/modal/design_bc_cups__ch8o1nr33ic2_medium_2x.jpg 2x" />
                    <source media="(min-width:1069px)" srcSet="/images/design/modal/design_bc_cups_large.jpg 2x" />
                    <img
                      src="/images/design/modal/design_bc_cushions_large.jpg"
                      alt=""
                      className="w-[440px] md:w-[1028px] xl:w-[2000px] 2xl:w-[900px] h-[590px] md:h-[760px] xl:h-[1080px] 2xl:h-[1200px] object-cover" />
                  </picture>
                </div>
              </div>

            </div>
          </div>


          {/* section 4 */}
          <div className='px-3 pt-2 pb-6'>
            <div className='relative bg-gray-100 min-h-[530px] md:min-h-[110vh] lg:min-h-[105vh] 2xl:min-h-[980px] rounded-3xl flex flex-col items-center justify-end overflow-hidden'>
              {/* content */}
              <p className="text-center box-content z-10 max-w-[320px] md:max-w-[500px] lg:max-w-[550px] xl:max-w-[600px] text-[16px] md:text-[19px] lg:text-[19px] text-[#e0e0e0] font-semibold sm:tracking-tight pb-15 md:pb-25 xl:pb-30">
                <span className="text-white">Telescoping arms.</span> The telescoping arms smoothly extend from the stainless steel frame — staying where you set them for a consistent fit and seal.
              </p>
              {/* image */}
              <div className='absolute bottom-0 z-0 flex justify-center'>
                <picture>
                  <source media="(max-width:480px)" srcSet="/images/design/modal/design_bc_telescoping_arms_xsmall_2x.jpg 2x" />
                  <source media="(max-width:1068px)" srcSet="/images/design/modal/design_bc_telescoping_arms__dmdhh49omgq6_medium_2x.jpg 2x" />
                  <source media="(min-width:1069px)" srcSet="/images/design/modal/design_bc_telescoping_arms_large.jpg 2x" />
                  <img
                    src="/images/design/modal/design_bc_telescoping_arms_large.jpg"
                    alt=""
                    className="w-[400px] md:w-[1000px] xl:w-[1700px] 2xl:w-[1800px] h-[550px] md:h-[730px] xl:h-[110vh] 2xl:h-[980px] object-cover" />
                </picture>
              </div>
            </div>
          </div>

          {/* section 5 */}
          <div className='relative bg-gray-100 min-h-[530px] md:min-h-[110vh] lg:min-h-[105vh] 2xl:min-h-[980px] flex flex-col items-center justify-end overflow-hidden'>
            {/* content */}
            <p className="text-center box-content z-10 max-w-[320px] md:max-w-[530px] lg:max-w-[550px] xl:max-w-[600px] text-[16px] md:text-[19px] lg:text-[19px] text-[#504e4e] font-semibold sm:tracking-tight pb-15 md:pb-25 lg:pb-15 xl:pb-30">
              <span className="text-[#1d1d1f]">Smart Case.</span> When stored in their soft, slim Smart Case, AirPods Max enter an ultra‑low‑power state that preserves charge.
            </p>
            {/* image */}
            <div className='absolute inset-0 z-0 flex justify-center'>
              <picture>
                <source media="(max-width:480px)" srcSet="/images/design/modal/design_bc_smart_case_xsmall_2x.jpg 2x" />
                <source media="(max-width:1068px)" srcSet="/images/design/modal/design_bc_smart_case__b82sp24aczpy_medium_2x.jpg 2x" />
                <source media="(min-width:1069px)" srcSet="/images/design/modal/design_bc_smart_case_large.jpg 2x" />
                <img
                  src="/images/design/modal/design_bc_smart_case_large.jpg"
                  alt=""
                  className="w-[450px] md:w-[1000px] xl:w-[1700px] 2xl:w-[1800px] h-[600px] md:h-[800px] xl:h-[110vh] 2xl:h-[980px] object-cover" />
              </picture>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DetailsModal