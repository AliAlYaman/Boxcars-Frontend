import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { LoadingAnimation } from './components/LoadingAnimation';

// Lazy load the pages with named exports
const LandingPage = lazy(() => import('./pages/LandingPage').then(module => ({ default: module.LandingPage })));
const ListingPage = lazy(() => import('./pages/ListingPage').then(module => ({ default: module.ListingPage })));


function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingAnimation />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/listings" element={<ListingPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;