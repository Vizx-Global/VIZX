import React from 'react';
import MainLayout from '../components/layout/MainLayout';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <div className="home-page">
        <h1>Welcome to VIZX</h1>
      </div>
    </MainLayout>
  );
};

export default Home;