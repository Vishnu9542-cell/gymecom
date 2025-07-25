import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const slides = [
  {
    type: 'cta',
    heading: 'JOIN THE FAMILY',
    button: {
      href: 'https://www.instagram.com/boldfit_official/?hl=en',
      text: 'Follow us',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4.21173C14.5365 4.21173 14.837 4.22123 15.8389 4.267C16.4411 4.27427 17.0377 4.38499 17.6024 4.59432C18.0151 4.74662 18.3884 4.9895 18.6949 5.30509C19.0105 5.61156 19.2534 5.98488 19.4057 6.39759C19.615 6.96235 19.7257 7.55888 19.733 8.16114C19.7788 9.16295 19.7883 9.4635 19.7883 12C19.7883 14.5365 19.7788 14.837 19.733 15.8389C19.7257 16.4411 19.615 17.0377 19.4057 17.6024C19.2476 18.0122 19.0055 18.3844 18.6949 18.6949C18.3844 19.0055 18.0122 19.2476 17.6024 19.4057C17.0377 19.615 16.4411 19.7257 15.8389 19.733C14.837 19.7788 14.5365 19.7883 12 19.7883C9.4635 19.7883 9.16295 19.7788 8.16114 19.733C7.55859 19.7258 6.96176 19.6151 6.39673 19.4057C5.98433 19.2533 5.61132 19.0104 5.30509 18.6949C4.9895 18.3884 4.74662 18.0151 4.59432 17.6024C4.38499 17.0377 4.27427 16.4411 4.267 15.8389C4.22123 14.837 4.21173 14.5365 4.21173 12C4.21173 9.4635 4.22123 9.16295 4.267 8.16114C4.27427 7.55888 4.38499 6.96235 4.59432 6.39759C4.74662 5.98488 4.9895 5.61156 5.30509 5.30509C5.61156 4.9895 5.98488 4.74662 6.39759 4.59432C6.96235 4.38499 7.55888 4.27427 8.16114 4.267C9.16295 4.22123 9.4635 4.21173 12 4.21173ZM12 2.5C9.42032 2.5 9.09645 2.51123 8.08341 2.557C7.29535 2.57272 6.51567 2.72194 5.7775 2.99832C5.1433 3.2371 4.56886 3.61141 4.09427 4.09514C3.61096 4.56956 3.23695 5.14369 2.99832 5.7775C2.72224 6.51572 2.57331 7.2954 2.55786 8.08341C2.51036 9.09645 2.5 9.42032 2.5 12C2.5 14.5797 2.51123 14.9035 2.557 15.9166C2.57272 16.7046 2.72194 17.4843 2.99832 18.2225C3.2371 18.8567 3.61141 19.4311 4.09514 19.9057C4.56956 20.389 5.14369 20.763 5.7775 21.0017C6.51572 21.2778 7.2954 21.4267 8.08341 21.4421C9.09645 21.4896 9.42032 21.5 12 21.5C14.5797 21.5 14.9035 21.4888 15.9166 21.443C16.7046 21.4273 17.4843 21.2781 18.2225 21.0017C18.8538 20.7576 19.4271 20.3843 19.9057 19.9057C20.3843 19.4271 20.7576 18.8538 21.0017 18.2225C21.2778 17.4843 21.4267 16.7046 21.4421 15.9166C21.4896 14.9035 21.5 14.5797 21.5 12C21.5 9.42032 21.4888 9.09645 21.443 8.08341C21.4273 7.29535 21.2781 6.51567 21.0017 5.7775C20.7629 5.1433 20.3886 4.56886 19.9049 4.09427C19.4304 3.61096 18.8563 3.23695 18.2225 2.99832C17.4843 2.72224 16.7046 2.57331 15.9166 2.55786C14.9035 2.51036 14.5797 2.5 12 2.5ZM12 7.12132C11.0351 7.12132 10.0918 7.40745 9.28955 7.94352C8.48725 8.4796 7.86194 9.24155 7.49269 10.133C7.12343 11.0245 7.02682 12.0054 7.21506 12.9518C7.40331 13.8982 7.86796 14.7675 8.55025 15.4497C9.23255 16.132 10.1018 16.5967 11.0482 16.7849C11.9946 16.9732 12.9755 16.8766 13.867 16.5073C14.7585 16.1381 15.5204 15.5127 16.0565 14.7105C16.5926 13.9082 16.8787 12.9649 16.8787 12C16.8787 10.7061 16.3647 9.46518 15.4497 8.55025C14.5348 7.63532 13.2939 7.12132 12 7.12132ZM12 15.167C11.3736 15.167 10.7613 14.9812 10.2405 14.6332C9.71973 14.2852 9.31382 13.7906 9.07412 13.2119C8.83442 12.6333 8.7717 11.9965 8.8939 11.3822C9.0161 10.7678 9.31772 10.2035 9.76063 9.76063C10.2035 9.31772 10.7678 9.0161 11.3822 8.8939C11.9965 8.7717 12.6333 8.83442 13.2119 9.07412C13.7906 9.31382 14.2852 9.71973 14.6332 10.2405C14.9812 10.7613 15.167 11.3736 15.167 12C15.167 12.8399 14.8333 13.6455 14.2394 14.2394C13.6455 14.8333 12.8399 15.167 12 15.167ZM17.0713 5.78873C16.8458 5.78873 16.6254 5.85559 16.4379 5.98085C16.2505 6.10612 16.1043 6.28416 16.0181 6.49247C15.9318 6.70078 15.9092 6.92999 15.9532 7.15113C15.9972 7.37227 16.1057 7.5754 16.2652 7.73483C16.4246 7.89426 16.6277 8.00284 16.8489 8.04682C17.07 8.09081 17.2992 8.06823 17.5075 7.98195C17.7158 7.89567 17.8939 7.74955 18.0191 7.56208C18.1444 7.37461 18.2113 7.1542 18.2113 6.92873C18.2113 6.62638 18.0912 6.33642 17.8774 6.12263C17.6636 5.90883 17.3736 5.78873 17.0713 5.78873Z" fill="currentColor"></path>
        </svg>
      ),
    },
  },
  {
    type: 'image',
    image: 'https://www.boldfit.com/cdn/shop/files/Frame_692.png?v=1744713621',
    alt: '',
  },
  {
    type: 'image',
    image: 'https://www.boldfit.com/cdn/shop/files/Frame_691.png?v=1744713620',
    alt: '',
  },
  {
    type: 'image',
    image: 'https://www.boldfit.com/cdn/shop/files/Frame_689_c9a214b9-9fdc-4f38-8944-b14edb7828cc.png?v=1744713621',
    alt: '',
  },
  {
    type: 'image',
    image: 'https://www.boldfit.com/cdn/shop/files/LL_f497bdce-14a9-482c-b0bf-768414f80871.png?v=1745561792',
    alt: '',
  },
];

