// src/App.tsx DOSYASINDAKİ DEĞİŞİKLİKLER

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFoundPage from './pages/NotFoundPage';
import ScrollToTop from './components/ScrollToTop';
import BlogPage from './pages/BlogPage'; // Import BlogPage

// NOTE: The BlogPostPage component is missing. You will need to create it.
// import BlogPostPage from './pages/BlogPostPage'; 

export function App() {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* DEĞİŞİKLİK BURADA */}
            <Route path="/hakkimda" element={<AboutPage />} />
            <Route path="/iletisim" element={<ContactPage />} />
            <Route path="/gizlilik-politikasi" element={<PrivacyPage />} />
            <Route path="/kullanim-sartlari" element={<TermsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            {/* The route below is commented out because the BlogPostPage component is not yet created.
              Uncomment it after you create the component.
            */}
            {/* <Route path="/blog/:postId" element={<BlogPostPage />} /> */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}
