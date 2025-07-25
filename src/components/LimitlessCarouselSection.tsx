import React from 'react';
import ProductCard from './ProductCard';

const sizes = ['S', 'M', 'L', 'XL', '2XL', '3XL'];

const products = [
  {
    id: 1,
    name: "LIMITLESS SNATCHED SLEEVELESS CROP TOP - ROYAL BLUE",
    price: 1499,
    originalPrice: 2499,
    discount: "40% OFF",
    image: "https://www.boldfit.com/cdn/shop/files/F0118B27-CA6F-411B-A940-A629EAEB2F54.png?v=1752911506&width=600",
    hoverImage: "https://www.boldfit.com/cdn/shop/files/FE065D33-36A7-45A4-BFF0-327AC04E01BD.png?v=1752911992&width=600"
  },
  {
    id: 2,
    name: "LIMITLESS SNATCHED RUCHED BACK FLARE PANTS - BROWN .",
    price: 1799,
    originalPrice: 2899,
    discount: "37% OFF",
    image: "https://www.boldfit.com/cdn/shop/files/8CF65B28-253B-4154-AB34-018B78B6D3D9.png?v=1752911609&width=600",
    hoverImage: "https://www.boldfit.com/cdn/shop/files/7A1BDCE4-C58D-4F2A-817E-C162E6EC743A.png?v=1752911768&width=600"
  },
  {
    id: 3,
    name: "LIMITLESS SNATCHED RIBBED WAISTBAND & RUCHED BACK LEGGING - BLACK",
    price: 1599,
    originalPrice: 2599,
    discount: "38% OFF",
    image: "https://www.boldfit.com/cdn/shop/files/D04FD76C-BD9F-415C-B1CC-86F2AB1325C4.png?v=1752918664&width=600",
    hoverImage: "https://www.boldfit.com/cdn/shop/files/887179B8-5445-4958-A43C-0E9FAA8CF240.png?v=1752918664&width=600"
  },
  {
    id: 4,
    name: "LIMITLESS SNATCHED RIBBED WAISTBAND & RUCHED BACK LEGGING - BROWN",
    price: 1599,
    originalPrice: 2599,
    discount: "38% OFF",
    image: "https://www.boldfit.com/cdn/shop/files/7D473A8A-9C71-42CF-B544-CAD27B508CA1.png?v=1752918687&width=600",
    hoverImage: "https://www.boldfit.com/cdn/shop/files/6B532873-0F87-4BDC-A755-0A173845FF97.png?v=1752918687&width=600"
  }
];

