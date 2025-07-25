import React from 'react';
import ProductCard from './ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ScrollingTicker from './ScrollingTicker';

const products = [
  {
    id: 1,
    name: "Limitless Womens Leggings - Black",
    price: 999,
    originalPrice: 1599,
    discount: "37% OFF",
    image: "https://www.boldfit.com/cdn/shop/files/Artboard1_b085b529-2a77-4aae-83dc-57e0c8f4f316.jpg?v=1752304896&width=600",
    hoverImage: "https://www.boldfit.com/cdn/shop/files/BlackLeggings-0413.jpg?v=1752644616&width=600"
  },
  {
    id: 2,
    name: "Limitless Womens Leggings - Navy",
    price: 999,
    originalPrice: 1599,
    discount: "37% OFF",
    image: "https://www.boldfit.com/cdn/shop/files/Artboard1_b9ee31c2-073b-4505-91fb-df5f194ed7c0.jpg?v=1752303959&width=600",
    hoverImage: "https://www.boldfit.com/cdn/shop/files/Artboard5_6552bfa8-a89f-4c07-81d8-a4cabdec0a15.jpg?v=1752303988&width=600"
  },
  {
    id: 3,
    name: "Womens Limitless Leggings - Burgundy",
    price: 999,
    originalPrice: 1599,
    discount: "37% OFF",
    image: "https://www.boldfit.com/cdn/shop/files/Artboard1_5989f9bc-2af7-41f8-8288-a1688bee6ee8.jpg?v=1752304509&width=600",
    hoverImage: "https://www.boldfit.com/cdn/shop/files/Artboard5_e5d54026-5665-4fff-b703-afa1dd0ac365.jpg?v=1752304538&width=600"
  },
  {
    id: 4,
    name: "Womens Limitless Leggings - Light Blue",
    price: 999,
    originalPrice: 1599,
    discount: "37% OFF",
    image: "https://www.boldfit.com/cdn/shop/files/Artboard1_082e5c6f-7bb2-44d0-8657-9b3bab175f9f.jpg?v=1752304696&width=600",
    hoverImage: "https://www.boldfit.com/cdn/shop/files/Artboard2_3718e14a-b0b8-452d-ac9b-b6841f7fa66b.jpg?v=1752304723&width=600"
  },
  {
    id: 5,
    name: "Limitless Womens Leggings - Grey",
    price: 999,
    originalPrice: 1599,
    discount: "37% OFF",
    image: "https://www.boldfit.com/cdn/shop/files/Artboard1_feaf952f-b5fc-4958-a493-af7c5afbe248.jpg?v=1752304116&width=600",
    hoverImage: "https://www.boldfit.com/cdn/shop/files/Boldfit_10thAug24_2144.jpg?v=1752644284&width=600"
  },
  {
    id: 6,
    name: "Everyday High-Rise Leggings",
    price: 699,
    originalPrice: 1399,
    discount: "50% OFF",
    image: "https://www.boldfit.com/cdn/shop/files/Artboard1_15c056ca-7338-4779-90b8-f98bc9873f9a.jpg?v=1752306190&width=600",
    hoverImage: "https://www.boldfit.com/cdn/shop/files/Artboard2_c4696637-c461-410f-b5be-5b32f873fc52.jpg?v=1752306219&width=600"
  },
  {
    id: 7,
    name: "Limitless snatched Ruched back Flare Pants - Brown .",
    price: 1799,
    originalPrice: 2899,
    discount: "37% OFF",
    image: "https://www.boldfit.com/cdn/shop/files/8CF65B28-253B-4154-AB34-018B78B6D3D9.png?v=1752911609&width=600",
    hoverImage: "https://www.boldfit.com/cdn/shop/files/7A1BDCE4-C58D-4F2A-817E-C162E6EC743A.png?v=1752911768&width=600"
  },
  {
    id: 8,
    name: "Limitless snatched high waisted diamond legging - Green",
    price: 1999,
    originalPrice: 2999,
    discount: "33% OFF",
    image: "https://www.boldfit.com/cdn/shop/files/02899FED-987D-4E31-B644-DD95025097D9.png?v=1752916402&width=600",
    hoverImage: "https://www.boldfit.com/cdn/shop/files/EC1D1149-A2DF-4A87-8734-4898A7C78FE3.png?v=1752916402&width=600"
  }
];

const LimitlessCollection = () => {
  return (
    <section id="limitless-collection" className="py-4 px-4 sm:px-6 lg:px-8 w-full max-w-[1520px] mx-auto">
      <div className="mb-4" style={{marginBottom: '16px'}}>
        <span className="text--label rte text-lg text-gray-500">EXPLORE</span>
        <h2
          className="section__heading h3"
          style={{
            color: '#000000',
            fontFamily: 'Avenir Next, sans-serif',
            fontSize: '47px',
            padding: '9.4px 0px',
            fontWeight: 400,
            lineHeight: 1.1,
          }}
        >
          THE <span style={{ fontWeight: 700 }}>LIMITLESS </span>COLLECTION
        </h2>
      </div>
      <Swiper
        spaceBetween={4}
        slidesPerView={4}
        navigation={{
          nextEl: '.limitless-swiper-next',
          prevEl: '.limitless-swiper-prev',
        }}
        modules={[Navigation]}
        className="w-full"
        style={{ paddingBottom: '2rem' }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 }
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={product.id} style={{ width: '353.25px', marginRight: '4px' }}>
            <div style={{ fontSize: '16px' }}>
              <ProductCard product={product} namePriceGap="-8px" />
            </div>
          </SwiperSlide>
        ))}
        {/* Custom Swiper Navigation Buttons */}
        <button
          className="limitless-swiper-prev swiper-button--plain absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-transparent border-none p-1"
          aria-label="Previous"
          style={{ color: '#222', background: 'transparent', border: 'none', outline: 'none', cursor: 'pointer', width: '28px', height: '28px', minWidth: '28px', minHeight: '28px', borderRadius: '50%' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 4L7 12L15 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          className="limitless-swiper-next swiper-button--plain absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-transparent border-none p-1"
          aria-label="Next"
          style={{ color: '#222', background: 'transparent', border: 'none', outline: 'none', cursor: 'pointer', width: '28px', height: '28px', minWidth: '28px', minHeight: '28px', borderRadius: '50%' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 4L17 12L9 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </Swiper>
    </section>
  );
};

export default LimitlessCollection;