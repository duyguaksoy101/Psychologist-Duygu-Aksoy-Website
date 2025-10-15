import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, BookOpen, Users } from 'lucide-react';
import BookingCTA from '@/components/BookingCTA.tsx';
const AboutPage = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight mb-6">
                About Me
              </h1>
              <p className="text-gray-600 text-lg mb-6">
                I'm a licensed psychologist dedicated to helping individuals
                navigate life's challenges and achieve mental well-being.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[4/3]">
                <img src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Psychologist portrait" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Bio Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-medium text-gray-900 mb-6">My Story</h2>
          <div className="prose prose-gray max-w-none">
            <p>
              With over 10 years of experience as a practicing psychologist in
              Istanbul, I've had the privilege of helping hundreds of clients
              overcome challenges and improve their mental well-being. My
              journey into psychology began with a deep curiosity about human
              behavior and a desire to make a positive impact in people's lives.
            </p>
            <p>
              After completing my education at [University Name], I specialized
              in [specialization area], where I developed expertise in treating
              anxiety, depression, relationship issues, and trauma. My approach
              combines evidence-based techniques from cognitive-behavioral
              therapy, psychodynamic theory, and mindfulness practices.
            </p>
            <p>
              I believe that therapy is a collaborative process, and I'm
              committed to creating a safe, non-judgmental space where you can
              explore your thoughts and feelings. My goal is to help you develop
              insights and skills that will support your long-term well-being.
            </p>
            <p>
              When I'm not in the therapy room, I enjoy hiking in nature,
              practicing yoga, and exploring the rich cultural experiences that
              Istanbul has to offer. These activities help me maintain my own
              well-being and bring fresh perspectives to my work.
            </p>
          </div>
        </div>
      </section>
      {/* Qualifications Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Qualifications & Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My professional background and areas of specialization.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Award className="text-gray-800 mb-4" size={32} />
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Education
              </h3>
              <ul className="text-gray-600 space-y-3">
                <li>Ph.D. in Clinical Psychology, University Name</li>
                <li>M.A. in Psychology, University Name</li>
                <li>B.A. in Psychology, University Name</li>
                <li>Certified in Cognitive Behavioral Therapy</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <BookOpen className="text-gray-800 mb-4" size={32} />
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Specializations
              </h3>
              <ul className="text-gray-600 space-y-3">
                <li>Anxiety and Stress Management</li>
                <li>Depression and Mood Disorders</li>
                <li>Relationship Counseling</li>
                <li>Trauma and PTSD</li>
                <li>Personal Growth and Self-Esteem</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Users className="text-gray-800 mb-4" size={32} />
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                Professional Memberships
              </h3>
              <ul className="text-gray-600 space-y-3">
                <li>Turkish Psychological Association</li>
                <li>International Association of Counseling</li>
                <li>European Federation of Psychologists' Associations</li>
                <li>World Health Organization Consultant</li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <Link to="/contact" className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 transition-colors">
              Schedule a Consultation
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
                My Approach
              </h2>
              <p className="text-gray-600 mb-6">
                I believe in tailoring therapy to each individual's unique needs
                and circumstances. My approach is integrative, drawing from
                various evidence-based therapeutic modalities to create a
                personalized treatment plan.
              </p>
              <p className="text-gray-600 mb-6">
                I prioritize creating a warm, empathetic, and non-judgmental
                environment where you feel safe to explore your thoughts and
                feelings. Together, we'll work collaboratively to help you
                develop insights, skills, and strategies that support your goals
                and well-being.
              </p>
              <p className="text-gray-600">
                Whether you're dealing with a specific challenge or seeking
                personal growth, my goal is to empower you with the tools and
                understanding you need to create positive change in your life.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square">
                <img src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Therapy session" className="w-full h-full object-cover" />
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
