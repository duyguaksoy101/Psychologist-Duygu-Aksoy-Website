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

  const blogUrl = `https://${import.meta.env.VITE_HASHNODE_HOST}`;

  useEffect(() => {
    const fetchPosts = async () => {
      // Caching logic: Check if we have recent posts in localStorage
      const cachedData = localStorage.getItem('hashnodePosts');
      if (cachedData) {
        const { posts: cachedPosts, timestamp } = JSON.parse(cachedData);
        const isCacheValid = (new Date().getTime() - timestamp) < 24 * 60 * 60 * 1000; // 24 hours
        if (isCacheValid) {
          setPosts(cachedPosts);
          setLoading(false);
          return;
        }
      }

      // If no valid cache, fetch from API
      const GET_USER_ARTICLES = `
        query Publication {
          publication(host: "${import.meta.env.VITE_HASHNODE_HOST}") {
            posts(first: 3) {
              edges {
                node {
                  title
                  brief
                  url
                  coverImage {
                    url
                  }
                  publishedAt
                }
              }
            }
          }
        }
      `;

      try {
        const response = await fetch('https://gql.hashnode.com/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_HASHNODE_API_TOKEN}`,
          },
          body: JSON.stringify({ query: GET_USER_ARTICLES }),
        });

        const result = await response.json();

        if (result.errors) {
          throw new Error(result.errors.map((e: any) => e.message).join(', '));
        }

        const fetchedPosts = result.data.publication.posts.edges.map((edge: any) => edge.node);
        setPosts(fetchedPosts);

        // Save new data and timestamp to localStorage
        localStorage.setItem('hashnodePosts', JSON.stringify({
          posts: fetchedPosts,
          timestamp: new Date().getTime(),
        }));
      } catch (err: any) {
        setError(err.message);
        console.error("Failed to fetch Hashnode posts:", err);
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
      day: 'numeric',
    });
  };

  const testimonials = [
      {
        id: 1,
        text: "Working with Duygu Aksoy has been transformative. I've gained tools to manage my anxiety and build healthier relationships.",
        author: 'Client A.',
        rating: 5,
      },
      {
        id: 2,
        text: "The safe space Duygu creates allowed me to explore difficult emotions I had been avoiding for years. I'm grateful for the guidance.",
        author: 'Client B.',
        rating: 5,
      },
      {
        id: 3,
        text: "After months of therapy, I finally feel equipped to handle life's challenges with confidence and self-compassion.",
        author: 'Client C.',
        rating: 5,
      },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight mb-6">
                Begin your journey to mental well-being
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                Professional psychological support in a safe, confidential
                environment. Together, we'll work toward positive change and
                personal growth.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 transition-colors">
                  Book a Session
                  <ArrowRight size={16} className="ml-2" />
                </Link>
                <Link to="/about" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[4/5]">
                  <img src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Psychologist at work" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 shadow-lg rounded-lg max-w-xs">
                  <p className="text-gray-800 font-medium">
                    "Helping you discover your inner strength and resilience."
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
              How I Can Help
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I offer a range of therapeutic approaches tailored to your unique
              needs and circumstances.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Individual Therapy',
                description: 'One-on-one sessions focused on your personal challenges, growth, and well-being.',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
              },
              {
                title: 'Couples Counseling',
                description: 'Support for partners seeking to improve communication and strengthen their relationship.',
                image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
              },
              {
                title: 'Anxiety & Stress Management',
                description: 'Learn effective techniques to manage anxiety, stress, and related challenges.',
                image: 'https://images.unsplash.com/photo-1474418397713-2f1091953b9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
              },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[3/2] overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link to="/about" className="inline-flex items-center text-sm font-medium text-gray-800 hover:text-gray-600">
                    Learn more
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
                  <img src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Psychologist portrait" className="w-full h-full object-cover" />
                </div>
                <div className="absolute top-4 -right-4 w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center text-center p-2">
                  <span className="text-gray-800 font-medium text-sm leading-tight">
                    10+ Years Experience
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-3/5 md:pl-16">
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
                About Me
              </h2>
              <p className="text-gray-600 mb-6">
                I'm a licensed psychologist with over 10 years of experience
                helping individuals overcome challenges and improve their mental
                well-being. My approach combines evidence-based techniques with
                compassion and understanding.
              </p>
              <p className="text-gray-600 mb-8">
                I believe that therapy is a collaborative process, and I'm
                committed to creating a safe, non-judgmental space where you can
                explore your thoughts and feelings.
              </p>
              <Link to="/about" className="inline-flex items-center px-6 py-3 text-sm font-medium text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                More About Me
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
              Client Testimonials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read about the experiences of those who have worked with me.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-sm relative">
                <Quote size={24} className="text-gray-200 absolute top-6 left-6" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#FFC107" color="#FFC107" />
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
                Latest Articles
              </h2>
              <p className="text-gray-600 max-w-2xl">
                Insights and resources for your mental health journey.
              </p>
            </div>
            <a href={blogUrl} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center text-sm font-medium text-gray-800 hover:text-gray-600">
              View all articles
              <ArrowRight size={16} className="ml-1" />
            </a>
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
              <p className="font-medium">Failed to load blog posts.</p>
              <p className="text-sm">{error}</p>
            </div>
          )}

          {!loading && !error && posts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <a key={index} href={post.url} target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="aspect-[3/2] rounded-lg overflow-hidden mb-4">
                    <img src={post.coverImage.url} alt={post.title} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" />
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{formatDate(post.publishedAt)}</p>
                  <h3 className="text-xl font-medium text-gray-800 mb-2 group-hover:text-gray-600">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.brief}</p>
                  <span className="inline-flex items-center text-sm font-medium text-gray-800 group-hover:text-gray-600">
                    Read more
                    <ArrowRight size={14} className="ml-1" />
                  </span>
                </a>
              ))}
            </div>
          )}
          
          {!loading && !error && posts.length === 0 && (
             <div className="text-center py-8 px-4 bg-gray-50 text-gray-700 rounded-lg">
                <Rss size={40} className="mx-auto mb-4 text-gray-400" />
                <p className="font-medium">No recent articles found.</p>
                <p className="text-sm">Check out the blog for all posts.</p>
            </div>
          )}


          <div className="mt-12 text-center md:hidden">
            <a href={blogUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-gray-800 hover:text-gray-600">
              View all articles
              <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <BookingCTA />
    </div>
  );
};

export default HomePage;
