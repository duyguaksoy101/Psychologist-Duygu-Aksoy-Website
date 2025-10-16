import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, BookOpen, Users } from 'lucide-react';
import BookingCTA from '../components/BookingCTA';
const AboutPage = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight mb-6">
                Hakkımda
              </h1>
              <p className="text-gray-600 text-lg mb-6">
                Hayatın zorluklarıyla başa çıkmanız ve ruh sağlığınızı güçlendirmeniz için yanınızdayım. Her bireyin yaşam yolculuğunun ve ihtiyaçlarının benzersiz olduğuna inanıyor, size özel çözümler ve samimi bir yaklaşım sunuyorum.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[4/4]">
                <img src="/image/psikolog-duygu-aksoy.webp" alt="Psikolog Duygu Aksoy" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Bio Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-medium text-gray-900 mb-6">Hikayem</h2>
          <div className="prose prose-gray max-w-none">
            <p>
             Psikolojiyle tanışmam, aslında çok yıllar önce içimde sessizce filizlenmiş bir merakın olgunlaşmış hali. Üniversite tercihlerimde psikolojiyi seçmek istememe rağmen, dönemin koşulları ve ailemin yönlendirmesiyle mühendislik okudum. Kimya Mühendisliği ve ardından gelen yüksek lisans eğitimi, bana analitik düşünme, sistematik çalışma ve insanın üretim süreçlerine bakışını kazandırdı. Ancak içimdeki “insanı anlama” isteği hiç sönmedi.
            </p> 
            <br>
            </br> 
            <p>
              Profesyonel hayatım boyunca laboratuvar ortamlarından yazılım dünyasına, startup kuruculuğundan ürün yönetimine uzanan geniş bir yelpazede çalıştım. Bu süreçte hem başarıyı hem de başarısızlığı, ekip olmanın gücünü, tükenmişliği ve yeniden başlamanın cesaretini deneyimledim. Tüm bu deneyimler, insan davranışını yalnızca teorik olarak değil, hayatın içinden gözlemleme fırsatı sundu.
            </p>
            <p>
        Kendi kişisel dönüşümüm, psikolojiye yeniden yönelmemin en güçlü motivasyonu oldu. Kendi terapi sürecim ve Konstelasyon çalışmalarıyla tanışmam, bu alana olan ilgimi kalıcı bir tutkuya dönüştürdü. Üç yıl süren yoğun eğitimlerin ardından, psikoloji lisans eğitimimi tamamlayarak profesyonel bir psikolog olarak çalışmaya başladım. Bugün, bireylerin yaşamlarında daha fazla farkındalık, denge ve anlam yaratmalarına eşlik etmeyi hedefliyorum.
            </p>
             <br>
            </br> 
            <p>
        Her bireyin hikayesinin kendine özgü olduğuna inanıyor; terapiyi, bu hikayeyi yeniden anlamlandırma ve dönüştürme süreci olarak görüyorum.
            </p>
          </div>
        </div>
      </section>
      {/* Qualifications Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Uzmanlıklar ve Deneyim Alanları
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Profesyonel geçmişim ve odaklandığım alanlar
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Award className="text-gray-800 mb-4" size={32} />
              <h3 className="text-xl font-medium text-gray-800 mb-2">Eğitim</h3>
              <ul className="text-gray-600 space-y-3">
                <li>Psikoloji Lisans, Galata Üniversitesi</li>
                <li>Polimer Yüksek Lisans, İstanbul Teknik Üniversitesi</li>
                <li>Kimya Müh. Lisans, Kocaeli Üniversitesi</li>
                <li>Konstelasyon Kolaylaştırıcısı Eğitimi, 3 yıl</li>
                <li>Sistemik Yaklaşım Bilimi ile Duygusal Zeka, Dönüşümsel Liderlik ve Koçluk Becerileri Eğitimi, 1 yıl</li>
                 <li>Yaşantı Eğitimi, 1 yıl</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <BookOpen className="text-gray-800 mb-4" size={32} />
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Çalışma Alanları
              </h3>
              <ul className="text-gray-600 space-y-3">
                <li>Anksiyete ve Stres Yönetimi</li>
                <li>Depresyon ve Duygu Durum Bozuklukları</li>
                <li>İlişki Danışmanlığı</li>
                <li>Travma</li>
                <li>Kişisel Gelişim ve Öz-Saygı</li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <Link to="/contact" className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 transition-colors">
              Danışmanlık Randevusu Alın
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      {/* Approach Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                Yaklaşımım
              </h2>
              <p className="text-gray-600 mb-6">
                Her danışanın kendine özgü ihtiyaçları ve yaşam koşulları olduğuna inanıyor, terapi sürecini bu biricikliğe göre şekillendiriyorum. Yaklaşımım bütünleyici niteliktedir.

Kendinizi güvende hissedeceğiniz sıcak, empatik ve yargısız bir ortam yaratmak ilk önceliğim. Bu ortamda düşüncelerinizi ve duygularınızı özgürce keşfedebilirsiniz. Birlikte çalışarak, hedeflerinizi destekleyen ve iyi oluşunuzu artıran içgörüler, beceriler ve stratejiler geliştirmenize yardımcı oluyorum.

Belirli bir sorunla başa çıkmaya çalışıyor olun ya da kişisel gelişiminizi hedefliyor olun, amacım size yaşamınızda olumlu değişiklikler yaratmanız için gereken araçları ve anlayışı kazandırmaktır.
              </p>
              <p className="text-gray-600 mb-6">
                Düşüncelerinizi ve duygularınızı keşfetmek için güvende
                hissettiğiniz sıcak, empatik ve yargılayıcı olmayan bir ortam
                yaratmayı önceliklendiriyorum. Birlikte, hedeflerinizi ve
                esenliğinizi destekleyen içgörüler, beceriler ve stratejiler
                geliştirmenize yardımcı olmak için işbirliği içinde çalışacağız.
              </p>
              <p className="text-gray-600">
                İster belirli bir zorlukla başa çıkıyor olun, ister kişisel
                gelişim arayışında olun, amacım hayatınızda olumlu bir
                değişiklik yaratmak için ihtiyaç duyduğunuz araçlar ve anlayışla
                sizi güçlendirmektir.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square">
                <img src="/images/yaklasimim.webp" alt="Yaklaşımım" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <BookingCTA />
    </div>;
};
export default AboutPage;