const SocialMediaHighlights = () => {
  return (
    <section className="w-full bg-black py-12" style={{ marginTop: '0px' }}>
      <div className="max-w-fluid mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          spaceBetween={12}
          slidesPerView={4}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 8000, disableOnInteraction: false, pauseOnMouseEnter: false }}
          scrollbar={{ hide: true }}
          speed={8000}
          loop={true}
          className="swiper"
          style={{ background: 'black', overflow: 'hidden' }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }
          }}
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx} className={slide.type === 'cta' ? 'swiper-slide social-media-highlights__content-card color-scheme-6 gradient' : 'swiper-slide'} style={{ width: '353.25px', marginRight: '12px', aspectRatio: 'auto' }}>
              {slide.type === 'cta' ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', background: 'black', borderRadius: '16px', padding: '32px 0' }}>
                  <h2 className="h3" style={{ fontWeight: 700, fontSize: '36px', fontFamily: 'Avenir Next, sans-serif', marginBottom: '24px', color: '#fff', textAlign: 'center', lineHeight: 1 }}>
                    <span style={{ fontWeight: 700 }}>JOIN</span> <span style={{ fontWeight: 400 }}>THE FAMILY</span>
                  </h2>
                  {slide.button && (
                    <a href={slide.button.href} className="button--smh button button--filled" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#fff', color: '#000', borderRadius: '24px', padding: '10px 24px', fontSize: '16px', fontFamily: 'Avenir Next, sans-serif', fontWeight: 500, textDecoration: 'none' }}>
                      {slide.button.icon}
                      {slide.button.text}
                    </a>
                  )}
                </div>
              ) : (
                <div className="media" style={{ aspectRatio: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'black', borderRadius: '16px', width: '353.25px', height: '346.86px' }}>
                  <img src={slide.image} alt={slide.alt} style={{ width: '353.25px', height: '346.86px', borderRadius: '16px', objectFit: 'cover' }} />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Removed the Follow us button below the Swiper */}
      </div>
    </section>
  );
};

export default SocialMediaHighlights; 