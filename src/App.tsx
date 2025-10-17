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
export function App() {
  return <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/contact" element={<ContactPage />} />
  <Route path="/privacy" element={<PrivacyPage />} />
  <Route path="/terms" element={<TermsPage />} />
  <Route path="/blog" element={<BlogPage />} />
  <Route path="/blog/:postId" element={<BlogPostPage />} /> {/* Add this for individual blog posts */}
  <Route path="*" element={<NotFoundPage />} />
</Routes>
        </main>
        <Footer />
      </div>
    </>;
}
