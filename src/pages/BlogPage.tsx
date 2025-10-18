import React, { useEffect, useState } from 'react';
import { ArrowRight, Rss } from 'lucide-react';
import BookingCTA from '../components/BookingCTA';

interface Post {
  title: string;
  brief: string;
  url: string;
  coverImage: {
    url: string;
  };
  publishedAt: string;
  tags?: Array<{ name: string }>;
}

const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const cachedData = localStorage.getItem('hashnodeAllPosts');
        if (cachedData) {
          const { posts: cachedPosts, timestamp } = JSON.parse(cachedData);
          if (new Date().getTime() - timestamp < 3600 * 1000) {
            setPosts(cachedPosts);
            setLoading(false);
            return;
          }
        }
      } catch (error) {
        localStorage.removeItem('hashnodeAllPosts');
      }

      try {
        // Prefer environment variables, fall back to known working defaults
        const host = import.meta.env.VITE_HASHNODE_HOST ?? "blog.psikologduyguaksoy.com";
        const token = import.meta.env.VITE_HASHNODE_API_TOKEN ?? "38b1022f-d114-4182-9fa2-c78d8dfed0c5";

        const query = `
          query Publication {
            publication(host: "${host}") {
              posts(first: 20) {
                edges {
                  node {
                    title
                    brief
                    url
                    coverImage { url }
                    publishedAt
                    tags {
                      name
                    }
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

        localStorage.setItem('hashnodeAllPosts', JSON.stringify({
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

    fetchAllPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Extract unique categories from posts
  const categories = ['All', ...new Set(posts.flatMap(post => 
    post.tags ? post.tags.map(tag => tag.name) : []
  ))];

  // Filter posts by selected category
  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => 
        post.tags?.some(tag => tag.name === selectedCategory)
      );

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">
              Blog
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Psikoloji, kişisel gelişim ve duygusal keşif konularına odaklanan yazılarım.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      {!loading && !error && categories.length > 1 && (
        <section className="pb-8 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedCategory === category
                      ? 'bg-gray-800 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
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

          {!loading && !error && filteredPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <a
                  key={index}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="aspect-[3/2] rounded-lg overflow-hidden mb-4">
                    <img
                      src={post.coverImage.url}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                    />
                  </div>
                  <div className="flex items-center mb-3">
                    <span className="text-sm text-gray-500">
                      {formatDate(post.publishedAt)}
                    </span>
                    {post.tags && post.tags.length > 0 && (
                      <>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-sm text-gray-800 bg-gray-100 px-3 py-1 rounded-full">
                          {post.tags[0].name}
                        </span>
                      </>
                    )}
                  </div>
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

          {!loading && !error && filteredPosts.length === 0 && (
            <div className="text-center py-8 px-4 bg-gray-50 text-gray-700 rounded-lg">
              <Rss size={40} className="mx-auto mb-4 text-gray-400" />
              <p className="font-medium">Bu kategoride yazı bulunamadı.</p>
              <p className="text-sm">Başka bir kategori seçin.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gray-50 my-16">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-4">
            Bültenime Abone Olun
          </h2>
          <p className="text-gray-600 mb-8">
            En son yazılarımı, kaynakları ve içgörüleri doğrudan gelen kutunuza alın.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors whitespace-nowrap"
            >
              Abone Ol
            </button>
          </form>
          <p className="text-gray-500 text-sm mt-4">
            Gizliliğinize saygı duyuyorum. İstediğiniz zaman abonelikten çıkabilirsiniz.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <BookingCTA />
    </div>
  );
};

export default BlogPage;
