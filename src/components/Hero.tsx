import React, { useEffect, useRef, useState } from 'react';
import gymEcomImg from '../assets/gym ecom1.webp';
import Header from './Header';

const   Hero = () => {
  const [isSticky, setIsSticky] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight;
        setIsSticky(window.scrollY >= heroHeight);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="w-full relative" ref={heroRef}>
      {/* Header inside hero image, becomes sticky on scroll */}
      <div className={
        isSticky
          ? 'fixed top-0 left-0 w-full z-40 transition-all'
          : 'absolute top-0 left-0 w-full z-30 transition-all'
      }>
        <Header sticky={isSticky} />
      </div>
      <img
        src={gymEcomImg}
        alt="Gym Ecom"
        className="w-full h-auto block"
        style={{ display: 'block', width: '100%', height: 'auto', margin: 0, padding: 0 }}
      />
      {/* Centered SHOP NOW button over the image */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-8 z-20 pointer-events-none">
        <button className="bg-white text-black font-bold px-5 py-2 rounded shadow-lg text-base tracking-wider hover:bg-black hover:text-white transition pointer-events-auto">
          SHOP NOW
        </button>
      </div>
    </section>
  );
};

export default Hero;