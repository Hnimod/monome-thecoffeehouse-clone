import React from 'react';
import HeroSection from './HeroSection/Hero';
import MenuSection from './MenuSection/MenuHome';
import BlogSection from './BlogSection/BlogSection';
import ShopSection from './ShopSection/ShopSection';
import Default from '../shared/templates/Default';

const Home = () => {
  return (
    <Default>
      <HeroSection />
      <MenuSection />
      <BlogSection />
      <ShopSection />
    </Default>
  );
};

export default Home;
