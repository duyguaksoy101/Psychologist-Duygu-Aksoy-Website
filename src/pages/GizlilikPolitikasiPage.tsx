import React from 'react';
const PrivacyPage = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">
              Gizlilik Politikası
            </h1>
          </div>
        </div>
      </section>
      {/* Content Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-gray max-w-none">
            <p>Bu sayfaya daha sonra içerik eklenecektir.</p>
          </div>
        </div>
      </section>
    </div>;
};
export default PrivacyPage;
