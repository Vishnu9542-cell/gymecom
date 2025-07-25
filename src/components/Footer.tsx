import React from 'react';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      className="bg-black text-white"
      style={{
        fontFamily: 'Avenir Next, sans-serif',
        fontSize: '14px',
        background: '#000',
        color: '#fff',
        padding: '32px 0 16px 0',
      }}
    >
      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 bg-black text-white rounded-full shadow-lg p-3 flex items-center justify-center transition hover:bg-gray-800 button back-to-top button--filled"
        aria-label="Back to top"
      >
        <span className="icon--rotate-270" style={{ display: 'flex', transform: 'rotate(-90deg)' }}>
          <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 4L17 12L9 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </span>
      </button>
      <div className="max-w-fluid mx-auto px-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-8" style={{margin: 0}}>
          {/* Shop for Men */}
          <div className="section-footer__block align-self-start ml-0 md:ml-8" style={{minWidth: 0}}>
            <div className="section-footer__content footer__nav--vertical">
              <div className="footer__nav-desktop small-hide">
                <h4 className="footer__block-heading uppercase text-xs tracking-widest text-gray-400 mb-4">Shop for Men</h4>
                <ul className="footer__links list-unstyled space-y-2">
                  <li><a href="/collections/mens-tees">Training Tees</a></li>
                  <li><a href="/collections/jackets">Jackets</a></li>
                  <li><a href="/collections/mens-shorts">Shorts</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* Shop for Women */}
          <div className="section-footer__block align-self-start" style={{minWidth: 0}}>
            <div className="section-footer__content footer__nav--vertical">
              <div className="footer__nav-desktop small-hide">
                <h4 className="footer__block-heading uppercase text-xs tracking-widest text-gray-400 mb-4">Shop for Women</h4>
                <ul className="footer__links list-unstyled space-y-2">
                  <li><a href="/collections/womens-tees">Training Tees</a></li>
                  <li><a href="/collections/womens-jackets">Jackets</a></li>
                  <li><a href="/collections/womens-shorts">Shorts</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* Shop by Sports */}
          <div className="section-footer__block align-self-start" style={{minWidth: 0}}>
            <div className="section-footer__content footer__nav--vertical">
              <div className="footer__nav-desktop small-hide">
                <h4 className="footer__block-heading uppercase text-xs tracking-widest text-gray-400 mb-4">Shop by Sports</h4>
                <ul className="footer__links list-unstyled space-y-2">
                  <li><a href="/collections/yoga">Yoga</a></li>
                  <li><a href="/collections/pickleball">Pickleball</a></li>
                  <li><a href="/collections/swimming">Swimming</a></li>
                  <li><a href="/collections/trekking">Trekking</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* Company Info */}
          <div className="section-footer__block align-self-start" style={{minWidth: 0}}>
            <div className="section-footer__content footer__nav--vertical">
              <div className="footer__nav-desktop small-hide">
                <h4 className="footer__block-heading uppercase text-xs tracking-widest text-gray-400 mb-4">Company Info</h4>
                <ul className="footer__links list-unstyled space-y-2">
                  <li><a href="/pages/boldfit-careers">Careers</a></li>
                  <li><a href="/pages/privacy-policy">Privacy Policy</a></li>
                  <li><a href="/pages/sitemap">Sitemap</a></li>
                  <li><a href="/pages/terms-conditions">Terms & Conditions</a></li>
                  <li><a href="/pages/about-us">About Us</a></li>
                  <li><a href="/pages/authenticate">Authenticate your Product</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* Support */}
          <div className="section-footer__block align-self-start" style={{minWidth: 0}}>
            <div className="section-footer__content footer__nav--vertical">
              <div className="footer__nav-desktop small-hide">
                <h4 className="footer__block-heading uppercase text-xs tracking-widest text-gray-400 mb-4">Support</h4>
                <ul className="footer__links list-unstyled space-y-2">
                  <li><a href="/account">My Account</a></li>
                  <li><a href="https://boldfitindia.shiprocket.co">Track My Order</a></li>
                  <li><a href="https://www.boldfit.com/apps/return_prime">Return & Exchange</a></li>
                  <li><a href="/pages/contact-us">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* Useful Links */}
          <div className="section-footer__block align-self-start" style={{minWidth: 0}}>
            <div className="section-footer__content footer__nav--vertical">
              <div className="footer__nav-desktop small-hide">
                <h4 className="footer__block-heading uppercase text-xs tracking-widest text-gray-400 mb-4">Useful Links</h4>
                <ul className="footer__links list-unstyled space-y-2">
                  <li><a href="http://boldfit.in/ebook">E-Books</a></li>
                  <li><a href="/pages/return-policy">Return Policy</a></li>
                  <li><a href="/pages/shipping-policy">Shipping Policy</a></li>
                  <li><a href="/pages/terms-conditions">Terms & Conditions</a></li>
                  <li><a href="/pages/warranty-policy">Warranty Policy</a></li>
                  <li><a href="https://www.boldfit.com/pages/warranty">Warranty Registration</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;