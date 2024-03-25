import React from 'react';
import Navbar from '/src/_components/Navbar';

const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />

      <div className="flex-grow flex flex-col items-center justify-center m-10 bg-white rounded-xl">
        <img src="/public/images/jet-stream.webp" alt="React Jet Stream Logo" className="mx-auto rounded-full w-18 h-18"/>
        <h1 className="text-4xl font-bold mb-4">Welcome to Your React Jet Stream Application</h1>
        <p className="text-lg mb-8">Get ready to take off into the world of modern web development!</p>
      </div>
    </div>
  );
};

export default Welcome;
