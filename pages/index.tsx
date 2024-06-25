import React from 'react';

const HomePage = () => {
  return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700">
      <main className="max-w-4xl mx-auto p-8 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to NexFusionJS</h1>
        <p className="text-lg md:text-xl mb-8">The modern framework combining Next.js and NestJS.</p>
        <p className='mb-8'>Developed by @iamvirul</p>
        <a
          href="#"
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out"
        >
          Get Started
        </a>
      </main>
    </div>
  );
};

export default HomePage;
