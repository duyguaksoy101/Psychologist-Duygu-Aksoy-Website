import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote, Star, Rss } from 'lucide-react';
import BookingCTA from '../components/BookingCTA';

// Define the structure of a blog post
interface Post {
  title: string;
  brief: string;
  url: string;
  coverImage: {
    url: string;
  };
  publishedAt: string;
}

const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Use optional chaining to safely access environment variable
  const blogUrl = '/blog';
  
  // Rotating quotes state
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const quotes = [
    'Artık aynı döngüleri yaşamak istemiyorum.',
    'Kendimi hep yalnız hissediyorum.',
    'Zihnim hiç durmuyor, rahatlayamıyorum.',
    'Hayatın yükü ağır geliyor.',
    'Gelecekte ne yapacağımı bilemiyorum.',
    'Kendime güvenmek istiyorum.',
    'Huzura ihtiyacım var.',
    'İçimdeki boşluk hiç dolmuyor.',
    'Bir türlü mutlu olamıyorum.',
    'Kimse beni anlamıyor.',
    'Hayatımda bir değişim başlatmak istiyorum.',
    'Sürekli kaygı ve endişe içindeyim.',
    'Kendimi olduğum gibi kabul etmek istiyorum.'
  ];

  // Set up quote rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex(prevIndex => 
        prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500); // Change every 3.5 seconds

    return () => clearInterval(interval);
  }, [quotes.length]);

// src/pages/HomePage.tsx için son ve çalışan kod

