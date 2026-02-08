import gsap from "gsap";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const details = [
  {
    id: 1,
    title: "Microphones",
    description:
      "To cancel unwanted external noise, AirPods Max use six outward-facing microphones to detect noise in your environment, and two inward-facing microphones to measure what you’re hearing. Beamforming microphones help isolate your voice on phone calls, so it’s heard clearly — even in windy situations.",
    img: "./images/hifi-sound/modal/audio_bc_microphone_large.png",
  },
  {
    id: 2,
    title: "Driver",
    description:
      "The Apple-designed dynamic driver produces an extended frequency range that uncovers the rich details of every sound — delivering your favourite songs with previously unheard texture and accuracy.",
    img: "./images/hifi-sound/modal/audio_bc_driver_large.png",
  },
  {
    id: 3,
    title: "Distortionless Playback",
    description:
      "Modelled after those in high-end floor-standing speakers, the driver’s dual-neodymium ring magnet motor minimises total harmonic distortion across the entire audible range. The result is consistently clear playback, even at full volume.",
    img: "./images/hifi-sound/modal/audio_bc_distortionless_playback_large.png",
  },
];

const Modal = ({ open, close }) => {

  const [isActive, setIsActive] = useState(1);
  const [description, setDescription] = useState(details[0].description);
  const [img, setImg] = useState(details[0].img);

  const tabsRef = useRef([]);
  // const pillRef = useRef(null);

  const modalRef = useRef(null);

  useEffect(() => {
    if (!open || !modalRef.current) return;

    gsap.from(modalRef.current, {
      autoAlpha: 0,
      y: 300,
      duration: 1.2,
      ease: "power3.out",
    })
  }, [open]);

  const changeDetails = (id, description, img) => {
    setDescription(description);
    setImg(img);
    setIsActive(id);
  };

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
      className={`fixed inset-0 z-60 backdrop-blur-lg py-4 px-2 lg:px-4 overflow-y-scroll ${open ? "block" : "hidden"
        }`}
    >
      <div ref={modalRef} className="relative sm:h-full min-h-[calc(100vh-32px)] pt-20 pb-30 md:py-20 rounded-2xl bg-linear-to-t from-[#1d1d1d] from-15% to-[#81c2e6] md:bg-linear-to-bl md:from-[#1d1d1d] md:from-5% md:to-[#81c2e6]">
        <button
          className={`z-80 cursor-pointer flex justify-center items-center absolute top-4 right-4 size-9 text-black text-2xl bg-white rounded-full`}
          onClick={close}
        >
          <span>
            <img src="./close.png" className="p-2" alt="" />
          </span>
        </button>

        {/* sm title */}
        <h1 className="block md:hidden text-center font-semibold text-white text-[38px] tracking-tight mb-10">
          High-fidelity details.
        </h1>
        <div className="w-[92%] lg:w-[87.5%] max-w-[1680px] mx-auto h-full flex items-start md:items-center pb-10 md:pb-0">

          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="w-[280px] md:w-[290px] lg:w-[350px] xl:w-[400px] flex justify-center items-center mx-auto">
              <img src={img} alt="Airpods Max" className="w-full h-auto" />
            </div>

            <div className="flex flex-col items-center md:items-start justify-center gap-5 lg:gap-10 xl:gap-14">
              <h1 className="hidden md:block font-semibold text-white text-3xl md:text-[42px] lg:text-[45px] xl:text-[52px] tracking-tight">
                High-fidelity details.
              </h1>
              <div className="bg-gray-800 py-1 px-1 rounded-full mt-10 md:mt-4 mb-4 lg:my-0">
                <ul className="flex justify-start gap-1 text-sm md:text-[15px] p-px whitespace-nowrap">
                  {details.map((detail, index) => (
                    <li
                      key={detail.id}
                      ref={(el) => (tabsRef.current[index] = el)}
                      onClick={() =>
                        changeDetails(
                          detail.id,
                          detail.description,
                          detail.img,
                          index
                        )
                      }
                      className={`shrink-0 bg-gray-800 px-2 lg:px-3 xl:px-4 py-2 rounded-full cursor-pointer text-xs lg:text-sm xl:text-[15px] whitespace-nowrap transition-all duration-500 ease-out ${isActive === detail.id
                        ? "bg-white text-gray-800"
                        : "text-white"
                        }`}
                    >
                      {detail.title}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="h-15 md:h-30 text-white text-center md:text-left font-medium text-[15px] md:text-[17px] lg:text-lg md:leading-6.5">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
