import React from 'react';
import CatHero from '../components/CatHero';
import CatInfo from '../components/CatInfo';
import CatFacts from '../components/CatFacts';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <CatHero />
      <div className="container mx-auto px-4 py-8">
        <CatInfo />
        <CatFacts />
      </div>
    </div>
  );
};

export default Index;