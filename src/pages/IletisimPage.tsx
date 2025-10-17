import React, { useEffect, createElement } from 'react';
import { Phone, Mail, Clock, Send } from 'lucide-react';
const ContactPage = () => {
useEffect(() => {
    // Mevcut Calendly script'i
    const calendlyScript = document.createElement('script');
    calendlyScript.src = 'https://assets.calendly.com/assets/external/widget.js';
    calendlyScript.async = true;
    document.body.appendChild(calendlyScript);
    const formsappScript = document.createElement('script');
    formsappScript.src = 'https://forms.app/cdn/embed.js';
    formsappScript.async = true;
    formsappScript.defer = true;
    
    // Script yüklendikten sonra formu başlatan fonksiyon
    formsappScript.onload = () => {
      // @ts-ignore - formsapp'in global olarak eklendiğini varsayıyoruz
      new formsapp('68f291d4a927120002ac0690', 'standard', {'width':'100%','height':'636px','opacity':0}, 'https://puc7gi5v.forms.app');
    };
    document.body.appendChild(formsappScript);
    // --- YENİ EKLENECEK KISIM SONU ---

    // Component kaldırıldığında her iki script'i de temizle
    return () => {
      if (document.body.contains(calendlyScript)) {
        document.body.removeChild(calendlyScript);
      }
      if (document.body.contains(formsappScript)) {
        document.body.removeChild(formsappScript);
      }
    };
  }, []);
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
                  <Phone size={24} className="text-gray-800 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-800">Telefon</h3>
                    <p className="text-gray-600">+90 505 818 92 65</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail size={24} className="text-gray-800 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-800">E-posta</h3>
                    <p className="text-gray-600">duyguaksoy101@gmail.com</p>
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
                    <p className="text-gray-600">Cumartesi: Uygunluk için mail yazınız</p>
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
{/* Forms.app Form Alanı */}
            <div className="w-full md:w-3/5">
              <h2 className="text-2xl font-medium text-gray-800 mb-6">
                Mesaj Gönderin
              </h2>
              {/* forms.app bu div'in içine formu yerleştirecek */}
              <div formsappId="68f291d4a927120002ac0690"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Calendly Widget Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-4">
              Randevu Planlayın
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Aşağıdaki takvimi kullanarak doğrudan bir seans randevusu
              oluşturabilirsiniz.
            </p>
          </div>
          <div className="calendly-inline-widget" data-url="https://calendly.com/duygu_aksoy/seans-randevunuzu-olusturun" style={{
          minWidth: '320px',
          height: '700px'
        }}></div>
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
