import React, { useState } from 'react';
import { Search, User, ShoppingCart, Menu, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

interface HeaderProps {
  sticky?: boolean;
}

const Header: React.FC<HeaderProps> = ({ sticky }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLimitlessOpen, setIsLimitlessOpen] = useState(false);
  const { cartItems } = useCart();
  const [clickedMenu, setClickedMenu] = useState<string | null>(null);
  
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Helper to handle click effect
  const handleMenuClick = (label: string) => {
    setClickedMenu(label);
    setTimeout(() => setClickedMenu(null), 180); // 180ms fade
  };

  return (
    <header className={`sticky top-0 w-full z-50 font-['Avenir_Next',_sans-serif] transition-all duration-300 ${sticky ? 'bg-white' : 'bg-transparent'}`} style={{ position: 'sticky', top: 0, zIndex: 50 }}>
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
              <div className="relative header__nav-item header__nav-item-1 js-nav-item has-dropdown dropdown" onMouseEnter={() => setIsLimitlessOpen(true)} onMouseLeave={() => setIsLimitlessOpen(false)}>
                <Link
                  to="/collections/limitless"
                  className={`header__nav-link js-nav-link text--link text-[14px] font-normal uppercase tracking-wide px-2 py-1 whitespace-nowrap transition-colors duration-300 flex items-center ${sticky ? 'text-black' : 'text-white'}`}
                  title="LIMITLESS COLLECTION"
                  aria-current="page"
                  onClick={() => setIsLimitlessOpen(v => !v)}
                >
                  LIMITLESS COLLECTION
                  <span className="icon icon--rotate-90 ml-1" style={{ display: 'inline-flex', alignItems: 'center', transform: 'rotate(90deg)' }}>
                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 4L17 12L9 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                </Link>
                {isLimitlessOpen && (
                  <div className="header__nav-dropdown js-dropdown absolute left-0 mt-2 bg-white shadow-lg rounded z-50 min-w-[320px]" data-menu-content="LIMITLESS COLLECTION">
                    <div className="header__nav-dropdown-inner color-scheme-1 p-4">
                      <ul className="header__nav-links list-unstyled">
                        <div className="header__nav--group header__nav--group-link">
                          <li className="header__nav-links-item header__nav-links-item--link js-nav-item has-dropdown" data-child-menu-item="TOP">
                            <a href="/collections/tops" className="header__nav-dropdown-link js-nav-link flex items-center" aria-label="TOP" role="button">
                              TOP
                              <span className="icon ml-1"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 4L17 12L9 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
                            </a>
                            <ul className="header__nav-sublinks list-unstyled pl-4" data-child-menu-content="TOP">
                              <li className="header__nav-sublinks-item"><a href="/collections/bras" className="header__nav-dropdown-link header__nav-childlink">BRA</a></li>
                              <li className="header__nav-sublinks-item"><a href="/collections/bodysuit" className="header__nav-dropdown-link header__nav-childlink">BODYSUIT</a></li>
                            </ul>
                          </li>
                          <li className="header__nav-links-item header__nav-links-item--link js-nav-item has-dropdown" data-child-menu-item="BOTTOMS">
                            <a href="/collections/bottoms" className="header__nav-dropdown-link js-nav-link flex items-center" aria-label="BOTTOMS" role="button">
                              BOTTOMS
                              <span className="icon ml-1"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 4L17 12L9 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
                            </a>
                            <ul className="header__nav-sublinks list-unstyled pl-4" data-child-menu-content="BOTTOMS">
                              <li className="header__nav-sublinks-item"><a href="/collections/limitless-leggings" className="header__nav-dropdown-link header__nav-childlink">LEGGINGS </a></li>
                              <li className="header__nav-sublinks-item"><a href="/collections/limitless-shorts" className="header__nav-dropdown-link header__nav-childlink">SHORTS</a></li>
                              <li className="header__nav-sublinks-item"><a href="/collections/flare-pants" className="header__nav-dropdown-link header__nav-childlink">FLARE PANTS</a></li>
                            </ul>
                          </li>
                        </div>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <Link
                to="/collections/yoga"
                className={`text-[14px] font-normal uppercase tracking-wide px-2 py-1 whitespace-nowrap transition-colors duration-300 ${sticky ? 'text-black' : 'text-white'} ${clickedMenu === 'YOGA COLLECTION' ? 'menu-clicked' : ''}`}
                style={{ outline: 'none', boxShadow: 'none', border: 'none', background: 'transparent' }}
                onMouseDown={e => e.preventDefault()}
                tabIndex={0}
                onFocus={e => e.target.style.outline='none'}
                onBlur={e => e.target.style.outline='none'}
                onClick={() => handleMenuClick('YOGA COLLECTION')}
              >YOGA COLLECTION</Link>
              <div className="relative group">
                <button className={`text-[12px] font-normal uppercase tracking-wide px-2 py-1 flex items-center whitespace-nowrap transition-colors duration-300 ${sticky ? 'text-black' : 'text-white'} ${clickedMenu === 'MEN' ? 'menu-clicked' : ''}`}
                  style={{ outline: 'none', boxShadow: 'none', border: 'none', background: 'transparent' }}
                  onMouseDown={e => e.preventDefault()} // Prevent default focus border
                  tabIndex={0}
                  onFocus={e => e.target.style.outline='none'}
                  onBlur={e => e.target.style.outline='none'}
                  onClick={() => handleMenuClick('MEN')}
                >MEN <ChevronDown className={`ml-1 h-4 w-4 ${sticky ? 'text-black' : 'text-white'}`} /></button>
              </div>
              <div className="relative group">
                <button className={`text-[12px] font-normal uppercase tracking-wide px-2 py-1 flex items-center whitespace-nowrap transition-colors duration-300 ${sticky ? 'text-black' : 'text-white'} ${clickedMenu === 'WOMEN' ? 'menu-clicked' : ''}`}
                  style={{ outline: 'none', boxShadow: 'none', border: 'none', background: 'transparent' }}
                  onMouseDown={e => e.preventDefault()} // Prevent default focus border
                  tabIndex={0}
                  onFocus={e => e.target.style.outline='none'}
                  onBlur={e => e.target.style.outline='none'}
                  onClick={() => handleMenuClick('WOMEN')}
                >WOMEN <ChevronDown className={`ml-1 h-4 w-4 ${sticky ? 'text-black' : 'text-white'}`} /></button>
              </div>
              <div className="relative group">
                <button className={`text-[12px] font-normal uppercase tracking-wide px-2 py-1 flex items-center whitespace-nowrap transition-colors duration-300 ${sticky ? 'text-black' : 'text-white'} ${clickedMenu === 'SHOP BY SPORTS' ? 'menu-clicked' : ''}`}
                  style={{ outline: 'none', boxShadow: 'none', border: 'none', background: 'transparent' }}
                  onMouseDown={e => e.preventDefault()} // Prevent default focus border
                  tabIndex={0}
                  onFocus={e => e.target.style.outline='none'}
                  onBlur={e => e.target.style.outline='none'}
                  onClick={() => handleMenuClick('SHOP BY SPORTS')}
                >SHOP BY SPORTS <ChevronDown className={`ml-1 h-4 w-4 ${sticky ? 'text-black' : 'text-white'}`} /></button>
              </div>
              <div className="relative group">
                <button className={`text-[12px] font-normal uppercase tracking-wide px-2 py-1 flex items-center whitespace-nowrap transition-colors duration-300 ${sticky ? 'text-black' : 'text-white'} ${clickedMenu === 'FOOTWEAR' ? 'menu-clicked' : ''}`}
                  style={{ outline: 'none', boxShadow: 'none', border: 'none', background: 'transparent' }}
                  onMouseDown={e => e.preventDefault()} // Prevent default focus border
                  tabIndex={0}
                  onFocus={e => e.target.style.outline='none'}
                  onBlur={e => e.target.style.outline='none'}
                  onClick={() => handleMenuClick('FOOTWEAR')}
                >FOOTWEAR <ChevronDown className={`ml-1 h-4 w-4 ${sticky ? 'text-black' : 'text-white'}`} /></button>
              </div>
              <a href="#" className={`text-[14px] font-normal uppercase tracking-wide px-2 py-1 whitespace-nowrap transition-colors duration-300 ${sticky ? 'text-black' : 'text-white'} ${clickedMenu === 'GRAPHIC TEES' ? 'menu-clicked' : ''}`}>GRAPHIC TEES</a>
              <a href="#" className={`text-[14px] font-normal uppercase tracking-wide px-2 py-1 whitespace-nowrap transition-colors duration-300 ${sticky ? 'text-black font-bold' : 'text-white font-normal'} ${clickedMenu === 'NEW ARRIVALS' ? 'menu-clicked' : ''}`}>NEW ARRIVALS <span className={sticky ? 'text-orange-500' : 'text-white'}>⚡</span></a>
            </div>
            {/* Right Side Icons */}
            <ul className="header__utils-items list-unstyled flex items-center gap-6" style={{fontSize: '14px', margin: '-3px -12px'}}>
              <li className="header__utils-item"><span className="uppercase tracking-wide text-[#0A0A0A]">INDIA</span></li>
              <li className="header__utils-item"><Search className={`h-5 w-5 cursor-pointer transition-colors duration-300 ${sticky ? 'text-black' : 'text-white'}`} /></li>
              <li className="header__utils-item"><User className={`h-5 w-5 cursor-pointer transition-colors duration-300 ${sticky ? 'text-black' : 'text-white'}`} /></li>
              <li className="header__utils-item"><div className="relative"><ShoppingCart className={`h-5 w-5 cursor-pointer transition-colors duration-300 ${sticky ? 'text-black' : 'text-white'}`} />{totalItems > 0 && (<span className={`absolute -top-2 -right-2 ${sticky ? 'bg-orange-500' : 'bg-blue-400'} text-white text-xs rounded-full h-5 w-5 flex items-center justify-center`}>{totalItems}</span>)}</div></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;