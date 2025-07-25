import React from 'react';

const menuItems = [
  { label: 'LIMITLESS COLLECTION', link: '/collections/limitless', hasDropdown: true },
  { label: 'YOGA COLLECTION', link: '/collections/yoga-collection' },
  { label: 'MEN', link: '/collections/men', hasDropdown: true },
  { label: 'WOMEN', link: '/collections/women', hasDropdown: true },
  { label: 'SHOP BY SPORTS', link: '/collections/sports-1', hasDropdown: true },
  { label: 'FOOTWEAR', link: '/collections/footwear', hasDropdown: true },
  { label: 'GRAPHIC TEES', link: '/collections/recovery-essentials' },
  { label: 'NEW ARRIVALS', link: '/collections/new-arrival', highlight: true },
];

const ChevronDown = () => (
  <svg className="inline ml-1" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" fill="none" stroke="#0A0A0A" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-7 8-7s8 3 8 7"/></svg>
);

const CartIcon = () => (
  <svg width="20" height="20" fill="none" stroke="#0A0A0A" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
);

const LimitlessHeader: React.FC = () => {
  return (
    <header className="w-full z-40 font-['Avenir_Next',_sans-serif] bg-white" style={{height: '64px', borderBottom: 'none'}}>
      <div className="max-w-fluid mx-auto flex items-center justify-between px-[40px] h-[64px]">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center h-full">
          <a href="/" className="full-unstyled-link flex items-center h-full">
            <img src="//www.boldfit.com/cdn/shop/files/p.png?v=1744700976&width=50" alt="Boldfit" width={57} height={30} className="header__logo-image new" />
          </a>
        </div>
        {/* Centered Menu */}
        <nav className="flex-1 flex items-center justify-center h-full">
          <ul className="flex gap-0 items-center h-full">
            {menuItems.map((item, idx) => (
              <li key={item.label} className="flex items-center h-full">
                <a
                  href={item.link}
                  className={`uppercase tracking-wide flex items-center h-full px-3 text-[14px] font-normal text-[#0A0A0A] ${item.highlight ? 'font-bold' : ''}`}
                  style={{letterSpacing: '0.08em'}}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown />}
                  {item.highlight && <span className="ml-1 text-orange-500">⚡</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Right side icons */}
        <div className="flex items-center gap-4 h-full text-[14px]">
          <span className="uppercase tracking-wide text-[#0A0A0A]">INDIA</span>
          <UserIcon />
          <span className="relative">
            <CartIcon />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center" style={{fontSize:'10px',width:'16px',height:'16px'}}>1</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default LimitlessHeader; 