useEffect(() => {
  const fetchPosts = async () => {
    // 1. Önbelleği kontrol et
    try {
      const cachedData = localStorage.getItem('hashnodePosts');
      if (cachedData) {
        const { posts: cachedPosts, timestamp } = JSON.parse(cachedData);
        // Önbellek 1 saat geçerli
        if (new Date().getTime() - timestamp < 3600 * 1000) {
          setPosts(cachedPosts);
          setLoading(false);
          return;
        }
      }
    } catch (error) {
      // Bozuk önbelleği temizle
      localStorage.removeItem('hashnodePosts');
    }

    // 2. API'den veri çek
    try {
      // DEĞERLERİ DOĞRUDAN KODA YAZIYORUZ
      const host = "blog.psikologduyguaksoy.com";
      const token = "38b1022f-d114-4182-9fa2-c78d8dfed0c5";

      const query = `
        query Publication {
          publication(host: "${host}") {
            posts(first: 3) {
              edges {
                node {
                  title
                  brief
                  url
                  coverImage { url }
                  publishedAt
                }
              }
            }
          }
        }
      `;

      const response = await fetch('https://gql.hashnode.com/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ query }),
      });

      const result = await response.json();

      if (result.errors) {
        throw new Error(result.errors.map(e => e.message).join(', '));
      }

      const fetchedPosts = result.data.publication.posts.edges.map(edge => edge.node);
      setPosts(fetchedPosts);

      // Veriyi önbelleğe kaydet
      localStorage.setItem('hashnodePosts', JSON.stringify({
        posts: fetchedPosts,
        timestamp: new Date().getTime(),
      }));

    } catch (err) {
      console.error("Blog yazıları çekilirken hata:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchPosts();
}, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const testimonials = [
    {
      id: 1,
      text: 'Kendimi yorgun, hatta tükenmiş hissettiğim bir süreçte elimi tutup, beni kendine güvenen, kendini ve karşısındakini anlayan birine dönüşmeme yardım ettiğiniz için çok teşekkür ederim.',
      author: 'Danışan A.',
      rating: 5
    },
    {
      id: 2,
      text: "Duygu Hanım'ın yarattığı güvenli alan, yıllardır kaçındığım zorlu duyguları keşfetmeme olanak sağladı. Rehberliği için minnettarım.",
      author: 'Danışan Ç.',
      rating: 5
    },
    {
      id: 3,
      text: 'Terapiden sonra, nihayet hayatın zorluklarıyla güvenle ve öz-şefkatle başa çıkabilecek donanıma sahip olduğumu hissediyorum.',
      author: 'Danışan T.',
      rating: 5
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight mb-6">
                Kendiniz İçin Yeni Bir Başlangıç
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Hayatınızda tekrar eden döngüleri geride bırakmak, farklı bakış
                açıları geliştirmek için değişimi birlikte başlatalım.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/iletisim"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 transition-colors"
                >
                  Randevu Oluşturun
                  <ArrowRight size={16} className="ml-2" />
                </Link>
                <Link
                  to="/hakkimda"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Bilgi Alın
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[4/5]">
                  <img
                    src="/image/hero-image.webp"
                    alt="Psikolog Duygu Aksoy ile seans"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 shadow-lg rounded-lg max-w-xs">
                  <p className="text-gray-800 font-medium transition-opacity duration-500">
                    &quot;{quotes[currentQuoteIndex]}&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Psikolojik Danışmanlık Verdiğim Alanlar
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Yaşadığınız zorlukları tek başınıza göğüslemek zorunda değilsiniz.
              Farklı bakış açıları kazanmak ve kendinizi yeniden keşfetmek için
              siz de bu dönüşüm yolculuğuna davetlisiniz.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Depresyon',
                description: 'Hayat enerjinizi yeniden kazanmak için bugün ilk adımı atabilirsiniz.',
                image: '/image/depresyon.webp'
              },
              {
                title: 'Travma Sonrası Stres Bozuklukları',
                description: 'Geçmiş travmalarınızın izleriyle baş edip, iyileşmek için bugün adım atabilirsiniz.',
                image: '/image/travma.webp'
              },
              {
                title: 'Özgüven Sorunu',
                description: 'Hayatınızda daha sağlam adımlar atabilmek için bugün adım atın.',
                image: '/image/ozguven.webp'
              },
              {
                title: 'Yaygın Anksiyete Bozukluğu',
                description: 'Sürekli kaygı duygusuyla başa çıkmanın yollarını öğrenebilir, kendinizi daha huzurlu hissedebilirsiniz.',
                image: '/image/anksiyete_bozuklugu.webp'
              },
              {
                title: 'Sınav Kaygısı',
                description: 'Sınav döneminde yaşadığınız kaygıyı azaltmak, potansiyelinizi özgürce göstermek için destek alabilirsiniz.',
                image: '/image/sinav_kaygisi.webp'
              },
              {
                title: 'Stres',
                description: 'Günlük yaşamda karşılaşılan stresi azaltmaya ve zihinsel rahatlığı sağlamaya yönelik teknikler ile tanışın.',
                image: '/image/stres.webp'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/hakkimda"
                    className="inline-flex items-center text-sm font-medium text-gray-800 hover:text-gray-600"
                  >
                    Daha fazla bilgi
                    <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Brief Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/5 mb-10 md:mb-0">
              <div className="relative">
                <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square">
                  <img
                    src="/image/psikolog-duygu-aksoy.webp"
                    alt="Psikolog Duygu Aksoy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-4 -right-4 w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center text-center p-2">
                  <span className="text-gray-800 font-medium text-sm leading-tight">
                    Kendi İçimize Yolculuk 
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-3/5 md:pl-16">
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                Hakkımda
              </h2>
              <p className="text-gray-600 mb-6">
                Psikoloji, hayatın ikinci yarısı için hem entelektüel hem de insani açıdan son derece zenginleştirici bir meslek. Bu cümle, benim yolculuğumu en iyi tanımlayan ifadelerden biri. Psikolojiye olan ilgim aslında her zaman vardı; ancak toplumsal ve kültürel dinamikler uzun süre bu ilgiyi profesyonel bir yöne çevirmemi geciktirdi. Nihayetinde ise beni bu alana yönlendiren şey, kendi terapi sürecimde yaşadığım derin dönüşüm ve içgörüler oldu.
              </p>
              <p className="text-gray-600 mb-8">
                Kariyerimin ilk yıllarında laboratuvar araştırmalarından proje yönetimine, oradan da farklı kültür ve ülkelerden profesyonellerle yürüttüğüm yazılım projelerine uzanan çok yönlü bir deneyim edindim. Bu süreçte kurum içi dinamiklerin, liderliğin, ekip ruhunun ve bireysel farkındalığın iş yaşamındaki etkilerini yakından gözlemleme fırsatım oldu. Zaman zaman mobbing gibi yıpratıcı süreçleri, zaman zaman da gerçek anlamda destekleyici bir ekip kültürünün dönüştürücü gücünü deneyimledim. Tüm bu deneyimler, insan davranışını çok boyutlu biçimde anlamamı sağladı ve bugün psikolojiye bakışımın temelini oluşturdu.
              </p>
              <p className="text-gray-600 mb-8">
                Şimdi, edindiğim bu birikimi klinik psikoloji alanına taşıyorum. İnsan zihninin, ilişkilerin ve değişimin derinliklerini keşfetmeye yönelik tutkumla, Klinik Psikoloji Yüksek Lisans eğitimimi tamamlamak üzereyim. Her adımda, hem bilimsel temellere dayalı hem de insana dokunan bir psikolog olma hedefiyle ilerliyorum.
              </p>
              <Link
                to="/hakkimda"
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Hakkımda Daha Fazla
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Danışan Yorumları
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Benimle çalışanların deneyimlerini okuyun.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-lg shadow-sm relative"
              >
                <Quote
                  size={24}
                  className="text-gray-200 absolute top-6 left-6"
                />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="#FFC107"
                      color="#FFC107"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 relative z-10">
                  {testimonial.text}
                </p>
                <p className="text-gray-800 font-medium">
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
                Son Yazılarımıza Göz Atmak İster misiniz?
              </h2>
              <p className="text-gray-600 max-w-2xl">
                Merak eden, kendine ve ihtiyaçlarına dair sorular sormayı sevenler için hazırlanan yazılarımıza göz atmak ister misiniz? Psikoloji, kişisel gelişim ve duygusal keşif konularına odaklanarak, bilgi ve deneyimlerimizi paylaşıyoruz.
              </p>
            </div>
            <Link
              to={blogUrl}
              className="hidden md:inline-flex items-center text-sm font-medium text-gray-800 hover:text-gray-600"
            >
              Tüm yazılarımıza göz atın
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          {/* Conditional Rendering based on loading, error, or posts */}
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-[3/2] rounded-lg bg-gray-200 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                </div>
              ))}
            </div>
          )}

          {error && (
            <div className="text-center py-8 px-4 bg-red-50 text-red-700 rounded-lg">
              <p className="font-medium">Blog yazıları yüklenemedi.</p>
              <p className="text-sm">{error}</p>
            </div>
          )}

          {!loading && !error && posts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <a
                  key={index}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="aspect-[3/2] rounded-lg overflow-hidden mb-4">
                    <img
                      src={post.coverImage.url}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mb-2">
                    {formatDate(post.publishedAt)}
                  </p>
                  <h3 className="text-xl font-medium text-gray-800 mb-2 group-hover:text-gray-600">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.brief}</p>
                  <span className="inline-flex items-center text-sm font-medium text-gray-800 group-hover:text-gray-600">
                    Devamını oku
                    <ArrowRight size={14} className="ml-1" />
                  </span>
                </a>
              ))}
            </div>
          )}

          {!loading && !error && posts.length === 0 && (
            <div className="text-center py-8 px-4 bg-gray-50 text-gray-700 rounded-lg">
              <Rss size={40} className="mx-auto mb-4 text-gray-400" />
              <p className="font-medium">Son yazı bulunamadı.</p>
              <p className="text-sm">Tüm yazılar için blogu ziyaret edin.</p>
            </div>
          )}

          <div className="mt-12 text-center md:hidden">
            <Link
              to={blogUrl}
              className="inline-flex items-center text-sm font-medium text-gray-800 hover:text-gray-600"
            >
              Tüm yazıları görüntüle
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <BookingCTA />
    </div>
  );
};

export default HomePage;
