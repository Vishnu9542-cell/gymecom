import React from 'react';

const FeaturedSection = () => {
  return (
    <section
      className="relative overflow-hidden my-0 mt-6 rounded-2xl mx-auto"
      style={{ background: 'black', padding: 0, width: '1448.8px', height: '600px', maxWidth: '100%' }}
    >
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/gym video1.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ borderRadius: '16px', width: '1448.8px', height: '600px', maxWidth: '100%' }}
      />
      <div
        className="relative flex flex-col items-center justify-center text-center"
        style={{
          zIndex: 2,
          color: '#fff',
          fontFamily: 'Avenir Next, sans-serif',
          padding: '32px',
          minHeight: '600px',
          width: '100%',
        }}
      >
        <p
          style={{
            fontSize: '14px',
            fontFamily: 'Avenir Next, sans-serif',
            marginBottom: '16px',
            letterSpacing: '1px',
            opacity: 0.9,
          }}
        >
          WE'RE FUELING
        </p>
        <h2
          style={{
            fontSize: '3rem',
            fontWeight: 400,
            lineHeight: 1.1,
            marginBottom: '24px',
            maxWidth: '900px',
            fontFamily: 'Avenir Next, sans-serif',
          }}
        >
          INDIA'S BIGGEST <strong style={{ fontWeight: 700 }}>SPORTS REVOLUTION</strong>
        </h2>
        <a
          href="#"
          className="inline-block border border-white text-white px-8 py-3 rounded-full text-sm font-semibold tracking-wider hover:bg-white hover:text-black transition-colors duration-300 capitalize"
          style={{ background: 'rgba(255,255,255,0.05)', fontFamily: 'Avenir Next, sans-serif', letterSpacing: '1px' }}
        >
          EXPLORE
        </a>
      </div>
      {/* Overlay for darkening video if needed */}
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '16px', zIndex: 1 }} />
    </section>
  );
};

export default FeaturedSection;