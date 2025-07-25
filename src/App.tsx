import React from 'react';
import ScrollingTicker, { AnnouncementBar } from './components/ScrollingTicker';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import WhatsHot from './components/WhatsHot';
import FeaturedSection from './components/FeaturedSection';
import LimitlessCollection from './components/LimitlessCollection';
import TrailsCollection from './components/TrailsCollection';
import Footer from './components/Footer';
import Header from './components/Header';
import { CartProvider } from './context/CartContext';
import ProductOfTheWeek from './components/ProductOfTheWeek';
import FullWidthBanner from './components/FullWidthBanner';
import ShopBySportsSection from './components/ShopBySportsSection';
import BlogSection from './components/BlogSection';
import SocialMediaHighlights from './components/SocialMediaHighlights';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <AnnouncementBar />
        <Hero />
        <WhatsHot />
        <FeaturedSection />
        <ProductOfTheWeek />
        <LimitlessCollection />
        {/* ScrollingTicker will be placed above TrailsCollection in that component */}
        <TrailsCollection />
        <FullWidthBanner />
        <ShopBySportsSection />
        <BlogSection />
        <SocialMediaHighlights />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;