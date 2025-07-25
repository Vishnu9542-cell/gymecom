import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const blogPosts = [
  {
    id: 1,
    title: 'Workouts That Fit Into Your Busy Schedule: Effective Exercises In Under 20 Minutes',
    author: 'Nilloban Dutt',
    date: 'January 30, 2025',
    image: 'https://www.boldfit.com/cdn/shop/articles/yoga-min-2_90fa899e-dceb-4eb3-82d6-2173ed0bc482.jpg?v=1738240857',
    link: '/blogs/bold-blogs/workouts-that-fit-into-your-busy-schedule-effective-exercises-in-under-20-minutes',
  },
  {
    id: 2,
    title: 'The Ultimate Guide To Fitness Recovery: How To Rest, Rebuild, And Improve Performance',
    author: 'Nilloban Dutt',
    date: 'January 30, 2025',
    image: 'https://www.boldfit.com/cdn/shop/articles/exercise-stretching.jpg?v=1738240873',
    link: '/blogs/bold-blogs/the-ultimate-guide-to-fitness-recovery-how-to-rest-rebuild-and-improve-performance',
  },
  {
    id: 3,
    title: 'Push Your Limits - Fitness Challenges To Try This Year',
    author: 'Nilloban Dutt',
    date: 'January 30, 2025',
    image: 'https://www.boldfit.com/cdn/shop/articles/A7404890.jpg?v=1738240892',
    link: '/blogs/bold-blogs/push-your-limits-fitness-challenges-to-try-this-year',
  },
];

const BlogSection = () => {
  return (
    <section className="w-full bg-black py-12" style={{ marginTop: '64px' }}>
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{
          maxWidth: '1280px',
          margin: '0px 238px 0px 10px',
          padding: '0px 32px',
        }}
      >
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', marginBottom: '32px', minHeight: '62px' }}>
          <h2 className="h2" style={{
            color: '#FFF',
            fontFamily: 'Avenir Next, sans-serif',
            fontSize: '61px',
            fontWeight: 900,
            letterSpacing: 0,
            lineHeight: '61.8px',
            margin: 0,
          }}>
            <span style={{ fontWeight: 900 }}>UNFILTERED</span>{' '}
            <span style={{ fontWeight: 400 }}>BY BOLDFIT</span>
          </h2>
          <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a href="/blogs/bold-blogs" className="text-white" style={{
              fontFamily: 'Avenir Next, sans-serif',
              fontSize: '15px',
              fontWeight: 500,
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
              letterSpacing: 0,
              marginRight: 0,
              padding: 0,
            }}>Visit Blog</a>
            <div className="swiper-buttons small-hide card-slider__buttons no-js-hidden" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <button className="swiper-button swiper-button--plain swiper-button--prev-blog-section" aria-label="Previous" style={{ background: 'transparent', border: 'none', boxShadow: 'none', padding: '0', margin: 0, height: '20px', width: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 4L7 12L15 20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
              <button className="swiper-button swiper-button--plain swiper-button--next-blog-section" aria-label="Next" style={{ background: 'transparent', border: 'none', boxShadow: 'none', padding: '0', margin: 0, height: '20px', width: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 4L17 12L9 20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <Swiper
          spaceBetween={24}
          slidesPerView={3}
          navigation={{
            nextEl: '.swiper-button--next-blog-section',
            prevEl: '.swiper-button--prev-blog-section',
          }}
          modules={[Navigation]}
          className="w-full"
          style={{ width: '1448.8px', justifyContent: 'flex-start', alignItems: 'flex-start' }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 3 }
          }}
        >
          {blogPosts.map((post) => (
            <SwiperSlide key={post.id} style={{ marginRight: '24px' }}>
              <div className="bg-black rounded-xl overflow-hidden flex flex-col" style={{ border: 'none', boxShadow: 'none', width: '467px' }}>
                <a href={post.link} className="block">
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{ width: '467px', height: '350.25px', objectFit: 'cover', borderRadius: '16px', background: '#222', display: 'block' }}
                  />
                  <div style={{
                    color: '#FFF',
                    fontFamily: 'Avenir Next, sans-serif',
                    fontSize: '14px',
                    padding: '28px 16px 0px 16px',
                    width: '467px',
                  }}>
                    <h3 className="card-article__title h6" style={{
                      color: '#FFF',
                      fontFamily: 'Avenir Next, sans-serif',
                      fontSize: '21px',
                      fontWeight: 400,
                      margin: '0 0 16px 0',
                      lineHeight: '1.2',
                      minHeight: '42px',
                    }}>{post.title}</h3>
                    <div style={{
                      color: '#FFF',
                      fontFamily: 'Avenir Next, sans-serif',
                      fontSize: '10px',
                      fontWeight: 400,
                      margin: 0,
                      marginBottom: 0,
                    }}>
                      {post.author} Posted On {post.date}
                    </div>
                    <div style={{
                      color: '#FFF',
                      fontFamily: 'Avenir Next, sans-serif',
                      fontSize: '10px',
                      fontWeight: 400,
                      margin: '16px 0 0 0',
                      padding: '6.25px 0 0 0',
                      textDecoration: 'underline',
                      textUnderlineOffset: '2px',
                      width: 'fit-content',
                      cursor: 'pointer',
                    }}>READ MORE</div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BlogSection; 