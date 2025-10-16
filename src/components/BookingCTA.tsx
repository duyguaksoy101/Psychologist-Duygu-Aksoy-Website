import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
interface BookingCTAProps {
  light?: boolean;
}
const BookingCTA: React.FC<BookingCTAProps> = ({
  light = false
}) => {
  return <div className={`px-4 py-8 md:py-12 ${light ? 'bg-white' : 'bg-gray-50'}`}>
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-4">
          Yolculuğunuza Başlamaya Hazır mısınız?
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Kişisel gelişim ve esenliğe doğru ilk adımı atın. Süreç boyunca sizi
          desteklemek için buradayım.
        </p>
        <Link to="/contact" className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 transition-colors">
          Randevu Oluşturun
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>;
};
export default BookingCTA;
