import React from 'react';
import { ArrowRight } from 'lucide-react';
import BookingCTA from '../components/BookingCTA';
const BlogPage = () => {
  const blogPosts = [{
    id: 1,
    title: 'Understanding Anxiety in Daily Life',
    excerpt: 'Learn about the common triggers of anxiety and effective coping strategies for managing anxious feelings in everyday situations.',
    date: 'June 15, 2023',
    category: 'Anxiety',
    image: 'https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 2,
    title: 'Building Healthy Relationships',
    excerpt: 'Discover key principles for nurturing fulfilling connections with others and how to overcome common communication barriers.',
    date: 'May 28, 2023',
    category: 'Relationships',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 3,
    title: "Self-Care Isn't Selfish",
    excerpt: 'Why prioritizing your well-being is essential for your mental health and how to create an effective self-care routine.',
    date: 'May 10, 2023',
    category: 'Self-Care',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 4,
    title: 'Mindfulness Practices for Beginners',
    excerpt: 'Simple mindfulness techniques you can incorporate into your daily routine to reduce stress and increase presence.',
    date: 'April 22, 2023',
    category: 'Mindfulness',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 5,
    title: 'Navigating Major Life Transitions',
    excerpt: 'Strategies for coping with significant life changes such as career shifts, relocation, or relationship changes.',
    date: 'April 8, 2023',
    category: 'Life Changes',
    image: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 6,
    title: 'Understanding the Mind-Body Connection',
    excerpt: 'How your mental health affects your physical well-being and practical ways to support both for optimal health.',
    date: 'March 25, 2023',
    category: 'Holistic Health',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }];
  const categories = ['All', 'Anxiety', 'Relationships', 'Self-Care', 'Mindfulness', 'Life Changes', 'Holistic Health'];
  return <div className="w-full">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">
              Blog & Resources
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Insights, tips, and resources to support your mental health
              journey and personal growth.
            </p>
          </div>
        </div>
      </section>
      {/* Categories */}
      <section className="pb-8 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => <button key={index} className={`px-4 py-2 rounded-full text-sm ${index === 0 ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
                {category}
              </button>)}
          </div>
        </div>
      </section>
      {/* Blog Posts */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => <div key={post.id} className="group">
                <div className="aspect-[3/2] rounded-lg overflow-hidden mb-4">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" />
                </div>
                <div className="flex items-center mb-3">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-800 bg-gray-100 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-2 group-hover:text-gray-600">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="inline-flex items-center text-sm font-medium text-gray-800 hover:text-gray-600">
                  Read more
                  <ArrowRight size={14} className="ml-1" />
                </button>
              </div>)}
          </div>
        </div>
      </section>
      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gray-50 my-16">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-4">
            Subscribe to My Newsletter
          </h2>
          <p className="text-gray-600 mb-8">
            Get the latest articles, resources, and insights delivered directly
            to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input type="email" placeholder="Your email address" className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200" required />
            <button type="submit" className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="text-gray-500 text-sm mt-4">
            I respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
      {/* CTA Section */}
      <BookingCTA />
    </div>;
};
export default BlogPage;