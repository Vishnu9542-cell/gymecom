import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductCard from './ProductCard';

const gallonBottles = [
  {
    id: 1,
    name: 'Gallon Motivational Bottle - 2 Litres',
    price: 499,
    originalPrice: 1499,
    discount: '66% OFF',
    image: 'https://www.boldfit.com/cdn/shop/files/64e50165-1438-4600-ba1f-f48a026850e8.jpg?v=1738228589',
    hoverImage: 'https://www.boldfit.com/cdn/shop/products/GallonBottleBluepurple_863e8088-acb3-4eb9-bf12-542d01e173f5.jpg?v=1738228589',
  },
  {
    id: 2,
    name: 'Hulk Gallon Water Bottle 2.2 Litre',
    price: 899,
    originalPrice: 1499,
    discount: '66% OFF',
    image: 'https://www.boldfit.com/cdn/shop/files/Black_fa320bf0-92c3-43cd-a928-4f12d50c6711.png?v=1751889673',
    hoverImage: 'https://www.boldfit.com/cdn/shop/products/71USJpvTY_L._SL1500.jpg?v=1751889673',
  },
];

const shoes = [
  {
    id: 3,
    name: 'Archer Badminton Shoes - Black/White',
    price: 1499,
    originalPrice: 4199,
    discount: '64% OFF',
    image: 'https://www.boldfit.com/cdn/shop/files/7-0516.jpg?v=1751022073',
    hoverImage: 'https://www.boldfit.com/cdn/shop/files/Artboard3_3e816423-6d35-41e0-b6df-e646f008b7c2.jpg?v=1751022073',
  },
  {
    id: 4,
    name: 'Inferno Mens Badminton Shoes - Orange-Black',
    price: 1399,
    originalPrice: 4199,
    discount: '66% OFF',
    image: 'https://www.boldfit.com/cdn/shop/files/A7400480.jpg?v=1751022377',
    hoverImage: 'https://www.boldfit.com/cdn/shop/files/Artboard4_6de7e7f1-8477-4c03-89d5-fc79c1597e1c.jpg?v=1751022377',
  },
];

const ShopBySportsSection = () => {
  const [activeTab, setActiveTab] = useState<'gallon' | 'shoes'>('gallon');
  const products = activeTab === 'gallon' ? gallonBottles : shoes;

  return (
    <section id="shopify-section-template--17047945773143__featured_products_gVW88i" className="shopify-section section--featured-products" style={{ marginTop: '64px' }}>
      <div className="color-scheme-1 gradient">
        <div className="section section-featured-products section-w-swiper product-feed overflow-hidden js-animation-fade-in layout-1 animation-init" data-section-id="template--17047945773143__featured_products_gVW88i">
          <div className="container max-w-page" style={{ marginLeft: '60px' }}>
            {/* First row: Heading (left), View All + Nav (right) using grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr auto',
              alignItems: 'center',
              width: '100%',
              maxWidth: '90vw',
              marginRight: '80px',
            }}>
              {/* Left: Heading */}
              <div style={{ justifySelf: 'start' }}>
                <h2
                  className="section__heading h3"
                  style={{
                    fontSize: '47px',
                    fontWeight: 400,
                    fontFamily: 'Avenir Next, sans-serif',
                    color: '#000',
                    letterSpacing: 0,
                    margin: 0,
                    textAlign: 'left',
                    padding: '9.4px 0px',
                  }}
                >
                  SHOP BY SPORTS
                </h2>
              </div>
              {/* Center: empty for spacing */}
              <div></div>
              {/* Right: View All + Nav */}
              <div style={{ justifySelf: 'end', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <a
                  href="#"
                  className="button button--text capitalize"
                  style={{
                    fontSize: '12px',
                    fontFamily: 'Poppins, sans-serif',
                    color: '#0A0A0A',
                    padding: '4.25px 0px',
                    fontWeight: 400,
                    background: 'transparent',
                    border: 'none',
                    boxShadow: 'none',
                    textDecoration: 'none',
                    margin: 0,
                    minWidth: '55px',
                    textAlign: 'right',
                    lineHeight: 1.2,
                  }}
                >
                  View All
                </a>
                <div className="swiper-buttons small-hide card-slider__buttons no-js-hidden" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <button className="swiper-button swiper-button--plain swiper-button--prev-template--17047945773143__featured_products_gVW88i" aria-label="Previous" style={{ background: 'transparent', border: 'none', boxShadow: 'none', padding: '4px' }}>
                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 4L7 12L15 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </button>
                  <button className="swiper-button swiper-button--plain swiper-button--next-template--17047945773143__featured_products_gVW88i" aria-label="Next" style={{ background: 'transparent', border: 'none', boxShadow: 'none', padding: '4px' }}>
                    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 4L17 12L9 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Second row: Centered tab buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px', marginBottom: '32px', width: '100%' }}>
              <div className="products-feed__tab no-scrollbar " style={{ gap: '32px', display: 'flex', alignItems: 'center', background: 'transparent', boxShadow: 'none' }}>
                <button
                  className={`products-feed__tablinks--template--17047945773143__featured_products_gVW88i button button--filled${activeTab === 'gallon' ? ' active' : ''}`}
                  onClick={() => setActiveTab('gallon')}
                  data-default-open={activeTab === 'gallon' ? '' : undefined}
                  style={{
                    borderRadius: '32px',
                    padding: '8px 24px',
                    fontSize: '12px',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    letterSpacing: '0.08em',
                    background: activeTab === 'gallon' ? '#060606' : 'transparent',
                    color: activeTab === 'gallon' ? '#FAF4F4' : '#0A0A0A',
                    border: 'none',
                    marginRight: '24px',
                    transition: 'background 0.2s, color 0.2s',
                  }}
                >
                  GALLON BOTTLES
                </button>
                <button
                  className={`products-feed__tablinks--template--17047945773143__featured_products_gVW88i button button--filled${activeTab === 'shoes' ? ' active' : ''}`}
                  onClick={() => setActiveTab('shoes')}
                  style={{
                    borderRadius: '32px',
                    padding: '8px 24px',
                    fontSize: '12px',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    letterSpacing: '0.08em',
                    background: 'transparent',
                    color: '#0A0A0A',
                    border: 'none',
                    transition: 'background 0.2s, color 0.2s',
                  }}
                >
                  SHOES
                </button>
              </div>
            </div>
            {/* Product Slider */}
            <div className="section__body">
              <div id={activeTab === 'gallon' ? 'collection_cp3bkL' : 'collection_64JC8f'} className={`products-feed__tabcontent--template--17047945773143__featured_products_gVW88i`} style={{ display: 'block' }}>
                <div>
                  <Swiper
                    spaceBetween={12}
                    slidesPerView={4}
                    navigation={{
                      nextEl: '.swiper-button--next-template--17047945773143__featured_products_gVW88i',
                      prevEl: '.swiper-button--prev-template--17047945773143__featured_products_gVW88i',
                    }}
                    modules={[Navigation]}
                    className="swiper card-product-slider"
                    breakpoints={{
                      320: { slidesPerView: 1 },
                      640: { slidesPerView: 2 },
                      1024: { slidesPerView: 4 }
                    }}
                  >
                    {products.map((product) => (
                      <SwiperSlide key={product.id} style={{ width: '353.25px', marginRight: '12px' }}>
                        <ProductCard product={product} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopBySportsSection; 