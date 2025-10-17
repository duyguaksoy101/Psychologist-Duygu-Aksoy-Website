import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/AnasayfaPage';
// DEĞİŞİKLİK: Yeni dosya adları ve komponent adları ile importları güncelle
import HakkimdaPage from './pages/HakkimdaPage';
import IletisimPage from './pages/IletisimPage';
import GizlilikPolitikasiPage from './pages/GizlilikPolitikasiPage';
import KullanimSartlariPage from './pages/KullanimSartlariPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFoundPage from './pages/NotFoundPage';
import ScrollToTop from './components/ScrollToTop';
import BlogPage from './pages/BlogPage';

export function App() {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* DEĞİŞİKLİK: element={} kısmını yeni komponent adları ile güncelle */}
            <Route path="/hakkimda" element={<HakkimdaPage />} />
            <Route path="/iletisim" element={<IletisimPage />} />
            <Route path="/gizlilik-politikasi" element={<GizlilikPolitikasiPage />} />
            <Route path="/kullanim-sartlari" element={<KullanimSartlariPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}
