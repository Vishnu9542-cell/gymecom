import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const productImages = [
  "https://www.boldfit.com/cdn/shop/files/Artboard_1_76132548-b9f7-4e70-895e-ac48946f30ff.jpg?v=1751889515&width=600",
  "https://www.boldfit.com/cdn/shop/files/Artboard_4_068d997d-7623-474f-8250-accc7cae3f9b.jpg?v=1751889515&width=600",
  "https://www.boldfit.com/cdn/shop/files/Artboard_5_4e41a2ea-970b-47c8-b5fa-4f36988d1a40.jpg?v=1751889515&width=600",
  "https://www.boldfit.com/cdn/shop/files/Artboard_3_f905b0a5-74c4-4774-a1b4-2fe4739d880c.jpg?v=1751889515&width=600",
  "https://www.boldfit.com/cdn/shop/files/Artboard_11_75078e60-c3f1-4bc1-a709-c57f9ddb2e23.jpg?v=1751889515&width=600",
  "https://www.boldfit.com/cdn/shop/files/Artboard_2_8da6ec4b-77a1-4ff5-8203-a323ce7e9d1d.jpg?v=1751889515&width=600"
];

const ProductOfTheWeek = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 1149;
  const originalPrice = 2299;
  const discount = '50% OFF';

  return (
    <section
      className="w-full mx-auto my-8"
      style={{
        maxWidth: '1520.8px',
        height: '687.95px',
        color: '#0A0A0A',
        fontFamily: 'Avenir Next, sans-serif',
        fontSize: '14px',
        padding: '0px 36px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <h2 className="text-5xl font-black mb-8 text-left" style={{ fontFamily: 'Avenir Next, sans-serif', fontWeight: 400 }}>
        <span style={{ fontWeight: 400 }}>PRODUCT OF </span><strong style={{ fontWeight: 700 }}>THE WEEK</strong>
      </h2>
      <div className="flex flex-col lg:flex-row gap-8 items-start h-full">
        {/* Left: Swiper Images */}
        <div className="flex-1 min-w-[400px] max-w-[950px] h-full flex items-center relative">
          <Swiper
            spaceBetween={8}
            slidesPerView={2}
            navigation={{
              nextEl: '.custom-swiper-next',
              prevEl: '.custom-swiper-prev',
            }}
            modules={[Navigation]}
            className="w-full h-[600px] rounded-xl"
            style={{ background: 'white', height: '600px' }}
          >
            {productImages.map((img, idx) => (
              <SwiperSlide key={idx} style={{ width: '450px', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white', borderRadius: '16px' }}>
                <div className="media flex items-center justify-center h-full w-full">
                  <img
                    src={img}
                    alt="The Boldfit Chugger - Onyx"
                    style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '16px' }}
                  />
                </div>
              </SwiperSlide>
            ))}
            {/* Custom Swiper Navigation Buttons */}
            <button
              className="custom-swiper-prev swiper-button--plain absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-transparent border-none p-1"
              aria-label="Previous slide"
              style={{ color: '#222', background: 'transparent', border: 'none', outline: 'none', cursor: 'pointer', width: '28px', height: '28px', minWidth: '28px', minHeight: '28px', borderRadius: '50%' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6L4 12L10 18M5 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              className="custom-swiper-next swiper-button--plain absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-transparent border-none p-1"
              aria-label="Next slide"
              style={{ color: '#222', background: 'transparent', border: 'none', outline: 'none', cursor: 'pointer', width: '28px', height: '28px', minWidth: '28px', minHeight: '28px', borderRadius: '50%' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 6L20 12L14 18M19 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </Swiper>
        </div>
        {/* Right: Product Info */}
        <div className="flex-1 max-w-[500px] w-full flex flex-col gap-4 h-full justify-center" style={{ fontFamily: 'Avenir Next, sans-serif', justifyContent: 'flex-start' }}>
          <div className="flex flex-col gap-1" style={{marginTop: '10px', fontSize: '14px'}}>
            <h3 style={{ fontFamily: 'Avenir Next, sans-serif', fontSize: '14px', color: '#0A0A0A', fontWeight: 400, margin: 0, marginBottom: 0, display: 'block' }}>THE BOLDFIT CHUGGER - ONYX</h3>
            <span className="inline-block bg-[#434343] text-white text-xs font-bold rounded px-2 py-1 w-fit" style={{ fontFamily: 'Avenir Next, sans-serif', fontSize: '14px', margin: '6px 0 4px 0' }}>{discount}</span>
            <span style={{ fontFamily: 'Avenir Next, sans-serif', fontSize: '14px', color: '#0A0A0A', marginBottom: '4px', display: 'block' }}>BOLDFIT</span>
            <div className="flex items-center gap-2 mb-1" style={{ fontFamily: 'Avenir Next, sans-serif', fontSize: '14px', color: '#0A0A0A' }}>
              <span className="line-through text-gray-400" style={{ fontSize: '14px' }}>₹ {originalPrice.toLocaleString()}</span>
              <span style={{ color: '#E53935', fontWeight: 700, fontSize: '14px' }}>₹ {price.toLocaleString()}</span>
              <span style={{ color: '#1ca7ec', fontWeight: 600, fontSize: '14px' }}>{discount}</span>
              <span style={{ fontSize: '14px', color: '#888', marginLeft: '8px' }}>TAXES INCLUDED.</span>
            </div>
          </div>
          {/* Quantity Selector */}
          <div className="flex items-center gap-2 mb-2 mt-2" style={{ width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', width: '140px', background: '#fff', border: '1px solid #e5e7eb', borderRadius: '32px', padding: '0 8px' }}>
              <button
                className="flex items-center justify-center"
                style={{ width: '40px', height: '40px', border: 'none', background: 'transparent', fontSize: '20px', borderRadius: '50%', color: '#222', cursor: 'pointer' }}
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
              >
                -
              </button>
              <input
                type="number"
                className="text-center"
                style={{ width: '48px', height: '40px', fontSize: '14px', border: 'none', outline: 'none', background: 'transparent' }}
                value={quantity}
                min={1}
                max={99}
                onChange={e => setQuantity(Math.max(1, Math.min(99, Number(e.target.value))))}
              />
              <button
                className="flex items-center justify-center"
                style={{ width: '40px', height: '40px', border: 'none', background: 'transparent', fontSize: '20px', borderRadius: '50%', color: '#222', cursor: 'pointer' }}
                onClick={() => setQuantity(q => Math.min(99, q + 1))}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <button
              className="ml-4 rounded-full bg-black text-white font-semibold hover:bg-gray-900 transition"
              style={{
                fontSize: '10px',
                fontFamily: 'Poppins, sans-serif',
                color: '#FAF4F4',
                background: '#060606',
                padding: '16px 24px',
                borderRadius: '24px',
                minHeight: '43.6px',
                minWidth: '220px',
                textTransform: 'capitalize',
                border: 'none',
                boxShadow: 'none',
                width: '60%',
                maxWidth: '336.4px',
              }}
            >Add To Cart</button>
          </div>
          {/* Buy Now Button */}
          <div className="flex flex-col gap-2 mb-2">
            <button
              className="w-full rounded-full border border-black hover:bg-black hover:text-white transition"
              style={{
                fontSize: '10px',
                fontFamily: 'Poppins, sans-serif',
                color: '#000',
                background: '#fff',
                padding: '16px 24px',
                borderRadius: '24px',
                minHeight: '46px',
                textTransform: 'capitalize',
                fontWeight: 500,
                boxShadow: 'none',
              }}
            >Buy It Now</button>
          </div>
          <a
            href="#"
            className="block text-center mt-2"
            style={{
              fontSize: '10px',
              fontFamily: 'Poppins, sans-serif',
              color: '#0A0A0A',
              textTransform: 'uppercase',
              textDecoration: 'underline',
              padding: '4.25px 0px',
              fontWeight: 500,
              letterSpacing: '0.05em',
            }}
          >
            VIEW PRODUCT
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductOfTheWeek; 