import LimitlessHeader from './LimitlessHeader';
import LimitlessCarouselSection from './LimitlessCarouselSection';

// AnnouncementBar for Limitless Page
const AnnouncementBar: React.FC = () => (
  <div className="announcement-bar bar js-announcement-bar" style={{ background: '#000', width: '100%', fontFamily: 'Avenir Next, sans-serif', fontSize: '13px', color: '#fff', letterSpacing: '1px', borderBottom: '1px solid #222', minHeight: '32px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
    <div className="container max-w-fluid" style={{ width: '100%' }}>
      <div className="announcement-bar__wrapper" style={{ width: '100%' }}>
        <div className="announcement_bar__marquee marquee--hover-pause enable-animation" style={{ width: '100%', overflow: 'hidden', overflowX: 'hidden', whiteSpace: 'nowrap', minWidth: 0, display: 'flex', position: 'relative' }}>
          <ul className="marquee__content" style={{ display: 'inline-flex', animation: 'marquee 20s linear infinite', minWidth: 0 }}>
            {Array.from({ length: 12 }).map((_, i) => (
              <li className="marquee__item icon text--label" key={i} style={{ marginRight: '32px' }}>
                <p style={{ margin: 0 }}>MAKE THE <strong>BOLD</strong> MOVE</p>
              </li>
            ))}
          </ul>
          <ul aria-hidden="true" className="marquee__content" style={{ display: 'inline-flex', animation: 'marquee 20s linear infinite', position: 'absolute', left: 0, top: 0, opacity: 0, minWidth: 0 }}>
            {Array.from({ length: 12 }).map((_, i) => (
              <li className="marquee__item icon text--label" key={i} style={{ marginRight: '32px' }}>
                <p style={{ margin: 0 }}>MAKE THE <strong>BOLD</strong> MOVE</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <style>{`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}</style>
  </div>
);

const LimitlessCollectionPage: React.FC = () => {
  return <>
    <AnnouncementBar />
    <LimitlessHeader />
    <LimitlessCarouselSection />
  </>;
};

export default LimitlessCollectionPage; 