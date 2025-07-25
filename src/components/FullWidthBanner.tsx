import React from 'react';

const FullWidthBanner = () => {
  return (
    <section id="shopify-section-template--17047945773143__full_width_banner_EmXzhP" className="shopify-section section-full-width-banner" style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="color-scheme-1 gradient header-is-transparent" id="sectionid-template--17047945773143__full_width_banner_EmXzhP">
        <div
          className="section-full-width-banner__container container max-w-fluid section-height-full section-height-auto--mobile media-position--background js-animation-fade-in animation-init"
          style={{ position: 'relative', width: '1448.8px', height: '600px', overflow: 'hidden', borderRadius: '12px' }}
        >
          {/* Only Desktop Image (show one image as in the screenshot) */}
          <div className="section-full-width-banner__media media media--overlay" style={{ width: '1448.8px', height: '600px', position: 'absolute', top: 0, left: 0 }}>
            <img
              srcSet="//www.boldfit.com/cdn/shop/files/Frame_718_375x.png?v=1744791908 375w,//www.boldfit.com/cdn/shop/files/Frame_718_750x.png?v=1744791908 750w,//www.boldfit.com/cdn/shop/files/Frame_718_1100x.png?v=1744791908 1100w,//www.boldfit.com/cdn/shop/files/Frame_718_1500x.png?v=1744791908 1500w,//www.boldfit.com/cdn/shop/files/Frame_718_1780x.png?v=1744791908 1780w,//www.boldfit.com/cdn/shop/files/Frame_718_2000x.png?v=1744791908 2000w,//www.boldfit.com/cdn/shop/files/Frame_718_1900x.png?v=1744791908 4889w"
              src="//www.boldfit.com/cdn/shop/files/Frame_718_1900x.png?v=1744791908"
              loading="eager"
              alt=" banner "
              width={1448.8}
              height={600}
              style={{ width: '1448.8px', height: '600px', objectFit: 'cover', borderRadius: '12px' }}
            />
          </div>
          <div
            className="section-full-width-banner__content content align-center text-center justify-end align-center--mobile text-center--mobile justify-end--mobile has-desktop-media has-mobile-media color-scheme-5"
            style={{
              color: '#FFFFFF',
              fontFamily: 'Avenir Next, sans-serif',
              fontSize: '14px',
              position: 'absolute',
              left: 0,
              top: 0,
              width: '1448.8px',
              height: '600px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-end',
              paddingBottom: '32px',
            }}
          >
            <p className="section-full-width-banner__subheading max-w-sm">KL X BOLDFIT</p>
            <div className="section-full-width-banner__buttons max-w-sm ">
              <a
                href="/"
                className="button section-full-width-banner__button button--filled capitalize color-scheme-5"
                style={{
                  display: 'inline-block',
                  background: '#fff',
                  color: '#000',
                  fontWeight: 700,
                  fontSize: '13px',
                  padding: '8px 24px',
                  borderRadius: '6px',
                  marginTop: '16px',
                  textDecoration: 'none',
                  letterSpacing: '0.05em',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  transition: 'background 0.2s, color 0.2s',
                }}
              >
                COMING SOON
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullWidthBanner; 