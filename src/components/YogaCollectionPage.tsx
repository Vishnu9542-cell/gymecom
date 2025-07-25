import React, { useState } from 'react';
import LimitlessHeader from './LimitlessHeader';
import { Search, User, ShoppingCart, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

// AnnouncementBar (copied from LimitlessCollectionPage)
const AnnouncementBar: React.FC = () => (
  <div className="announcement-bar bar js-announcement-bar" style={{ background: '#000', width: '100%', fontFamily: 'Avenir Next, sans-serif', fontSize: '13px', color: '#fff', letterSpacing: '1px', borderBottom: '1px solid #222', minHeight: '32px', display: 'flex', alignItems: 'center', overflow: 'hidden', position: 'relative', zIndex: 20 }}>
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

// Transparent header for Yoga Collection only
const TransparentYogaHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLimitlessOpen, setIsLimitlessOpen] = useState(false);
  const [clickedMenu, setClickedMenu] = useState<string | null>(null);
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const handleMenuClick = (label: string) => {
    setClickedMenu(label);
    setTimeout(() => setClickedMenu(null), 180);
  };
  return (
    <header className="w-full z-40 font-['Avenir_Next',_sans-serif] transition-all duration-300" style={{ background: 'transparent', position: 'relative' }}>
      <nav className="w-full px-0">
        <div className="flex items-center h-16 header__inner" style={{padding: '16px 0px'}}>
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center header__logo" style={{height: '100%', marginLeft: '32px'}}>
            <a href="/" className="full-unstyled-link flex items-center h-full">
              <img src="//www.boldfit.com/cdn/shop/files/Group.png?v=1744700833&width=50" alt="Boldfit" width="57" height="36" loading="eager" className="header__logo-image-transparent new" style={{display: 'block', margin: 0, padding: 0, height: '36px'}} />
            </a>
          </div>
          {/* Menu and Icons as siblings */}
          <div className="flex items-center justify-center gap-6 mx-auto">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-3" style={{width: '1128px', height: '64px', margin: '0 auto'}}>
              <Link to="/collections/limitless" className="header__nav-link js-nav-link text--link text-[14px] font-normal uppercase tracking-wide px-2 py-1 whitespace-nowrap transition-colors duration-300 flex items-center text-white" title="LIMITLESS COLLECTION">LIMITLESS COLLECTION</Link>
              <Link to="/collections/yoga-collection" className="header__nav-link js-nav-link text--link text-[14px] font-normal uppercase tracking-wide px-2 py-1 whitespace-nowrap transition-colors duration-300 flex items-center text-white" title="YOGA COLLECTION">YOGA COLLECTION</Link>
              <button className="text-[12px] font-normal uppercase tracking-wide px-2 py-1 flex items-center whitespace-nowrap transition-colors duration-300 text-white">MEN <ChevronDown className="ml-1 h-4 w-4 text-white" /></button>
              <button className="text-[12px] font-normal uppercase tracking-wide px-2 py-1 flex items-center whitespace-nowrap transition-colors duration-300 text-white">WOMEN <ChevronDown className="ml-1 h-4 w-4 text-white" /></button>
              <button className="text-[12px] font-normal uppercase tracking-wide px-2 py-1 flex items-center whitespace-nowrap transition-colors duration-300 text-white">SHOP BY SPORTS <ChevronDown className="ml-1 h-4 w-4 text-white" /></button>
              <button className="text-[12px] font-normal uppercase tracking-wide px-2 py-1 flex items-center whitespace-nowrap transition-colors duration-300 text-white">FOOTWEAR <ChevronDown className="ml-1 h-4 w-4 text-white" /></button>
              <a href="#" className="text-[14px] font-normal uppercase tracking-wide px-2 py-1 whitespace-nowrap transition-colors duration-300 text-white">GRAPHIC TEES</a>
              <a href="#" className="text-[14px] font-normal uppercase tracking-wide px-2 py-1 whitespace-nowrap transition-colors duration-300 text-white font-bold">NEW ARRIVALS <span className="text-white">⚡</span></a>
            </div>
            {/* Right Side Icons */}
            <ul className="header__utils-items list-unstyled flex items-center gap-6" style={{fontSize: '14px', margin: '-3px -12px'}}>
              <li className="header__utils-item"><span className="uppercase tracking-wide text-white">INDIA</span></li>
              <li className="header__utils-item"><Search className="h-5 w-5 cursor-pointer text-white" /></li>
              <li className="header__utils-item"><User className="h-5 w-5 cursor-pointer text-white" /></li>
              <li className="header__utils-item"><div className="relative"><ShoppingCart className="h-5 w-5 cursor-pointer text-white" />{totalItems > 0 && (<span className="absolute -top-2 -right-2 bg-blue-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{totalItems}</span>)}</div></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

const YogaCollectionPage: React.FC = () => {
  return <div style={{ position: 'relative', width: '100vw', minHeight: '100vh', overflow: 'hidden', paddingRight: '16px' }}>
    <div style={{ width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 1 }}>
      <img
        srcSet="//www.boldfit.com/cdn/shop/files/Desktop_375x.webp?v=1749536793 375w,//www.boldfit.com/cdn/shop/files/Desktop_750x.webp?v=1749536793 750w,//www.boldfit.com/cdn/shop/files/Desktop_1100x.webp?v=1749536793 1100w,//www.boldfit.com/cdn/shop/files/Desktop_1500x.webp?v=1749536793 1500w,//www.boldfit.com/cdn/shop/files/Desktop_1780x.webp?v=1749536793 1780w,//www.boldfit.com/cdn/shop/files/Desktop_2000x.webp?v=1749536793 2000w,//www.boldfit.com/cdn/shop/files/Desktop_1900x.webp?v=1749536793 3382w"
        src="//www.boldfit.com/cdn/shop/files/Desktop_1900x.webp?v=1749536793"
        loading="eager"
        alt="banner"
        width={1520.8}
        height={567.49}
        style={{ width: '100vw', height: '567.49px', objectFit: 'cover', borderRadius: '0px', display: 'block' }}
      />
    </div>
    {/* Heading Section Below Banner */}
    <div className="container max-w-fluid" style={{ width: '1520.8px', padding: '0 76.0375px', margin: '40px auto 0 auto', color: '#0A0A0A', fontFamily: 'Avenir Next, sans-serif' }}>
      <div className="section__head">
        <div className="section__head-title">
          <span className="text--label rte" style={{ fontSize: '12px', color: '#0A0A0A', fontFamily: 'Avenir Next, sans-serif', margin: '0 0 -4px 0', padding: '6.25px 0px', display: 'inline-block' }}>EXPLORE</span>
          <h2 className="section__heading h4" style={{ fontSize: '36px', fontWeight: 400, margin: 0, padding: 0, color: '#0A0A0A', fontFamily: 'Avenir Next, sans-serif' }}>
            YOGA <strong style={{ fontWeight: 700 }}>COLLECTION' 25</strong>
          </h2>
        </div>
      </div>
    </div>
    {/* Breadcrumbs below heading */}
    <ul className="breadcrumbs__list list-unstyled no-scrollbar" role="list" style={{ width: '1368.72px', fontSize: '10px', fontFamily: 'Avenir Next, sans-serif', color: '#0A0A0A', margin: '12px 0 0 8px', padding: 0, display: 'flex', alignItems: 'center', gap: '4px' }}>
      <li>
        <a href="/" className="breadcrumbs__link" style={{ color: '#0A0A0A', textDecoration: 'none' }}>Home</a>
      </li>
      <li className="breadcrumbs__separator" style={{ margin: '0 4px' }}>/</li>
      <li>
        <span>YOGA COLLECTION</span>
      </li>
    </ul>
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', zIndex: 10 }}>
      /<AnnouncementBar />
      <TransparentYogaHeader />
    </div>
  </div>;
};

export default YogaCollectionPage; 