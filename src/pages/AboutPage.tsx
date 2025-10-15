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
                Bireylerin hayatın zorluklarında yol almalarına ve zihinsel
                esenliğe ulaşmalarına yardımcı olmaya adanmış lisanslı bir
                psikoloğum.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[4/3]">
                <img src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Psikolog portresi" className="w-full h-full object-cover" />
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
              İstanbul'da 10 yılı aşkın bir süredir praktisyen psikolog olarak,
              yüzlerce danışanın zorlukların üstesinden gelmelerine ve zihinsel
              sağlıklarını iyileştirmelerine yardımcı olma ayrıcalığına sahip
              oldum. Psikolojiye olan yolculuğum, insan davranışına duyduğum
              derin bir merak ve insanların hayatlarında olumlu bir etki yaratma
              arzusuyla başladı.
            </p>
            <p>
              [Üniversite Adı]'ndaki eğitimimi tamamladıktan sonra, anksiyete,
              depresyon, ilişki sorunları ve travma tedavisi konularında
              uzmanlık geliştirdiğim [uzmanlık alanı]'nda uzmanlaştım.
              Yaklaşımım, bilişsel-davranışçı terapi, psikodinamik teori ve
              farkındalık uygulamalarından kanıta dayalı teknikleri birleştirir.
            </p>
            <p>
              Terapinin işbirlikçi bir süreç olduğuna inanıyorum ve
              düşüncelerinizi ve duygularınızı keşfedebileceğiniz güvenli,
              yargılayıcı olmayan bir alan yaratmaya kararlıyım. Amacım, uzun
              vadeli esenliğinizi destekleyecek içgörüler ve beceriler
              geliştirmenize yardımcı olmaktır.
            </p>
            <p>
              Terapi odasında olmadığım zamanlarda, doğada yürüyüş yapmaktan,
              yoga yapmaktan ve İstanbul'un sunduğu zengin kültürel deneyimleri
              keşfetmekten keyif alırım. Bu aktiviteler, kendi esenliğimi
              korumama ve işime taze bakış açıları getirmeme yardımcı olur.
            </p>
          </div>
        </div>
      </section>
      {/* Qualifications Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Nitelikler ve Uzmanlık
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Profesyonel geçmişim ve uzmanlık alanlarım.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Award className="text-gray-800 mb-4" size={32} />
              <h3 className="text-xl font-medium text-gray-800 mb-2">Eğitim</h3>
              <ul className="text-gray-600 space-y-3">
                <li>Klinik Psikoloji Doktora, Üniversite Adı</li>
                <li>Psikoloji Yüksek Lisans, Üniversite Adı</li>
                <li>Psikoloji Lisans, Üniversite Adı</li>
                <li>Bilişsel Davranışçı Terapi Sertifikası</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <BookOpen className="text-gray-800 mb-4" size={32} />
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Uzmanlık Alanları
              </h3>
              <ul className="text-gray-600 space-y-3">
                <li>Anksiyete ve Stres Yönetimi</li>
                <li>Depresyon ve Duygu Durum Bozuklukları</li>
                <li>İlişki Danışmanlığı</li>
                <li>Travma ve TSSB</li>
                <li>Kişisel Gelişim ve Öz-Saygı</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Users className="text-gray-800 mb-4" size={32} />
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Profesyonel Üyelikler
              </h3>
              <ul className="text-gray-600 space-y-3">
                <li>Türk Psikologlar Derneği</li>
                <li>Uluslararası Danışmanlık Birliği</li>
                <li>Avrupa Psikologlar Federasyonu</li>
                <li>Dünya Sağlık Örgütü Danışmanı</li>
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
                Terapiyi her bireyin benzersiz ihtiyaçlarına ve koşullarına göre
                şekillendirmeye inanıyorum. Yaklaşımım bütünleştiricidir ve
                kişiselleştirilmiş bir tedavi planı oluşturmak için çeşitli
                kanıta dayalı terapötik yöntemlerden yararlanır.
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
                <img src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Terapi seansı" className="w-full h-full object-cover" />
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