import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const WhatsHot = () => {
  const [activeTab, setActiveTab] = useState('equipment');
  
  const products = {
    equipment: [
      {
        id: 1,
        name: "LIMITLESS SNATCHED RIBBED WAISTBAND & RUCHED BACK LEGGING - BLACK",
        price: 1599,
        originalPrice: 2599,
        discount: "38% OFF",
        image: "https://www.boldfit.com/cdn/shop/files/D04FD76C-BD9F-415C-B1CC-86F2AB1325C4.png?v=1752918664&width=600",
        hoverImage: "https://www.boldfit.com/cdn/shop/files/887179B8-5445-4958-A43C-0E9FAA8CF240.png?v=1752918664&width=600"
      },
      {
        id: 2,
        name: "LIMITLESS SNATCHED RIBBED WAISTBAND & RUCHED BACK LEGGING - BROWN",
        price: 1599,
        originalPrice: 2599,
        discount: "38% OFF",
        image: "https://www.boldfit.com/cdn/shop/files/7D473A8A-9C71-42CF-B544-CAD27B508CA1.png?v=1752918687&width=600",
        hoverImage: "https://www.boldfit.com/cdn/shop/files/6B532873-0F87-4BDC-A755-0A173845FF97.png?v=1752918687&width=600"
      },
      {
        id: 3,
        name: "LIMITLESS SNATCHED RIBBED WAISTBAND & RUCHED BACK LEGGING - GREY",
        price: 1599,
        originalPrice: 2599,
        discount: "38% OFF",
        image: "https://www.boldfit.com/cdn/shop/files/75556AF3-3736-4961-AC98-9F2189EF83BB.png?v=1752913342&width=600",
        hoverImage: "https://www.boldfit.com/cdn/shop/files/9D0FEF42-C260-4447-ACC6-8D06FEA54388.png?v=1752913342&width=600"
      },
      {
        id: 4,
        name: "LIMITLESS SNATCHED RIBBED WAISTBAND & RUCHED BACK LEGGING - NAVY BLUE",
        price: 1599,
        originalPrice: 2599,
        discount: "38% OFF",
        image: "https://www.boldfit.com/cdn/shop/files/40D93C2C-C1F1-44B2-AFA3-4F3714187D23.png?v=1753161945&width=600",
        hoverImage: "https://www.boldfit.com/cdn/shop/files/D61B328B-9112-4075-B04F-2F3FD9578433.png?v=1753161945&width=600"
      }
    ],
    accessories: [
      {
        id: 5,
        name: "Premium Resistance Bands Set",
        price: 1999,
        originalPrice: 2999,
        discount: "40% OFF",
        image: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg",
        hoverImage: "https://images.pexels.com/photos/3768917/pexels-photo-3768917.jpeg"
      },
      {
        id: 6,
        name: "Professional Yoga Mat",
        price: 2499,
        originalPrice: 3999,
        discount: "33% OFF",
        image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg",
        hoverImage: "https://images.pexels.com/photos/4056724/pexels-photo-4056724.jpeg"
      }
    ],
    supplements: [
      {
        id: 7,
        name: "Premium Whey Protein 5kg",
        price: 3499,
        originalPrice: 4999,
        discount: "30% OFF",
        image: "https://images.pexels.com/photos/4474052/pexels-photo-4474052.jpeg",
        hoverImage: "https://images.pexels.com/photos/4474053/pexels-photo-4474053.jpeg"
      },
      {
        id: 8,
        name: "Pre-Workout Energy Formula",
        price: 2499,
        originalPrice: 3499,
        discount: "28% OFF",
        image: "https://images.pexels.com/photos/4474054/pexels-photo-4474054.jpeg",
        hoverImage: "https://images.pexels.com/photos/4474055/pexels-photo-4474055.jpeg"
      }
    ]
  };

  return (
    <section className="pt-8 pb-2 px-4 sm:px-6 lg:px-8 w-full">
      <div className="mb-12">
        <span
          className="text--label rte"
          style={{
            color: '#0A0A0A',
            fontFamily: 'Avenir Next, sans-serif',
            fontSize: '12px',
            fontWeight: 400,
            padding: '6.25px 0',
            margin: '0 0 -4px 0',
            display: 'inline-block',
          }}
        >
          SELLING FAST
        </span>
        <h2
          style={{
            fontFamily: 'Avenir Next, sans-serif',
            fontSize: '32px',
            fontWeight: 400,
            color: '#0A0A0A',
            marginTop: '8px',
            marginBottom: '32px',
            letterSpacing: 0,
          }}
        >
          WHAT'S <span style={{ fontWeight: 900 }}>HOT</span>
        </h2>
      </div>
      
      {/* Swiper Product Slider */}
      <Swiper
        spaceBetween={12}
        slidesPerView={4}
        modules={[Navigation]}
        navigation
        className="w-full"
        style={{ paddingBottom: '0.5rem' }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 }
        }}
      >
        {products.equipment.map((product, index) => (
          <SwiperSlide key={product.id} style={{ width: '353.25px', marginRight: '12px' }}>
            <ProductCard product={product} namePriceGap="10px" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default WhatsHot;