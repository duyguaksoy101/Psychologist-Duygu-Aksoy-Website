import React from 'react';
import { Phone, Mail, Clock, Send } from 'lucide-react';
const ContactPage = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">
              İletişime Geçin
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Sorularınız mı var veya ilk seansınızı planlamaya hazır mısınız?
              Aşağıdaki yöntemlerden herhangi birini kullanarak ulaşın.
            </p>
          </div>
        </div>
      </section>
      {/* Contact Information & Form */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Contact Information */}
            <div className="w-full md:w-2/5">
              <h2 className="text-2xl font-medium text-gray-800 mb-6">
                İletişim Bilgileri
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div>
                    <h3 className="font-medium text-gray-800">Ofis Konumu</h3>
                    <p className="text-gray-600">123 Terapi Sokak, Beyoğlu</p>
                    <p className="text-gray-600">İstanbul, Türkiye</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone size={24} className="text-gray-800 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-800">Telefon</h3>
                    <p className="text-gray-600">+90 123 456 7890</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail size={24} className="text-gray-800 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-800">E-posta</h3>
                    <p className="text-gray-600">contact@yourname.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock size={24} className="text-gray-800 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-800">
                      Çalışma Saatleri
                    </h3>
                    <p className="text-gray-600">
                      Pazartesi - Cuma: 9:00 - 18:00
                    </p>
                    <p className="text-gray-600">Cumartesi: 10:00 - 14:00</p>
                    <p className="text-gray-600">Pazar: Kapalı</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-medium text-gray-800 mb-4">
                  Beni Takip Edin
                </h3>
                <div className="flex space-x-4">
                  <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="w-full md:w-3/5">
              <h2 className="text-2xl font-medium text-gray-800 mb-6">
                Mesaj Gönderin
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      Ad
                    </label>
                    <input type="text" id="firstName" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Soyad
                    </label>
                    <input type="text" id="lastName" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-posta Adresi
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon Numarası
                  </label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Konu
                  </label>
                  <select id="subject" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200" required>
                    <option value="">Lütfen seçiniz</option>
                    <option value="booking">Seans Planla</option>
                    <option value="question">Genel Soru</option>
                    <option value="feedback">Geri Bildirim</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mesaj
                  </label>
                  <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200" required></textarea>
                </div>
                <button type="submit" className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors">
                  Mesaj Gönder
                  <Send size={16} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-8 text-center">
            Sıkça Sorulan Sorular
          </h2>
          <div className="space-y-6">
            {[{
            question: 'İlk seansta neler bekleyebilirim?',
            answer: 'İlk seans genellikle sizi terapiye getiren nedenleri, sizi tanıyabileceğim geçmişinizi ve şuan neler yaptığınız hakkında konuşacağımız bir değerlendirme görüşmesidir. Terapi yaklaşımımı açıklar ve aklınızdaki soruları yanıtlarım. Bu seans, birlikte çalışmanın ikimiz için uygun olup olmadığını anlamamıza yardımcı olur.'
          }, {
            question: 'Her terapi seansı ne kadar sürer?',
            answer: 'Standart seanslar 50 dakika sürer, bu genel kabul görmüş süredir. Ancak ilk görüşme genellikle biraz daha uzun olup, 60-75 dakika arasında değişebilir.'
          }, {
            question: 'Ne sıklıkla görüşeceğiz?',
            answer: 'Çoğu danışan haftalık seanslarla başlar. İlerleme kaydedildikçe, iki haftada bir veya aylık seanslara geçebiliriz. Sıklık, sizin özel ihtiyaçlarınıza ve hedeflerinize bağlıdır.'
          }, {
            question: 'Terapide konuştuklarım gizli tutulacak mı?',
            answer: 'Evet, gizlilik terapi sürecinin temel bir unsurudur. Seanslarımızda konuşulanlar tamamıyla gizli tutulur; bazı yasal istisnalar dışında (örneğin, kendinize veya başkasına zarar verme riski ya da çocuk/yaşlı istismarı durumları gibi).'
          }, {
            question: 'Online Terapi Seansı Sunuyor musunuz?',
            answer: 'Evet, tüm seanslarımız Google Meet üzerinden, kayıt alınmadan yapılmaktadır.'
          }].map((faq, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>)}
          </div>
        </div>
      </section>
    </div>;
};
export default ContactPage;