const LimitlessCarouselSection: React.FC = () => {
  return (
    <>
      <section id="shopify-section-template--16985650430039__carousel_dK6VLp" className="shopify-section section-carousel w-full">
        <div className="color-scheme-1 gradient">
          <div className="section section-w-swiper layout-1">
            {/* Heading and Breadcrumbs */}
            <div className="flex flex-col items-start" style={{paddingLeft: '40px', paddingTop: '40px'}}>
              <div className="mb-2 text-xs text-gray-500 font-semibold tracking-widest" style={{ letterSpacing: '1.5px', fontFamily: 'Avenir Next, sans-serif' }}>
                EXPLORE
              </div>
              <h2 className="section__heading h4" style={{ fontFamily: 'Avenir Next, sans-serif', color: '#000000', fontSize: '36px', fontWeight: 400, width: '950px', height: '50.4px', padding: '7.2px 0px', margin: 0, lineHeight: '36px', whiteSpace: 'nowrap', overflow: 'hidden' }}>
                WE'VE GOT ALL THE <strong style={{ fontWeight: 700 }}>SPORTS YOU NEED</strong>
              </h2>
              <div className="text-sm text-gray-500 mb-4" style={{ fontFamily: 'Avenir Next, sans-serif', fontSize: '10px', color: '#888', marginTop: '16px' }}>
                HOME / LIMITLESS
              </div>
            </div>
            {/* Filter + Product Grid Section */}
            <div className="flex flex-row gap-10 mt-8" style={{paddingLeft: '40px'}}>
              {/* Filter Sidebar */}
              <aside className="w-[220px] bg-white p-0 h-fit self-start" style={{ boxShadow: 'none', border: 'none', marginLeft: '0px', padding: 0 }}>
                <form id="FacetFiltersForm" className="facets__form">
                  <div className="collection-grid__filter">
                    <div className="accordion facets__accordion collection-grid__sidebar-filter">
                      <span className="facets__accordion-header font-semibold text-base mb-4 block">Filters</span>
                      {/* Price Accordion */}
                      <details className="accordion__section facets__accordion-section mb-4" id="Filters-accordion-section-1">
                        <summary className="facets__accordion-btn h4 js-btn flex items-center justify-between cursor-pointer select-none text-base font-medium py-2" id="Filters-accordion-button-1" role="button" aria-controls="Filters-accordion-dropdown-1" aria-expanded="false">
                          Price
                          <span className="facets__accordion-icon ml-2">
                            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </span>
                        </summary>
                        <div className="accordion__body facets__accordion-body slim-scrollbar pt-2" id="Filters-accordion-dropdown-1">
                          <div className="js-filter" data-index="1">
                            <div className="facets__price">
                              <div className="facets__price-row flex items-center gap-2 mb-2">
                                <span>₹</span>
                                <div className="field facets__price-field">
                                  <label htmlFor="Filter-Price-GTE" className="field__label text-xs">From</label>
                                  <input type="number" id="Filter-Price-GTE" name="filter.v.price.gte" placeholder="0" min="0" max="2999" className="field__input border rounded px-2 py-1 w-20 text-sm" />
                                </div>
                              </div>
                              <div className="facets__price-row flex items-center gap-2">
                                <span>₹</span>
                                <div className="field facets__price-field">
                                  <label htmlFor="Filter-Price-LTE" className="field__label text-xs">To</label>
                                  <input type="number" id="Filter-Price-LTE" name="filter.v.price.lte" placeholder="2999" min="0" max="2999" className="field__input border rounded px-2 py-1 w-20 text-sm" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </details>
                      {/* Size Accordion */}
                      <details className="accordion__section facets__accordion-section" id="Filters-accordion-section-2">
                        <summary className="facets__accordion-btn h4 js-btn flex items-center justify-between cursor-pointer select-none text-base font-medium py-2" id="Filters-accordion-button-2" role="button" aria-controls="Filters-accordion-dropdown-2" aria-expanded="false">
                          Size
                          <span className="facets__accordion-icon ml-2">
                            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </span>
                        </summary>
                        <div className="accordion__body facets__accordion-body slim-scrollbar pt-2" id="Filters-accordion-dropdown-2">
                          <div className="js-filter" data-index="2">
                            <ul className="facets__list list-unstyled" role="list">
                              {sizes.map((size, idx) => (
                                <li className="facets__item" key={size}>
                                  <div className="checkbox facet-checkbox flex items-center gap-2" tabIndex={0}>
                                    <input type="checkbox" name="filter.v.option.size" value={size} id={`Filter-filter.v.option.size-${idx+1}`} className="product-option__input" />
                                    <label htmlFor={`Filter-filter.v.option.size-${idx+1}`}>{size}</label>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </details>
                    </div>
                  </div>
                </form>
              </aside>
              {/* Product Grid */}
              <div className="flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px pr-16">
                  {products.map(product => (
                    <div key={product.id} className="flex flex-col items-center m-0 p-0">
                      <div
                        className="relative bg-white overflow-hidden shadow-sm group rounded-lg"
                        style={{ width: '268.65px', height: '268.65px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          style={{ width: '268.65px', height: '268.65px', objectFit: 'cover', borderRadius: '12px' }}
                        />
                      </div>
                      <div
                        className="product-card__info flex flex-col justify-center mt-2"
                        style={{ width: '268.65px', fontFamily: 'Avenir Next, sans-serif', color: '#0A0A0A', fontSize: '14px', fontWeight: 400, padding: 0 }}
                      >
                        <div style={{ width: '100%', height: '36px', display: '-webkit-box', color: '#000000', fontFamily: 'Avenir Next, sans-serif', fontSize: '16px', fontWeight: 400, textAlign: 'left', overflow: 'hidden', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', margin: 0, lineHeight: '1.2', marginBottom: '0px', padding: 0, verticalAlign: 'middle' }} title={product.name}>
                          {product.name}
                        </div>
                        <div className="flex items-center space-x-1" style={{ fontSize: '16px', color: '#0A0A0A', fontWeight: 400, flexWrap: 'wrap', marginTop: '10px', paddingTop: 0, width: '100%', height: '19px', fontFamily: 'Avenir Next, sans-serif' }}>
                          {product.originalPrice && (
                            <span style={{ textDecoration: 'line-through', color: '#888', fontSize: '16px', minWidth: 0, marginRight: '2px' }}>
                              ₹ {product.originalPrice.toLocaleString()}
                            </span>
                          )}
                          <span style={{ color: '#0A0A0A', fontWeight: 400, minWidth: 0, marginRight: '2px', fontSize: '16px' }}>
                            ₹ {product.price.toLocaleString()}
                          </span>
                          {product.discount && (
                            <span style={{ color: '#1ca7ec', fontWeight: 400, fontSize: '16px', minWidth: '30px' }}>{product.discount}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* End Filter + Product Grid Section */}
            <div className="section__foot mt-0">
              <div className="section__head--buttons">
                <div className="swiper-buttons small-hide card-slider__buttons no-js-hidden flex gap-2 mt-4">
                  <button className="swiper-button swiper-button--plain swiper-button--prev-template--16985650430039__carousel_dK6VLp" aria-label="Previous" disabled style={{color:'#222', background:'transparent', border:'none', outline:'none', cursor:'pointer', width:'28px', height:'28px', borderRadius:'50%'}}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 4L17 12L9 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </button>
                  <button className="swiper-button swiper-button--plain swiper-button--next-template--16985650430039__carousel_dK6VLp" aria-label="Next" disabled style={{color:'#222', background:'transparent', border:'none', outline:'none', cursor:'pointer', width:'28px', height:'28px', borderRadius:'50%'}}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 4L17 12L9 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LimitlessCarouselSection; 