// src/404Page.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-2xl font-semibold text-gray-700 mb-8">Page Not Found</p>
      <p className="text-lg text-gray-600 mb-8">
        The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="px-6 py-2 text-white bg-primary rounded-lg"
      >
        Go Back Home
      </Link>
    </div>
  );
};

