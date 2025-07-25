import React from 'react';

export const AnnouncementBar = () => {
  const text = 'MAKE THE BOLD MOVE';
  return (
    <div
      className="bg-black overflow-hidden w-full marquee marquee--hover-pause announcement-bar js-announcement-bar"
      style={{
        minHeight: '39px',
        height: '39px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        background: '#000000',
        padding: '8px 0px 11px',
      }}
    >
      <div
        className="animate-scroll flex whitespace-nowrap items-center"
        style={{
          height: '100%',
          fontFamily: 'Avenir Next, sans-serif',
          fontSize: '10px',
          color: '#FFFFFF',
          fontWeight: 400,
          letterSpacing: '0.04em',
        }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} style={{ marginRight: '32px', whiteSpace: 'nowrap' }}>{text}</span>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .marquee--hover-pause:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

const ScrollingTicker = () => {
  // Marquee text parts
  
  return (
    <div className="bg-black overflow-hidden w-full marquee marquee--hover-pause" style={{ minHeight: '170px', display: 'flex', alignItems: 'center' }}>
      <div className="animate-scroll flex whitespace-nowrap items-center" style={{ height: '100%' }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="flex items-center" style={{ marginRight: '48px' }}>
            <span
              className="forTheScroll"
              style={{
                color: '#000',
                fontFamily: 'Blackheat, sans-serif',
                fontWeight: 400,
                fontSize: '81px',
                letterSpacing: '0.01em',
                background: 'transparent',
                marginRight: '10px', // equal space after FOR
                lineHeight: 1,
                padding: 0,
                display: 'inline-block',
                WebkitTextStroke: '1px #fff',
              }}
            >
              FOR
            </span>
            <span
              className="forTheScroll"
              style={{
                color: '#000',
                fontFamily: 'Blackheat, sans-serif',
                fontWeight: 400,
                fontSize: '81px',
                letterSpacing: '0.01em',
                background: 'transparent',
                marginRight: '20px', // equal space after THE
                lineHeight: 1,
                padding: 0,
                display: 'inline-block',
                WebkitTextStroke: '1px #fff',
              }}
            >
              THE
            </span>
            <span
              className="relentlessScroll"
              style={{
                color: '#FFFFFF',
                fontFamily: 'Blackheat, sans-serif',
                fontWeight: 400,
                fontSize: '81px',
                letterSpacing: '0.01em',
                lineHeight: 1,
                padding: 0,
                display: 'inline-block',
              }}
            >
              RELENTLESS
            </span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 50s linear infinite;
        }
        .marquee--hover-pause:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ScrollingTicker;