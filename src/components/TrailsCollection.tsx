import React from 'react';
import ProductCard from './ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ScrollingTicker from './ScrollingTicker';

const TrailsCollection = () => {
  const products = [
    {
      id: 1,
      name: "Trail Max Rucksack 60L - Army Green",
      price: 2779,
      originalPrice: 4999,
      discount: "44% OFF",
      image: "https://www.boldfit.com/cdn/shop/files/Artboard1_ab1b900e-772f-45ff-845c-ebe30324a523.jpg?v=1738841757",
      hoverImage: "https://www.boldfit.com/cdn/shop/files/Artboard2_88b5d831-29b5-4cd1-9950-d32178f87542.jpg?v=1752151933"
    },
    {
      id: 2,
      name: "Summit Pro Rucksack 60L - Peacock Blue",
      price: 2779,
      originalPrice: 4999,
      discount: "44% OFF",
      image: "https://www.boldfit.com/cdn/shop/files/Artboard1_e8a06b51-67bc-43fb-9333-dbb8b76e4d19.jpg?v=1738840960",
      hoverImage: "https://www.boldfit.com/cdn/shop/files/Artboard2_5eedd2e5-2275-4d7b-9079-5b456db8b069.jpg?v=1752148601"
    },
    {
      id: 3,
      name: "Summit Pro Rucksack 60L - Black",
      price: 2779,
      originalPrice: 4999,
      discount: "44% OFF",
      image: "https://www.boldfit.com/cdn/shop/files/Artboard1_4e0b4e9e-1085-4051-8d57-b9a70a2a8d19.jpg?v=1738840846",
      hoverImage: "https://www.boldfit.com/cdn/shop/files/Artboard2_34a85cef-66e2-4338-adb6-7f001e38cca0.jpg?v=1752148769"
    },
    {
      id: 4,
      name: "Trekmaster Rucksack 70L - Black",
      price: 3889,
      originalPrice: 6999,
      discount: "44% OFF",
      image: "https://www.boldfit.com/cdn/shop/files/Artboard1_c00dbdf8-e243-4031-820a-f99976d3dcb8.jpg?v=1738841446",
      hoverImage: "https://www.boldfit.com/cdn/shop/files/Artboard1_76de21f9-a8d3-4c59-9f2a-a54b67fd5380.jpg?v=1752132069"
    }
  ];

  return (
    <>
      <ScrollingTicker />
      <section id="shopify-section-template--17047945773143__featured_products_4eL4yE" className="shopify-section section--featured-products" style={{ marginLeft: '20px', marginTop: '32px' }}>
        <div className="color-scheme-1 gradient">
          <div className="section section-featured-products section-w-swiper product-feed overflow-hidden js-animation-fade-in layout-1 animation-init" data-section-id="template--17047945773143__featured_products_4eL4yE">
            <div className="container max-w-fluid">
              <div className="section__head">
                <div className="section__head-title">
                  <span
                    className="text--label rte"
                    style={{
                      color: '#0A0A0A',
                      fontFamily: 'Avenir Next, sans-serif',
                      fontSize: '12px',
                      margin: '0 0 -4px 0',
                      padding: '6.25px 0px',
                      display: 'inline-block',
                      width: '135.26px',
                      height: '26.9px',
                    }}
                  >
                    EXPLORE WHAT WE
                  </span>
                  <h2
                    className="section__heading h3"
                    style={{
                      color: '#000000',
                      fontFamily: 'Avenir Next, sans-serif',
                      fontSize: '47px',
                      padding: '9.4px 0px',
                      fontWeight: 400,
                      lineHeight: 1.1,
                      marginBottom: '24px',
                    }}
                  >
                    BUILT FOR THE <strong>TRAILS.</strong>
                  </h2>
                </div>
              </div>
              <div className="section__body">
                <div id="collection_waiCtD" style={{ display: 'block' }}>
                  <div>
                    <Swiper
                      spaceBetween={12}
                      slidesPerView={4}
                      navigation={{
                        nextEl: '.swiper-button--next-template--17047945773143__featured_products_4eL4yE',
                        prevEl: '.swiper-button--prev-template--17047945773143__featured_products_4eL4yE',
                      }}
                      modules={[Navigation]}
                      className="swiper card-product-slider overflow-unset"
                      style={{ paddingBottom: '2rem' }}
                      breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 }
                      }}
                    >
                      {products.map((product, index) => (
                        <SwiperSlide key={product.id} style={{ width: '353.25px', marginRight: '12px' }}>
                          <div style={{ width: '353.25px' }}>
                            <ProductCard product={{ ...product, infoStyle: {
                              fontFamily: 'Avenir Next, sans-serif',
                              fontSize: '14px',
                              color: '#0A0A0A',
                              width: '353.25px',
                              height: '38px',
                              fontWeight: 400,
                            } }} />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="section__foot" style={{ marginBlockStart: 0 }}>
                      <div className="section__head--buttons">
                        <div className="swiper-buttons small-hide card-slider__buttons no-js-hidden">
                          <button className="swiper-button swiper-button--plain swiper-button--prev-template--17047945773143__featured_products_4eL4yE" aria-label="Previous">
                            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 4L17 12L9 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </button>
                          <button className="swiper-button swiper-button--plain swiper-button--next-template--17047945773143__featured_products_4eL4yE" aria-label="Next">
                            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 4L17 12L9 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrailsCollection;