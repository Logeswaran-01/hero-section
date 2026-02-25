import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Car from '../assets/car.png'

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const carRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ✨ Stagger letters animation
      gsap.from(".letter", {
        y: 120,
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        ease: "power3.out"
      });

      // 🚗 Car cinematic movement
      gsap.fromTo(
        carRef.current,
        { x: "-120vw", scale: 0.9, rotate: -5 },
        {
          x: "120vw",
          scale: 1.05,
          rotate: 5,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=2500",
            scrub: 1,
            pin: true
          }
        }
      );

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const text = "WELCOME ITZFIZZ";

  return (
    <section
      ref={heroRef}
      className="relative h-screen overflow-hidden bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"
    >
      {/* Road */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full h-40 bg-black shadow-inner"></div>

      {/* Green Banner */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full bg-green-500 py-20 z-10">
        <h1 className="text-black text-6xl md:text-8xl font-bold tracking-[0.15em] text-center flex justify-center flex-wrap">
          {text}
        </h1>
      </div>

      {/* Car */}
      <img
        ref={carRef}
        src={Car}
        alt="car"
        className="absolute top-1/2 -translate-y-1/2 w-[450px] z-20 pointer-events-none"
      />
    </section>
  );
};

export default Hero;