import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { LoadingAnimation } from './components/LoadingAnimation'; 
import {SignIn} from './components/Signin';
import {Register} from './components/Register';

// Lazy load the pages with named exports
const LandingPage = lazy(() => import('./pages/LandingPage').then(module => ({ default: module.LandingPage })));
const ListingPage = lazy(() => import('./pages/ListingPage').then(module => ({ default: module.ListingPage })));
const Blog = lazy(() => import('./pages/Blog').then(module => ({ default: module.Blog })));
const About = lazy(()=> import('./pages/About').then(module => ({ default: module.About })));
const NotFound = lazy(()=> import("./pages/NotFound").then(module => ({ default: module.NotFound})));

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingAnimation />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/listings" element={<ListingPage />} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/about" element={<About/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;